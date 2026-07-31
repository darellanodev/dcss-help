import { useRef, useState, useEffect } from 'react'
import {
  useFloating,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  offset,
  flip,
  shift,
  arrow,
  FloatingPortal,
  FloatingArrow
} from '@floating-ui/react'
import type { ReactNode } from 'react'
import type { GlossaryEntry } from '../../types/god'
import styles from './GlossaryTerm.module.css'

interface GlossaryTermProps {
  entry: GlossaryEntry
  children?: ReactNode
}

export function GlossaryTerm({ entry, children }: GlossaryTermProps) {
  const [isOpen, setIsOpen] = useState(false)
  const arrowRef = useRef<SVGSVGElement>(null)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(8), flip(), shift({ padding: 8 }), arrow({ element: arrowRef })],
    placement: 'top'
  })

  const hover = useHover(context)
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover, focus, dismiss, role
  ])

  useEffect(() => {
    const handleTouch = () => setIsOpen(false)
    if (isOpen) {
      document.addEventListener('touchstart', handleTouch)
      return () => document.removeEventListener('touchstart', handleTouch)
    }
  }, [isOpen])

  return (
    <>
      <span
        className={styles['glossary-term']}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {children}
      </span>
      {isOpen && (
        <FloatingPortal>
          <div
            className={styles.tooltip}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <div className={styles['tooltip-term']}>{entry.term}</div>
            <div className={styles['tooltip-translation']}>{entry.translation}</div>
            {entry.examples && entry.examples.length > 0 && (
              <div className={styles['tooltip-examples']}>
                {entry.examples.map((ex, i) => (
                  <div key={i} className={styles['tooltip-example']}>
                    <div className={styles['tooltip-example-en']}>{ex.en}</div>
                    <div className={styles['tooltip-example-es']}>{ex.es}</div>
                  </div>
                ))}
              </div>
            )}
            <FloatingArrow ref={arrowRef} context={context} fill="var(--bg-secondary)" />
          </div>
        </FloatingPortal>
      )}
    </>
  )
}
