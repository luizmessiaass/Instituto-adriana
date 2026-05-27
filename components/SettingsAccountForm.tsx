"use client";

import { useState, type FormEvent } from "react";
import { Bell, ChevronDown, Globe2, Lock, MonitorSmartphone, ShieldCheck, UserRound } from "lucide-react";
import { PrimaryButton } from "@/components/PrimaryButton";

type TabId = "conta" | "notificacoes" | "seguranca" | "privacidade";

const tabs: { id: TabId; label: string }[] = [
  { id: "conta", label: "Conta" },
  { id: "notificacoes", label: "Notificações" },
  { id: "seguranca", label: "Segurança" },
  { id: "privacidade", label: "Privacidade" }
];

export function SettingsAccountForm() {
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("conta");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 3200);
  }

  return (
    <section className="settings-panel panel">
      <div className="settings-heading">
        <div>
          <span className="eyebrow">Preferências</span>
          <h1>Configurações</h1>
          <p>Controle dados, segurança e notificações da sua experiência premium.</p>
        </div>
      </div>

      <nav className="settings-tabs" aria-label="Seções de configurações">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={activeTab === tab.id ? "active" : ""}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            aria-pressed={activeTab === tab.id}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <form id="conta" className="settings-form" onSubmit={handleSubmit}>
        {activeTab === "conta" ? <AccountPanel /> : null}
        {activeTab === "notificacoes" ? <NotificationsPanel /> : null}
        {activeTab === "seguranca" ? <SecurityPanel /> : null}
        {activeTab === "privacidade" ? <PrivacyPanel /> : null}

        <div className="settings-actions">
          {saved ? <p className="form-success" role="status">Alterações salvas.</p> : null}
          <PrimaryButton type="submit">SALVAR ALTERAÇÕES</PrimaryButton>
        </div>
      </form>
    </section>
  );
}

function AccountPanel() {
  return (
    <>
      <div className="settings-section-title">
        <UserRound size={24} aria-hidden="true" />
        <div>
          <h2>Informações da conta</h2>
          <p>Dados usados em certificados, atendimento e comunicações oficiais.</p>
        </div>
      </div>
      <label>
        Nome completo
        <input name="name" defaultValue="Fernanda Silva" autoComplete="name" required />
      </label>
      <label>
        E-mail
        <input name="email" defaultValue="fernanda.silva@email.com" type="email" autoComplete="email" required />
      </label>
      <label>
        Telefone
        <input name="phone" defaultValue="(11) 99999-8888" type="tel" autoComplete="tel" />
      </label>
      <label>
        Idioma
        <span>
          <select name="language" defaultValue="pt-BR">
            <option value="pt-BR">Português (Brasil)</option>
            <option value="en-US">English</option>
            <option value="es">Español</option>
          </select>
          <ChevronDown size={18} aria-hidden="true" />
        </span>
      </label>
      <label>
        Fuso horário
        <span>
          <select name="timezone" defaultValue="America/Sao_Paulo">
            <option value="America/Sao_Paulo">(GMT-03:00) Brasília</option>
            <option value="America/New_York">(GMT-04:00) New York</option>
            <option value="Europe/Lisbon">(GMT+01:00) Lisboa</option>
          </select>
          <ChevronDown size={18} aria-hidden="true" />
        </span>
      </label>
      <div className="personalize">
        <span><Globe2 size={34} aria-hidden="true" /></span>
        <div>
          <h3>Experiência personalizada</h3>
          <p>Preferências de idioma e fuso orientam lembretes, agenda e suporte.</p>
        </div>
      </div>
    </>
  );
}

function NotificationsPanel() {
  return (
    <>
      <div className="settings-section-title">
        <Bell size={24} aria-hidden="true" />
        <div>
          <h2>Notificações</h2>
          <p>Escolha quais alertas acompanham sua rotina de estudos.</p>
        </div>
      </div>
      <SettingToggle title="Novos módulos" description="Avisar quando uma nova aula for liberada." defaultChecked />
      <SettingToggle title="Respostas do suporte" description="Receber alertas de mensagens da equipe premium." defaultChecked />
      <SettingToggle title="Metas semanais" description="Lembretes suaves para manter sua sequência de estudo." defaultChecked />
    </>
  );
}

function SecurityPanel() {
  return (
    <>
      <div className="settings-section-title">
        <Lock size={24} aria-hidden="true" />
        <div>
          <h2>Segurança</h2>
          <p>Proteja seu acesso e revise sessões conectadas.</p>
        </div>
      </div>
      <label className="password-row">
        Nova senha
        <input
          name="new-password"
          type="password"
          placeholder="Opcional"
          autoComplete="new-password"
          minLength={8}
          aria-describedby="password-help"
        />
      </label>
      <small id="password-help">Use pelo menos 8 caracteres com letras e números.</small>
      <SettingToggle title="Avisar sobre novos acessos" description="Enviar alerta quando houver login em novo dispositivo." defaultChecked />
      <div className="settings-mini-panel">
        <MonitorSmartphone size={24} aria-hidden="true" />
        <div>
          <h3>Sessão atual</h3>
          <p>Windows • São Paulo • ativa agora</p>
        </div>
      </div>
    </>
  );
}

function PrivacyPanel() {
  return (
    <>
      <div className="settings-section-title">
        <ShieldCheck size={24} aria-hidden="true" />
        <div>
          <h2>Privacidade</h2>
          <p>Defina como seu progresso aparece dentro da comunidade premium.</p>
        </div>
      </div>
      <SettingToggle title="Mostrar conquistas no perfil" description="Exibir marcos de estudo e certificados concluídos." defaultChecked />
      <SettingToggle title="Compartilhar certificado por link" description="Permitir validação pública por código digital." defaultChecked />
      <SettingToggle title="Receber recomendações personalizadas" description="Usar seu progresso para sugerir próximos cursos." defaultChecked />
    </>
  );
}

function SettingToggle({ title, description, defaultChecked }: { title: string; description: string; defaultChecked?: boolean }) {
  return (
    <label className="settings-toggle-card">
      <span>
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      <input type="checkbox" defaultChecked={defaultChecked} />
    </label>
  );
}
