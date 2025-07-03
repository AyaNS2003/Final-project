import { expect } from "chai"
import { shuffle } from "../starter/src/shuffle.js"
describe ("array length", () => {
    it("should have the same length as the original array", () => {
        const arr = [1,2,3,4,5]

        expect(shuffle(arr).length).lessThanOrEqual(arr.length)
    })
}
)