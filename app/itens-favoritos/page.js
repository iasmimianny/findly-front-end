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
  Trash2,
  Filter,
  ArrowLeft,
  ExternalLink,
  Tag
} from "lucide-react";

export default function ItensFavoritosPage() {
  const [busca, setBusca] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");

  // Lista de itens marcados como favoritos
  const [favoritos, setFavoritos] = useState([
    {
      id: 1,
      titulo: "Carteira de Couro Marrom",
      categoria: "Acessórios",
      local: "Bloco A - Próximo à Lanchonete",
      data: "18 Out 2026",
      status: "Perdido",
      imagem: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      titulo: "Carteira Preta de Documentos",
      categoria: "Documentos",
      local: "Biblioteca Central",
      data: "15 Out 2026",
      status: "Encontrado",
      imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      titulo: "Fone Bluetooth JBL Preto",
      categoria: "Eletrônicos",
      local: "Laboratório de Informática 3",
      data: "12 Out 2026",
      status: "Encontrado",
      imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      titulo: "Garrafa Térmica Azul 800ml",
      categoria: "Objetos Pessoais",
      local: "Quadra Poliesportiva",
      data: "10 Out 2026",
      status: "Encontrado",
      imagem: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      titulo: "Casaco de Frio Cinza Moletom",
      categoria: "Vestuário",
      local: "Auditório Principal",
      data: "05 Out 2026",
      status: "Perdido",
      imagem: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=80",
    },
  ]);

  // Função para remover um item dos favoritos
  const removerFavorito = (id) => {
    setFavoritos(favoritos.filter((item) => item.id !== id));
  };

  // Categorias disponíveis para filtro
  const categorias = ["Todas", "Acessórios", "Documentos", "Eletrônicos", "Objetos Pessoais", "Vestuário"];

  // Filtragem dos favoritos por texto e categoria
  const favoritosFiltrados = favoritos.filter((item) => {
    const atendeBusca = item.titulo.toLowerCase().includes(busca.toLowerCase()) ||
                       item.local.toLowerCase().includes(busca.toLowerCase());
    const atendeCategoria = categoriaFiltro === "Todas" || item.categoria === categoriaFiltro;
    return atendeBusca && atendeCategoria;
  });

  return (
    <div className="flex h-screen bg-black text-white font-sans overflow-hidden">
      
      {/* --- NAVEGAÇÃO LATERAL (SIDEBAR) --- */}
      <aside className="w-64 bg-black p-6 flex flex-col justify-between border-r border-gray-800 shrink-0 hidden md:flex">
        <div className="space-y-8">
          
          {/* Logo FINDLY */}
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="flex items-center gap-3">
              <Image
                src="/logo-findly.jpg"
                alt="Findly"
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <span className="text-xl font-black italic tracking-wider">FINDLY</span>
            </Link>
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

            {/* Ativo */}
            <Link
              href="/favoritos"
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#332a15] border border-amber-500/40 text-sm font-bold italic text-white"
            >
              <div className="p-1 rounded-full bg-amber-500 text-black">
                <Star size={18} strokeWidth={2.5} className="fill-black" />
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
                href="/configuracoes"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-900 transition text-sm font-bold italic text-gray-300 hover:text-white"
              >
                <Settings size={18} className="text-gray-400" />
                <span>Configurações</span>
              </Link>
            </div>
          </nav>
        </div>

        <div className="text-xs text-gray-500 font-medium pt-4 border-t border-gray-900">
          Campus UNIFIP Patos
        </div>
      </aside>

      {/* --- ÁREA DE CONTEÚDO PRINCIPAL --- */}
      <div className="flex-1 flex flex-col bg-white text-black overflow-hidden">
        
        {/* --- HEADER SUPERIOR --- */}
        <header className="h-[74px] bg-black px-6 md:px-8 flex items-center justify-between border-b border-gray-900 text-white shrink-0">
          
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="flex md:hidden items-center gap-1 font-bold italic text-sm hover:opacity-70"
            >
              <ArrowLeft size={18} />
              Voltar
            </button>

            {/* Barra de Pesquisa */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar nos seus favoritos..."
                className="w-full bg-[#1e2022] text-white pl-10 pr-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-[#42a5df] transition text-sm font-medium"
              />
            </div>
          </div>

          {/* Perfil do Usuário */}
          <Link 
            href="/perfil"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition shadow-md shrink-0"
            title="Seu Perfil"
          >
            <User size={22} className="stroke-[2.5]" />
          </Link>
        </header>

        {/* --- CONTEÚDO --- */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto bg-gray-50">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Cabeçalho da Página */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-4xl md:text-5xl font-black italic tracking-tight">
                    Itens Favoritos
                  </h1>
                  <Star className="w-8 h-8 text-amber-400 fill-amber-400 shrink-0" />
                </div>
                <div className="mt-2 h-1 w-32 bg-[#42a5df]" />
                <p className="text-sm text-gray-500 font-medium mt-3">
                  Acompanhe os objetos salvos e receba atualizações sobre a localização no campus da UNIFIP.
                </p>
              </div>

              <div className="text-sm font-bold italic bg-amber-100 text-amber-800 px-4 py-2 rounded-2xl border border-amber-200 self-start md:self-auto">
                {favoritos.length} {favoritos.length === 1 ? "item salvo" : "itens salvos"}
              </div>
            </div>

            {/* Filtro de Categorias em Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <Filter className="w-4 h-4 text-gray-400 shrink-0 mr-1" />
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoriaFiltro(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold italic whitespace-nowrap transition ${
                    categoriaFiltro === cat
                      ? "bg-black text-white shadow-sm"
                      : "bg-white text-gray-700 hover:bg-gray-200 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid dos Cards de Favoritos */}
            {favoritosFiltrados.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoritosFiltrados.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between group"
                  >
                    <div>
                      {/* Imagem do Item */}
                      <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4 bg-gray-100">
                        <img
                          src={item.imagem}
                          alt={item.titulo}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                        
                        {/* Badge de Status */}
                        <span
                          className={`absolute top-3 left-3 text-[11px] font-black italic px-3 py-1 rounded-full shadow-sm ${
                            item.status === "Encontrado"
                              ? "bg-emerald-500 text-white"
                              : "bg-red-500 text-white"
                          }`}
                        >
                          {item.status}
                        </span>

                        {/* Botão Desfavoritar */}
                        <button
                          onClick={() => removerFavorito(item.id)}
                          title="Remover dos Favoritos"
                          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-amber-500 hover:bg-red-50 hover:text-red-500 transition shadow-sm"
                        >
                          <Star size={16} className="fill-amber-400 hover:fill-none" />
                        </button>
                      </div>

                      {/* Título e Categoria */}
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-1">
                        <Tag size={12} />
                        <span>{item.categoria}</span>
                      </div>

                      <h3 className="text-xl font-black italic text-black leading-tight mb-2">
                        {item.titulo}
                      </h3>

                      {/* Localização e Data */}
                      <div className="space-y-1 text-xs text-gray-600 font-medium mb-4">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-blue-500 shrink-0" />
                          <span className="truncate">{item.local}</span>
                        </div>
                        <div className="text-gray-400 pl-5">Registrado em {item.data}</div>
                      </div>
                    </div>

                    {/* Rodapé do Card */}
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => removerFavorito(item.id)}
                        className="flex items-center gap-1 text-xs font-bold italic text-gray-400 hover:text-red-600 transition"
                      >
                        <Trash2 size={14} />
                        <span>Remover</span>
                      </button>

                      <Link
                        href={`/itens/${item.id}`}
                        className="flex items-center gap-1 text-xs font-black italic text-black hover:underline"
                      >
                        <span>Ver Detalhes</span>
                        <ExternalLink size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Estado Vazio */
              <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8 space-y-4">
                <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto">
                  <Star size={32} />
                </div>
                <h3 className="text-2xl font-black italic">Nenhum item favorito encontrado</h3>
                <p className="text-gray-500 max-w-md mx-auto text-sm">
                  Você ainda não salvou itens com esses filtros. Navegue pelos itens perdidos e clique na estrela para acompanhar seus pertences.
                </p>
                <Link
                  href="/itens-perdidos"
                  className="inline-block mt-2 px-6 py-3 rounded-2xl bg-black text-white font-bold italic text-sm hover:bg-gray-800 transition"
                >
                  Explorar Itens
                </Link>
              </div>
            )}

          </div>
        </main>
      </div>

    </div>
  );
}