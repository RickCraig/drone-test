import assert from 'assert'
import { testMe, addUp } from '../index.js'

describe("Test for testMe", () => {
    for (let i = 0; i < 10; i++) {
        const a = Math.ceil(Math.random()*10000)
        const b = Math.ceil(Math.random()*10000)
        it(`should multiply ${a} with ${b} correctly`, () => {
            assert.equal(testMe(a, b), a * b)
        })
    }
})

describe("Test for addUp", () => {
    for (let i = 0; i < 10; i++) {
        const a = Math.ceil(Math.random()*10000)
        const b = Math.ceil(Math.random()*10000)
        it(`should add ${a} to ${b} correctly`, () => {
            assert.equal(addUp(a, b), a + b)
        })
    }
})