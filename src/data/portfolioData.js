export const portfolioData = {
  contact: {
    name: 'Josué Rico',
    role: 'Científico de Datos',
    subtitle: 'Análisis Cuantitativo • Modelado Estadístico • Automatización e IA',
    email: 'jricom1700@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/josu%C3%A9-rico-mendoza-3248381ba',
    linkedinHandle: 'Josué Rico',
    githubUrl: 'https://github.com/jricom1700',
    githubHandle: 'jricom1700',
    avatarUrl: '/josue-portrait.png',
    location: 'Ciudad de México, México',
  },

  profile:
    'Científico de Datos enfocado en análisis cuantitativo, modelado estadístico y automatización de flujos con Python, SQL y Excel. Experiencia estructurando datos operativos, diseñando modelos analíticos y construyendo tableros interactivos para la visualización de métricas. Con enfoque en simplificar tareas manuales incorporando herramientas de inteligencia artificial para agilizar el desarrollo y la resolución de problemas.',

  metrics: [
    {
      value: '+80%',
      label: 'Inconsistencias resueltas',
      accent: 'from-sky-200 via-blue-300 to-slate-200',
    },
    {
      value: '-90%',
      label: 'Tiempo de reportería',
      accent: 'from-blue-300 via-sky-200 to-indigo-200',
    },
    {
      value: '3+ Años',
      label: 'Python, SQL y ML',
      accent: 'from-slate-100 via-sky-200 to-blue-300',
    },
    {
      value: '4',
      label: 'Certificaciones',
      accent: 'from-sky-300 via-blue-200 to-slate-200',
    },
  ],

  experience: [
    {
      id: 'ambedi-data-scientist',
      role: 'Científico de datos junior',
      organization: 'Sistema de ingesta para la búsqueda de personas desaparecidas - AMBEDI',
      period: 'octubre 2025 - junio 2026',
      evidenceUrl: 'https://drive.google.com/file/d/1E0twFziBDRRxyTd4GCj2YGDTT9IglB4e/view?usp=sharing',
      evidenceLabel: 'Ver constancia',
      technologies: ['SQL', 'Python', 'Excel', 'Pandas', 'NumPy', 'Dashboards'],
      highlights: [
        'Lideré la extracción, auditoría y limpieza de registros históricos (2008–2026) en hojas de cálculo utilizando Python (Pandas, NumPy), automatizando la estandarización de formatos y resolviendo más del 80% de inconsistencias en los datos.',
        'Diseñé una arquitectura de bases de datos en SQL con doble propósito (transaccional y analítica): una capa operativa para la captura de nuevos registros y una analítica centralizada para optimizar los tiempos de consulta y filtrado del histórico.',
        'Desarrollé un dashboard interactivo para el análisis visual de tendencias y tasas de recuperación, reduciendo el tiempo de generación de reportes en más de un 90%.',
      ],
      impactMetrics: [
        { kpi: '2008–2026', text: 'Cobertura histórica procesada' },
        { kpi: '>80%', text: 'Inconsistencias corregidas' },
        { kpi: 'OLTP + OLAP', text: 'Arquitectura SQL dual' },
        { kpi: '>90%', text: 'Ahorro en tiempo de reportes' },
      ],
    },
  ],

  projects: [
    {
      id: 'credit-risk-engine',
      title: 'Motor de decisión crediticia y evaluación de riesgo de cartera',
      date: 'septiembre 2026',
      category: 'Finanzas',
      categoryLabel: 'Finanzas • Riesgo Crediticio y Scoring',
      badge: 'Finanzas',
      liveUrl: 'https://credit-risk-engine-rose.vercel.app/',
      embedUrl: 'https://credit-risk-engine-rose.vercel.app/',
      domainLabel: 'credit-risk-engine-rose.vercel.app',
      repoUrl: 'https://github.com/jricom1700/credit-risk-engine',
      technologies: [
        'Python',
        'FastAPI',
        'Credit Scoring',
        'Normativa CNBV',
        'ROC-AUC',
        'Gini',
        'Kolmogorov-Smirnov',
      ],
      summary:
        'Motor integral de originación crediticia y evaluación de riesgo de portafolio alineado a la normativa de la CNBV, con validación estadística mediante curva ROC (AUC), Gini y Kolmogorov-Smirnov.',
      highlights: [
        'Diseñé un motor de Credit Scoring alineado a normativa CNBV: desarrollé un Scorecard para estimar la probabilidad de incumplimiento de solicitantes, validando su capacidad de discriminación mediante curva ROC (AUC), Gini y Kolmogorov-Smirnov.',
        'Desarrollé un simulador de cartera para evaluar rentabilidad y pérdida esperada: construí una herramienta interactiva para proyectar el impacto financiero de distintos puntos de corte y justificar las razones de rechazo o aprobación.',
      ],
      metrics: [
        { label: 'Validación', value: 'ROC-AUC / KS / Gini' },
        { label: 'Regulación', value: 'Normativa CNBV' },
        { label: 'Stack', value: 'Python + FastAPI' },
      ],
    },
    {
      id: 'ensafi-salud-financiera',
      title: 'Análisis de salud financiera en México (ENSAFI)',
      date: 'abril 2026',
      category: 'Finanzas',
      categoryLabel: 'Finanzas • Analítica Socioeconómica y Geoespacial',
      badge: 'Finanzas',
      liveUrl: 'https://dashboard-salud-financiera-wjwc3uhv7rgmz9tnej2s8f.streamlit.app/',
      embedUrl: 'https://dashboard-salud-financiera-wjwc3uhv7rgmz9tnej2s8f.streamlit.app/?embed=true',
      domainLabel: 'dashboard-salud-financiera.streamlit.app',
      repoUrl: 'https://github.com/jricom1700/dashboard-salud-financiera',
      technologies: [
        'Python',
        'Pandas',
        'Streamlit',
        'Mapas Geográficos',
        'ENSAFI INEGI',
        'Tableros Interactivos',
      ],
      summary:
        'Herramienta analítica en Streamlit sobre la Encuesta Nacional sobre Salud Financiera (ENSAFI) para modelar brechas salariales, capacidad de ahorro y vulnerabilidad económica regional.',
      highlights: [
        'Procesé datos de la ENSAFI con Python (Pandas): realicé la limpieza, validación y cruce de variables para modelar indicadores de ingreso, brechas salariales y capacidad de ahorro.',
        'Desarrollé una herramienta analítica en Streamlit: integré mapas geográficos y tableros interactivos para correlacionar niveles de estrés financiero, vulnerabilidad económica y salud a nivel regional.',
      ],
      metrics: [
        { label: 'Datos', value: 'ENSAFI (INEGI)' },
        { label: 'Cobertura', value: 'Regional / Mapas' },
        { label: 'Stack', value: 'Python + Streamlit' },
      ],
    },
    {
      id: 'interes-compuesto-ponderado',
      title: 'Modelo de interés compuesto y tasa ponderada multi-fuente',
      date: '2026',
      category: 'Finanzas',
      categoryLabel: 'Finanzas • Modelado Cuantitativo de Rendimientos y Renta Fija',
      badge: 'Finanzas',
      liveUrl: 'https://inter-s-compuesto-ponderado.vercel.app/',
      embedUrl: 'https://inter-s-compuesto-ponderado.vercel.app/',
      domainLabel: 'inter-s-compuesto-ponderado.vercel.app',
      repoUrl: 'https://github.com/jricom1700/inter-s-compuesto-ponderado',
      technologies: [
        'Modelado Financiero',
        'Tasa Ponderada',
        'Interés Compuesto',
        'Renta Fija',
        'Simulación de Portafolio',
      ],
      summary:
        'Modelo financiero cuantitativo para consolidar y proyectar el rendimiento real de portafolios de renta fija distribuidos en múltiples entidades con límites de saldo y tasas escalonadas.',
      highlights: [
        'Modelé el cálculo de tasa efectiva global ponderada y capitalización compuesta multi-instrumento: incorporé topes máximos de saldo por cuenta y tramos de rendimiento diferenciado para estimar el crecimiento patrimonial real frente a modelos de tasa plana.',
        'Diseñé un sistema de proyección temporal por plazos (diario, semanal, mensual y anual): estructuré el análisis comparativo entre capital base y saldo acumulado para optimizar la asignación de capital entre distintas instituciones.',
      ],
      metrics: [
        { label: 'Modelo', value: 'Tasa Ponderada Real' },
        { label: 'Restricciones', value: 'Topes por Entidad' },
        { label: 'Enfoque', value: 'Renta Fija y Capitalización' },
      ],
    },
    {
      id: 'podcast-rag-medallion',
      title: 'Modelo para la generación automática de pódcast',
      date: 'marzo 2026',
      category: 'NLP',
      categoryLabel: 'NLP • Arquitectura Medallón y Recuperación RAG',
      badge: 'NLP',
      liveUrl: null,
      embedUrl: null,
      domainLabel: 'github.com/jricom1700 • Pipeline Medallón y RAG',
      repoUrl: 'https://github.com/jricom1700',
      technologies: [
        'Python',
        'SQL',
        'NLP',
        'RAG',
        'Arquitectura Medallón',
        'Ranking Ponderado',
      ],
      summary:
        'Flujo de datos bajo arquitectura Medallón combinado con un pipeline de recuperación de información (RAG) y un sistema de ranking ponderado por similitud semántica, relevancia temporal y longitud del texto.',
      highlights: [
        'Diseñé el flujo de datos bajo una arquitectura por capas (Medallón): estructuré la ingesta, limpieza y normalización de texto, manteniendo la trazabilidad de origen y la consistencia de los datos en cada etapa de consumo.',
        'Implementé un pipeline de recuperación de información (RAG): diseñé un sistema de ranking ponderado que evalúa similitud semántica, relevancia temporal y longitud del texto para seleccionar contenido reciente y de calidad antes del consumo por modelos de lenguaje.',
      ],
      metrics: [
        { label: 'Arquitectura', value: 'Medallón (3 Capas)' },
        { label: 'Recuperación', value: 'RAG + Ranking' },
        { label: 'Stack', value: 'Python • SQL • NLP' },
      ],
    },
  ],

  education: {
    institution: 'Escuela Superior de Cómputo - ESCOM IPN',
    degree: 'Licenciatura en Ciencia de Datos',
    courses: [
      'Big Data',
      'Modelado Predictivo',
      'Inteligencia Artificial',
      'Bases de Datos Avanzadas',
      'Estadística',
    ],
  },

  skills: {
    languages: [
      { name: 'Python', years: '3 años', level: 95 },
      { name: 'SQL', years: '3 años', level: 92 },
      { name: 'R', years: '1 año', level: 70 },
    ],
    technologiesCore: [
      { name: 'Excel', years: '3 años', domain: 'Auditoría y Modelado Operativo' },
      { name: 'Pandas', years: '3 años', domain: 'Limpieza y Transformación de Datos' },
      { name: 'NumPy', years: '3 años', domain: 'Cálculo Vectorial y Matrices' },
      { name: 'Scikit-learn', years: '3 años', domain: 'Machine Learning y Scoring' },
      { name: 'Matplotlib', years: '3 años', domain: 'Visualización Científica' },
    ],
    technologiesEcosystem: [
      { name: 'Power BI', years: '1 año', domain: 'Inteligencia de Negocios' },
      { name: 'Azure', years: '1 año', domain: 'Servicios Cloud y Datos' },
      { name: 'MongoDB', years: '1 año', domain: 'Bases de Datos NoSQL' },
      { name: 'TensorFlow', years: '1 año', domain: 'Deep Learning' },
      { name: 'PyTorch', years: '1 año', domain: 'Redes Neuronales y NLP' },
      { name: 'FastAPI y Streamlit', years: 'Proyectos', domain: 'Despliegue de Modelos Analíticos' },
    ],
    spokenLanguages: [
      {
        language: 'Inglés',
        level: 'Intermedio Alto (B2)',
        badge: 'B2',
      },
    ],
  },

  certifications: [
    {
      id: 'google-data-analytics',
      name: 'Google Data Analytics Professional Certificate',
      issuer: 'Google / Credly',
      primaryUrl: 'https://www.credly.com/badges/1574cd7d-fbda-4f5c-881a-8225578595df/linked_in_profile',
      badgeColor: 'from-sky-500/20 to-blue-500/20 border-sky-400/30 text-sky-200',
      skills: ['SQL', 'Limpieza de Datos', 'Visualización', 'R', 'Hojas de Cálculo'],
    },
    {
      id: 'hackerrank-sql-intermediate',
      name: 'SQL-intermediate',
      issuer: 'HackerRank',
      primaryUrl: 'https://www.hackerrank.com/certificates/469f4cdd0214',
      badgeColor: 'from-blue-500/20 to-indigo-500/20 border-blue-400/30 text-blue-200',
      skills: ['Consultas Complejas', 'Funciones de Ventana', 'Subconsultas', 'Agregaciones'],
    },
    {
      id: 'google-ai-essentials',
      name: 'Google AI Essentials',
      issuer: 'Google / Credly',
      primaryUrl: 'https://www.credly.com/badges/70135626-d9b1-4f49-a625-bac85e86201f',
      badgeColor: 'from-slate-400/20 to-sky-500/20 border-slate-300/30 text-slate-200',
      skills: ['IA Generativa', 'Automatización de Flujos', 'IA Responsable'],
    },
    {
      id: 'google-prompting-essentials',
      name: 'Google Prompting Essentials',
      issuer: 'Google / Credly',
      primaryUrl: 'https://www.credly.com/badges/ea6170e8-6cf3-4c11-939b-67ceb4be2f37',
      badgeColor: 'from-indigo-500/20 to-blue-500/20 border-indigo-400/30 text-indigo-200',
      skills: ['Ingeniería de Prompts', 'Cadena de Pensamiento', 'Contexto para LLMs'],
    },
  ],
};
