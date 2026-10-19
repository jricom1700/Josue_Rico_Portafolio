import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  Code2,
  Database,
  BrainCircuit,
  BarChart3,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
  ShieldCheck,
  Home,
  Menu,
  X,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/BrandIcons';
import { portfolioData } from './data/portfolioData';
import { LiquidCard } from './components/LiquidCard';
import {
  ProjectCoverIllustration,
  ProjectFloatingModal,
} from './components/ProjectHoverPreview';

export default function App() {
  const [projectFilter, setProjectFilter] = useState('Todos');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [copiedField, setCopiedField] = useState(null);
  const [activeSection, setActiveSection] = useState('inicio');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const {
    contact,
    metrics,
    experience,
    projects,
    education,
    skills,
    certifications,
  } = portfolioData;

  const copyToClipboard = (text, field) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const filteredProjects =
    projectFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.category === projectFilter);

  // Active section observer on scroll to outline the current nav item in the header
  useEffect(() => {
    const sectionIds = ['inicio', 'proyectos', 'experiencia', 'habilidades', 'certificaciones', 'contacto'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'proyectos', href: '#proyectos', label: 'Proyectos' },
    { id: 'experiencia', href: '#experiencia', label: 'Experiencia' },
    { id: 'habilidades', href: '#habilidades', label: 'Habilidades' },
    { id: 'certificaciones', href: '#certificaciones', label: 'Educación' },
  ];

  return (
    <div className="min-h-screen relative selection:bg-sky-500/30 selection:text-sky-100">
      {/* GPU-Composited Ambient Background */}
      <div
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 12% 10%, rgba(37, 99, 235, 0.16) 0%, transparent 42%), radial-gradient(circle at 88% 38%, rgba(56, 189, 248, 0.12) 0%, transparent 45%), radial-gradient(circle at 30% 90%, rgba(148, 163, 184, 0.09) 0%, transparent 40%), #050811',
        }}
      >
        <div className="absolute inset-0 bg-liquid-grid opacity-70" />
      </div>

      {/* Classic Dark Translucent Header: Responsive with Mobile Hamburger */}
      <header className="sticky top-0 z-40 w-full">
        <nav className="liquid-header-classic w-full px-4 sm:px-8 lg:px-12 py-2.5 flex items-center justify-between gap-4">
          {/* Left: JOSUE / RICO Brand Mark where the O in JOSUE is a Home icon */}
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            title="Inicio — Josué Rico"
            aria-label="Inicio — Josué Rico"
            className={`relative z-10 inline-flex flex-col items-start justify-center px-2.5 py-1 rounded-xl transition select-none group border ${
              activeSection === 'inicio'
                ? 'border-sky-400/80 bg-sky-500/15 shadow-[0_0_12px_rgba(56,189,248,0.35)]'
                : 'border-transparent hover:bg-white/10'
            }`}
          >
            <span className="inline-flex items-center text-xs sm:text-[13px] font-extrabold tracking-[0.14em] text-white leading-none font-display">
              <span>J</span>
              <Home className="w-3.5 h-3.5 text-sky-400 stroke-[2.6] mx-[1px] -translate-y-[0.5px] group-hover:scale-110 transition-transform" />
              <span>SUE</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.28em] text-sky-300 leading-none mt-1 font-display">
              RICO
            </span>
          </a>

          {/* Desktop Navigation Links (Centered, hidden on mobile) */}
          <div className="hidden md:flex relative z-10 items-center justify-center gap-1 sm:gap-3 text-xs sm:text-sm font-medium text-slate-100">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full transition whitespace-nowrap border ${
                    isActive
                      ? 'border-sky-400 text-white bg-sky-500/20 shadow-[0_0_14px_rgba(56,189,248,0.35)] font-semibold'
                      : 'border-transparent text-slate-200 hover:border-white/20 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right: Contact Mail Button + Mobile Hamburger Button */}
          <div className="flex items-center gap-2">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              title="Contactar"
              aria-label="Contactar"
              className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center transition border ${
                activeSection === 'contacto'
                  ? 'bg-gradient-to-br from-sky-300 to-blue-500 text-slate-950 border-white shadow-[0_0_16px_rgba(56,189,248,0.5)]'
                  : 'bg-gradient-to-br from-sky-400 to-blue-600 text-slate-950 border-transparent shadow-lg shadow-sky-500/30 hover:brightness-110'
              }`}
            >
              <Mail className="w-4 h-4 stroke-[2.2]" />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="md:hidden relative z-10 w-9 h-9 rounded-full flex items-center justify-center text-slate-200 hover:text-white bg-white/5 border border-white/10 transition cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden liquid-glass border-t border-white/10 px-4 py-3 space-y-1">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition border ${
                    isActive
                      ? 'border-sky-400 text-white bg-sky-500/20 shadow-[0_0_12px_rgba(56,189,248,0.35)]'
                      : 'border-transparent text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 space-y-24">
        {/* HERO SECTION */}
        <section id="inicio" className="pt-4 sm:pt-8 scroll-mt-24">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Main Profile Liquid Card with Background Portrait */}
            <LiquidCard className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              {/* Profile Photo Raised & Positioned in Background (z-0) with Soft Gradient Fade */}
              <div
                className="pointer-events-none select-none relative sm:absolute sm:-top-6 sm:right-2 sm:w-[19rem] sm:h-[21rem] w-48 h-48 mx-auto sm:mx-0 mb-4 sm:mb-0 z-0 opacity-90"
                aria-hidden="true"
              >
                {/* Ambient Glow Behind Portrait */}
                <div className="absolute inset-4 rounded-full bg-sky-500/18 blur-2xl -z-20" />

                {/* Background PNG Icons Behind Portrait (Python, Code, Statistics) */}
                <img
                  src="/icon-python.png"
                  alt=""
                  className="absolute top-2 left-2 w-12 h-12 sm:w-14 sm:h-14 object-contain opacity-45 -rotate-12 drop-shadow-[0_4px_12px_rgba(56,189,248,0.35)] -z-10"
                />
                <img
                  src="/icon-code.png"
                  alt=""
                  className="absolute top-1 right-2 w-11 h-11 sm:w-13 sm:h-13 object-contain opacity-40 rotate-12 drop-shadow-[0_4px_12px_rgba(56,189,248,0.35)] -z-10"
                />
                <img
                  src="/icon-stats.png"
                  alt=""
                  className="absolute bottom-16 left-0 w-11 h-11 sm:w-13 sm:h-13 object-contain opacity-45 -rotate-6 drop-shadow-[0_4px_12px_rgba(56,189,248,0.35)] -z-10"
                />

                {/* Foreground Cutout Portrait PNG (Fades naturally behind text) */}
                <img
                  src={contact.avatarUrl}
                  alt={contact.name}
                  className="w-full h-full object-contain object-bottom portrait-blend-mask"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="relative z-10 space-y-6">
                {/* Status Pill (No blinking dot) */}
                <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-sky-500/12 text-sky-200 border border-sky-300/25">
                  <span>Licenciatura en Ciencia de Datos • ESCOM IPN</span>
                </div>

                {/* Identity Header */}
                <div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                    {contact.name}
                  </h1>
                  <p className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-blue-300 to-slate-200 mt-1.5">
                    {contact.role}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300/90 font-mono mt-1.5 text-left sm:max-w-[58%]">
                    {contact.subtitle}
                  </p>
                </div>

                {/* CV Profile Statement with Code-Style Keywords */}
                <p className="text-slate-200/95 text-sm sm:text-base leading-relaxed pt-1">
                  Científico de Datos enfocado en{' '}
                  <code className="px-1.5 py-0.5 rounded-md bg-sky-500/15 text-sky-200 font-mono text-[13px] border border-sky-400/30">
                    análisis cuantitativo
                  </code>
                  ,{' '}
                  <code className="px-1.5 py-0.5 rounded-md bg-blue-500/15 text-blue-200 font-mono text-[13px] border border-blue-400/30">
                    modelado estadístico
                  </code>{' '}
                  y automatización de flujos con{' '}
                  <code className="px-1.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-200 font-mono text-[13px] border border-emerald-400/30">
                    Python
                  </code>
                  ,{' '}
                  <code className="px-1.5 py-0.5 rounded-md bg-cyan-500/15 text-cyan-200 font-mono text-[13px] border border-cyan-400/30">
                    SQL
                  </code>{' '}
                  y{' '}
                  <code className="px-1.5 py-0.5 rounded-md bg-teal-500/15 text-teal-200 font-mono text-[13px] border border-teal-400/30">
                    Excel
                  </code>
                  . Experiencia estructurando datos operativos, diseñando modelos analíticos y construyendo{' '}
                  <code className="px-1.5 py-0.5 rounded-md bg-indigo-500/15 text-indigo-200 font-mono text-[13px] border border-indigo-400/30">
                    tableros interactivos
                  </code>{' '}
                  para la visualización de métricas. Con enfoque en simplificar tareas manuales incorporando herramientas de{' '}
                  <code className="px-1.5 py-0.5 rounded-md bg-violet-500/15 text-violet-200 font-mono text-[13px] border border-violet-400/30">
                    inteligencia artificial
                  </code>{' '}
                  para agilizar el desarrollo y la resolución de problemas.
                </p>
              </div>

              {/* Quick Social and Contact Strip */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center gap-2.5">
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-pill inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 hover:text-white transition"
                >
                  <GithubIcon className="w-4 h-4 text-sky-300" />
                  <span>@{contact.githubHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-pill inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-200 hover:text-white transition"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-300" />
                  <span>{contact.linkedinHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <button
                  onClick={() => copyToClipboard(contact.email, 'hero-email')}
                  className="liquid-pill inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-200 hover:text-white transition cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-sky-300" />
                  <span>{contact.email}</span>
                  {copiedField === 'hero-email' ? (
                    <Check className="w-3.5 h-3.5 text-sky-300" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 opacity-60" />
                  )}
                </button>
              </div>
            </LiquidCard>

            {/* Right Column: Concise Specializations and Impact Metrics */}
            <LiquidCard className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-semibold">
                    Áreas de Especialización
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Python • SQL • IA
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    {
                      title: 'Modelado Estadístico y Scoring',
                      tags: 'ROC-AUC • KS • Gini • Regresión Logística',
                      icon: BarChart3,
                      color: 'text-sky-300',
                    },
                    {
                      title: 'Ingeniería de Datos y NLP',
                      tags: 'SQL Transaccional y Analítico • Medallón • RAG',
                      icon: Database,
                      color: 'text-blue-300',
                    },
                    {
                      title: 'Visualización y Automatización',
                      tags: 'Pandas • Power BI • Streamlit • FastAPI',
                      icon: BrainCircuit,
                      color: 'text-slate-200',
                    },
                  ].map((pillar, idx) => {
                    const IconComp = pillar.icon;
                    return (
                      <div
                        key={idx}
                        className="liquid-pill rounded-2xl px-4 py-3 flex items-center gap-3.5"
                      >
                        <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-400/25 flex items-center justify-center shrink-0">
                          <IconComp className={`w-4 h-4 ${pillar.color}`} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-white truncate">
                            {pillar.title}
                          </div>
                          <div className="text-[11px] font-mono text-slate-300 truncate mt-0.5">
                            {pillar.tags}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 4 Distinct Colored CV Impact KPIs with Clickable Links */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-white/10">
                {/* 1. +80% -> AMBEDI Experiencia (Emerald / Cyan) */}
                <a
                  href="#experiencia"
                  title="Ver experiencia en AMBEDI"
                  className="liquid-pill rounded-2xl p-3.5 group hover:border-emerald-400/50 transition cursor-pointer block"
                >
                  <div className="text-xl sm:text-2xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 group-hover:brightness-125 transition">
                    +80%
                  </div>
                  <div className="text-xs font-medium text-slate-200 mt-1 flex items-center justify-between">
                    <span>Inconsistencias resueltas</span>
                    <ArrowUpRight className="w-3 h-3 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>

                {/* 2. -90% -> AMBEDI Experiencia (Sky / Blue) */}
                <a
                  href="#experiencia"
                  title="Ver experiencia en AMBEDI"
                  className="liquid-pill rounded-2xl p-3.5 group hover:border-sky-400/50 transition cursor-pointer block"
                >
                  <div className="text-xl sm:text-2xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-400 group-hover:brightness-125 transition">
                    -90%
                  </div>
                  <div className="text-xs font-medium text-slate-200 mt-1 flex items-center justify-between">
                    <span>Tiempo de reportería</span>
                    <ArrowUpRight className="w-3 h-3 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>

                {/* 3. 3+ Años -> Habilidades (Amber / Orange) */}
                <a
                  href="#habilidades"
                  title="Ver stack técnico de habilidades"
                  className="liquid-pill rounded-2xl p-3.5 group hover:border-amber-400/50 transition cursor-pointer block"
                >
                  <div className="text-xl sm:text-2xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 group-hover:brightness-125 transition">
                    3+ Años
                  </div>
                  <div className="text-xs font-medium text-slate-200 mt-1 flex items-center justify-between">
                    <span>Python, SQL y ML</span>
                    <ArrowUpRight className="w-3 h-3 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>

                {/* 4. 4 Certificaciones -> Educación y Certificaciones (Violet / Purple) */}
                <a
                  href="#certificaciones"
                  title="Ver certificaciones y educación"
                  className="liquid-pill rounded-2xl p-3.5 group hover:border-violet-400/50 transition cursor-pointer block"
                >
                  <div className="text-xl sm:text-2xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-fuchsia-300 group-hover:brightness-125 transition">
                    4
                  </div>
                  <div className="text-xs font-medium text-slate-200 mt-1 flex items-center justify-between">
                    <span>Certificaciones</span>
                    <ArrowUpRight className="w-3 h-3 text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </div>
            </LiquidCard>
          </div>
        </section>

        {/* PROJECTS SECTION: E-COMMERCE / MERCADO LIBRE CATALOG */}
        <section id="proyectos" className="scroll-mt-24 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Proyectos Destacados
            </h2>

            {/* Category Filters: Todos, Finanzas, NLP */}
            <div className="flex flex-wrap gap-2">
              {['Todos', 'Finanzas', 'NLP'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition cursor-pointer ${
                    projectFilter === cat
                      ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 font-semibold shadow-md shadow-sky-500/25'
                      : 'liquid-pill text-slate-300 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* E-Commerce Style Catalog Grid: Single macOS Expand Button in Top Bar + Image + Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {filteredProjects.map((project) => (
              <LiquidCard
                key={project.id}
                onClick={() => setSelectedProjectId(project.id)}
                className="catalog-card group p-0 overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                {/* 1. Top Project Image / Cover Illustration with Single macOS Expand Button */}
                <ProjectCoverIllustration
                  project={project}
                  onOpenModal={() => setSelectedProjectId(project.id)}
                />

                {/* 2. Project Title */}
                <div className="p-5 flex-1 flex items-center">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-sky-200 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </LiquidCard>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experiencia" className="scroll-mt-24 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-300 mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Trayectoria Profesional</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experiencia en Ciencia de Datos
            </h2>
          </div>

          {experience.map((exp) => (
            <LiquidCard key={exp.id} className="p-6 sm:p-9">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/15 text-sky-200 border border-sky-400/30 mb-2">
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-base font-medium text-sky-300 mt-0.5">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {exp.evidenceUrl && (
                    <a
                      href={exp.evidenceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-400 to-blue-600 text-slate-950 shadow-md shadow-sky-500/20 hover:brightness-110 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{exp.evidenceLabel}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Impact KPIs for AMBEDI */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                {exp.impactMetrics.map((item, i) => (
                  <div key={i} className="liquid-pill rounded-2xl p-4">
                    <div className="text-xl font-extrabold font-mono text-sky-300">
                      {item.kpi}
                    </div>
                    <div className="text-xs text-slate-300 mt-1">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Achievements */}
              <ul className="space-y-3.5">
                {exp.highlights.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm sm:text-base text-slate-200 leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-white/10">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="liquid-pill px-3 py-1 rounded-xl text-xs font-mono text-sky-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </LiquidCard>
          ))}
        </section>

        {/* SKILLS SECTION */}
        <section id="habilidades" className="scroll-mt-24 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-300 mb-2">
              <Code2 className="w-4 h-4" />
              <span>Stack Técnico</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Habilidades, Lenguajes y Tecnologías
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Programming Languages + Spoken Languages */}
            <LiquidCard className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-5">
                  <Database className="w-5 h-5 text-sky-400" />
                  <span>Lenguajes de Programación</span>
                </h3>

                <div className="space-y-4">
                  {skills.languages.map((item) => (
                    <div key={item.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold text-white">
                          {item.name}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-200 border border-sky-400/30">
                          {item.years}
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spoken Languages (Only Inglés B2) */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Idioma
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {skills.spokenLanguages.map((sp, i) => (
                    <div
                      key={i}
                      className="liquid-pill rounded-2xl p-3.5 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-bold text-white">
                          {sp.language}
                        </div>
                        <div className="text-xs text-slate-300">{sp.level}</div>
                      </div>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-200 border border-sky-400/30">
                        {sp.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </LiquidCard>

            {/* Core Technologies (3 years) and Ecosystem (1 year) */}
            <LiquidCard className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-sky-400" />
                    <span>Ciencia de Datos y Analítica Core</span>
                  </h3>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-500/15 text-sky-200 border border-sky-400/30">
                    3 años de experiencia
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.technologiesCore.map((tech) => (
                    <div
                      key={tech.name}
                      className="liquid-pill rounded-2xl p-3.5 hover:border-sky-400/40 transition"
                    >
                      <div className="font-bold text-white text-sm">
                        {tech.name}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {tech.domain}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-blue-400" />
                    <span>Deep Learning, Cloud, BI y Herramientas</span>
                  </h3>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/15 text-blue-200 border border-blue-400/30">
                    1 año de experiencia
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.technologiesEcosystem.map((tech) => (
                    <div
                      key={tech.name}
                      className="liquid-pill rounded-2xl p-3.5 hover:border-blue-400/40 transition"
                    >
                      <div className="font-bold text-white text-sm">
                        {tech.name}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {tech.domain}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </LiquidCard>
          </div>
        </section>

        {/* EDUCATION AND CERTIFICATIONS SECTION */}
        <section id="certificaciones" className="scroll-mt-24 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-300 mb-2">
              <Award className="w-4 h-4" />
              <span>Formación Académica y Credenciales</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Educación y Certificaciones Verificadas
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Education Card (ESCOM IPN) */}
            <LiquidCard className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-300">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {education.degree}
                  </h3>
                  <p className="text-sm font-semibold text-sky-300 mt-1">
                    {education.institution}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                    Cursos Relevantes:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course) => (
                      <span
                        key={course}
                        className="liquid-pill px-3 py-1.5 rounded-xl text-xs font-medium text-slate-200"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Instituto Politécnico Nacional</span>
                <span className="font-mono text-sky-300">CDMX, México</span>
              </div>
            </LiquidCard>

            {/* Verified Certifications Grid (Only "Verificar" button in bottom-right corner) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <LiquidCard
                  key={cert.id}
                  className="p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono border bg-gradient-to-r ${cert.badgeColor}`}
                      >
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {cert.issuer}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {cert.name}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cert.skills.map((sk) => (
                        <span
                          key={sk}
                          className="px-2 py-0.5 rounded-md text-[11px] bg-white/5 text-slate-300 border border-white/10"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom-Right Corner "Verificar" Button Only */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex justify-end">
                    <a
                      href={cert.primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="liquid-pill inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-sky-200 hover:text-white transition"
                    >
                      <span>Verificar</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </LiquidCard>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION (No repetitive buttons, no "Abierto a Oportunidades y Colaboraciones" badge) */}
        <section id="contacto" className="scroll-mt-24">
          <LiquidCard className="p-8 sm:p-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-3">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  ¿Buscas un Científico de Datos para tu equipo?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  Disponible para roles de Ciencia de Datos, análisis estadístico, Ingeniería de Datos e IA. Contáctame directamente por correo o LinkedIn.
                </p>
              </div>

              {/* 3 Non-Repetitive Direct Contact Cards */}
              <div className="lg:col-span-6 grid sm:grid-cols-3 gap-3">
                <button
                  onClick={() => copyToClipboard(contact.email, 'contact-email')}
                  className="liquid-pill p-4 rounded-2xl text-left hover:border-sky-400/40 transition cursor-pointer"
                >
                  <div className="flex items-center justify-between text-sky-300 mb-2">
                    <Mail className="w-5 h-5" />
                    {copiedField === 'contact-email' ? (
                      <span className="text-[11px] font-mono text-sky-200 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Copiado
                      </span>
                    ) : (
                      <Copy className="w-4 h-4 opacity-60" />
                    )}
                  </div>
                  <div className="text-xs text-slate-400">Correo electrónico</div>
                  <div className="text-xs font-mono font-semibold text-white truncate mt-0.5">
                    {contact.email}
                  </div>
                </button>

                <a
                  href={contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-pill p-4 rounded-2xl hover:border-sky-400/40 transition"
                >
                  <div className="flex items-center justify-between text-sky-300 mb-2">
                    <LinkedinIcon className="w-5 h-5" />
                    <ExternalLink className="w-4 h-4 opacity-60" />
                  </div>
                  <div className="text-xs text-slate-400">LinkedIn</div>
                  <div className="text-sm font-semibold text-white truncate mt-0.5">
                    {contact.linkedinHandle}
                  </div>
                </a>

                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-pill p-4 rounded-2xl hover:border-sky-400/40 transition"
                >
                  <div className="flex items-center justify-between text-slate-200 mb-2">
                    <GithubIcon className="w-5 h-5" />
                    <ExternalLink className="w-4 h-4 opacity-60" />
                  </div>
                  <div className="text-xs text-slate-400">GitHub</div>
                  <div className="text-sm font-mono font-semibold text-white truncate mt-0.5">
                    @{contact.githubHandle}
                  </div>
                </a>
              </div>
            </div>
          </LiquidCard>
        </section>
      </main>

      {/* Centered Floating Modal for Project Details and Preloaded Live Interactive Preview */}
      <ProjectFloatingModal
        projects={projects}
        selectedProjectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div>
          © {new Date().getFullYear()} <strong className="text-slate-200">{contact.name}</strong> —{' '}
          {contact.role}.
        </div>
        <div className="flex items-center gap-4">
          <a
            href={contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 transition"
          >
            GitHub
          </a>
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-300 transition"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-sky-300 transition"
          >
            {contact.email}
          </a>
        </div>
      </footer>
    </div>
  );
}
