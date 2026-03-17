import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  ClipboardList,
  FileText,
  MessageSquare,
} from "lucide-react";
import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import { useActor } from "../hooks/useActor";

const audienceTags = [
  "Bulk Buyers",
  "Importers",
  "Private Label Brands",
  "Nutraceutical Companies",
  "Formulators",
  "R&D Teams",
];

const steps = [
  {
    icon: <ClipboardList size={24} />,
    title: "Submit Inquiry",
    desc: "Fill in the form below with your product requirements and estimated quantity.",
  },
  {
    icon: <MessageSquare size={24} />,
    title: "Discuss Requirements",
    desc: "We have received your inquiry and will review it shortly",
  },
  {
    icon: <FileText size={24} />,
    title: "Receive Quotation",
    desc: "Receive a detailed quotation based on quantity, frequency, and product.",
  },
];

export default function BulkOrders() {
  useEffect(() => {
    document.title = "Bulk Orders & B2B Inquiries — Bio Peri Posa Pvt. Ltd.";
    let meta = document.querySelector(
      "meta[name='description']",
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Submit bulk herbal ingredient inquiries to Bio Peri Posa. Minimum 25 kg per SKU. Serving B2B buyers, importers, private label brands, and formulators.";
  }, []);

  const { actor } = useActor();
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
        title="Bulk Orders & B2B Inquiries"
        subtitle="For bulk buyers, importers, private label brands, nutraceutical companies, and formulators."
      />

      {/* Who It's For */}
      <section className="py-12 px-4 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-5">
            Who This Is For
          </p>
          <div className="flex flex-wrap gap-3">
            {audienceTags.map((tag) => (
              <span
                key={tag}
                className="text-sm font-sans font-medium px-4 py-1.5 rounded-full"
                style={{
                  backgroundColor: "oklch(0.93 0.025 145)",
                  color: "oklch(0.33 0.055 145)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MOQ Info */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div
              className="bg-card rounded-2xl p-8 border shadow-card"
              style={{ borderColor: "oklch(0.88 0.025 145)" }}
              data-ocid="bulk.card"
            >
              <h3 className="font-serif text-2xl text-foreground mb-5">
                Order Parameters
              </h3>
              <div className="space-y-4 text-sm font-sans">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">
                    Minimum Order Quantity
                  </span>
                  <span className="font-semibold text-foreground">
  <div>B2B: 25 kg per SKU</div>
  <div>B2C: 250 g packs available</div>
</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">
                    Sampling Pack Sizes
                  </span>
                  <span className="font-semibold text-foreground">
                    250 g, 1 kg, 5 kg, 10 kg
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-semibold text-foreground">
                    Within 1 business days
                  </span>
                </div>
              </div>
              <p
                className="mt-5 text-sm font-sans leading-relaxed p-4 rounded-xl"
                style={{
                  backgroundColor: "oklch(0.96 0.010 145)",
                  color: "oklch(0.40 0.055 145)",
                }}
              >
                Custom sourcing and private label discussions may be possible
                depending on requirement — contact us to discuss.
              </p>
            </div>

            {/* 3 Steps */}
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-6">
                How It Works
              </h3>
              <div className="space-y-5">
                {steps.map((step, i) => (
                  <div
                    key={step.title}
                    className="flex gap-4 items-start"
                    data-ocid={`steps.item.${i + 1}`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-brand-green"
                      style={{ backgroundColor: "oklch(0.93 0.025 145)" }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-sans font-bold uppercase tracking-widest text-brand-green">
                          Step {i + 1}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg text-foreground mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm font-sans text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-brand-green mb-3">
            Inquiry Form
          </p>
          <h2 className="font-serif text-3xl text-foreground mb-8">
            Submit Your Bulk Inquiry
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
                  We have received your inquiry and will review it shortly.
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
                  placeholder="e.g. Moringa, Amla, Ashwagandha..."
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
                  Estimated Quantity (kg) *
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  min="25"
                  value={form.quantity}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, quantity: e.target.value }))
                  }
                  placeholder="e.g. 100"
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
                  placeholder="Any additional requirements, packaging preferences, delivery timeline..."
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
        </div>
      </section>
    </div>
  );
}
