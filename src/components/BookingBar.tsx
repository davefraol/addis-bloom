import { useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";

import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

const today = () => new Date().toISOString().slice(0, 10);

/**
 * Phase 1: validates input and forwards the stay details to /booking.
 * Real availability lookup replaces `onSubmit` in a later phase.
 */
export function BookingBar({ className }: { className?: string }) {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      setError("Please choose both a check-in and a check-out date.");
      return;
    }
    if (checkOut <= checkIn) {
      setError("Check-out must be after check-in.");
      return;
    }
    setError(null);
    navigate({ to: "/booking", search: { checkIn, checkOut, guests, room: undefined } });
  };

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Check availability"
      className={cn(
        "w-full border border-border bg-card/97 p-4 shadow-soft backdrop-blur-sm sm:p-5",
        className,
      )}
    >
      <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto_auto] md:items-end md:gap-5">
        <Field label="Check-in" htmlFor="bb-checkin">
          <input
            id="bb-checkin"
            type="date"
            min={today()}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Check-out" htmlFor="bb-checkout">
          <input
            id="bb-checkout"
            type="date"
            min={checkIn || today()}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Guests" htmlFor="bb-guests" className="md:w-32">
          <select
            id="bb-guests"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className={inputClass}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </Field>
        <Button type="submit" size="lg" className="w-full md:w-auto">
          <Search className="size-4" aria-hidden="true" />
          Search Availability
        </Button>
      </div>
      <p
        role="status"
        aria-live="polite"
        className={cn("mt-3 text-xs text-destructive", !error && "sr-only")}
      >
        {error}
      </p>
    </form>
  );
}

const inputClass =
  "h-11 w-full rounded-xs border border-input bg-background px-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none";

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
