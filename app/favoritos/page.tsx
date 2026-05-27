import { CourseCard } from "@/components/CourseCard";
import { Header } from "@/components/Header";
import { HubShell } from "@/components/HubShell";
import { PrimaryButton } from "@/components/PrimaryButton";
import { courses } from "@/lib/data";

export default function FavoritesPage() {
  return (
    <HubShell>
      <Header greeting={false} notification />
      <section className="favorites-heading">
        <h1>Favoritos</h1>
        <div />
        <p>Seus cursos favoritos salvos para você acessar quando quiser<br />e continuar evoluindo com excelência.</p>
      </section>
      <div className="favorites-grid">
        {courses.slice(0, 6).map((course) => (
          <CourseCard course={course} key={course.title} favorite compact />
        ))}
      </div>
      <div className="center-button">
        <PrimaryButton href="/todos-os-cursos" icon>VER TODOS OS CURSOS</PrimaryButton>
      </div>
    </HubShell>
  );
}
