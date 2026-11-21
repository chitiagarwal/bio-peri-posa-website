import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, MessageCircle, ClipboardList, MessageSquare, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";

export default function BulkOrders() {
  useEffect(() => {
    document.title = "Bulk Inquiries | Bio Periposa";
    let meta = document.querySelector(
      "meta[name='description']",
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Send Bio Periposa your bulk ingredient requirements, estimated quantity and delivery details, or contact us directly on WhatsApp.";
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    companyName: "",
    country: "",
    products: "",
    orderType: "one-time",
    quantity: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    if (!form.companyName.trim()) e.companyName = "Company name is required";
    if (!form.country.trim()) e.country = "Country is required";
    if (!form.quantity.trim()) e.quantity = "Estimated quantity is required";
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
    const response = await fetch("https://formspree.io/f/mkoqprek", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        fullName: form.fullName,
        email: form.email,
        companyName: form.companyName,
        country: form.country,
        products: form.products,
        orderType: form.orderType,
        quantity: form.quantity,
        message: form.message,
      }),
    });

    if (response.ok) {
      setSuccess(true);
      setForm({
        fullName: "",
        email: "",
        companyName: "",
        country: "",
        products: "",
        orderType: "one-time",
        quantity: "",
        message: "",
      });
    } else {
      alert("Submission failed. Try again.");
    }
  } catch {
    alert("Submission failed. Try again.");
  } finally {
    setSubmitting(false);
  }
};

  return (
    <div>
      <PageHero
        eyebrow="B2B Inquiries"
        title="Bulk Inquiries"
        subtitle="Tell us what you need using the inquiry form, or contact us directly on WhatsApp."
      />

      <section className="px-4 pt-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <a href="https://wa.me/919810859162?text=Hello%20Bio%20Periposa%2C%20I%20would%20like%20to%20send%20an%20inquiry." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-[#356f36] px-5 py-3 font-semibold text-[#245727] hover:bg-[#e6f3e1]">
            <MessageCircle size={19} /> Contact on WhatsApp
          </a>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="bulk-inquiry-form" className="py-10 md:py-14 px-4 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[minmax(0,1.45fr)_minmax(300px,1fr)] gap-10 items-start">
          <div>
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-3">
            Inquiry Form
          </p>
          <h2 className="font-serif text-3xl text-foreground mb-8">
            Send Your Inquiry
          </h2>

          {success ? (
            <div
              className="flex items-start gap-4 p-6 rounded-2xl border"
              style={{
                backgroundColor: "oklch(0.95 0.018 145)",
                borderColor: "oklch(0.80 0.040 145)",
              }}
              data-ocid="bulk.success_state"
            >
              <CheckCircle2
                size={24}
                className="text-brand-green shrink-0 mt-0.5"
              />
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  Inquiry Received
                </h3>
                <p className="text-sm font-sans text-muted-foreground">
                  Your inquiry was submitted successfully. We will review your requirements and get in touch.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              data-ocid="bulk.modal"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <Label
                    htmlFor="fullName"
                    className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    value={form.fullName}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, fullName: e.target.value }))
                    }
                    placeholder="Your full name"
                    data-ocid="bulk.input"
                  />
                  {errors.fullName && (
                    <p
                      className="text-xs text-destructive mt-1"
                      data-ocid="bulk.error_state"
                    >
                      {errors.fullName}
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
    placeholder="Your email address"
  />
  {errors.email && (
    <p className="text-xs text-destructive mt-1">
      {errors.email}
    </p>
  )}
</div>
                <div>
                  <Label
                    htmlFor="companyName"
                    className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                  >
                    Company Name *
                  </Label>
                  <Input
                    id="companyName"
                    value={form.companyName}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, companyName: e.target.value }))
                    }
                    placeholder="Your company"
                    data-ocid="bulk.input"
                  />
                  {errors.companyName && (
                    <p
                      className="text-xs text-destructive mt-1"
                      data-ocid="bulk.error_state"
                    >
                      {errors.companyName}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <Label
                  htmlFor="country"
                  className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                >
                  Country *
                </Label>
                <Input
                  id="country"
                  value={form.country}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, country: e.target.value }))
                  }
                  placeholder="Your country"
                  data-ocid="bulk.input"
                />
                {errors.country && (
                  <p
                    className="text-xs text-destructive mt-1"
                    data-ocid="bulk.error_state"
                  >
                    {errors.country}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="products"
                  className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                >
                  Product(s) of Interest
                </Label>
                <Textarea
                  id="products"
                  value={form.products}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, products: e.target.value }))
                  }
                  placeholder="e.g. Moringa leaf powder or Ashwagandha root powder"
                  rows={2}
                  data-ocid="bulk.textarea"
                />
              </div>
              <div>
                <Label className="text-sm font-sans font-medium text-foreground mb-3 block">
                  Order Type
                </Label>
                <div className="flex gap-6">
                  {[
                    { value: "one-time", label: "One-time Order" },
                    { value: "regular", label: "Regular Supply" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-center gap-2.5 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="orderType"
                        value={opt.value}
                        checked={form.orderType === opt.value}
                        onChange={() =>
                          setForm((p) => ({ ...p, orderType: opt.value }))
                        }
                        className="w-4 h-4"
                        style={{ accentColor: "oklch(0.47 0.066 145)" }}
                        data-ocid="bulk.radio"
                      />
                      <span className="text-sm font-sans text-foreground">
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <Label
                  htmlFor="quantity"
                  className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                >
                  Estimated Quantity *
                </Label>
                <Input
                  id="quantity"
                  type="text"
                  value={form.quantity}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, quantity: e.target.value }))
                  }
                  placeholder="e.g. 10 kg, 50 kg or quantity to be discussed"
                  data-ocid="bulk.input"
                />
                {errors.quantity && (
                  <p
                    className="text-xs text-destructive mt-1"
                    data-ocid="bulk.error_state"
                  >
                    {errors.quantity}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="message"
                  className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Share your requirements, preferred packaging, delivery location or any other details..."
                  rows={4}
                  data-ocid="bulk.textarea"
                />
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full"
                style={{
                  backgroundColor: "oklch(0.47 0.066 145)",
                  color: "white",
                }}
                data-ocid="bulk.submit_button"
              >
                {submitting ? "Submitting..." : "Submit Inquiry"}
              </Button>
            </form>
          )}
          <p className="mt-5 text-sm text-muted-foreground">Response time: Within 1 business day.</p>
          </div>
          <aside className="rounded-2xl bg-[#f4faef] border border-[#d6e8d0] p-7 lg:sticky lg:top-24">
            <h3 className="font-serif text-2xl text-foreground mb-7">How It Works</h3>
            <div className="space-y-7">
              {[
                { icon: ClipboardList, title: "Submit Inquiry", description: "Fill out the form with your product requirements and estimated quantity." },
                { icon: MessageSquare, title: "Discuss Requirements", description: "We will review your inquiry and contact you to discuss the details." },
                { icon: FileText, title: "Receive Quotation", description: "We will provide a quotation based on your requirements and availability." },
              ].map(({ icon: Icon, title, description }, index) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#dfeddf] text-[#356f36] flex items-center justify-center shrink-0"><Icon size={23} /></div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#356f36] mb-1">Step {index + 1}</p>
                    <h4 className="font-serif text-lg text-foreground mb-1">{title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://wa.me/919810859162?text=Hello%20Bio%20Periposa%2C%20I%20have%20a%20bulk%20inquiry." target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#245727] hover:underline"><MessageCircle size={19} /> Contact on WhatsApp</a>
          </aside>
        </div>
      </section>
    </div>
  );
}
