import { useEffect, useRef, useState } from 'react'
import './App.css'

/* ── ICONS ── */
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
)
const IconInfo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
)
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
)
const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
)
const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
)
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.1 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.36 6.36l1.27-.85a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
)
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
)
const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
)
const IconDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
)
const IconShare = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 012 2v7"/><line x1="6" y1="9" x2="6" y2="21"/></svg>
)
const IconMsg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
)
const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
)
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
)
const IconUsers = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
)
const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
)
const IconDollar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
)
const IconUserPlus = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/><line x1="20" y1="8" x2="20" y2="14"/></svg>
)
const IconAward = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
)

/* ── FADE UP HOOK ── */
function useFadeUp() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('visible'); io.unobserve(el) }
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

/* ── NAV ── */
function Nav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: 'smooth' })
  }
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#">
          <img src="/logo-crtic.png" alt="CRTIC" />
          <span className="nav-logo-text">Residencia I+D+i</span>
        </a>
        <ul className="nav-links">
          {[['programa','El programa'],['para-quien','Requisitos'],['beneficios','Beneficios'],['proceso','Proceso']].map(([id,label]) => (
            <li key={id}><a href={`#${id}`} onClick={e => { e.preventDefault(); scrollTo(id) }}>{label}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <a href="#contacto" className="btn btn-primary" onClick={e => { e.preventDefault(); scrollTo('contacto') }}>Postular</a>
        </div>
      </div>
    </nav>
  )
}

/* ── HERO ── */
function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <div className="hero-badge"><div className="hero-badge-dot" />Convocatoria permanente · 2026–2027</div>
        <h1>Residencia<br />de <em>I+D+i</em><br />Tecnocreativa</h1>
        <p className="hero-sub">Arte, tecnología e investigación colisionando para generar conocimiento nuevo —y propiedad intelectual compartida.</p>
        <div className="hero-actions">
          <a href="#contacto" className="btn btn-primary btn-hero" onClick={e => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior:'smooth' }) }}>Postular ahora</a>
          <a href="#programa" className="btn btn-ghost btn-hero" onClick={e => { e.preventDefault(); document.getElementById('programa')?.scrollIntoView({ behavior:'smooth' }) }}>Conocer el programa</a>
        </div>
      </div>
    </div>
  )
}

/* ── STRIP ── */
function Strip() {
  const items = [
    { num: '6–18', label: 'Meses de residencia' },
    { num: '2',    label: 'Laboratorios · SCL + Pucón' },
    { num: '50%',  label: 'Co-titularidad de la obra' },
    { num: '∞',    label: 'Postulación continua' },
  ]
  return (
    <div className="strip">
      <div className="strip-inner">
        {items.map(({ num, label }) => (
          <div key={label} className="strip-item">
            <div className="strip-num">{num}</div>
            <div className="strip-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── PROGRAMA ── */
function Programa() {
  const ref = useFadeUp()
  const ref2 = useFadeUp()
  return (
    <section id="programa">
      <div className="inner">
        <div className="programa-grid">
          <div className="programa-img fade-up" ref={ref}>
            <img src="/fotos/DSC03330.JPG" alt="Laboratorio CRTIC" />
          </div>
          <div className="fade-up delay-1" ref={ref2}>
            <div className="label">01 · El programa</div>
            <h2 className="section-title">Investigación colaborativa<br />con <em>impacto real</em></h2>
            <div className="programa-text">
              <p>Startups tecnocreativas seleccionadas se integran al equipo de CRTIC para explorar un problema abierto durante 6 a 18 meses, generando una obra que combina rigor tecnológico con radicalidad artística.</p>
            </div>
            <div className="art-box">
              <div className="art-box-label">Art Thinking</div>
              <p className="art-box-p">Las prácticas artísticas como instrumentos de pensamiento para reformular problemas. La pregunta siempre antecede a la solución.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PARA QUIÉN ── */
const AREAS = ['Tecnologías inmersivas','IA creativa','Biofeedback','Interfaces culturales','Audiovisual interactivo','Patrimonio digital','Diseño especulativo','Robótica expresiva']
const REQS = ['Personalidad jurídica vigente, al menos 1 año de antigüedad','Capacidad de comprometer tiempo, personas y recursos propios','Evidencia de prototipado rápido o MVP']
function ParaQuien() {
  const ref = useFadeUp(), ref2 = useFadeUp()
  return (
    <section id="para-quien" className="bg2">
      <div className="inner">
        <div className="quien-grid">
          <div className="fade-up" ref={ref}>
            <div className="label">02 · Admisibilidad</div>
            <h2 className="section-title">¿A quién<br />va <em>dirigida?</em></h2>
            <div className="req-group" style={{ marginTop: 32 }}>
              <div className="req-group-title">Requisitos formales</div>
              <div className="req-list">
                {REQS.map(r => (
                  <div key={r} className="req-row"><IconCheck /><span>{r}</span></div>
                ))}
              </div>
            </div>
            <div className="req-group">
              <div className="req-group-title">Áreas de interés</div>
              <div className="chips">{AREAS.map(a => <span key={a} className="chip">{a}</span>)}</div>
            </div>
          </div>
          <div className="quien-right fade-up delay-1" ref={ref2}>
            <div className="info-card">
              <img src="/fotos/crtic24186.jpg" alt="Experiencia inmersiva CRTIC" />
              <div className="info-card-body">
                <h4>Co-investigadores, no clientes</h4>
                <p>Buscamos startups con una pregunta sin respuesta definitiva, dispuestas a trabajar rigurosamente desde la incertidumbre.</p>
              </div>
            </div>
            <div className="alert-box">
              <IconInfo />
              <p><strong>No postules si</strong> buscas validar una idea ya terminada o esperas certezas sobre el resultado final.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── PRINCIPIOS ── */
const PRINCIPIOS = [
  { n:'01', title:'La obra como medio', text:'No es el producto final. Es el medio a través del cual emergen tecnologías y conocimiento susceptibles de protección intelectual.' },
  { n:'02', title:'El fracaso productivo', text:'Un proyecto que genera una pregunta transformadora tiene más valor que uno que cumple métricas sin producir conocimiento nuevo.' },
  { n:'03', title:'Validación pública', text:'La exhibición ante audiencias reales genera retroalimentación genuina que ningún análisis interno puede sustituir.' },
]
function Principios() {
  const ref = useFadeUp(), ref2 = useFadeUp()
  return (
    <section className="principios-wrap">
      <div className="principios-bg" />
      <div className="inner" style={{ position:'relative', zIndex:1 }}>
        <div className="fade-up" ref={ref} style={{ maxWidth:540, textAlign:'right', marginLeft:'auto' }}>
          <div className="label" style={{ justifyContent:'flex-end', flexDirection:'row-reverse' }}>
            <span>03 · La obra</span>
          </div>
          <h2 className="section-title">El horizonte<br /><em>compartido</em></h2>
        </div>
        <div className="principios-grid fade-up delay-1" ref={ref2}>
          {PRINCIPIOS.map(p => (
            <div key={p.n} className="principio-card">
              <div className="principio-n">{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── ART THINKING SECTION ── */
function ArtThinking() {
  const ref = useFadeUp()
  return (
    <section className="at-section">
      <div className="inner">
        <div className="fade-up" ref={ref}>
          <div className="at-label">04 · Metodología</div>
          <h2 className="at-title">¿Qué es el <em>Art Thinking?</em></h2>
          <p className="at-sub">Un método que usa las prácticas artísticas como herramientas de pensamiento para reformular problemas complejos antes de intentar resolverlos.</p>
          <a href="https://estebanruiztagle-crtic.github.io/art-thinking-crtic/" target="_blank" rel="noopener noreferrer" className="btn-at">
            Explorar el método <IconArrow />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── BENEFICIOS ── */
const TABS = [
  { id:'infra',       label:'Infraestructura' },
  { id:'equipo',      label:'Equipo' },
  { id:'pi',          label:'Prop. intelectual' },
  { id:'proyectos',   label:'Proyectos' },
  { id:'visibilidad', label:'Visibilidad' },
]
const TAB_CONTENT = {
  infra: [
    { icon:<IconBriefcase />, title:'Laboratorio Santiago', text:'Infraestructura técnica, equipamiento especializado y espacios de trabajo para desarrollo y prototipado.' },
    { icon:<IconGlobe />, title:'Laboratorio Pucón', text:'Entorno natural para proyectos que requieren experimentación en contextos no urbanos o de escala mayor.' },
    { icon:<IconEye />, title:'Tecnologías del centro', text:'Captura, procesamiento y exhibición: IA, audiovisual inmersivo, prototipado rápido.' },
  ],
  equipo: [
    { icon:<IconUsers />, title:'Integración al equipo', text:'Membresía formal durante el período de residencia, con acceso a recursos y redes internas del centro.' },
    { icon:<IconMsg />, title:'Acompañamiento Art Thinking', text:'Talleres, sesiones de reformulación, revisiones de proceso y diagnósticos tecnocreativos.' },
    { icon:<IconGlobe />, title:'Red global', text:'Investigadores, artistas, tecnólogos e instituciones con quienes CRTIC colabora en Chile y el extranjero.' },
  ],
  pi: null,
  proyectos: [
    { icon:<IconBriefcase />, title:'Proyectos con clientes', text:'Invitación como colaboradores especializados en proyectos con empresas de minería, salud, retail, forestal y cultura.' },
    { icon:<IconStar />, title:'Impulso Tecnocreativo', text:'Primera opción de invitación para proyectos de transferencia de soluciones tecnocreativas a empresas.' },
    { icon:<IconUserPlus />, title:'Red de clientes CRTIC', text:'Exposición directa ante la cartera de organizaciones con posibilidad de generar relaciones comerciales independientes.' },
  ],
  visibilidad: [
    { icon:<IconMail />, title:'Difusión institucional', text:'Presencia activa en canales, eventos, publicaciones y materiales de CRTIC.' },
    { icon:<IconEye />, title:'Exhibición pública', text:'La obra se presenta ante audiencias reales en espacios públicos y culturales de relevancia.' },
    { icon:<IconDoc />, title:'Documentación', text:'Co-autoría en informes y publicaciones. Los residentes figuran en todos los créditos del proceso.' },
  ],
}
function Beneficios() {
  const [active, setActive] = useState('infra')
  const ref = useFadeUp()
  return (
    <section id="beneficios" className="bg2">
      <div className="inner">
        <div className="fade-up" ref={ref}>
          <div className="label">05 · Lo que obtienes</div>
          <h2 className="section-title">Beneficios de<br />la <em>residencia</em></h2>
        </div>
        <div className="tabs-nav">
          {TABS.map(t => (
            <button key={t.id} className={`tab-btn${active===t.id?' active':''}`} onClick={() => setActive(t.id)}>{t.label}</button>
          ))}
        </div>
        {active === 'pi' ? (
          <>
            <div className="pi-banner">
              <div>
                <h3>El núcleo económico<br />de la residencia</h3>
                <p>Propiedad intelectual registrable, licenciable, transferible.</p>
              </div>
              <div className="pi-list">
                {[
                  ['Tecnología exclusiva del residente →', 'titularidad propia'],
                  ['Tecnología co-creada →', 'co-titularidad proporcional'],
                  ['La obra →', '50/50, no negociable'],
                  ['CRTIC gestiona', 'registro INAPI cuando es co-titular'],
                ].map(([pre, strong]) => (
                  <div key={pre} className="pi-row"><IconCheck /><span>{pre} <strong>{strong}</strong></span></div>
                ))}
              </div>
            </div>
            <div className="benefits-grid">
              {[
                { icon:<IconDollar />, title:'Propiedad intelectual', text:'Activo co-titulado sobre la obra: registrable y licenciable.' },
                { icon:<IconBriefcase />, title:'Honorarios por proyectos', text:'Participación remunerada en proyectos de CRTIC con clientes privados e instituciones públicas.' },
                { icon:<IconAward />, title:'Patrocinio institucional', text:'Respaldo CRTIC para proyectos propios coherentes con la misión del centro.' },
              ].map(c => (
                <div key={c.title} className="benefit-card">
                  <div className="benefit-icon">{c.icon}</div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="benefits-grid">
            {(TAB_CONTENT[active] || []).map(c => (
              <div key={c.title} className="benefit-card">
                <div className="benefit-icon">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

/* ── PROCESO ── */
const STEPS = [
  { icon:<IconDoc />, title:'Carta de intención', text:'1–2 páginas. Tu startup, la tecnología que traes y la pregunta que todavía no puedes responder solo.' },
  { icon:<IconMsg />, title:'Conversación diagnóstica', text:'45 minutos con el equipo de Innovación. Evaluamos compatibilidad metodológica, no solo métricas.' },
  { icon:<IconShare />, title:'Diseño conjunto', text:'Co-diseñamos alcance, duración y distribución de propiedad intelectual. Luego se suscribe el convenio.' },
]
function Proceso() {
  const ref = useFadeUp(), ref2 = useFadeUp(), ref3 = useFadeUp()
  return (
    <section id="proceso">
      <div className="inner">
        <div className="fade-up" ref={ref} style={{ textAlign:'center', maxWidth:500, margin:'0 auto' }}>
          <div className="label" style={{ justifyContent:'center' }}>06 · Cómo postular</div>
          <h2 className="section-title">Proceso en<br /><em>3 etapas</em></h2>
        </div>
        <div className="proceso-steps fade-up delay-1" ref={ref2}>
          {STEPS.map(s => (
            <div key={s.title} className="step">
              <div className="step-circle">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="proceso-note fade-up delay-2" ref={ref3}>
          <IconClock />
          <p><strong>Convocatoria permanente.</strong> Sin fechas límite. Evaluamos postulaciones de forma continua y abrimos nuevas cohortes cuando identificamos combinaciones con potencial de colisión productiva.</p>
        </div>
      </div>
    </section>
  )
}

/* ── QUOTE ── */
function Quote() {
  return (
    <div className="quote-section">
      <div className="quote-inner">
        <div className="quote-mark">"</div>
        <div className="quote-text">El CRTIC no vende servicios: construye alianzas donde ambas partes asumen riesgo, aportan recursos y comparten los hallazgos.</div>
        <div className="quote-source">
          <a href="https://estebanruiztagle-crtic.github.io/decalogo-art-thinking-crtic/" target="_blank" rel="noopener noreferrer" className="quote-link">
            Decálogo Art Thinking · CRTIC
          </a>
        </div>
      </div>
    </div>
  )
}

/* ── FOTO GRID ── */
function FotoGrid() {
  return (
    <div className="foto-grid">
      <div className="foto-item foto-span"><img src="/fotos/DSC00266.JPG" alt="Instalación CRTIC" /></div>
      <div className="foto-item"><img src="/fotos/DSC00322.JPG" alt="Tecnología inmersiva" /></div>
      <div className="foto-item"><img src="/fotos/crticfestviernes9-16.jpg" alt="CRTIC Fest" /></div>
      <div className="foto-item"><img src="/fotos/crticjueves8-83.jpg" alt="Audiencia CRTIC" /></div>
      <div className="foto-item"><img src="/fotos/IMG_0426.jpg" alt="Espacio inmersivo" /></div>
    </div>
  )
}

/* ── CONTACTO ── */
function Contacto() {
  const ref = useFadeUp()
  const mailto = `mailto:innovacion@crtic.cl?subject=Postulación%20Residencia%20I%2BD%2Bi%20CRTIC&body=Hola%20equipo%20CRTIC%2C%0A%0AMe%20interesa%20postular%20a%20la%20Residencia%20de%20I%2BD%2Bi.%0A%0ANombre%20de%20startup%3A%20%0ADescripción%3A%20%0APregunta%20de%20investigación%3A%20%0A%0ASaludos%2C`
  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-inner">
        <div className="label" style={{ justifyContent:'center' }}>07 · Contacto</div>
        <div className="cta-box fade-up" ref={ref}>
          <img className="cta-logo" src="/logo-crtic.png" alt="CRTIC" />
          <a href="mailto:innovacion@crtic.cl" className="cta-email">innovacion@crtic.cl</a>
          <a href="https://www.crtic.cl" target="_blank" rel="noopener noreferrer" className="cta-web">www.crtic.cl</a>
          <div className="cta-actions">
            <a href={mailto} className="btn-cta-primary"><IconMail />Postular ahora</a>
            <a href="/programa-residencia-idi.docx" download className="btn-cta-ghost"><IconDownload />Descargar programa completo</a>
          </div>
          <div className="cta-locs">
            {[['Santiago'],['Pucón'],['Chile']].map(([loc]) => (
              <span key={loc} className="cta-loc"><IconPin />{loc}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src="/logo-crtic.png" alt="CRTIC" />
          <span>Centro de Revolución Tecnológica en Industrias Creativas</span>
        </div>
        <p>Dirección de Innovación · 2026</p>
      </div>
    </footer>
  )
}

/* ── APP ── */
export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Strip />
      <Programa />
      <div className="rule" />
      <ParaQuien />
      <div className="rule" />
      <Principios />
      <div className="rule" />
      <ArtThinking />
      <div className="rule" />
      <FotoGrid />
      <div className="rule" />
      <Beneficios />
      <div className="rule" />
      <Proceso />
      <Quote />
      <Contacto />
      <Footer />
    </>
  )
}
