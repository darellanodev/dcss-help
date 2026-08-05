import styles from './Sidebar.module.css'

const sections = [
  { icon: '⛪', label: 'Gods', active: true },
  { icon: '🗡️', label: 'Items', disabled: true },
  { icon: '🐉', label: 'Monsters', disabled: true },
  { icon: '🗺️', label: 'Branches', disabled: true },
  { icon: '🔮', label: 'Spells', disabled: true },
  { icon: '💀', label: 'Mutations', disabled: true },
  { icon: '⚔️', label: 'Skills', disabled: true },
]

interface SidebarProps {
  translated: number
  total: number
  isOpen?: boolean
  onClose?: () => void
}

export default function Sidebar({ translated, total, isOpen, onClose }: SidebarProps) {
  const percentage = Math.round((translated / total) * 100)

  return (
    <>
      <div
        className={`${styles.backdrop} ${isOpen ? styles.visible : ''}`}
        onClick={onClose}
      />
      <aside
        className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
        role="dialog"
        aria-modal={isOpen}
        inert={!isOpen}
      >
      <button className={styles.closeButton} onClick={onClose} aria-label="Close menu">✕</button>
      <h1>⚔️ DCSS Help</h1>
      <p className={styles.subtitle}>Dungeon Crawl Stone Soup</p>

      <div className={styles.progressSection}>
        <div className={styles.progressTitle}>📊 Translation Progress</div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${percentage}%` }} />
        </div>
        <div className={styles.progressText}>
          {translated}/{total} entries translated ({percentage}%)
        </div>
      </div>

      <nav className={styles.navSection}>
        <div className={styles.navTitle}>📚 Sections</div>
        <ul className={styles.navLinks}>
          {sections.map(s => (
            <li key={s.label}>
              <a
                href="#"
                className={s.active ? styles.active : s.disabled ? styles.disabled : ''}
                onClick={s.disabled ? e => e.preventDefault() : (e) => { e.preventDefault(); (e.currentTarget as HTMLElement).blur(); onClose?.() }}
              >
                <span className={styles.icon}>{s.icon}</span> {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
    </>
  )
}
