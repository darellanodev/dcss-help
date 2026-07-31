import React from 'react'
import type { GlossaryEntry } from '../types/god'

type TextNode = string | { term: string; match: string }

type GlossaryComponentProps = { entry: GlossaryEntry; children?: React.ReactNode }
type GlossaryComponent = React.ComponentType<GlossaryComponentProps>

export function parseGlossaryText(
  html: string,
  glossary: GlossaryEntry[] | undefined,
  GlossaryTermComponent: GlossaryComponent
): React.ReactNode[] {
  if (!glossary || glossary.length === 0) {
    return [React.createElement('span', { dangerouslySetInnerHTML: { __html: html } })]
  }

  const entries = glossary.map(e => ({
    entry: e,
    regex: new RegExp(`\\b${escapeRegex(e.term)}\\b`, 'gi')
  }))

  const tokens = htmlToTokens(html)
  const result: React.ReactNode[] = []

  for (const token of tokens) {
    if (token.type === 'tag') {
      result.push(React.createElement('span', {
        key: token.key,
        dangerouslySetInnerHTML: { __html: token.value }
      }))
      continue
    }

    let textNodes: TextNode[] = [token.value]
    const childElements: React.ReactNode[] = []
    let key = 0

    for (const { entry, regex } of entries) {
      const newNodes: TextNode[] = []
      for (const node of textNodes) {
        if (typeof node !== 'string') {
          newNodes.push(node)
          continue
        }
        regex.lastIndex = 0
        let lastIndex = 0
        let match: RegExpExecArray | null
        while ((match = regex.exec(node)) !== null) {
          if (match.index > lastIndex) {
            newNodes.push(node.slice(lastIndex, match.index))
          }
          newNodes.push({ term: entry.term, match: match[0] })
          lastIndex = regex.lastIndex
        }
        if (lastIndex < node.length) {
          newNodes.push(node.slice(lastIndex))
        }
      }
      textNodes = newNodes
    }

    for (const node of textNodes) {
      if (typeof node === 'string') {
        childElements.push(node)
      } else {
        const entry = entries.find(
          e => e.entry.term.toLowerCase() === node.term.toLowerCase()
        )
        if (entry) {
          childElements.push(
            React.createElement(
              GlossaryTermComponent,
              { key: `g-${token.key}-${key++}`, entry: entry.entry },
              node.match
            )
          )
        } else {
          childElements.push(node.match)
        }
      }
    }

    if (childElements.length === 1) {
      result.push(childElements[0])
    } else if (childElements.length > 1) {
      result.push(React.createElement(React.Fragment, { key: `f-${token.key}` }, ...childElements))
    }
  }

  return result
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

interface Token {
  type: 'text' | 'tag'
  value: string
  key: string
}

function htmlToTokens(html: string): Token[] {
  const tokens: Token[] = []
  const tagRegex = /(<[^>]+>)/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  let tagIndex = 0

  while ((match = tagRegex.exec(html)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({
        type: 'text',
        value: html.slice(lastIndex, match.index),
        key: `t-${tagIndex++}`
      })
    }

    const tagStr = match[1]
    const isProperNounOpen = /^<span\s+class="proper-noun"/.test(tagStr)

    if (isProperNounOpen) {
      const closeTag = '</span>'
      const closeIndex = html.indexOf(closeTag, tagRegex.lastIndex)
      if (closeIndex !== -1) {
        const fullSpan = html.slice(match.index, closeIndex + closeTag.length)
        tokens.push({
          type: 'tag',
          value: fullSpan,
          key: `tag-${tagIndex++}`
        })
        lastIndex = closeIndex + closeTag.length
        tagRegex.lastIndex = lastIndex
        continue
      }
    }

    tokens.push({
      type: 'tag',
      value: tagStr,
      key: `tag-${tagIndex++}`
    })
    lastIndex = tagRegex.lastIndex
  }

  if (lastIndex < html.length) {
    tokens.push({
      type: 'text',
      value: html.slice(lastIndex),
      key: `t-${tagIndex++}`
    })
  }

  return tokens
}
