import Image from "next/image";
import Link from "next/link";
import { Bell, ChevronDown, Crown, Sparkles } from "lucide-react";
import { profileImage } from "@/lib/data";

type HeaderProps = {
  greeting?: boolean;
  notification?: boolean;
};

export function Header({ greeting = true, notification }: HeaderProps) {
  return (
    <header className="top-header">
      {greeting ? (
        <div>
          <h1>Olá, Fernanda! <Sparkles className="headline-icon" size={24} strokeWidth={1.5} aria-hidden="true" /></h1>
          <p>Continue seus estudos e evolua ainda mais.</p>
        </div>
      ) : (
        <div />
      )}

      <div className="header-actions">
        {notification ? (
          <Link href="/mensagens" className="bell" aria-label="Abrir mensagens">
            <Bell size={23} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        ) : null}
        <Link href="/perfil" className="profile-pill" aria-label="Abrir perfil de Fernanda Silva">
          <Image src={profileImage} width={54} height={54} alt="Fernanda Silva" />
          <div>
            <strong>Fernanda Silva</strong>
            <span>Aluna Premium <Crown size={13} fill="currentColor" aria-hidden="true" /></span>
          </div>
          <ChevronDown size={18} strokeWidth={1.6} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
