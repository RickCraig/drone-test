import assert from 'assert'
import { testMe } from '../index.js'

describe("Test for testMe", () => {
    for (let i = 0; i < 10; i++) {
        const a = Math.ceil(Math.random()*10000)
        const b = Math.ceil(Math.random()*10000)
        it(`should multiply ${a} with ${b} correctly`, () => {
            assert.equal(testMe(a, b), a * b)
        })
    }
})