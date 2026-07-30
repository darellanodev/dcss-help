import styles from './TranslationToggle.module.css'

interface TranslationToggleProps {
  useMachine: boolean
  onChange: (useMachine: boolean) => void
}

export default function TranslationToggle({ useMachine, onChange }: TranslationToggleProps) {
  return (
    <div className={styles.toggleGroup}>
      <button
        className={`${styles.toggleOption} ${!useMachine ? styles.active : ''}`}
        onClick={() => onChange(false)}
      >
        🧑 Humana
      </button>
      <button
        className={`${styles.toggleOption} ${useMachine ? styles.active : ''}`}
        onClick={() => onChange(true)}
      >
        🤖 Automática
      </button>
    </div>
  )
}
