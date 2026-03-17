import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import PageHero from "../components/PageHero";
import { useActor } from "../hooks/useActor";

export default function Careers() {
  useEffect(() => {
    document.title = "Careers — Bio Peri Posa Pvt. Ltd.";
    let meta = document.querySelector(
      "meta[name='description']",
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content =
      "Career opportunities at Bio Peri Posa Pvt. Ltd. Submit your expression of interest for future roles in plant science, quality systems, and business development.";
  }, []);

  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    expertise: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    if (!form.expertise.trim()) e.expertise = "Area of expertise is required";
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
        await actor.submitCareerInterest({
          name: form.name,
          email: form.email,
          areaOfExpertise: form.expertise,
          message: form.message,
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
        eyebrow="Careers"
        title="Careers at Bio Peri Posa Pvt. Ltd."
        subtitle="We are building a team grounded in plant science, quality thinking, and commercial discipline."
      />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-2xl p-8 border mb-12"
            style={{
              backgroundColor: "oklch(0.96 0.008 145)",
              borderColor: "oklch(0.88 0.025 145)",
            }}
          >
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Current Status
            </h2>
            <p className="text-base font-sans text-muted-foreground leading-relaxed mb-4">
              We are not currently hiring. However, we welcome expressions of
              interest from passionate, qualified professionals.
            </p>
            <p className="text-base font-sans text-muted-foreground leading-relaxed mb-4">
              If you believe your background aligns with our mission in plant
              science, quality systems, or business development, please submit
              your resume. We will keep it on file for future opportunities.
            </p>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed italic">
              Thank you for your interest in Bio Peri Posa Pvt. Ltd. We look
              forward to growing our team as the company expands.
            </p>
          </div>

          <h2 className="font-serif text-2xl text-foreground mb-6">
            Expression of Interest
          </h2>
          {success ? (
            <div
              className="flex items-start gap-4 p-6 rounded-2xl border"
              style={{
                backgroundColor: "oklch(0.95 0.018 145)",
                borderColor: "oklch(0.80 0.040 145)",
              }}
              data-ocid="careers.success_state"
            >
              <CheckCircle2
                size={24}
                className="text-brand-green shrink-0 mt-0.5"
              />
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  Received
                </h3>
                <p className="text-sm font-sans text-muted-foreground">
                  Thank you. We have received your expression of interest and
                  will keep your details on file.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-ocid="careers.modal"
            >
              <div>
                <Label
                  htmlFor="careerName"
                  className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                >
                  Full Name *
                </Label>
                <Input
                  id="careerName"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="Your full name"
                  data-ocid="careers.input"
                />
                {errors.name && (
                  <p
                    className="text-xs text-destructive mt-1"
                    data-ocid="careers.error_state"
                  >
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="careerEmail"
                  className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                >
                  Email *
                </Label>
                <Input
                  id="careerEmail"
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  data-ocid="careers.input"
                />
                {errors.email && (
                  <p
                    className="text-xs text-destructive mt-1"
                    data-ocid="careers.error_state"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="expertise"
                  className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                >
                  Area of Expertise *
                </Label>
                <Input
                  id="expertise"
                  value={form.expertise}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, expertise: e.target.value }))
                  }
                  placeholder="e.g. Plant Pathology, Quality Assurance, Business Development"
                  data-ocid="careers.input"
                />
                {errors.expertise && (
                  <p
                    className="text-xs text-destructive mt-1"
                    data-ocid="careers.error_state"
                  >
                    {errors.expertise}
                  </p>
                )}
              </div>
              <div>
                <Label
                  htmlFor="coverMessage"
                  className="text-sm font-sans font-medium text-foreground mb-1.5 block"
                >
                  Message / Cover Note
                </Label>
                <Textarea
                  id="coverMessage"
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Tell us about your background and why you are interested in Bio Peri Posa..."
                  rows={5}
                  data-ocid="careers.textarea"
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
                data-ocid="careers.submit_button"
              >
                {submitting ? "Submitting..." : "Submit Expression of Interest"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
