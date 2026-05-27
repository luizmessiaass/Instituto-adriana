import { CalendarDays, FileCheck2, Lock, QrCode, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { HubShell } from "@/components/HubShell";
import { PrintCertificateButton } from "@/components/PrintCertificateButton";
import { certificateRecords, courses } from "@/lib/data";

export default function CertificatesPage() {
  const activeCertificate = certificateRecords[0];
  const activeCourse = courses.find((course) => course.title === activeCertificate.course);

  return (
    <HubShell compactPromo>
      <Header />
      <section className="certificate-page">
        <div className="certificate-header">
          <div>
            <span className="eyebrow">Documentos oficiais</span>
            <h1>Certificados</h1>
            <p className="certificate-note"><ShieldCheck size={18} aria-hidden="true" /> Certificados emitidos com validação digital e histórico de conclusão.</p>
          </div>
          <div className="certificate-trust panel">
            <QrCode size={28} aria-hidden="true" />
            <div>
              <strong>{activeCertificate.validationCode}</strong>
              <span>Código de validação</span>
            </div>
          </div>
        </div>

        <div className="certificate-layout">
          <aside className="certificate-list panel" aria-label="Certificados disponíveis">
            <h2>Disponíveis</h2>
            {certificateRecords.map((certificate) => (
              <article className={certificate.id === activeCertificate.id ? "active" : ""} key={certificate.id}>
                <FileCheck2 size={22} aria-hidden="true" />
                <div>
                  <strong>{certificate.course}</strong>
                  <span>{certificate.workload} • emitido em {certificate.issuedAt}</span>
                </div>
              </article>
            ))}
          </aside>

          <div className="certificate-preview">
            <div className="certificate">
              <div className="certificate-border">
                <img src="/assets/logos/logo-adriana-transparent.png" alt="" />
                <p>INSTITUTO<br />ADRIANA VINHAL</p>
                <h2>CERTIFICADO</h2>
                <h3>DE CONCLUSÃO</h3>
                <span>Certificamos que</span>
                <strong>Fernanda Silva</strong>
                <span>concluiu com êxito o curso</span>
                <em>{activeCertificate.course}</em>
                <span>com carga horária de {activeCertificate.workload}.</span>
                <span className="certificate-badge">{activeCourse?.badge ?? "VALIDAÇÃO DIGITAL"}</span>
                <small>Adriana Vinhal<br />Diretora Geral</small>
                <div className="seal">AV</div>
              </div>
            </div>

            <div className="certificate-actions">
              <PrintCertificateButton />
              <p className="validity"><Lock size={15} aria-hidden="true" /> Documento oficial com validade digital</p>
              <p><CalendarDays size={15} aria-hidden="true" /> Emitido em {activeCertificate.issuedAt}</p>
            </div>
          </div>
        </div>
      </section>
    </HubShell>
  );
}
