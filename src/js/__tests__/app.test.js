import { isValid } from "../app";
import { cardTip } from "../app";

test("numberCard function", () => {
    let card_number = isValid("5469980270533124")
    let notCard = true
    expect(card_number).toBe(notCard)
})
test("notNumber function", () => {
    let card_number = isValid("1234567890232132")
    let notCard = false
    expect(card_number).toBe(notCard)
})
test("cardActiv function", () => {
    let newCard = cardTip("4")
    let newCard1 = cardTip("5")
    let newCard2 = cardTip("371")
    let newCard3 = cardTip("6")
    let newCard4 = cardTip("353")
    let newCard5 = cardTip("305")
    let newCard6 = cardTip("2")
    let newCard7 = cardTip("323")
    expect(newCard).toBe("1")
    expect(newCard1).toBe("2")
    expect(newCard2).toBe("3")
    expect(newCard3).toBe("4")
    expect(newCard4).toBe("5")
    expect(newCard5).toBe("6")
    expect(newCard6).toBe("7")
    expect(newCard7).toBe("0")
})