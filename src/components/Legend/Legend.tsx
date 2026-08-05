import styles from './Legend.module.css'

const items = [
  { color: 'english', label: 'Original English' },
  { color: 'spanish', label: 'Spanish translation' },
  { color: 'machine', label: '🤖 Machine translation (AI)' },
  { color: 'proper', label: 'Proper name / untranslated' },
  { color: 'missing', label: 'No translation' },
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
