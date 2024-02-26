radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 31) {
        basic.showString("Cool")
    }
    if (receivedNumber == 30) {
        basic.showString("Wow")
    }
    if (receivedNumber == 29) {
        basic.showString("Hi")
    }
    if (receivedNumber == 28) {
        basic.showString("Hello")
    }
    if (receivedNumber == 27) {
        basic.showString("Zzz")
    }
    if (receivedNumber == 26) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (receivedNumber == 25) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    }
    if (receivedNumber == 24) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            # . . . #
            `)
    }
    if (receivedNumber == 23) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # . . . #
            # . . . #
            # # # # #
            `)
    }
    if (receivedNumber == 22) {
        basic.showString("How are you")
    }
    if (receivedNumber == 21) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . # #
            . . . # #
            `)
    }
    if (receivedNumber == 20) {
        basic.showLeds(`
            . . . # #
            . . . # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    if (appno == 0) {
        if (appID == -100) {
            hourcalib += 1
            time = "" + hourcalib + ":" + ("" + minutecalib)
            if (hourcalib == 24) {
                hourcalib = 0
            }
            basic.showString(time, 20)
        }
        if (appID == 0) {
            appID = 6
        }
        if (appID == 6) {
            appID += 1
        }
        if (appID == 5) {
            appID += 1
            basic.showLeds(`
                # . # . #
                . # # # .
                # # . # #
                . # # # .
                # . # . #
                `)
        }
        if (appID == 4) {
            appID += 1
            basic.showLeds(`
                . . . . .
                # # # # #
                # . # . #
                # # # # #
                # . . . #
                `)
        }
        if (appID == 3) {
            appID += 1
            basic.showLeds(`
                . # # # .
                # . # . #
                # . # . #
                # . . . #
                . # # # .
                `)
        }
        if (appID == 2) {
            appID += 1
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # # # # #
                . . . . #
                `)
        }
        if (appID == 1) {
            appID += 1
            basic.showIcon(IconNames.Heart)
        }
        if (appID == 7) {
            appID += -6
            basic.showLeds(`
                # # # # #
                # . # . #
                # . # . #
                # . . # #
                # # # # #
                `)
        }
    }
    if (appno == 1) {
        basic.showString(time)
    }
    if (appno == 2) {
        basic.showNumber(stepcounter)
    }
    if (appno == 6) {
        if (appID == 83) {
            appID = 80
        }
    }
    if (appID == 81) {
        appID += 2
        basic.showLeds(`
            # # # # #
            # . # . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }
    if (appID == 80) {
        appID += 1
        basic.showLeds(`
            # # # # #
            # . # . #
            # . # . #
            # . . # #
            # # # # #
            `)
    }
    if (appno == 60) {
        appID += -180
    }
    if (appno == 61) {
        input.calibrateCompass()
    }
    if (appno == 3) {
        if (messagesymbol == 32) {
            messagesymbol = 20
        }
        if (messagesymbol == 31) {
            basic.showString("Cool")
            messagesymbol = 32
        }
        if (messagesymbol == 30) {
            basic.showString("Wow")
            messagesymbol = 31
        }
        if (messagesymbol == 29) {
            basic.showString("Hi")
            messagesymbol = 30
        }
        if (messagesymbol == 28) {
            basic.showString("Hello")
            messagesymbol = 29
        }
        if (messagesymbol == 27) {
            basic.showString("Zzz")
            messagesymbol = 28
        }
        if (messagesymbol == 26) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
            messagesymbol = 27
        }
        if (messagesymbol == 25) {
            basic.showLeds(`
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                `)
            messagesymbol = 26
        }
        if (messagesymbol == 24) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # # # # #
                # . . . #
                # . . . #
                `)
            messagesymbol = 25
        }
        if (messagesymbol == 23) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # . . . #
                # . . . #
                # # # # #
                `)
            messagesymbol = 24
        }
        if (messagesymbol == 22) {
            basic.showString("How are you")
            messagesymbol = 23
        }
        if (messagesymbol == 21) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                . . . # #
                . . . # #
                `)
            messagesymbol = 22
        }
        if (messagesymbol == 20) {
            basic.showLeds(`
                . . . # #
                . . . # #
                # # # # #
                # # # # #
                # # # # #
                `)
            messagesymbol = 21
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (appID == -100) {
        basic.showString(time)
        appID = 0
    }
    if (appID == 0) {
        basic.showString(time)
    }
    if (appno != 0) {
        appno = 0
        appID = 1
    }
})
input.onButtonPressed(Button.B, function () {
    let score: number;
if (appID == -100) {
        minutecalib += 1
        if (minutecalib == 60) {
            minutecalib = 0
        }
        basic.showString(time, 20)
    }
    if (appID == 0) {
        appID = -1
    }
    if (appID == 1) {
        appno = 1
        appID = 50
    }
    if (appID == 2) {
        appno = 2
    }
    if (appID == 3) {
        appno = 3
        messagesymbol = 20
    }
    if (appno == 4) {
        basic.showNumber(score)
    }
    if (appID == 4) {
        appno = 4
        score = 0
    }
    if (appID == 5) {
        appno = 5
    }
    if (appID == 0) {
        appno = 6
        appID = 80
    }
    if (appno == 2) {
        basic.showString("" + walkingDistance + "/" + ("" + runningDistance))
    }
    if (appID == 50) {
        appno = 10
    }
    if (appno == 12) {
        mincalibtimer = 0
        if (mincalibtimer < 60) {
            mincalibtimer += 1
        }
    }
    if (appID == 60) {
        appno = 40
    }
    if (appID == 61) {
        appno = 41
    }
    if (appID == 62) {
        appno = 42
    }
    if (appID == 80) {
        appno = 60
    }
    if (appID == 81) {
        appno = 61
    }
    if (appID == 82) {
        appno = 62
    }
    if (rps == 1) {
        userplayedrps = 1
    }
    if (rps == 2) {
        userplayedrps = 2
    }
    if (rps == 3) {
        userplayedrps = 3
    }
    if (appID == 70) {
        appno = 30
    }
    if (appID == 71) {
        appno = 31
    }
    if (messagesymbol == 20) {
        radio.sendNumber(20)
    }
    if (messagesymbol == 21) {
        radio.sendNumber(21)
    }
    if (messagesymbol == 22) {
        radio.sendNumber(22)
    }
    if (messagesymbol == 23) {
        radio.sendNumber(23)
    }
    if (messagesymbol == 24) {
        radio.sendNumber(24)
    }
    if (messagesymbol == 25) {
        radio.sendNumber(25)
    }
    if (messagesymbol == 26) {
        radio.sendNumber(26)
    }
    if (messagesymbol == 27) {
        radio.sendNumber(27)
    }
    if (messagesymbol == 28) {
        radio.sendNumber(28)
    }
    if (messagesymbol == 29) {
        radio.sendNumber(29)
    }
    if (messagesymbol == 30) {
        radio.sendNumber(30)
    }
    if (messagesymbol == 31) {
        radio.sendNumber(31)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (appno == 5) {
        rps += 1
        if (rps == 3) {
            rps = 0
        }
        if (rps == 2) {
            basic.showIcon(IconNames.Scissors)
        }
        if (rps == 1) {
            basic.showIcon(IconNames.Square)
        }
        if (rps == 1) {
            basic.showIcon(IconNames.SmallSquare)
        }
    }
    if (appno == 1) {
        basic.showNumber(Math.trunc(input.runningTime()))
    }
})
let compplayedrps = 0
let userplayedrps = 0
let mincalibtimer = 0
let runningDistance = 0
let walkingDistance = 0
let messagesymbol = 0
let score2 = 0
let minutecalib = 0
let hourcalib = 0
let rps = 0
let appno = 0
let stepcounter = 0
let appID = 0
let rps2 = 0
let time = ""
basic.showString("Champ Smart Watch OS", 40)
input.calibrateCompass()
radio.setGroup(109)
basic.showString("What is the time?", 50)
appID = -100
stepcounter = 0
appno = 0
rps = 0
time = "" + hourcalib + ":" + ("" + minutecalib)
score2 += 1
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) >= 1500 && input.acceleration(Dimension.Strength) < 2000) {
        stepcounter += 1
        walkingDistance += 0.0006
    }
    if (input.acceleration(Dimension.Strength) >= 2000) {
        stepcounter += 1
        runningDistance += 0.0007
    }
})
basic.forever(function () {
    basic.pause(60000)
    minutecalib += 1
    if (minutecalib == 60) {
        hourcalib += 1
        minutecalib = 0
    }
    if (hourcalib == 24) {
        hourcalib += 0
    }
})
basic.forever(function () {
    if (appno == 10) {
        basic.showString(time)
    }
})
basic.forever(function () {
    if (appno == 4) {
        if (input.compassHeading() < 23) {
            basic.showString("" + input.compassHeading() + ":" + "N")
        } else if (input.compassHeading() < 68) {
            basic.showString("" + input.compassHeading() + ":" + "NE")
        } else if (input.compassHeading() < 113) {
            basic.showString("" + input.compassHeading() + ":" + "E")
        } else if (input.compassHeading() < 158) {
            basic.showString("" + input.compassHeading() + ":" + "SE")
        } else if (input.compassHeading() < 203) {
            basic.showString("" + input.compassHeading() + ":" + "S")
        } else if (input.compassHeading() < 248) {
            basic.showString("" + input.compassHeading() + ":" + "SW")
        } else if (input.compassHeading() < 293) {
            basic.showString("" + input.compassHeading() + ":" + "W")
        } else if (input.compassHeading() < 338) {
            basic.showString("" + input.compassHeading() + ":" + "NW")
        } else {
            basic.showString("" + input.compassHeading() + ":" + "N")
        }
    }
})
basic.forever(function () {
    if (minutecalib < 10 && !(hourcalib < 10)) {
        time = "" + hourcalib + ":" + ("0" + ("" + minutecalib))
    }
    if (minutecalib >= 10 && !(hourcalib < 10)) {
        time = "" + hourcalib + ":" + ("" + minutecalib)
    }
    if (minutecalib < 10 && !(hourcalib >= 10)) {
        time = "0" + ("" + hourcalib) + ":" + ("0" + ("" + minutecalib))
    }
    if (minutecalib >= 10 && !(hourcalib >= 10)) {
        time = "0" + ("" + hourcalib) + ":" + ("" + minutecalib)
    }
})
basic.forever(function () {
    let userplayedrps2: number;
let appno2: number;
if (appno2 == 5) {
        compplayedrps = randint(1, 3)
    }
    if (compplayedrps == userplayedrps2 && userplayedrps2 != 0) {
        basic.showString("Draw")
    }
    if (compplayedrps == 1 && userplayedrps2 == 2 || (compplayedrps == 2 && userplayedrps2 == 3 || compplayedrps == 3 && userplayedrps2 == 1)) {
        basic.showString("Win")
    }
    if (compplayedrps == 2 && userplayedrps2 == 1 || (compplayedrps == 3 && userplayedrps2 == 2 || compplayedrps == 1 && userplayedrps2 == 3)) {
        basic.showString("Lose")
    }
    userplayedrps2 = 0
    compplayedrps = 0
    appno2 = 5
})
