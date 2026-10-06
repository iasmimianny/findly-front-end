"use client";

import Image from "next/image";
import { useState } from "react";

export default function CadastroUsuario() {
  const [perfil, setPerfil] = useState("aluno");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  const [curso, setCurso] = useState("");
  const [setor, setSetor] = useState("");
  const [bloco, setBloco] = useState("");
  const [pontoColeta, setPontoColeta] = useState("");
  const [pontoReferencia, setPontoReferencia] = useState("");
  const [cadastrado, setCadastrado] = useState(false);

  const cursosUNIFIP = [
    "Análise e Desenvolvimento de Sistemas",
    "Arquitetura e Urbanismo",
    "Biomedicina",
    "Direito",
    "Educação Física (Bacharelado/Licenciatura)",
    "Enfermagem",
    "Engenharia Civil",
    "Farmácia",
    "Fisioterapia",
    "Gestão Hospitalar",
    "Marketing",
    "Medicina",
    "Medicina Veterinária",
    "Nutrição",
    "Odontologia",
    "Pedagogia",
    "Psicologia",
    "Radiologia",
    "Serviço Social",
    "Sistemas de Informação",
  ];

  const blocosUNIFIP = [
    { id: "bloco-a", nome: "Bloco A", descricao: "Medicina, Psicologia e Nutrição" },
    { id: "bloco-b", nome: "Bloco B", descricao: "Direito" },
    { id: "bloco-c", nome: "Bloco C", descricao: "Odontologia" },
    { id: "bloco-d", nome: "Bloco D", descricao: "Educação Física, Fisioterapia, Farmácia e Gestão Hospitalar" },
    { id: "bloco-e", nome: "Bloco E", descricao: "Biomedicina" },
    { id: "bloco-f", nome: "Bloco F", descricao: "Medicina" },
    { id: "bloco-g", nome: "Bloco G", descricao: "Arquitetura e Urbanismo e Enfermagem" },
    { id: "bloco-h", nome: "Bloco H", descricao: "ADS, Radiologia, Marketing e Serviço Social" },
    { id: "bloco-i", nome: "Bloco I", descricao: "Policlínica" },
    { id: "unidade-2", nome: "UNIFIP - Unidade II (Centro)", descricao: "Pedagogia e Sistemas de Informação" },
  ];

  const pontosDeColeta = [
    "Secretaria do Bloco H (ADS)",
    "Biblioteca Central (Campus I)",
    "Biblioteca Setorial (Campus II - Centro)",
    "Secretaria do Bloco A",
    "Secretaria do Bloco B (Direito)",
    "Coordenação de Educação Física / Fisioterapia (Bloco D)",
    "Recepção da Policlínica (Bloco I)",
    "Portaria Principal",
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setCadastrado(true);
  }

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <header className="flex h-[74px] items-center justify-between bg-black px-8 text-white">
        <div className="flex items-center gap-4">
          <Image
            src="/logo-findly.jpg"
            alt="Findly"
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
          <span className="text-lg font-medium tracking-wide">FINDLY</span>
        </div>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="flex items-center gap-2 font-bold italic hover:opacity-70 transition"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Voltar
          </button>

          <button
            type="button"
            className="flex items-center justify-center hover:opacity-70 transition"
            aria-label="Configurações"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2.5a2 2 0 0 1 2 2v.2a7.5 7.5 0 0 1 1.7.7l.15-.15a2 2 0 1 1 2.83 2.83l-.15.15a7.5 7.5 0 0 1 .7 1.7h.2a2 2 0 1 1 0 4h-.2a7.5 7.5 0 0 1-.7 1.7l.15.15a2 2 0 1 1-2.83 2.83l-.15-.15a7.5 7.5 0 0 1-1.7.7v.2a2 2 0 1 1-4 0v-.2a7.5 7.5 0 0 1-1.7-.7l-.15.15a2 2 0 1 1-2.83-2.83l.15-.15a7.5 7.5 0 0 1-.7-1.7h-.2a2 2 0 1 1 0-4h.2a7.5 7.5 0 0 1 .7-1.7l-.15-.15a2 2 0 1 1 2.83-2.83l.15.15a7.5 7.5 0 0 1 1.7-.7v-.2a2 2 0 0 1 2-2Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-9">
          <h1 className="text-5xl font-black italic leading-tight">
            Cadastre seu perfil e<br />
            localização na UNIFIP:
          </h1>

          <div className="mt-3 h-1 w-40 bg-[#42a5df]" />

          <p className="mt-5 max-w-xl text-base text-gray-500">
            Preencha as informações abaixo para criar seu cadastro de usuário e vincular seus pontos de convivência e coleta na UNIFIP.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-[#f8f8f8] p-6 shadow-sm md:p-8">
          <div className="mb-8">
            <label className="mb-3 block text-lg font-bold italic">
              Vínculo institucional
            </label>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => setPerfil("aluno")}
                className={`rounded-xl border px-5 py-4 text-center font-bold italic transition ${
                  perfil === "aluno"
                    ? "border-black bg-[#d5d5d5] text-black"
                    : "border-gray-200 bg-[#f8f8f8] text-gray-500 hover:bg-gray-100"
                }`}
              >
                Aluno
              </button>

              <button
                type="button"
                onClick={() => setPerfil("professor")}
                className={`rounded-xl border px-5 py-4 text-center font-bold italic transition ${
                  perfil === "professor"
                    ? "border-black bg-[#d5d5d5] text-black"
                    : "border-gray-200 bg-[#f8f8f8] text-gray-500 hover:bg-gray-100"
                }`}
              >
                Professor
              </button>

              <button
                type="button"
                onClick={() => setPerfil("funcionario")}
                className={`rounded-xl border px-5 py-4 text-center font-bold italic transition ${
                  perfil === "funcionario"
                    ? "border-black bg-[#d5d5d5] text-black"
                    : "border-gray-200 bg-[#f8f8f8] text-gray-500 hover:bg-gray-100"
                }`}
              >
                Funcionário
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-[#d5d5d5] p-5">
              <label className="mb-3 flex items-center gap-3 text-lg font-bold italic">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Nome Completo:
              </label>

              <input
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                className="w-full rounded-xl bg-white px-4 py-3 outline-none"
              />
            </div>

            <div className="rounded-2xl bg-[#d5d5d5] p-5">
              <label className="mb-3 flex items-center gap-3 text-lg font-bold italic">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                E-mail Institucional:
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemplo@unifip.edu.br"
                className="w-full rounded-xl bg-white px-4 py-3 outline-none"
              />
            </div>

            <div className="rounded-2xl bg-[#d5d5d5] p-5">
              <label className="mb-3 flex items-center gap-3 text-lg font-bold italic">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Telefone / WhatsApp:
              </label>

              <input
                type="tel"
                required
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="(83) 99999-9999"
                className="w-full rounded-xl bg-white px-4 py-3 outline-none"
              />
            </div>

            <div className="rounded-2xl bg-[#d5d5d5] p-5">
              <label className="mb-3 flex items-center gap-3 text-lg font-bold italic">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Senha:
              </label>

              <input
                type="password"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl bg-white px-4 py-3 outline-none"
              />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {(perfil === "aluno" || perfil === "professor") && (
              <div className="rounded-2xl bg-[#d5d5d5] p-5">
                <label className="mb-3 flex items-center gap-3 text-lg font-bold italic">
                  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                  {perfil === "aluno" ? "Seu Curso:" : "Curso em que leciona:"}
                </label>

                <select
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                  className="w-full rounded-xl bg-white px-4 py-4 outline-none"
                >
                  <option value="">Selecione o curso</option>
                  {cursosUNIFIP.map((c, index) => (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {perfil === "funcionario" && (
              <div className="rounded-2xl bg-[#d5d5d5] p-5">
                <label className="mb-3 flex items-center gap-3 text-lg font-bold italic">
                  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  Setor / Departamento de Trabalho:
                </label>

                <input
                  type="text"
                  value={setor}
                  onChange={(e) => setSetor(e.target.value)}
                  placeholder="Ex: Secretaria Geral, Biblioteca Central, Portaria"
                  className="w-full rounded-xl bg-white px-4 py-3 outline-none"
                />
              </div>
            )}

            <div className="rounded-2xl bg-[#d5d5d5] p-5">
              <label className="mb-3 flex items-center gap-3 text-lg font-bold italic">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Bloco Frequente no Campus:
              </label>

              <select
                value={bloco}
                onChange={(e) => setBloco(e.target.value)}
                className="w-full rounded-xl bg-white px-4 py-4 outline-none"
              >
                <option value="">Selecione o bloco principal</option>
                {blocosUNIFIP.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nome} - ({item.descricao})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-[#d5d5d5] p-5">
              <label className="mb-3 flex items-center gap-3 text-lg font-bold italic">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Ponto de Coleta preferencial:
              </label>

              <select
                value={pontoColeta}
                onChange={(e) => setPontoColeta(e.target.value)}
                className="w-full rounded-xl bg-white px-4 py-4 outline-none"
              >
                <option value="">Selecione o ponto de entrega/retirada</option>
                {pontosDeColeta.map((ponto, index) => (
                  <option key={index} value={ponto}>
                    {ponto}
                  </option>
                ))}
              </select>
            </div>

            <div className="rounded-2xl bg-[#d5d5d5] p-5">
              <label className="mb-3 flex items-center gap-3 text-lg font-bold italic">
                <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {perfil === "funcionario" ? "Sala ou Posto Fixo:" : "Sala de aula / Ponto de rotina:"}
              </label>

              <input
                type="text"
                value={pontoReferencia}
                onChange={(e) => setPontoReferencia(e.target.value)}
                placeholder={
                  perfil === "funcionario"
                    ? "Ex: Guichê 2, Balcão de atendimento"
                    : "Ex: Sala 102 - 1º Andar, Lab TI 2"
                }
                className="w-full rounded-xl bg-white px-4 py-3 outline-none"
              />
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-[#59558a]/20 bg-[#59558a]/10 p-5">
            <p className="font-bold text-[#59558a]">
              Privacidade garantida
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Seus dados serão utilizados apenas para a autenticação e identificação de ocorrências no campus da UNIFIP.
            </p>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-2xl bg-black px-6 py-4 text-lg font-bold italic text-white transition hover:bg-gray-800"
          >
            Cadastrar usuário ({perfil})
          </button>

          {cadastrado && (
            <div className="mt-4 rounded-2xl border border-green-300 bg-green-50 p-4 text-center font-semibold text-green-700">
              Usuário e ponto de coleta vinculados com sucesso!
            </div>
          )}
        </form>
      </div>
    </main>
  );
}