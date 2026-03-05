import { useState } from "react";
import logo from "../assets/images/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "INÍCIO", href: "#inicio" },
    { label: "SOBRE MIM", href: "#sobre" },
    { label: "SERVIÇOS", href: "#servicos" },
    { label: "CONTATO", href: "#contato" },
  ];

  function handleLinkClick() {
    setOpen(false); // fecha o menu ao clicar (mobile)
  }

  return (
    <header className="sticky top-0 z-50 bg-white bg-white z-50 w-full bg[#50d71e]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#inicio" className="text-lg font-bold">
          <img src={logo} className="max-w-18" />
        </a>

        {/* Links Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Falar comigo
          </a>
        </div>

        {/*Botão Mobile*/}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/*Ícone (3 riscos / X)*/}
          {open ? (
            <svg
              viewBox="0 0 24 24"
              className="h-12 w-12 z-[60]"
              fill="none"
              stroke="#0A6CF1"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-12 w-12 z-[60]"
              fill="none"
              stroke="#0A6CF1"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menu Mobile (abre/fecha) */}
      {open && (
        <div className="fixed top-0 left-0 right-0 z-50 shadow-md bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={handleLinkClick}
                className="font-jockey rounded-md px-2 py-2 text-2xl font-medium text-[#0A6CF1] hover:bg-gray-100"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
