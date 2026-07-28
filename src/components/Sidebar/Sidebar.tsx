import styles from './Sidebar.module.css'

const sections = [
  { icon: '⛪', label: 'Dioses', active: true },
  { icon: '🗡️', label: 'Objetos', disabled: true },
  { icon: '🐉', label: 'Monstruos', disabled: true },
  { icon: '🗺️', label: 'Ramas', disabled: true },
  { icon: '🔮', label: 'Hechizos', disabled: true },
  { icon: '💀', label: 'Mutaciones', disabled: true },
  { icon: '⚔️', label: 'Habilidades', disabled: true },
]

interface SidebarProps {
  translated: number
  total: number
}

export default function Sidebar({ translated, total }: SidebarProps) {
  const percentage = Math.round((translated / total) * 100)

  return (
    <aside className={styles.sidebar}>
      <h1>⚔️ DCSS Vocabulario</h1>
      <p className={styles.subtitle}>Dungeon Crawl Stone Soup</p>

      <div className={styles.progressSection}>
        <div className={styles.progressTitle}>📊 Progreso de Traducción</div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${percentage}%` }} />
        </div>
        <div className={styles.progressText}>
          {translated}/{total} entradas traducidas ({percentage}%)
        </div>
      </div>

      <nav className={styles.navSection}>
        <div className={styles.navTitle}>📚 Secciones</div>
        <ul className={styles.navLinks}>
          {sections.map(s => (
            <li key={s.label}>
              <a
                href="#"
                className={s.active ? styles.active : s.disabled ? styles.disabled : ''}
                onClick={e => e.preventDefault()}
              >
                <span className={styles.icon}>{s.icon}</span> {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
