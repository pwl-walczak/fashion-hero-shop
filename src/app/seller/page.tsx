import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Package, ShoppingBag, Target, TrendingUp, Zap } from "lucide-react";
import { listings } from "@/data/seller";
import { SellerHeader } from "@/components/seller-header";

export const metadata: Metadata = {
  title: "Pulpit — FashionHero Sellers",
  description: "Podsumowanie Twojego sklepu na FashionHero — produkty, zamówienia i wyświetlenia.",
};

const STATS = [
  { label: "Produkty", value: "4", icon: Package },
  { label: "Zamówienia (ostatnie 7 dni)", value: "6", icon: ShoppingBag },
  { label: "Wyświetlenia (ostatnie 7 dni)", value: "316", icon: Eye },
] as const;

const BENEFITS = [
  {
    icon: TrendingUp,
    title: "Wyższa pozycja w wyszukiwaniu",
    body: "Twój listing pokazuje się wyżej, gdy kupujący szukają w Twojej kategorii.",
  },
  {
    icon: Zap,
    title: "Włączasz i wyłączasz w sekundzie",
    body: "Bez długich umów — promujesz tylko wtedy, kiedy chcesz.",
  },
  {
    icon: Target,
    title: "Pełna kontrola nad zasięgiem",
    body: "Sam decydujesz, które produkty promujesz i jak długo.",
  },
] as const;

export default function SellerDashboard() {
  const firstListingId = listings[0].id;

  return (
    <>
      <SellerHeader activeId="pulpit" />

      <main className="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
        {/* Hero */}
        <section>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Pulpit
          </p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Cześć, Kamil
          </h1>
          <h2 className="mt-3 text-base text-muted-foreground md:text-lg">
            Oto Twoje podsumowanie w sklepie FashionHero
          </h2>
        </section>

        {/* Stats */}
        <section className="mt-10 grid gap-3 sm:grid-cols-3">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <article
                key={stat.label}
                className="border border-border bg-card rounded-lg p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-secondary">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                    <p className="mt-1 text-3xl font-medium text-foreground">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Promo teaser */}
        <section className="mt-10 border border-border bg-card rounded-lg p-6 md:p-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Nowość! · Wczesny dostęp
          </p>
          <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                Wypromuj swój listing na szczycie wyszukiwań
              </h2>
              <p className="mt-3 text-sm text-muted-foreground md:text-base whitespace-pre-line">
                Twoje produkty zasługują na widoczność.{" "} Zapisz się do listy
                oczekujących już dziś.
              </p>
            </div>
            <Link
              href={`/seller/promote?listing=${firstListingId}`}
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary/90 md:self-auto"
            >
              Sprawdź
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 border-t border-border pt-8 md:grid-cols-3">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-secondary">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground">
                      {b.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {b.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
