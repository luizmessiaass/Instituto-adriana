"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { CourseCard } from "@/components/CourseCard";
import type { Course } from "@/lib/data";

type CourseCatalogProps = {
  courses: Course[];
};

export function CourseCatalog({ courses }: CourseCatalogProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");

  const categories = useMemo(() => ["Todos", ...Array.from(new Set(courses.map((course) => course.category)))], [courses]);
  const normalizedQuery = query.trim().toLowerCase();
  const filteredCourses = courses.filter((course) => {
    const searchable = `${course.title} ${course.description ?? ""} ${course.category} ${course.level} ${course.nextLesson}`.toLowerCase();
    const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
    const matchesCategory = category === "Todos" || course.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <>
      <section className="page-heading catalog-heading">
        <div>
          <span className="eyebrow">Biblioteca premium</span>
          <h1>Todos os Cursos</h1>
          <p>{filteredCourses.length} formações e trilhas para continuar sua evolução profissional.</p>
        </div>
        <div className="catalog-tools">
          <label>
            <span className="sr-only">Buscar curso</span>
            <input
              placeholder="Buscar por curso, tema ou nível"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              type="search"
            />
            <Search size={20} aria-hidden="true" />
          </label>
        </div>
      </section>

      <div className="catalog-chips" aria-label="Categorias de cursos">
        <SlidersHorizontal size={18} aria-hidden="true" />
        {categories.map((item) => (
          <button
            key={item}
            className={item === category ? "active" : ""}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={item === category}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="catalog-grid" aria-live="polite">
        {filteredCourses.length ? (
          filteredCourses.map((course, index) => (
            <CourseCard key={course.title} course={course} featured={index === 0 && category === "Todos" && !normalizedQuery} />
          ))
        ) : (
          <section className="panel empty-results">
            <h2>Nenhum curso encontrado</h2>
            <p>Revise a busca ou limpe os filtros para ver todos os cursos disponíveis.</p>
            <button
              className="button button-outline"
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("Todos");
              }}
            >
              LIMPAR FILTROS
            </button>
          </section>
        )}
      </div>
    </>
  );
}
