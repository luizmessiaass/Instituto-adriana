"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState, type FormEvent } from "react";

const fieldMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
} as const;

const ambientLines = [
  { top: "64%", left: "-8%", width: "74%", rotate: "-8deg", delay: 0 },
  { top: "72%", left: "12%", width: "68%", rotate: "-10deg", delay: 0.65 },
  { top: "82%", left: "-2%", width: "88%", rotate: "-7deg", delay: 1.2 }
];

export default function LoginExperience() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: typeof errors = {};
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      nextErrors.email = "Informe um e-mail válido.";
    }
    if (password.length < 6) {
      nextErrors.password = "A senha precisa ter pelo menos 6 caracteres.";
    }

    setErrors(nextErrors);
    if (nextErrors.email) {
      emailRef.current?.focus();
      return;
    }
    if (nextErrors.password) {
      passwordRef.current?.focus();
      return;
    }

    setSubmitting(true);
    window.setTimeout(() => router.push("/dashboard"), 350);
  }

  return (
    <main className="login-page">
      <section className="login-visual" aria-label="Instituto Adriana Vinhal">
        <motion.div
          className="login-visual-brand"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src="/assets/logos/logo-symbol-transparent.png" alt="" />
          <span>INSTITUTO</span>
          <strong>ADRIANA VINHAL</strong>
        </motion.div>

        <div className="login-ambient" aria-hidden="true">
          {ambientLines.map((line) => (
            <motion.span
              key={`${line.top}-${line.left}`}
              style={{
                top: line.top,
                left: line.left,
                width: line.width,
                transform: `rotate(${line.rotate})`
              }}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: [0.1, 0.28, 0.1], x: [-8, 16, -8] }}
              transition={{
                duration: 5.8,
                repeat: Infinity,
                delay: line.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </section>

      <motion.div
        className="login-mobile-brand"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src="/assets/logos/logo-adriana-branca-original.png" alt="Instituto Adriana Vinhal" />
      </motion.div>

      <motion.section
        className="login-panel"
        initial={{ opacity: 0, x: 44 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.form
          className="student-login"
          onSubmit={handleSubmit}
          noValidate
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.08, delayChildren: 0.18 }}
        >
          <motion.div
            className="login-card-brand"
            aria-label="Instituto Adriana Vinhal"
            variants={fieldMotion}
          >
            <img src="/assets/logos/logo-symbol-transparent.png" alt="" />
            <span>INSTITUTO</span>
            <strong>ADRIANA VINHAL</strong>
          </motion.div>

          <motion.div className="login-kicker" variants={fieldMotion}>
            <span>&Aacute;rea do Aluno</span>
          </motion.div>

          <motion.div className="login-copy" variants={fieldMotion}>
            <h1>Bem-vinda de volta</h1>
            <p>Acesse sua &aacute;rea do aluno</p>
          </motion.div>

          <motion.div className="login-field" variants={fieldMotion}>
            <label className="sr-only" htmlFor="email">E-mail</label>
            <div className="login-input">
              <Mail size={13} strokeWidth={1.5} aria-hidden="true" />
              <input
                id="email"
                ref={emailRef}
                placeholder="E-mail"
                type="email"
                value={email}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (errors.email) setErrors((current) => ({ ...current, email: undefined }));
                }}
              />
            </div>
            {errors.email ? <p className="field-error" id="email-error">{errors.email}</p> : null}
          </motion.div>

          <motion.div className="login-field" variants={fieldMotion}>
            <label className="sr-only" htmlFor="password">Senha</label>
            <div className="login-input">
              <Lock size={13} strokeWidth={1.5} aria-hidden="true" />
              <input
                id="password"
                ref={passwordRef}
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                value={password}
                autoComplete="current-password"
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? "password-error" : undefined}
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (errors.password) setErrors((current) => ({ ...current, password: undefined }));
                }}
              />
              <button
                className="password-toggle"
                type="button"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? (
                  <EyeOff size={13} strokeWidth={1.5} aria-hidden="true" />
                ) : (
                  <Eye size={13} strokeWidth={1.5} aria-hidden="true" />
                )}
              </button>
            </div>
            {errors.password ? <p className="field-error" id="password-error">{errors.password}</p> : null}
          </motion.div>

          <motion.div variants={fieldMotion}>
            <button className="login-submit" type="submit" disabled={submitting}>
              {submitting ? "Entrando..." : "Entrar"}
            </button>
          </motion.div>

          <motion.div className="login-links" variants={fieldMotion}>
            <a href="mailto:suporte@institutoadrianavinhal.com.br?subject=Recuperar%20senha">Esqueci minha senha</a>
            <a href="mailto:suporte@institutoadrianavinhal.com.br?subject=Criar%20conta">Criar conta</a>
          </motion.div>
        </motion.form>
      </motion.section>
    </main>
  );
}
