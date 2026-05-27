import { Diamond } from "lucide-react";
import { CourseCatalog } from "@/components/CourseCatalog";
import { Header } from "@/components/Header";
import { HubShell } from "@/components/HubShell";
import { PrimaryButton } from "@/components/PrimaryButton";
import { courses } from "@/lib/data";

export default function AllCoursesPage() {
  return (
    <HubShell>
      <Header greeting={false} notification />
      <CourseCatalog courses={courses} />
      <section className="unlock-banner">
        <Diamond size={58} strokeWidth={1.25} aria-hidden="true" />
        <div>
          <h2>Desbloqueie novos conhecimentos</h2>
          <p>Novos cursos adicionados mensalmente para você se manter sempre à frente.</p>
        </div>
        <PrimaryButton href="/todos-os-cursos">VER NOVIDADES</PrimaryButton>
      </section>
    </HubShell>
  );
}
