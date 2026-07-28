import styles from './SearchBar.module.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      className={styles.searchInput}
      placeholder="🔍 Buscar dios (inglés o español)..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
