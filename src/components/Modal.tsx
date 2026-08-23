import { useEffect, type ReactNode } from "react";

export function Modal({
  open,
  onClose,
  label,
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={label}
      className="fixed inset-0 z-50 overflow-y-auto bg-foreground/60 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="mx-auto max-w-4xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <p className="eyebrow">{label}</p>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-xl leading-none text-muted-foreground transition-colors hover:text-foreground"
          >
            ×
          </button>
        </div>
        <div className="px-6 py-8 sm:px-10">{children}</div>
      </div>
    </div>
  );
}
