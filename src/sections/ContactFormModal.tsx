import { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = `New Inquiry from ${formData.name} - ${formData.organization}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:milind.walke@codemechanix.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset and close after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', organization: '', message: '' });
        onClose();
      }, 2000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="card-glass w-full max-w-md p-6 lg:p-8 relative animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#A9B3C7] hover:text-[#F5F7FF] transition-colors"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F7FF] mb-2">Message Sent!</h3>
            <p className="text-[#A9B3C7]">We'll get back to you soon.</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h3 className="text-xl lg:text-2xl font-bold text-[#F5F7FF] mb-2">
                Get in Touch
              </h3>
              <p className="text-sm text-[#A9B3C7]">
                Tell us what you're solving. We'll reply with a plan and quote.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono-label block mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>

              <div>
                <label className="font-mono-label block mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="form-input"
                />
              </div>

              <div>
                <label className="font-mono-label block mb-1.5">Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  placeholder="Your Company Name"
                  className="form-input"
                />
              </div>

              <div>
                <label className="font-mono-label block mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="form-input resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full mt-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactFormModal;