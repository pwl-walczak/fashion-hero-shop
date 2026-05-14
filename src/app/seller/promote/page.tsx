"use client"

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, TrendingUp, Zap, Target } from "lucide-react";
import { SellerHeader } from "@/components/seller-header";
import { seller } from "@/data/seller";

const SESSION_KEY = `fh_promote_signup_${seller.id}`;

export default function PromotePage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(SESSION_KEY) === "1";
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !email.includes("@")) {
      setError("Podaj poprawny adres e-mail");
      return;
    }
    setSubmitting(true);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SellerHeader />

      <div className="mx-auto max-w-6xl px-4 pt-6 md:px-8">
        <Link
          href="/seller"
          className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Powrót do pulpitu
        </Link>
      </div>

      <main className="mx-auto max-w-2xl px-4 py-12 md:px-8 md:py-16">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Nowość! · Wczesny dostęp
        </p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          Wypromuj swój listing na szczycie wyszukiwań
        </h1>
        <p className="mt-4 text-base text-muted-foreground whitespace-pre-line">
          Twoje produkty zasługują na widoczność.{" "} Zapisz się do listy oczekujących już dziś.
        </p>

        <ul className="mt-10 space-y-5 border-t border-border/60 pt-8">
          <Bullet
            icon={<TrendingUp className="h-4 w-4 text-foreground" />}
            title="Wyższa pozycja w wyszukiwaniu"
            text="Twój listing pokazuje się wyżej, gdy kupujący szukają w Twojej kategorii."
          />
          <Bullet
            icon={<Zap className="h-4 w-4 text-foreground" />}
            title="Włączasz i wyłączasz w sekundzie"
            text="Bez długich umów — promujesz tylko wtedy, kiedy chcesz."
          />
          <Bullet
            icon={<Target className="h-4 w-4 text-foreground" />}
            title="Pełna kontrola nad zasięgiem"
            text="Sam decydujesz, które produkty promujesz i jak długo."
          />
        </ul>

        <div className="mt-10 border border-border bg-card p-6">
          {submitted ? (
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <div>
                <h2 className="text-base font-medium text-foreground">
                  Dzięki, masz to!
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Odezwiemy się gdy tylko uruchomimy nową usługę.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] font-medium uppercase tracking-[0.18em] text-foreground"
                >
                  Zapisz się do listy oczekujących
                </label>
                <p className="mt-1 text-xs text-muted-foreground whitespace-pre-line">
                  Funkcja w przygotowaniu — uruchomimy ją już wkrótce.{"\n"}
                  Dołącz do testerów nowej usługi dla sprzedawców.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="email"
                  type="email"
                  placeholder="ty@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                  maxLength={255}
                  required
                  className="flex-1 border border-border bg-background px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-full bg-primary px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Zapisuję…" : "Powiadom mnie"}
                </button>
              </div>
              {error && (
                <p className="text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                Nie pobieramy opłat ani danych poza adresem e-mail.
              </p>
            </form>
          )}
        </div>
      </main>
    </>
  );
}

function Bullet({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center bg-secondary">
        {icon}
      </div>
      <div>
        <div className="text-sm font-medium text-foreground">{title}</div>
        <div className="mt-0.5 text-sm text-muted-foreground">{text}</div>
      </div>
    </li>
  );
}
