import { Header } from "@/components/Header";
import { HubShell } from "@/components/HubShell";
import { SettingsAccountForm } from "@/components/SettingsAccountForm";

export default function SettingsPage() {
  return (
    <HubShell compactPromo>
      <Header />
      <SettingsAccountForm />
    </HubShell>
  );
}
