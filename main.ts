cuteBot.trackEvent(cuteBot.MbPins.Left, cuteBot.MbEvents.FindLine, function () {
    cuteBot.motors(20, -10)
    cuteBot.moveTime(cuteBot.Direction.forward, 30, 1)
})
input.onButtonPressed(Button.A, function () {
    basic.pause(500)
    cuteBot.moveTime(cuteBot.Direction.forward, 100, 1)
    basic.pause(500)
    cuteBot.moveTime(cuteBot.Direction.backward, 100, 1)
    basic.pause(500)
    cuteBot.stopcar()
})
cuteBot.trackEvent(cuteBot.MbPins.Right, cuteBot.MbEvents.FindLine, function () {
    cuteBot.motors(-10, 20)
    cuteBot.moveTime(cuteBot.Direction.forward, 30, 1)
})
input.onButtonPressed(Button.B, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    scared.showImage(0)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    basic.pause(2000)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    timer = 0
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 999, 3317, 255, 76, 200, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 3094, 3050, 255, 76, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 419, 2024, 255, 76, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 2069, 2871, 0, 255, 400, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
})
let dist = 0
let timer = 0
let scared: Image = null
let happy = images.createImage(`
    # # . # #
    # . . . #
    . . . . .
    # . . . #
    . # # # .
    `)
scared = images.createImage(`
    # # . # #
    . . . . .
    . # # # .
    # . . . #
    . # # # .
    `)
let sad = images.createImage(`
    . . . . .
    # # . # #
    . . . . .
    . # # # .
    # . . . #
    `)
loops.everyInterval(60000, function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    basic.pause(500)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    basic.pause(500)
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
    cuteBot.closeheadlights()
})
basic.forever(function () {
    dist = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (dist >= 10) {
        cuteBot.motors(40, 40)
    } else if (dist >= 7 && dist < 10) {
        cuteBot.stopcar()
        cuteBot.motors(-20, -20)
    }
})
basic.forever(function () {
    basic.pause(1000)
    timer += 1
    if (timer >= 30) {
        sad.showImage(0)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        basic.pause(200)
    }
})
