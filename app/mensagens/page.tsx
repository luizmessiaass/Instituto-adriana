import { Clock3, Mail, MessageCircle, Paperclip, Send } from "lucide-react";
import { Header } from "@/components/Header";
import { HubShell } from "@/components/HubShell";
import { PrimaryButton } from "@/components/PrimaryButton";
import { messageThreads } from "@/lib/data";

export default function MessagesPage() {
  const activeThread = messageThreads[0];

  return (
    <HubShell compactPromo>
      <Header />
      <section className="messages-page">
        <div className="messages-heading">
          <div>
            <span className="eyebrow">Atendimento premium</span>
            <h1>Mensagens</h1>
            <p>Converse com a equipe, acompanhe protocolos e mantenha seu histórico organizado.</p>
          </div>
          <PrimaryButton href="mailto:suporte@institutoadrianavinhal.com.br?subject=Nova%20mensagem%20da%20%C3%A1rea%20do%20aluno" icon>NOVA MENSAGEM</PrimaryButton>
        </div>

        <div className="messages-layout">
          <aside className="thread-list panel" aria-label="Conversas">
            {messageThreads.map((thread) => (
              <article className={thread.id === activeThread.id ? "active" : ""} key={thread.id}>
                <MessageCircle size={21} aria-hidden="true" />
                <div>
                  <strong>{thread.subject}</strong>
                  <p>{thread.preview}</p>
                  <span><Clock3 size={14} aria-hidden="true" /> {thread.lastUpdate}</span>
                </div>
                <small>{thread.status}</small>
              </article>
            ))}
          </aside>

          <section className="conversation panel">
            <div className="conversation-head">
              <div>
                <span>{activeThread.id}</span>
                <h2>{activeThread.subject}</h2>
              </div>
              <strong className={`thread-status ${activeThread.status.toLowerCase()}`}>{activeThread.status}</strong>
            </div>

            <div className="message-bubble support">
              <Mail size={19} aria-hidden="true" />
              <div>
                <span>Equipe Instituto Adriana Vinhal • Hoje, 09:42</span>
                <p>Olá, Fernanda. Seu certificado está válido e pode ser compartilhado pelo código digital exibido na área de certificados.</p>
              </div>
            </div>

            <div className="message-bubble student">
              <div>
                <span>Fernanda Silva • Hoje, 09:18</span>
                <p>Gostaria de confirmar se o certificado de Anatomia ITC já está disponível para download.</p>
              </div>
            </div>

            <div className="reply-box">
              <label htmlFor="reply">Responder</label>
              <textarea id="reply" placeholder="Escreva sua mensagem para a equipe..." />
              <div>
                <button type="button"><Paperclip size={18} aria-hidden="true" /> Anexar</button>
                <a className="button" href="mailto:suporte@institutoadrianavinhal.com.br?subject=Resposta%20sobre%20certificado">
                  <Send size={18} aria-hidden="true" /> ENVIAR
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </HubShell>
  );
}
