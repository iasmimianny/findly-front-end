"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  PlusCircle, 
  Search, 
  Star, 
  Package, 
  CheckCircle2, 
  MapPin, 
  Settings, 
  User,
  ArrowRight,
  Navigation,
  Layers
} from "lucide-react";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [busca, setBusca] = useState("");

  // Lista de Favoritos para renderizar no Card
  const favoritos = [
    {
      id: 1,
      titulo: "Carteira de Couro",
      categoria: "Acessórios",
      imagem: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      titulo: "Carteira Preta",
      categoria: "Documentos",
      imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      titulo: "Fone Bluetooth",
      categoria: "Eletrônicos",
      imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="flex h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* --- NAVEGAÇÃO LATERAL (SIDEBAR) --- */}
      <aside className="w-64 bg-black p-6 flex flex-col justify-between border-r border-gray-800 shrink-0">
        <div className="space-y-8">
          
          {/* Logo FINDLY */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-findly.jpg"
              alt="Findly"
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
            <span className="text-xl font-black italic tracking-wider">FINDLY</span>
          </div>

          {/* Menus / Links */}
          <nav className="space-y-2">
            <Link
              href="/cadastrar-item"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#1e2022] hover:bg-gray-800 transition text-sm font-bold italic text-white"
            >
              <div className="p-1 rounded-full bg-cyan-500 text-black">
                <PlusCircle size={18} strokeWidth={2.5} />
              </div>
              <span>Cadastrar Itens</span>
            </Link>

            <Link
              href="/itens-perdidos"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#1e2022] hover:bg-gray-800 transition text-sm font-bold italic text-white"
            >
              <div className="p-1 rounded-full bg-red-500/20 text-red-500">
                <Search size={18} strokeWidth={2.5} />
              </div>
              <span>Itens Perdidos</span>
            </Link>

            <Link
              href="/favoritos"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#1e2022] hover:bg-gray-800 transition text-sm font-bold italic text-white"
            >
              <div className="p-1 rounded-full bg-amber-500/20 text-amber-400">
                <Star size={18} strokeWidth={2.5} />
              </div>
              <span>Itens Favoritos</span>
            </Link>

            <Link
              href="/meus-itens"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#1e2022] hover:bg-gray-800 transition text-sm font-bold italic text-white"
            >
              <div className="p-1 rounded-full bg-purple-500/20 text-purple-400">
                <Package size={18} strokeWidth={2.5} />
              </div>
              <span>Meus Itens</span>
            </Link>

            <div className="pt-4 space-y-2">
              <Link
                href="/produtos-entregues"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-900 transition text-sm font-bold italic text-gray-300 hover:text-white"
              >
                <CheckCircle2 size={18} className="text-emerald-500" />
                <span>Produtos Entregues</span>
              </Link>

              <Link
                href="/pontos-de-entrega"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-900 transition text-sm font-bold italic text-gray-300 hover:text-white"
              >
                <MapPin size={18} className="text-blue-500" />
                <span>Pontos de Entrega</span>
              </Link>

              <Link
                href="/configuracao"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-900 transition text-sm font-bold italic text-gray-300 hover:text-white"
              >
                <Settings size={18} className="text-gray-400" />
                <span>Configurações</span>
              </Link>
            </div>
          </nav>
        </div>

        {/* Informação UNIFIP no rodapé do menu */}
        <div className="text-xs text-gray-500 font-medium pt-4 border-t border-gray-900">
          Campus UNIFIP Patos
        </div>
      </aside>

      {/* --- ÁREA DE CONTEÚDO PRINCIPAL --- */}
      <div className="flex-1 flex flex-col bg-white text-black overflow-hidden">
        
        {/* --- HEADER SUPERIOR --- */}
        <header className="h-[74px] bg-black px-8 flex items-center justify-between border-b border-gray-900 text-white shrink-0">
          
          {/* Barra de Pesquisa */}
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Pesquisa..."
              className="w-full bg-[#1e2022] text-white pl-12 pr-4 py-2.5 rounded-full outline-none focus:ring-2 focus:ring-[#42a5df] transition text-sm font-medium"
            />
          </div>

          {/* Perfil do Usuário */}
          <Link 
            href="/perfil"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition shadow-md"
            title="Seu Perfil"
          >
            <User size={22} className="stroke-[2.5]" />
          </Link>
        </header>

        {/* --- DADOS DO PAINEL / CONTEÚDO --- */}
        <main className="flex-1 p-8 overflow-y-auto bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LADO ESQUERDO: Card de Itens Favoritos */}
            <div className="lg:col-span-7 bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-6">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-black italic">Seus Itens Favoritos</h2>
                  <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                </div>
                <p className="text-sm text-gray-500 font-medium mt-1">
                  Aqui estão os itens que você marcou como favoritos para acompanhar de forma rápida.
                </p>
              </div>

              {/* Lista de Cards dos Favoritos */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {favoritos.map((item) => (
                  <div 
                    key={item.id}
                    className="bg-[#f8f8f8] rounded-2xl p-3 border border-gray-100 hover:shadow-md transition group relative"
                  >
                    {/* Imagem do Item */}
                    <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 bg-gray-200">
                      <Image
                        src={item.imagem}
                        alt={item.titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-300"
                      />
                      <button className="absolute top-2 right-2 p-1 bg-white/80 backdrop-blur-sm rounded-full text-amber-500">
                        <Star size={14} className="fill-amber-400" />
                      </button>
                    </div>

                    {/* Detalhes */}
                    <h3 className="font-bold italic text-sm text-black truncate">
                      {item.titulo}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">
                      {item.categoria}
                    </p>
                  </div>
                ))}
              </div>

              {/* Botão Ver Todos */}
              <div className="flex justify-end pt-2">
                <Link 
                  href="/favoritos"
                  className="inline-flex items-center gap-1.5 text-xs font-black italic text-black hover:underline"
                >
                  <span>Ver todos os favoritos</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* LADO DIREITO: Mapa do Campus / Pontos de Entrega */}
            <div className="lg:col-span-5 bg-white p-4 rounded-3xl shadow-sm border border-gray-100 space-y-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <h3 className="font-bold italic text-lg">Pontos no Campus</h3>
                </div>
                <span className="text-xs bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-bold">
                  UNIFIP
                </span>
              </div>

              {/* Container de Simulação do Mapa */}
              <div className="relative h-[340px] rounded-2xl overflow-hidden border border-gray-200 bg-emerald-50">
                {/* Imagem de Fundo de Mapa do Campus */}
                <Image
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&auto=format&fit=crop&q=80"
                  alt="Mapa do Campus UNIFIP"
                  fill
                  className="object-cover opacity-80"
                />

                {/* Overlays e Controles do Mapa */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md rounded-xl p-1.5 shadow-md flex flex-col gap-2">
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg text-black">
                    <Navigation size={18} />
                  </button>
                  <button className="p-1.5 hover:bg-gray-100 rounded-lg text-black">
                    <Layers size={18} />
                  </button>
                </div>

                {/* Marcadores de Itens/Entregas no Mapa */}
                <div className="absolute top-1/4 left-1/3 bg-amber-500 text-black p-2 rounded-2xl shadow-lg flex items-center gap-1 animate-bounce">
                  <Package size={16} />
                  <span className="text-[10px] font-black italic pr-1">Bloco A</span>
                </div>

                <div className="absolute bottom-1/3 right-1/4 bg-blue-600 text-white p-2 rounded-2xl shadow-lg flex items-center gap-1">
                  <MapPin size={16} />
                  <span className="text-[10px] font-black italic pr-1">Recepção</span>
                </div>

                <div className="absolute top-2/3 left-1/4 bg-emerald-600 text-white p-2 rounded-2xl shadow-lg flex items-center gap-1">
                  <CheckCircle2 size={16} />
                  <span className="text-[10px] font-black italic pr-1">Biblioteca</span>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>

    </div>
  );
}