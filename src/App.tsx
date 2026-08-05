import { useState, useMemo, useEffect } from 'react'
import godsData from './data/gods'
import type { God } from './types/god'
import { calculateProgress, searchGods } from './utils/gods'
import { getGodOfDay } from './utils/godOfDay'
import Sidebar from './components/Sidebar/Sidebar'
import SearchBar from './components/SearchBar/SearchBar'
import GodCard from './components/GodCard/GodCard'
import GodSpotlight from './components/GodSpotlight/GodSpotlight'
import Legend from './components/Legend/Legend'
import TranslationToggle from './components/TranslationToggle/TranslationToggle'
import styles from './App.module.css'

const gods = godsData as God[]

export default function App() {
  const [query, setQuery] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [useMachineTranslation, setUseMachineTranslation] = useState(true)
  const godOfDay = useMemo(() => getGodOfDay(gods), [])
  const filteredGods = useMemo(() => searchGods(gods, query), [query])
  const { translated, total } = useMemo(() => calculateProgress(gods), [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  return (
    <>
      <header className={styles.mobileTopBar}>
        <button className={styles.menuButton} onClick={() => setMobileMenuOpen(prev => !prev)}>
          ☰
        </button>
        <span>⚔️ DCSS Help</span>
      </header>
      <Sidebar
        translated={translated}
        total={total}
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1>⛪ Gods</h1>
          <p>Descriptions, powers and wrath of the DCSS gods</p>
        </header>

        <Legend />

        <div className={styles.toolbar}>
          <div className={styles.toggleGroup}>
            <button
              className={`${styles.toggleOption} ${!showAll ? styles.active : ''}`}
              onClick={() => setShowAll(false)}
            >
              ☀️ God of the day
            </button>
            <button
              className={`${styles.toggleOption} ${showAll ? styles.active : ''}`}
              onClick={() => setShowAll(true)}
            >
              📋 All
            </button>
          </div>
          {showAll && (
            <div className={styles.searchRow}>
              <SearchBar value={query} onChange={setQuery} />
            </div>
          )}
          <TranslationToggle useMachine={useMachineTranslation} onChange={setUseMachineTranslation} />
        </div>

        {!showAll ? (
          <>
            <GodSpotlight god={godOfDay} useMachineTranslation={useMachineTranslation} />
            <button className={styles.topButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              ↑ Top
            </button>
            <button className={styles.viewToggle} onClick={() => setShowAll(true)}>
              See all 27 gods
            </button>
          </>
        ) : (
          <>
            {filteredGods.length === 0 ? (
              <div className={styles.noResults}>
                <h3>No results found</h3>
                <p>Try a different search term</p>
              </div>
            ) : (
              <div className={styles.godCards}>
                {filteredGods.map(god => (
                  <div className={styles.cardGroup} key={god.name}>
                    <GodCard god={god} useMachineTranslation={useMachineTranslation} />
                    <button className={styles.topButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                      ↑ Top
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        <footer className={styles.footer}>
          <a
            href="https://github.com/darellanodev/dcss-help"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⭐ DCSS Help on GitHub
          </a>
        </footer>
      </main>
    </>
  )
}
