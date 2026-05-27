import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileText,
  Lock,
  PlayCircle,
  Star
} from "lucide-react";
import { HubShell } from "@/components/HubShell";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ProgressBar } from "@/components/ProgressBar";
import { courses, type Course } from "@/lib/data";

type SearchParams = {
  curso?: string | string[];
};

type MyCoursesPageProps = {
  searchParams?: Promise<SearchParams> | SearchParams;
};

export default async function MyCoursesPage({ searchParams }: MyCoursesPageProps) {
  const params = await Promise.resolve(searchParams);
  const selectedTitle = Array.isArray(params?.curso) ? params?.curso[0] : params?.curso;
  const selectedCourse = selectedTitle ? courses.find((course) => course.title === selectedTitle) : null;

  if (selectedCourse) {
    return <CourseWorkspace course={selectedCourse} />;
  }

  return (
    <HubShell compactPromo>
      <section className="page-heading split">
        <div>
          <h1>Meus Cursos</h1>
          <p>Acompanhe sua trilha de evolução, retome aulas e veja seus próximos passos.</p>
        </div>
        <Link className="filter-button" href="/todos-os-cursos">Explorar catálogo <ChevronDown size={18} aria-hidden="true" /></Link>
      </section>

      <div className="course-list">
        {courses.slice(0, 5).map((course, index) => (
          <Link className="wide-course" href={`/meus-cursos?curso=${encodeURIComponent(course.title)}`} key={course.title} aria-label={`Abrir curso ${course.title}`}>
            <Image src={course.cover} width={320} height={210} alt={course.title} />
            <div>
              <span className="wide-kicker">{course.level}</span>
              <h2>{course.title}</h2>
              {index === 0 ? <span>RECONHECIDA PELO MEC</span> : null}
              <p>{course.nextLesson}</p>
              <div className="wide-meta">
                <small><Clock3 size={15} aria-hidden="true" /> {course.duration}</small>
                <small><FileText size={15} aria-hidden="true" /> {course.modules} módulos</small>
              </div>
              <div className="wide-progress">
                <ProgressBar value={course.progress ?? 0} />
                <strong>{course.progress ?? 0}%</strong>
              </div>
            </div>
            <ChevronRight className="course-arrow" size={35} strokeWidth={1.35} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </HubShell>
  );
}

function CourseWorkspace({ course }: { course: Course }) {
  const completedLessons = course.lessons.filter((lesson) => lesson.status === "done").length;
  const currentLesson = course.lessons.find((lesson) => lesson.status === "current") ?? course.lessons[0];

  return (
    <HubShell compactPromo>
      <section className="course-workspace">
        <Link href="/meus-cursos" className="back-link"><ChevronLeft size={18} aria-hidden="true" /> Voltar para meus cursos</Link>

        <div className="course-studio">
          <section className="lesson-stage panel">
            <div className="lesson-media">
              <Image src={course.cover} width={920} height={520} alt={course.title} priority />
              <div className="lesson-overlay">
                <span><PlayCircle size={54} aria-hidden="true" /></span>
                <p>Aula atual</p>
                <h1>{currentLesson.title}</h1>
              </div>
            </div>

            <div className="lesson-summary">
              <div>
                <span className="course-level">{course.level}</span>
                <h2>{course.title}</h2>
                <p>{course.subtitle ?? course.nextLesson}</p>
              </div>
              <PrimaryButton href={`/meus-cursos?curso=${encodeURIComponent(course.title)}`} icon>CONTINUAR AULA</PrimaryButton>
            </div>
          </section>

          <aside className="lesson-rail panel">
            <div className="lesson-progress-head">
              <div>
                <p>Progresso do curso</p>
                <strong>{course.progress ?? 0}%</strong>
              </div>
              <ProgressBar value={course.progress ?? 0} />
            </div>

            <div className="lesson-metrics">
              <span><Clock3 size={16} aria-hidden="true" /> {course.duration}</span>
              <span><FileText size={16} aria-hidden="true" /> {completedLessons}/{course.lessons.length} aulas</span>
              <span><Star size={16} aria-hidden="true" /> {course.instructor}</span>
            </div>

            <ol className="lesson-list">
              {course.lessons.map((lesson) => (
                <li className={lesson.status} key={lesson.title}>
                  <span>
                    {lesson.status === "done" ? <CheckCircle2 size={18} aria-hidden="true" /> : null}
                    {lesson.status === "current" ? <PlayCircle size={18} aria-hidden="true" /> : null}
                    {lesson.status === "locked" ? <Lock size={18} aria-hidden="true" /> : null}
                  </span>
                  <div>
                    <strong>{lesson.title}</strong>
                    <small>{lesson.duration}</small>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <section className="course-tool-grid">
          <article className="panel study-tool">
            <FileText size={24} aria-hidden="true" />
            <div>
              <h3>Materiais da aula</h3>
              <p>Protocolos, checklist clínico e referências ficam agrupados por módulo.</p>
            </div>
            <PrimaryButton href="/certificados" variant="outline">ABRIR</PrimaryButton>
          </article>
          <article className="panel study-tool">
            <Star size={24} aria-hidden="true" />
            <div>
              <h3>Anotações privadas</h3>
              <p>Registre dúvidas e pontos de atenção para revisar antes da avaliação.</p>
            </div>
            <PrimaryButton href="/mensagens" variant="outline">ENVIAR DÚVIDA</PrimaryButton>
          </article>
        </section>
      </section>
    </HubShell>
  );
}
