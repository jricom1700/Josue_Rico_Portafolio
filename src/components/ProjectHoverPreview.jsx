import React, { useState, useEffect } from 'react';
import {
  Lock,
  Activity,
  Map,
  Layers,
  TrendingUp,
  X,
  Minus,
  Maximize2,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';

/**
 * Rich visual thumbnail for the E-Commerce / Mercado Libre style catalog card
 * When closed, shows only the single macOS expand button (with active icon) which opens the floating modal.
 */
export function ProjectCoverIllustration({ project, onOpenModal }) {
  const handleExpandModal = (e) => {
    e.stopPropagation();
    if (onOpenModal) {
      onOpenModal();
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-[#060a14] border-b border-white/10 select-none">
      {/* macOS Top Bar on Closed Catalog Cards: Only the Expand button (opens floating preview window) */}
      <div className="relative z-30 flex items-center justify-between gap-2 px-3.5 py-2 bg-slate-950/90 border-b border-white/10">
        <div className="flex items-center">
          {/* Maximize / Expand (+) - Always visible icon, opens floating preview modal (Bright green) */}
          <button
            type="button"
            onClick={handleExpandModal}
            title="Ampliar proyecto y ver vista previa"
            aria-label="Ampliar proyecto y ver vista previa"
            className="w-4 h-4 rounded-full bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center text-slate-950 transition cursor-pointer shadow-sm shadow-emerald-500/40"
          >
            <Maximize2 className="w-2.5 h-2.5 stroke-[2.8] opacity-100" />
          </button>
        </div>

        {/* Category Badge in Top Bar (Unique color for Finanzas vs NLP) */}
        <div className="flex items-center gap-1.5">
          {project.category === 'NLP' ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-violet-500/20 text-violet-200 border border-violet-400/40 shadow-sm shadow-violet-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              {project.badge}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-sky-500/20 text-sky-200 border border-sky-400/40 shadow-sm shadow-sky-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
              {project.badge}
            </span>
          )}
        </div>
      </div>

      <div className="relative w-full h-44 sm:h-48 overflow-hidden">
          {/* Subtle Date Pill Overlay */}
          <div className="absolute top-2.5 right-2.5 z-20">
            <span className="px-2 py-0.5 rounded-md bg-slate-950/80 border border-white/10 text-[10px] font-mono text-slate-300">
              {project.date}
            </span>
          </div>

          {/* Graphic Content with subtle hover scale */}
          <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
            {project.id === 'credit-risk-engine' && (
              <div className="w-full h-full pt-8 px-4 pb-3.5 flex flex-col justify-between bg-gradient-to-br from-[#060a14] via-[#0b152c] to-[#13284c]">
                <div className="grid grid-cols-12 gap-2.5 items-center my-auto">
                  <div className="col-span-7 bg-slate-950/80 rounded-xl p-2.5 border border-sky-400/20 shadow-inner">
                    <div className="flex justify-between text-[9px] text-slate-300 font-mono mb-1">
                      <span>Curva ROC (AUC) y KS</span>
                      <span className="text-sky-300 font-bold">AUC 0.84</span>
                    </div>
                    <svg viewBox="0 0 160 65" className="w-full h-14 overflow-visible">
                      <line
                        x1="0"
                        y1="60"
                        x2="160"
                        y2="5"
                        stroke="rgba(255,255,255,0.15)"
                        strokeDasharray="3 3"
                        strokeWidth="1"
                      />
                      <path
                        d="M 0 60 Q 25 8, 160 5"
                        fill="none"
                        stroke="#38bdf8"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M 0 60 Q 25 8, 160 5 L 160 60 Z"
                        fill="url(#catalogRocGrad)"
                        opacity="0.30"
                      />
                      <defs>
                        <linearGradient id="catalogRocGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="col-span-5 space-y-1.5">
                    <div className="bg-slate-950/80 rounded-xl p-2 border border-white/10">
                      <div className="text-[9px] text-slate-400 font-mono">SCORECARD</div>
                      <div className="text-[11px] font-mono font-bold text-sky-300 mt-0.5">
                        Gini 0.68
                      </div>
                    </div>
                    <div className="bg-slate-950/80 rounded-xl p-2 border border-white/10">
                      <div className="text-[9px] text-slate-400 font-mono">SIMULADOR</div>
                      <div className="text-[11px] font-mono font-bold text-slate-200 mt-0.5">
                        640 pts
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-sky-300/90 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" /> Credit Scoring CNBV
                  </span>
                  <span className="text-slate-400">FastAPI</span>
                </div>
              </div>
            )}

            {project.id === 'ensafi-salud-financiera' && (
              <div className="w-full h-full pt-8 px-4 pb-3.5 flex flex-col justify-between bg-gradient-to-br from-[#060a14] via-[#0c172e] to-[#152a50]">
                <div className="grid grid-cols-12 gap-2.5 items-center my-auto">
                  <div className="col-span-7 bg-slate-950/80 rounded-xl p-2.5 border border-sky-400/20 space-y-1.5">
                    <div className="text-[9px] font-mono text-sky-200">
                      Estrés Regional ENSAFI
                    </div>
                    {[
                      { region: 'Centro y CDMX', pct: 68 },
                      { region: 'Sur-Sureste', pct: 76 },
                      { region: 'Norte y Bajío', pct: 52 },
                    ].map((r) => (
                      <div key={r.region} className="space-y-0.5">
                        <div className="flex justify-between text-[9px] text-slate-300">
                          <span>{r.region}</span>
                          <span className="font-mono text-sky-300">{r.pct}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400"
                            style={{ width: `${r.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="col-span-5 space-y-1.5">
                    <div className="bg-slate-950/80 rounded-xl p-2 border border-white/10">
                      <div className="text-[9px] text-slate-400 font-mono">COBERTURA</div>
                      <div className="text-[11px] font-mono font-bold text-sky-300 mt-0.5">
                        32 Estados
                      </div>
                    </div>
                    <div className="bg-slate-950/80 rounded-xl p-2 border border-white/10">
                      <div className="text-[9px] text-slate-400 font-mono">FUENTE</div>
                      <div className="text-[11px] font-mono font-bold text-slate-200 mt-0.5">
                        INEGI
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-sky-300/90 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Map className="w-3.5 h-3.5" /> Mapas Interactivos
                  </span>
                  <span className="text-slate-400">Streamlit</span>
                </div>
              </div>
            )}

            {project.id === 'interes-compuesto-ponderado' && (
              <div className="w-full h-full pt-8 px-4 pb-3.5 flex flex-col justify-between bg-gradient-to-br from-[#060a14] via-[#0c1830] to-[#172c54]">
                <div className="grid grid-cols-3 gap-2 my-auto">
                  <div className="bg-slate-950/80 rounded-xl p-2 border border-sky-400/25">
                    <div className="text-[8px] font-mono text-slate-400">PORTAFOLIO</div>
                    <div className="text-[11px] font-mono font-bold text-white mt-0.5">
                      Multi-Cuenta
                    </div>
                    <div className="text-[9px] text-sky-300 mt-0.5">Topes</div>
                  </div>
                  <div className="bg-slate-950/80 rounded-xl p-2 border border-blue-400/25">
                    <div className="text-[8px] font-mono text-slate-400">MODELO</div>
                    <div className="text-[11px] font-mono font-bold text-sky-300 mt-0.5">
                      Ponderado
                    </div>
                    <div className="text-[9px] text-slate-400 mt-0.5">Tasa Real</div>
                  </div>
                  <div className="bg-slate-950/80 rounded-xl p-2 border border-slate-300/20">
                    <div className="text-[8px] font-mono text-slate-400">PLAZOS</div>
                    <div className="text-[11px] font-mono font-bold text-slate-200 mt-0.5">
                      1D a Años
                    </div>
                    <div className="text-[9px] text-slate-400 mt-0.5">Compuesto</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-sky-300/90 pt-1">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" /> Proyección de Rendimientos
                  </span>
                  <span className="text-slate-400">Renta Fija</span>
                </div>
              </div>
            )}

            {project.id === 'podcast-rag-medallion' && (
              <div className="w-full h-full pt-8 px-4 pb-3.5 flex flex-col justify-between bg-gradient-to-br from-[#060a14] via-[#0d162c] to-[#18274b]">
                <div className="grid grid-cols-3 gap-2 my-auto">
                  <div className="bg-slate-950/80 rounded-xl p-2 border border-sky-400/25">
                    <div className="text-[8px] font-mono text-sky-300 font-bold">
                      01. BRONCE
                    </div>
                    <div className="text-[11px] text-white font-semibold mt-0.5">
                      Ingesta Raw
                    </div>
                    <div className="text-[9px] text-slate-400 mt-0.5">Origen</div>
                  </div>
                  <div className="bg-slate-950/80 rounded-xl p-2 border border-blue-400/25">
                    <div className="text-[8px] font-mono text-blue-300 font-bold">
                      02. PLATA
                    </div>
                    <div className="text-[11px] text-white font-semibold mt-0.5">
                      SQL Limpio
                    </div>
                    <div className="text-[9px] text-slate-400 mt-0.5">Léxico</div>
                  </div>
                  <div className="bg-slate-950/80 rounded-xl p-2 border border-slate-300/25">
                    <div className="text-[8px] font-mono text-slate-200 font-bold">
                      03. ORO
                    </div>
                    <div className="text-[11px] text-white font-semibold mt-0.5">
                      RAG NLP
                    </div>
                    <div className="text-[9px] text-slate-400 mt-0.5">Ranking</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-sky-300/90 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" /> Arquitectura Medallón
                  </span>
                  <span className="text-slate-400">NLP • RAG</span>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
  );
}

/**
 * Centered Floating Window (Modal) with Background-Preloaded Interactive Live Preview
 * + Always-Active macOS Traffic Light Icons (No separate "Cerrar" button needed).
 */
export function ProjectFloatingModal({ projects, selectedProjectId, onClose }) {
  const [preloadReady, setPreloadReady] = useState(false);
  const [loadedMap, setLoadedMap] = useState({});

  // Start preloading all project iframes in the background shortly after initial page render
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloadReady(true);
    }, 350);
    return () => clearTimeout(timer);
  }, []);

  // Close on Escape key & lock body scroll while open
  useEffect(() => {
    if (!selectedProjectId) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProjectId, onClose]);

  const activeProject = projects.find((p) => p.id === selectedProjectId) || null;
  const isOpen = Boolean(activeProject);
  const targetUrl = activeProject
    ? activeProject.liveUrl || activeProject.repoUrl
    : null;

  const handleOpenExternal = () => {
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal={isOpen}
      aria-hidden={!isOpen}
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-all duration-250 ${
        isOpen
          ? 'opacity-100 visible pointer-events-auto bg-slate-950/80 backdrop-blur-md'
          : 'opacity-0 invisible pointer-events-none bg-transparent'
      }`}
    >
      {/* Centered Floating Window Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`liquid-modal-surface relative w-full max-w-5xl max-h-[92vh] rounded-3xl overflow-hidden flex flex-col transition-transform duration-250 ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-3'
        }`}
      >
        <div className="liquid-rim" aria-hidden="true" />

        {/* Sticky Window Top Bar: macOS controls on left, "Ver en el sitio original" button on right */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-slate-950/90 border-b border-white/10 shrink-0">
          {/* Functional macOS Window Traffic Lights (Drawings ALWAYS active) */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              title="Cerrar ventana"
              aria-label="Cerrar ventana"
              className="w-4 h-4 rounded-full bg-rose-500 hover:bg-rose-400 flex items-center justify-center text-slate-950 transition cursor-pointer shadow-sm"
            >
              <X className="w-2.5 h-2.5 stroke-[3] opacity-100" />
            </button>
            <button
              type="button"
              onClick={onClose}
              title="Minimizar ventana"
              aria-label="Minimizar ventana"
              className="w-4 h-4 rounded-full bg-amber-400 hover:bg-amber-300 flex items-center justify-center text-slate-950 transition cursor-pointer shadow-sm"
            >
              <Minus className="w-2.5 h-2.5 stroke-[3] opacity-100" />
            </button>
            <button
              type="button"
              onClick={handleOpenExternal}
              title="Abrir en el sitio original"
              aria-label="Abrir en el sitio original"
              className="w-4 h-4 rounded-full bg-emerald-400 hover:bg-emerald-300 flex items-center justify-center text-slate-950 transition cursor-pointer shadow-sm shadow-emerald-500/40"
            >
              <Maximize2 className="w-2.5 h-2.5 stroke-[2.8] opacity-100" />
            </button>
          </div>

          {/* Right: Only the "Ver en el sitio original" Button */}
          {targetUrl && (
            <button
              type="button"
              onClick={handleOpenExternal}
              title="Abrir en el sitio original"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 shadow-md shadow-sky-500/20 hover:brightness-110 transition cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Ver en el sitio original</span>
            </button>
          )}
        </div>

        {/* Scrollable Modal Content: Interactive Preloaded Preview + Full Info */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* 1. Interactive Preloaded Preview Viewport */}
          <div>
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[460px] rounded-2xl overflow-hidden border border-sky-300/30 bg-[#050912] shadow-xl">
              {/* Persistent Preloaded Iframes for instant interactive experience */}
              {preloadReady &&
                projects
                  .filter((p) => Boolean(p.embedUrl))
                  .map((proj) => {
                    const isCurrent = activeProject?.id === proj.id;
                    const isLoaded = Boolean(loadedMap[proj.id]);
                    return (
                      <div
                        key={proj.id}
                        className={`absolute inset-0 transition-opacity duration-200 ${
                          isCurrent
                            ? 'opacity-100 z-20 pointer-events-auto'
                            : 'opacity-0 -z-10 pointer-events-none'
                        }`}
                      >
                        {!isLoaded && isCurrent && (
                          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#060a14] text-slate-300 text-xs font-mono gap-2">
                            <div className="w-6 h-6 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
                            <span>Cargando vista interactiva...</span>
                          </div>
                        )}
                        <iframe
                          src={proj.embedUrl}
                          title={`Vista previa interactiva de ${proj.title}`}
                          onLoad={() =>
                            setLoadedMap((prev) => ({ ...prev, [proj.id]: true }))
                          }
                          className="w-full h-full border-0 bg-[#050912]"
                        />
                      </div>
                    );
                  })}

              {/* Interactive Architecture View for Projects without a Live Web URL (Medallion + RAG) */}
              {activeProject && !activeProject.embedUrl && (
                <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#060a14] via-[#0c1528] to-[#162749] overflow-y-auto">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-sky-300 flex items-center gap-2">
                        <Layers className="w-4 h-4" /> Arquitectura Medallón y Pipeline NLP RAG
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                        Flujo de Ingesta, Normalización SQL y Ranking Ponderado para LLMs
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-violet-500/20 border border-violet-400/40 text-xs font-mono text-violet-200 shadow-sm shadow-violet-500/20">
                      Bronce → Plata → Oro
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 my-auto py-4">
                    <div className="bg-slate-950/85 rounded-2xl p-4 border border-sky-400/30 space-y-2">
                      <div className="text-xs font-mono text-sky-300 font-bold">
                        01. CAPA BRONCE
                      </div>
                      <div className="text-sm text-white font-semibold">
                        Ingesta y Trazabilidad Raw
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Extracción estructurada de fuentes textuales preservando metadatos, marcas de tiempo y auditoría de origen.
                      </p>
                    </div>

                    <div className="bg-slate-950/85 rounded-2xl p-4 border border-blue-400/30 space-y-2">
                      <div className="text-xs font-mono text-blue-300 font-bold">
                        02. CAPA PLATA
                      </div>
                      <div className="text-sm text-white font-semibold">
                        Limpieza, Deduplicación y SQL
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Normalización léxica, filtrado de ruido, segmentación semántica y almacenamiento relacional consistente.
                      </p>
                    </div>

                    <div className="bg-slate-950/85 rounded-2xl p-4 border border-indigo-400/30 space-y-2">
                      <div className="text-xs font-mono text-indigo-200 font-bold">
                        03. CAPA ORO (RAG)
                      </div>
                      <div className="text-sm text-white font-semibold">
                        Ranking Ponderado Multi-Criterio
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Evaluación combinada de similitud semántica, frescura temporal y densidad informativa para generación de guiones.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-xs font-mono text-slate-300">
                    <span>Repositorio de código y arquitectura disponible en GitHub</span>
                    <span className="text-sky-300">Python • SQL • NLP • RAG</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 2. Complete Project Details Section Below Preview */}
          {activeProject && (
            <div className="space-y-6 pt-2 border-t border-white/10">
              {/* Badge, Date, Title & Subtitle */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  {activeProject.category === 'NLP' ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/20 text-violet-200 border border-violet-400/40 shadow-sm shadow-violet-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      {activeProject.badge}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-200 border border-sky-400/40 shadow-sm shadow-sky-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                      {activeProject.badge}
                    </span>
                  )}
                  <span className="text-xs font-mono text-slate-400">
                    {activeProject.date}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {activeProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-sky-300">
                  {activeProject.categoryLabel}
                </p>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed pt-1">
                  {activeProject.summary}
                </p>
              </div>

              {/* Key Metrics Mini-Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeProject.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="liquid-pill rounded-2xl p-3.5 flex flex-col justify-center"
                  >
                    <div className="text-[11px] uppercase tracking-wider text-slate-400">
                      {m.label}
                    </div>
                    <div className="text-sm font-mono font-bold text-sky-200 mt-1">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Conclusions and Achievements */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-300 font-semibold">
                  Conclusiones y Aportaciones Técnicas
                </h4>
                <ul className="space-y-2.5">
                  {activeProject.highlights.map((bullet, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-start gap-3 text-sm sm:text-base text-slate-200 leading-relaxed"
                    >
                      <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies and Bottom Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 shadow-md shadow-sky-500/25 hover:brightness-110 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Ver en el sitio original</span>
                    </a>
                  )}
                  {activeProject.repoUrl && (
                    <a
                      href={activeProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liquid-pill inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition"
                    >
                      <GithubIcon className="w-4 h-4 text-sky-300" />
                      <span>Código en GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
