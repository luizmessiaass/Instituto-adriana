"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Diamond } from "lucide-react";
import { navItems } from "@/lib/data";
import { PrimaryButton } from "./PrimaryButton";

type SidebarProps = {
  compactPromo?: boolean;
};

export function Sidebar({ compactPromo }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link href="/dashboard" className="brand" aria-label="Dashboard">
        <Image src="/assets/logos/logo-adriana-transparent.png" width={172} height={192} alt="Instituto Adriana Vinhal" priority />
      </Link>

      <nav className="side-nav" aria-label="Navegacao principal">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link key={item.href} href={item.href} className={`side-link ${active ? "active" : ""}`}>
              <Icon size={20} strokeWidth={1.6} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className={compactPromo ? "side-promo compact" : "side-promo"}>
        <Diamond size={34} strokeWidth={1.35} aria-hidden="true" />
        <h3>{compactPromo ? "Suporte Premium dedicado" : "Desbloqueie novos conhecimentos"}</h3>
        {!compactPromo ? <p>Novos cursos adicionados mensalmente para você se manter sempre à frente.</p> : null}
        {compactPromo ? (
          <PrimaryButton href="/mensagens" variant="outline">FALAR COM SUPORTE</PrimaryButton>
        ) : (
          <PrimaryButton href="/todos-os-cursos">VER NOVIDADES</PrimaryButton>
        )}
      </div>
    </aside>
  );
}
