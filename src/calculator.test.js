import { describe, it, expect  } from 'vitest'
import { add, subtract } from './calculator'

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

describe('subtract', () => {
    it('1 - 2 應該等於-1', () => {
        expect(subtract(1,2)).toBe(-1)
    })
})

describe('subtract', () => {
    it('5 - 2 應該等於 3', () => {
        expect(subtract(5, 2)).toBe(3)
    })
})

describe('multiply', () => {
    it('5 * 2 應該等於 10', () => {
        expect(multiply(5, 2)).toBe(10)
    }),
    it('5 * 0 應該等於 0', () => {
        expect(multiply(5, 0)).toBe(0)
    })
})