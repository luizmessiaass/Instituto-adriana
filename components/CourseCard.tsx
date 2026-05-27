import Link from "next/link";
import { BookOpen, Clock3, Heart } from "lucide-react";
import type { Course } from "@/lib/data";

type CourseCardProps = {
  course: Course;
  favorite?: boolean;
  featured?: boolean;
  compact?: boolean;
};

export function CourseCard({ course, favorite, featured, compact }: CourseCardProps) {
  const href = `/meus-cursos?curso=${encodeURIComponent(course.title)}`;

  return (
    <Link className={`course-card ${featured ? "featured" : ""} ${compact ? "compact" : ""}`} href={href} aria-label={`Abrir curso ${course.title}`}>
      <div className="course-image">
        <img src={course.cover} alt={course.title} />
        {featured ? <span className="ribbon">DESTAQUE</span> : null}
        {favorite ? (
          <span className="heart" aria-label="Curso favorito" title="Curso favorito">
            <Heart size={22} fill="currentColor" aria-hidden="true" />
          </span>
        ) : null}
      </div>
      <div className="course-info">
        <span className="course-level">{course.level}</span>
        <h3>{course.title}</h3>
        {course.badge && !compact ? <span className="course-badge">{course.badge}</span> : null}
        {course.description && !compact ? <p>{course.description}</p> : null}
        <small className="course-meta">
          <span><BookOpen size={15} aria-hidden="true" /> {course.modules} módulos</span>
          <span><Clock3 size={15} aria-hidden="true" /> {course.duration}</span>
        </small>
        {typeof course.progress === "number" ? (
          <div className="course-card-progress" aria-label={`Progresso ${course.progress}%`}>
            <span style={{ width: `${course.progress}%` }} />
          </div>
        ) : null}
      </div>
    </Link>
  );
}
