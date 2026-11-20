import { useEffect, useState } from 'react';
import { KineticIcon } from './KineticIcon';

export const DODO_CHECKOUT_URL =
  'https://checkout.dodopayments.com/buy/pdt_0NsMRDCurEMazs7LWExbK?quantity=1';

interface SupportCheckoutEmbedProps {
  className?: string;
}

export function SupportCheckoutEmbed({
  className = 'h-[680px] sm:h-[740px]',
}: SupportCheckoutEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full bg-white ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-kinetic-card text-kinetic-muted text-xs pointer-events-none">
          <span>Loading secure checkout...</span>
        </div>
      )}
      <iframe
        src={DODO_CHECKOUT_URL}
        title="Support Kinetic Icons — Checkout"
        allow="payment *"
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className="w-full h-full border-0 block"
      />
    </div>
  );
}

interface SupportCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SupportCheckoutModal({
  isOpen,
  onClose,
}: SupportCheckoutModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] rounded-2xl bg-kinetic-bg border border-kinetic-border shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-4 border-b border-kinetic-border flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="w-8 h-8 rounded-xl bg-kinetic-card border border-kinetic-border inline-flex items-center justify-center text-kinetic-ink shrink-0">
              <KineticIcon
                id="heart"
                size={16}
                strokeWidth={1.7}
                radius={2.5}
              />
            </span>
            <div className="min-w-0">
              <h2
                id="support-modal-title"
                className="text-sm font-semibold text-kinetic-ink truncate"
              >
                Support the Creator
              </h2>
              <p className="text-xs text-kinetic-muted truncate">
                Optional contribution · Keeps Kinetic Icons free forever
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={DODO_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-kinetic-card border border-kinetic-border text-xs font-medium text-kinetic-muted hover:text-kinetic-ink hover:border-kinetic-ink transition-colors whitespace-nowrap"
            >
              <span>Open in new tab</span>
              <KineticIcon
                id="external-link"
                size={13}
                strokeWidth={1.7}
                radius={2.5}
              />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close support checkout"
              className="w-8 h-8 rounded-lg bg-kinetic-card border border-kinetic-border text-kinetic-muted hover:text-kinetic-ink hover:border-kinetic-ink transition-colors flex items-center justify-center cursor-pointer"
            >
              <KineticIcon
                id="close"
                size={15}
                strokeWidth={1.8}
                radius={2.5}
              />
            </button>
          </div>
        </div>

        {/* Embedded Dodo Checkout */}
        <div className="flex-1 overflow-y-auto">
          <SupportCheckoutEmbed className="h-[640px] sm:h-[700px]" />
        </div>
      </div>
    </div>
  );
}
