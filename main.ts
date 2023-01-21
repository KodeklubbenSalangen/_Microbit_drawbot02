function tegnRunning () {
    bitbot.move(BBMotor.Right, BBDirection.Forward, 80)
    bitbot.move(BBMotor.Left, BBDirection.Forward, 0)
    basic.pause(2000)
    bitbot.stop(BBStopMode.Coast)
}
function tegnFirkant () {
    for (let index = 0; index < 4; index++) {
        bitbot.goms(BBDirection.Forward, 25, 1000)
        bitbot.rotatems(BBRobotDirection.Left, 20, 450)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.pause(1000)
    tegnFirkant()
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(1000)
    tegnTrekant()
})
input.onButtonPressed(Button.B, function () {
    basic.pause(1000)
    tegnRunning()
})
function tegnTrekant () {
    for (let index = 0; index < 3; index++) {
        bitbot.goms(BBDirection.Forward, 25, 1000)
        bitbot.rotatems(BBRobotDirection.Left, 20, 600)
    }
}
bitbot.select_model(BBModel.XL)
