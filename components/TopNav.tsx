import Image from "next/image";
import Link from "next/link";

export function TopNav() {
  return (
    <header className="public-nav">
      <Link href="/dashboard" className="public-brand">
        <Image src="/assets/logos/logo-symbol-transparent.png" width={78} height={86} alt="" />
        <span>INSTITUTO<br />ADRIANA VINHAL</span>
      </Link>
      <nav>
        <Link href="/dashboard">Início</Link>
        <Link href="/meus-cursos">Meus Cursos</Link>
        <Link href="/todos-os-cursos">Todos os Cursos</Link>
        <Link href="/perfil">Sobre</Link>
        <Link href="/mensagens">Contato</Link>
      </nav>
      <Link className="nav-login" href="/">ENTRAR</Link>
    </header>
  );
}
