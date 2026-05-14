"use client"

import {
  ArrowUpRight,
  HelpCircle,
  LayoutDashboard,
  Package,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { seller } from "@/data/seller";

type NavId = "pulpit" | "produkty" | "zamowienia" | "help";

const NAV_ITEMS: { id: NavId; label: string; icon: LucideIcon }[] = [
  { id: "pulpit", label: "Pulpit", icon: LayoutDashboard },
  { id: "produkty", label: "Produkty", icon: Package },
  { id: "zamowienia", label: "Zamówienia", icon: ShoppingBag },
  { id: "help", label: "Pomoc i FAQ", icon: HelpCircle },
];

export function SellerHeader({ activeId }: { activeId?: NavId }) {
  return (
    <>
      {/* Top bar */}
      <div
        className="bg-primary text-primary-foreground"
        style={{ height: 36, lineHeight: "36px" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-8">
          <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
            Panel sprzedawcy
          </span>
          <a
            href="https://fashionhero.aiproductheroes.pl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            Marketplace
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border/60 bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-6 px-4 py-4 md:px-8">
          <Link href="/seller" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              FashionHero
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Sellers
            </span>
          </Link>

          <nav className="flex items-center justify-center gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const active = item.id === activeId;
              const className =
                "inline-flex items-center gap-2 rounded-sm px-3 py-2 text-sm transition-colors " +
                (active
                  ? "bg-secondary font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground");
              if (item.id === "pulpit") {
                return (
                  <Link
                    key={item.id}
                    href="/seller"
                    aria-current={active ? "page" : undefined}
                    className={className}
                  >
                    <Icon size={15} />
                    {item.label}
                  </Link>
                );
              }
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-current={active ? "page" : undefined}
                  className={className}
                >
                  <Icon size={15} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-[11px] font-semibold tracking-wide text-primary-foreground">
              KN
            </div>
            <div className="text-right text-xs leading-tight">
              <div className="font-medium text-foreground">{seller.name}</div>
              <div className="text-muted-foreground">
                Sprzedawca · {seller.months_active} mies.
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
