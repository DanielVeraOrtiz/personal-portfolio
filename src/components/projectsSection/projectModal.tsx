'use client';

interface ProjectModalProps {
  open: boolean;
  closeModal: () => void;
}

export default function ProjectModal({ open, closeModal }: ProjectModalProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-999"
          onClick={closeModal}
        >
          <div className="bg-white p-8 rounded-xl" onClick={(e) => e.stopPropagation()}>
            contenido
          </div>
        </div>
      )}
      )
    </>
  );
}
