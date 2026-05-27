import { Sidebar } from "./Sidebar";

export function HubShell({
  children,
  compactPromo
}: {
  children: React.ReactNode;
  compactPromo?: boolean;
}) {
  return (
    <main className="hub-frame">
      <Sidebar compactPromo={compactPromo} />
      <section className="hub-main">{children}</section>
    </main>
  );
}
