import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";

import { Button } from "@/components/Button";

const inputClass =
  "h-12 w-full rounded-none border border-border-strong bg-background px-4 text-sm outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/25";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * Phase 1: client-side validation only. The submit handler is replaced with a
 * server call once the backend is connected.
 */
export function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (values.message.trim().length < 10) next.message = "Please add a little more detail.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-start justify-center border border-border bg-card p-8 shadow-soft"
      >
        <Check className="size-7 text-accent" aria-hidden="true" />
        <h3 className="mt-5 font-serif text-2xl">Thank you — message noted</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Message delivery is not connected yet, so nothing has been sent. Please call us on the
          number listed and we will help you straight away.
        </p>
        <Button variant="outline" className="mt-7" onClick={() => setSent(false)}>
          Write another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-label="Contact form"
      className="border border-border bg-card p-7 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="cf-name" error={errors.name}>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={Boolean(errors.name)}
            className={inputClass}
          />
        </Field>
        <Field label="Email" htmlFor="cf-email" error={errors.email}>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            aria-invalid={Boolean(errors.email)}
            className={inputClass}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Phone (optional)" htmlFor="cf-phone">
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={set("phone")}
              className={inputClass}
            />
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Message" htmlFor="cf-message" error={errors.message}>
            <textarea
              id="cf-message"
              name="message"
              rows={6}
              value={values.message}
              onChange={set("message")}
              aria-invalid={Boolean(errors.message)}
              placeholder="Dates, number of guests, and anything we should know before you arrive."
              className="w-full rounded-none border border-border-strong bg-background p-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/25"
            />
          </Field>
        </div>
      </div>

      <Button type="submit" variant="accent" size="lg" className="mt-7 w-full sm:w-auto">
        <Send className="size-4" aria-hidden="true" />
        Send message
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        Message delivery is not connected yet — for anything urgent, please call us.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
