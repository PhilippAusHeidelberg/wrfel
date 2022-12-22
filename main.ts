input.onButtonEvent(Button.A, ButtonEvent.Click, function () {
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showString("-")
    basic.showNumber(randint(1, 6), 150)
})
input.onButtonEvent(Button.B, ButtonEvent.Click, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
