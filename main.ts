let Temperatur = 0
basic.forever(function () {
    Temperatur = input.temperature()
    if (input.temperature() < 20) {
        Temperatur = 20
    } else if (input.temperature() > 35) {
        Temperatur = 35
    }
    pins.servoWritePin(AnalogPin.P0, pins.map(
    input.temperature(),
    20,
    35,
    0,
    180
    ))
})
