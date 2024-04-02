input.onGesture(Gesture.Shake, function () {
    numero += randint(1, 3)
    if (numero == 1) {
        basic.showIcon(IconNames.Chessboard)
    } else if (numero == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let numero = 0
basic.clearScreen()
numero += 0
basic.forever(function () {
	
})
