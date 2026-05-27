import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Crown, Diamond, Mail, Phone, User } from "lucide-react";
import { Achievements } from "@/components/Achievements";
import { HubShell } from "@/components/HubShell";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ProgressBar } from "@/components/ProgressBar";
import { profileImage } from "@/lib/data";

export default function ProfilePage() {
  const info = [
    [Mail, "E-mail", "fernanda.silva@email.com", "ALTERAR"],
    [Phone, "Telefone", "(11) 99999-8888", "ALTERAR"],
    [CalendarDays, "Membro desde", "Março/2024", ""],
    [User, "Status", "ALUNA PREMIUM", ""]
  ] as const;

  return (
    <HubShell>
      <section className="profile-page">
        <div className="page-heading split">
          <div>
            <h1>Perfil</h1>
            <p>Início <span>›</span> Perfil</p>
          </div>
          <Link className="filter-button" href="/todos-os-cursos"><Diamond size={18} aria-hidden="true" /> Clube Premium</Link>
        </div>
        <section className="profile-hero panel">
          <Image src={profileImage} width={200} height={200} alt="Fernanda Silva" />
          <div>
            <h2>Fernanda Silva</h2>
            <h3><Crown size={22} fill="currentColor" aria-hidden="true" /> Aluna Premium</h3>
            <p>Você faz parte do seleto grupo de alunas que transformam conhecimento em excelência.</p>
          </div>
        </section>
        <div className="profile-info-grid">
          {info.map(([Icon, label, value, action]) => (
            <article className="panel info-card" key={label}>
              <span><Icon size={28} aria-hidden="true" /></span>
              <p>{label}</p>
              <strong>{value}</strong>
              {action ? <Link href="/configuracoes#conta">{action}</Link> : null}
            </article>
          ))}
        </div>
        <div className="profile-bottom">
          <section className="panel profile-progress" id="conquistas">
            <h3>Progresso geral</h3>
            <div><ProgressBar value={62} /><strong>62%</strong></div>
            <dl>
              <div><dt>Cursos em andamento</dt><dd>5</dd></div>
              <div><dt>Módulos concluídos</dt><dd>18 de 36</dd></div>
              <div><dt>Tempo de estudo</dt><dd>48h 30m</dd></div>
            </dl>
            <PrimaryButton href="/meus-cursos" variant="outline" wide icon>VER MEUS CURSOS</PrimaryButton>
          </section>
          <Achievements />
        </div>
        <section className="mission panel">
          <div>
          <h2>Seu desenvolvimento é nossa missão.</h2>
            <p>Continue sua jornada e alcance novos patamares.</p>
          </div>
          <PrimaryButton href="/configuracoes#conta">EDITAR PERFIL</PrimaryButton>
        </section>
      </section>
    </HubShell>
  );
}
