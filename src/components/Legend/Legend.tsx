import styles from './Legend.module.css'

const items = [
  { color: 'english', label: 'Inglés original' },
  { color: 'spanish', label: 'Traducción al español' },
  { color: 'machine', label: '🤖 Traducción automática (IA)' },
  { color: 'proper', label: 'Nombre propio / sin traducir' },
  { color: 'missing', label: 'Sin traducción' },
]

export default function Legend() {
  return (
    <div className={styles.legend}>
      {items.map(item => (
        <div key={item.color} className={styles.legendItem}>
          <div className={`${styles.legendColor} ${styles[item.color]}`} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}
