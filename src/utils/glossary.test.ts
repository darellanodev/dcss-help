import { describe, it, expect } from 'vitest'
import React from 'react'
import { parseGlossaryText } from './glossary'
import type { GlossaryEntry } from '../types/god'

const MockTerm: React.FC<{ entry: GlossaryEntry; children?: React.ReactNode }> = ({ entry, children }) => {
  return React.createElement('span', { 'data-term': entry.key }, children)
}

function flattenElements(node: React.ReactNode): React.ReactElement[] {
  const result: React.ReactElement[] = []
  React.Children.forEach(node, child => {
    if (React.isValidElement(child)) {
      if (child.type === React.Fragment) {
        result.push(...flattenElements(child.props.children))
      } else {
        result.push(child)
      }
    }
  })
  return result
}

function isMockTerm(el: React.ReactElement): boolean {
  return el.type === MockTerm
}

describe('parseGlossaryText', () => {
  const glossary: GlossaryEntry[] = [
    {
      term: 'lunges',
      translation: 'estocadas',
      examples: [
        { en: 'He lunges forward.', es: 'Él avanza con una estocada.' }
      ]
    },
    {
      term: 'wall jumps',
      translation: 'saltos de pared',
      examples: []
    }
  ]

  it('returns plain HTML span when glossary is empty', () => {
    const result = parseGlossaryText('<p>hello</p>', [], MockTerm)
    expect(result).toHaveLength(1)
    const el = result[0] as React.ReactElement
    expect(el.type).toBe('span')
    expect(el.props.dangerouslySetInnerHTML.__html).toBe('<p>hello</p>')
  })

  it('returns plain HTML span when glossary is undefined', () => {
    const result = parseGlossaryText('<p>hello</p>', undefined, MockTerm)
    expect(result).toHaveLength(1)
    const el = result[0] as React.ReactElement
    expect(el.props.dangerouslySetInnerHTML.__html).toBe('<p>hello</p>')
  })

  it('wraps a glossary term in GlossaryTerm component', () => {
    const result = parseGlossaryText('Disciples execute punishing lunges.', glossary, MockTerm)
    const elements = flattenElements(result)
    const termEls = elements.filter(isMockTerm)
    expect(termEls).toHaveLength(1)
    expect(termEls[0].props.entry.term).toBe('lunges')
    expect(termEls[0].props.children).toBe('lunges')
  })

  it('preserves surrounding text', () => {
    const result = parseGlossaryText('Disciples execute punishing lunges.', glossary, MockTerm)
    const allText = JSON.stringify(result)
    expect(allText).toContain('Disciples')
    expect(allText).toContain('punishing')
  })

  it('wraps multiple glossary terms', () => {
    const result = parseGlossaryText(
      'They use wall jumps and lunges.',
      glossary,
      MockTerm
    )
    const elements = flattenElements(result)
    const terms = elements.filter(isMockTerm).map(el => el.props.entry.term)
    expect(terms).toContain('wall jumps')
    expect(terms).toContain('lunges')
  })

  it('preserves HTML tags around glossary terms', () => {
    const result = parseGlossaryText(
      'Disciples <span class="proper-noun">execute</span> punishing lunges.',
      glossary,
      MockTerm
    )
    const elements = flattenElements(result)
    const tagSpans = elements.filter(
      el => el.props.dangerouslySetInnerHTML?.__html?.includes('proper-noun')
    )
    expect(tagSpans.length).toBe(1)
  })

  it('does not wrap words inside proper-noun spans', () => {
    const glossaryWithTrog: GlossaryEntry[] = [
      {
        term: 'Trog',
        translation: 'Trog',
        examples: []
      }
    ]
    const result = parseGlossaryText(
      'Followers of <span class="proper-noun">Trog</span> burn.',
      glossaryWithTrog,
      MockTerm
    )
    const elements = flattenElements(result)
    const termEls = elements.filter(isMockTerm)
    expect(termEls).toHaveLength(0)
  })

  it('is case-insensitive for matching', () => {
    const result = parseGlossaryText('He performs LUNGES.', glossary, MockTerm)
    const elements = flattenElements(result)
    const termEls = elements.filter(isMockTerm)
    expect(termEls).toHaveLength(1)
    expect(termEls[0].props.children).toBe('LUNGES')
  })

  it('handles term at start of text', () => {
    const result = parseGlossaryText('Lunges are powerful.', glossary, MockTerm)
    const elements = flattenElements(result)
    const termEls = elements.filter(isMockTerm)
    expect(termEls).toHaveLength(1)
  })

  it('handles term at end of text', () => {
    const result = parseGlossaryText('Disciples use lunges', glossary, MockTerm)
    const elements = flattenElements(result)
    const termEls = elements.filter(isMockTerm)
    expect(termEls).toHaveLength(1)
  })

  it('handles term that is the entire text', () => {
    const result = parseGlossaryText('lunges', glossary, MockTerm)
    const elements = flattenElements(result)
    const termEls = elements.filter(isMockTerm)
    expect(termEls).toHaveLength(1)
    expect(termEls[0].props.children).toBe('lunges')
  })
})
