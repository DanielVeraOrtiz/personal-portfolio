import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message, company } = await req.json();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // tema bots
    if (company) {
      return Response.json({ ok: true });
    }

    if (name.length < 8) {
      return Response.json(
        { ok: false, error: 'El nombre no cumple con el largo mínimo de 8' },
        { status: 400 },
      );
    } else if (email.length < 10) {
      return Response.json(
        { ok: false, error: 'El correo no cumple con el largo mínimo de 10' },
        { status: 400 },
      );
    } else if (message.length < 50) {
      return Response.json(
        { ok: false, error: 'El mensaje no cumple con el largo mínimo de 50' },
        { status: 400 },
      );
    } else if (!emailRegex.test(email)) {
      return Response.json(
        { ok: false, error: 'El correo no cumple con el patrón básico (ej: email@email.com)' },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}

        Mensaje:
        ${message}
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false, error: 'Error enviando correo' }, { status: 500 });
  }
}
