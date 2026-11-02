import { describe, it, expect  } from 'vitest'
import { add } from './calculator'

describe('add', () => {
    it('1 + 2 應該等於3', () => {
        expect(add(1,2)).toBe(3)
    })
})

describe('add', () => {
    it('1 - 2 應該等於-1', () => {
        expect(add(1,-2)).toBe(-1)
    })
})