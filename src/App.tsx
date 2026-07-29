import { useState, useMemo } from 'react'
import godsData from './data/gods.json'
import type { God } from './types/god'
import { calculateProgress, searchGods } from './utils/gods'
import { getGodOfDay } from './utils/godOfDay'
import Sidebar from './components/Sidebar/Sidebar'
import SearchBar from './components/SearchBar/SearchBar'
import GodCard from './components/GodCard/GodCard'
import GodSpotlight from './components/GodSpotlight/GodSpotlight'
import Legend from './components/Legend/Legend'
import styles from './App.module.css'

const gods = godsData as God[]

export default function App() {
  const [query, setQuery] = useState('')
  const [showAll, setShowAll] = useState(false)
  const godOfDay = useMemo(() => getGodOfDay(gods), [])
  const filteredGods = useMemo(() => searchGods(gods, query), [query])
  const { translated, total } = useMemo(() => calculateProgress(gods), [])

  return (
    <>
      <Sidebar translated={translated} total={total} />
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>⛪ Dioses</h1>
          <p>Descripciones, poderes e ira de los dioses de DCSS</p>
        </header>

        <Legend />

        <div className={styles.toolbar}>
          <div className={styles.toggleGroup}>
            <button
              className={`${styles.toggleOption} ${!showAll ? styles.active : ''}`}
              onClick={() => setShowAll(false)}
            >
              ☀️ Dios del día
            </button>
            <button
              className={`${styles.toggleOption} ${showAll ? styles.active : ''}`}
              onClick={() => setShowAll(true)}
            >
              📋 Todos
            </button>
          </div>
          {showAll && (
            <SearchBar value={query} onChange={setQuery} />
          )}
        </div>

        {!showAll ? (
          <>
            <GodSpotlight god={godOfDay} />
            <button className={styles.viewToggle} onClick={() => setShowAll(true)}>
              Ver todos los 27 dioses
            </button>
          </>
        ) : (
          <>
            {filteredGods.length === 0 ? (
              <div className={styles.noResults}>
                <h3>No se encontraron resultados</h3>
                <p>Intenta con otro término de búsqueda</p>
              </div>
            ) : (
              <div className={styles.godCards}>
                {filteredGods.map(god => (
                  <GodCard key={god.name} god={god} />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </>
  )
}
