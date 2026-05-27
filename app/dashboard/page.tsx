import Image from "next/image";
import { BookOpen, Clock, Crown, Diamond, Sparkles } from "lucide-react";
import { Achievements } from "@/components/Achievements";
import { HubShell } from "@/components/HubShell";
import { PrimaryButton } from "@/components/PrimaryButton";
import { ProgressBar } from "@/components/ProgressBar";
import { courses, profileImage } from "@/lib/data";

export default function DashboardPage() {
  return (
    <HubShell>
      <div className="dashboard-grid">
        <div className="dashboard-content">
          <section className="intro">
            <h1>Olá, Fernanda! <Sparkles className="headline-icon" size={28} strokeWidth={1.5} aria-hidden="true" /></h1>
            <p>Continue seus estudos e evolua ainda mais.</p>
          </section>

          <section>
            <h2 className="section-title">Resumo do seu progresso</h2>
            <div className="stats-grid">
              <article className="panel stat-progress">
                <h3>Progresso geral</h3>
                <div className="ring">62%</div>
                <div>
                  <p>Cursos em andamento</p>
                  <strong>3</strong>
                </div>
                <a href="/meus-cursos">VER TODOS OS CURSOS <span>›</span></a>
              </article>
              <article className="panel stat-card">
                <h3>Tempo de estudo</h3>
                <strong>48h 30m</strong>
                <p>Média semanal</p>
                <b>6h 15m</b>
                <a href="/perfil">VER MEU DESEMPENHO <span>›</span></a>
              </article>
              <article className="panel stat-card">
                <h3>Módulos concluídos</h3>
                <strong>18 / 36</strong>
                <p>Conclusão total</p>
                <b>50%</b>
                <a href="/certificados">VER DETALHES <span>›</span></a>
              </article>
            </div>
          </section>

          <section>
            <h2 className="section-title">Continue de onde parou</h2>
            <article className="panel resume-card">
              <Image src={courses[0].cover} width={360} height={270} alt="Anatomia ITC" />
              <div>
                <h2>Anatomia ITC</h2>
                <p>Módulo 2 - Preenchedores faciais</p>
                <div className="resume-progress">
                  <ProgressBar value={35} />
                  <span>35%</span>
                </div>
                <small><Clock size={15} aria-hidden="true" /> 45 min restantes</small>
                <PrimaryButton href="/meus-cursos?curso=Anatomia%20ITC" variant="outline" wide icon>CONTINUAR AULA</PrimaryButton>
              </div>
            </article>
          </section>

          <section>
            <div className="section-row">
              <h2 className="section-title">Seus cursos em andamento</h2>
              <a href="/meus-cursos">VER TODOS <span>›</span></a>
            </div>
            <div className="mini-course-grid">
              {courses.slice(0, 3).map((course) => (
                <article className="panel mini-course" key={course.title}>
                  <Image src={course.cover} width={150} height={110} alt={course.title} />
                  <div>
                    <h3>{course.title}</h3>
                    <p>Progresso</p>
                    <strong>{course.progress}%</strong>
                    <ProgressBar value={course.progress ?? 0} />
                    <PrimaryButton href={`/meus-cursos?curso=${encodeURIComponent(course.title)}`} variant="outline" wide icon>ACESSAR</PrimaryButton>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="dashboard-side">
          <section className="panel profile-box">
            <div className="profile-head">
              <Image src={profileImage} width={88} height={88} alt="Fernanda Silva" />
              <div>
                <h3>Fernanda Silva <Crown size={17} fill="currentColor" aria-hidden="true" /></h3>
                <p>Aluna Premium <Diamond size={13} fill="currentColor" aria-hidden="true" /></p>
              </div>
            </div>
            <hr />
            <p>Plano<br /><strong>Premium Anual</strong></p>
            <p>Membro desde<br /><strong>Março/2024</strong></p>
            <PrimaryButton href="/perfil" wide>VER MEU PERFIL</PrimaryButton>
          </section>

          <section className="panel next-module">
            <h3>Próximo módulo</h3>
            <div>
              <span><BookOpen size={30} aria-hidden="true" /></span>
              <h4>Bioestimuladores<br />de colágeno</h4>
            </div>
            <p>Progresso <strong>10%</strong></p>
            <ProgressBar value={10} />
            <PrimaryButton href="/meus-cursos?curso=Bioestimuladores%20de%20col%C3%A1geno" wide>IR PARA O MÓDULO</PrimaryButton>
          </section>

          <Achievements />
        </aside>
      </div>
    </HubShell>
  );
}
