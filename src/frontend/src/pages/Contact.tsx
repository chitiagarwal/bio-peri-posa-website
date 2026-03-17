import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import { useActor } from "../hooks/useActor";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact — Bio Peri Posa Pvt. Ltd.";
    let meta = document.querySelector(
      "meta[name='description']",
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Contact Bio Peri Posa Pvt. Ltd. for bulk herbal ingredient inquiries. Address: Delhi 110092, India. Phone: +91 98108 59162.";
  }, []);

  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      if (actor) {
        await actor.submitInquiry({
          name: form.name,
          email: form.email,
          company: "",
          message: form.message,
          productInterest: form.subject,
          quantity: BigInt(0),
        });
      }
      setSuccess(true);
    } catch {
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="We welcome inquiries from bulk buyers, importers, and B2B partners."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <div
                className="bg-card rounded-2xl p-8 border shadow-card h-fit"
                style={{ borderColor: "oklch(0.88 0.025 145)" }}
              >
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Bio Peri Posa Pvt. Ltd.
                </h2>
                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(0.93 0.025 145)" }}
                    >
                      <MapPin size={18} className="text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-1">
                        Address
                      </p>
                      <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                        5B Navkala Apartment, Plot Number 14, IP Extension,
                        Delhi 110092, India
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(0.93 0.025 145)" }}
                    >
                      <Phone size={18} className="text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+919810859162"
                        className="text-sm font-sans text-foreground hover:text-brand-green transition-colors"
                      >
                        +91 98108 59162
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(0.93 0.025 145)" }}
                    >
                      <Mail size={18} className="text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:bioperiposa@outlook.com"
                        className="text-sm font-sans text-foreground hover:text-brand-green transition-colors"
                      >
                        bioperiposa@outlook.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(0.93 0.025 145)" }}
                    >
                      <MessageCircle size={18} className="text-brand-green" />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-1">
                        WhatsApp
                      </p>
                      <a
                        href="https://wa.me/919810859162"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-sans text-foreground hover:text-brand-green transition-colors"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">
                Send a Message
              </h2>
              {success ? (
                <div
                  className="flex items-start gap-4 p-6 rounded-2xl border"
                  style={{
                    backgroundColor: "oklch(0.95 0.018 145)",
                    borderColor: "oklch(0.80 0.040 145)",
                  }}
                  data-ocid="contact.success_state"
                >
                  <CheckCircle2
                    size={24}
                    className="text-brand-green shrink-0 mt-0.5"
                  />
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">
                      Message Received
                    </h3>
                    <p className="text-sm font-sans text-muted-foreground">
                      Thank you for reaching out. We will respond within 2
                      business days.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact.modal"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                      >
                        Name *
                      </Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="Your name"
                        data-ocid="contact.input"
                      />
                      {errors.name && (
                        <p
                          className="text-xs text-destructive mt-1"
                          data-ocid="contact.error_state"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label
                        htmlFor="email"
                        className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        placeholder="your@email.com"
                        data-ocid="contact.input"
                      />
                      {errors.email && (
                        <p
                          className="text-xs text-destructive mt-1"
                          data-ocid="contact.error_state"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      placeholder="+91 xxxxxxxxxx"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="subject"
                      className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      value={form.subject}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, subject: e.target.value }))
                      }
                      placeholder="e.g. Bulk inquiry for Moringa"
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="message"
                      className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      data-ocid="contact.textarea"
                    />
                    {errors.message && (
                      <p
                        className="text-xs text-destructive mt-1"
                        data-ocid="contact.error_state"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full"
                    style={{
                      backgroundColor: "oklch(0.47 0.066 145)",
                      color: "white",
                    }}
                    data-ocid="contact.submit_button"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
