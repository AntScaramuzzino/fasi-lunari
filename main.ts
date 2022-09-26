input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 8; index++) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # # . .
            # # # . .
            # # . . .
            # # # . .
            . # # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # # . .
            # # . . .
            # . . . .
            # # . . .
            . # # . .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
