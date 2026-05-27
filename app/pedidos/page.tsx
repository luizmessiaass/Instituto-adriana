import { CheckCircle2, CreditCard, Download, MessageCircle, ReceiptText } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { HubShell } from "@/components/HubShell";
import { PrimaryButton } from "@/components/PrimaryButton";
import { orders } from "@/lib/data";

export default function OrdersPage() {
  return (
    <HubShell compactPromo>
      <Header />
      <section className="orders-panel panel">
        <div className="orders-heading">
          <div>
            <span className="eyebrow">Financeiro</span>
            <h1>Meus Pedidos</h1>
            <p>Histórico de compras, comprovantes e suporte para cada inscrição.</p>
          </div>
          <PrimaryButton href="/mensagens?assunto=Pedido" icon>ABRIR CHAMADO</PrimaryButton>
        </div>

        <div className="orders-summary">
          <article>
            <ReceiptText size={22} aria-hidden="true" />
            <span>Total investido</span>
            <strong>R$ 10.982,00</strong>
          </article>
          <article>
            <CheckCircle2 size={22} aria-hidden="true" />
            <span>Pedidos concluídos</span>
            <strong>{orders.length}</strong>
          </article>
          <article>
            <CreditCard size={22} aria-hidden="true" />
            <span>Plano atual</span>
            <strong>Premium Anual</strong>
          </article>
        </div>

        <table className="orders-table">
          <thead>
            <tr>
              <th scope="col">Pedido</th>
              <th scope="col">Curso</th>
              <th scope="col">Data</th>
              <th scope="col">Valor</th>
              <th scope="col">Status</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(([id, title, subtitle, date, price]) => (
              <tr key={id}>
                <td data-label="Pedido">{id}</td>
                <td data-label="Curso"><strong>{title}</strong>{subtitle ? <small>{subtitle}</small> : null}</td>
                <td data-label="Data">{date}</td>
                <td data-label="Valor">{price}</td>
                <td data-label="Status"><span className="status-badge"><CheckCircle2 size={15} aria-hidden="true" /> Concluído</span></td>
                <td data-label="Ações">
                  <div className="order-actions">
                    <Link href={`/mensagens?pedido=${encodeURIComponent(id)}`} aria-label={`Abrir atendimento do pedido ${id}`}>
                      <MessageCircle size={18} aria-hidden="true" /> Suporte
                    </Link>
                    <Link href={`/pedidos?recibo=${encodeURIComponent(id)}`} aria-label={`Ver recibo do pedido ${id}`}>
                      <Download size={18} aria-hidden="true" /> Recibo
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <section className="help-banner">
          <MessageCircle size={44} strokeWidth={1.5} aria-hidden="true" />
          <div>
            <h2>Precisa de ajuda com um pedido?</h2>
            <p>A equipe premium acompanha pagamento, acesso e documentação em um só atendimento.</p>
          </div>
          <PrimaryButton href="/mensagens">ABRIR CENTRAL</PrimaryButton>
        </section>
      </section>
    </HubShell>
  );
}
