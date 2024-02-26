def on_received_number(receivedNumber):
    if receivedNumber == 31:
        basic.show_string("Cool")
    if receivedNumber == 30:
        basic.show_string("Wow")
    if receivedNumber == 29:
        basic.show_string("Hi")
    if receivedNumber == 28:
        basic.show_string("Hello")
    if receivedNumber == 27:
        basic.show_string("Zzz")
    if receivedNumber == 26:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            """)
    if receivedNumber == 25:
        basic.show_leds("""
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            """)
    if receivedNumber == 24:
        basic.show_leds("""
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            # . . . #
            """)
    if receivedNumber == 23:
        basic.show_leds("""
            . # . # .
            . . . . .
            # . . . #
            # . . . #
            # # # # #
            """)
    if receivedNumber == 22:
        basic.show_string("How are you")
    if receivedNumber == 21:
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            . . . # #
            . . . # #
            """)
    if receivedNumber == 20:
        basic.show_leds("""
            . . . # #
            . . . # #
            # # # # #
            # # # # #
            # # # # #
            """)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global hourcalib, time, appID, messagesymbol
    if appno == 0:
        if appID == -100:
            hourcalib += 1
            time = "" + str(hourcalib) + ":" + ("" + str(minutecalib))
            if hourcalib == 24:
                hourcalib = 0
            basic.show_string(time, 20)
        if appID == 0:
            appID = 6
        if appID == 6:
            appID += 1
        if appID == 5:
            appID += 1
            basic.show_leds("""
                # . # . #
                . # # # .
                # # . # #
                . # # # .
                # . # . #
                """)
        if appID == 4:
            appID += 1
            basic.show_leds("""
                . . . . .
                # # # # #
                # . # . #
                # # # # #
                # . . . #
                """)
        if appID == 3:
            appID += 1
            basic.show_leds("""
                . # # # .
                # . # . #
                # . # . #
                # . . . #
                . # # # .
                """)
        if appID == 2:
            appID += 1
            basic.show_leds("""
                # # # # #
                # . . . #
                # . . . #
                # # # # #
                . . . . #
                """)
        if appID == 1:
            appID += 1
            basic.show_icon(IconNames.HEART)
        if appID == 7:
            appID += -6
            basic.show_leds("""
                # # # # #
                # . # . #
                # . # . #
                # . . # #
                # # # # #
                """)
    if appno == 1:
        basic.show_string(time)
    if appno == 2:
        basic.show_number(stepcounter)
    if appno == 6:
        if appID == 83:
            appID = 80
    if appID == 81:
        appID += 2
        basic.show_leds("""
            # # # # #
            # . # . #
            # . # . #
            # . . . #
            # # # # #
            """)
    if appID == 80:
        appID += 1
        basic.show_leds("""
            # # # # #
            # . # . #
            # . # . #
            # . . # #
            # # # # #
            """)
    if appno == 60:
        appID += -180
    if appno == 61:
        input.calibrate_compass()
    if appno == 3:
        if messagesymbol == 32:
            messagesymbol = 20
        if messagesymbol == 31:
            basic.show_string("Cool")
            messagesymbol = 32
        if messagesymbol == 30:
            basic.show_string("Wow")
            messagesymbol = 31
        if messagesymbol == 29:
            basic.show_string("Hi")
            messagesymbol = 30
        if messagesymbol == 28:
            basic.show_string("Hello")
            messagesymbol = 29
        if messagesymbol == 27:
            basic.show_string("Zzz")
            messagesymbol = 28
        if messagesymbol == 26:
            basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                """)
            messagesymbol = 27
        if messagesymbol == 25:
            basic.show_leds("""
                . # . # .
                . . . . .
                . . . . .
                . . . . .
                # # # # #
                """)
            messagesymbol = 26
        if messagesymbol == 24:
            basic.show_leds("""
                . # . # .
                . . . . .
                # # # # #
                # . . . #
                # . . . #
                """)
            messagesymbol = 25
        if messagesymbol == 23:
            basic.show_leds("""
                . # . # .
                . . . . .
                # . . . #
                # . . . #
                # # # # #
                """)
            messagesymbol = 24
        if messagesymbol == 22:
            basic.show_string("How are you")
            messagesymbol = 23
        if messagesymbol == 21:
            basic.show_leds("""
                # # # # #
                # # # # #
                # # # # #
                . . . # #
                . . . # #
                """)
            messagesymbol = 22
        if messagesymbol == 20:
            basic.show_leds("""
                . . . # #
                . . . # #
                # # # # #
                # # # # #
                # # # # #
                """)
            messagesymbol = 21
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global appID, appno
    if appID == -100:
        basic.show_string(time)
        appID = 0
    if appID == 0:
        basic.show_string(time)
    if appno != 0:
        appno = 0
        appID = 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global minutecalib, appID, appno, messagesymbol, mincalibtimer, userplayedrps
    if appID == -100:
        minutecalib += 1
        if minutecalib == 60:
            minutecalib = 0
        basic.show_string(time, 20)
    if appID == 0:
        appID = -1
    if appID == 1:
        appno = 1
        appID = 50
    if appID == 2:
        appno = 2
    if appID == 3:
        appno = 3
        messagesymbol = 20
    if appno == 4:
        basic.show_number(score)
    if appID == 4:
        appno = 4
        score = 0
    if appID == 5:
        appno = 5
    if appID == 0:
        appno = 6
        appID = 80
    if appno == 2:
        basic.show_string("" + str(walkingDistance) + "/" + ("" + str(runningDistance)))
    if appID == 50:
        appno = 10
    if appno == 12:
        mincalibtimer = 0
        if mincalibtimer < 60:
            mincalibtimer += 1
    if appID == 60:
        appno = 40
    if appID == 61:
        appno = 41
    if appID == 62:
        appno = 42
    if appID == 80:
        appno = 60
    if appID == 81:
        appno = 61
    if appID == 82:
        appno = 62
    if rps == 1:
        userplayedrps = 1
    if rps == 2:
        userplayedrps = 2
    if rps == 3:
        userplayedrps = 3
    if appID == 70:
        appno = 30
    if appID == 71:
        appno = 31
    if messagesymbol == 20:
        radio.send_number(20)
    if messagesymbol == 21:
        radio.send_number(21)
    if messagesymbol == 22:
        radio.send_number(22)
    if messagesymbol == 23:
        radio.send_number(23)
    if messagesymbol == 24:
        radio.send_number(24)
    if messagesymbol == 25:
        radio.send_number(25)
    if messagesymbol == 26:
        radio.send_number(26)
    if messagesymbol == 27:
        radio.send_number(27)
    if messagesymbol == 28:
        radio.send_number(28)
    if messagesymbol == 29:
        radio.send_number(29)
    if messagesymbol == 30:
        radio.send_number(30)
    if messagesymbol == 31:
        radio.send_number(31)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global rps
    if appno == 5:
        rps += 1
        if rps == 3:
            rps = 0
        if rps == 2:
            basic.show_icon(IconNames.SCISSORS)
        if rps == 1:
            basic.show_icon(IconNames.SQUARE)
        if rps == 1:
            basic.show_icon(IconNames.SMALL_SQUARE)
    if appno == 1:
        basic.show_number(int(input.running_time()))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

compplayedrps = 0
userplayedrps = 0
mincalibtimer = 0
runningDistance = 0
walkingDistance = 0
messagesymbol = 0
minutecalib = 0
hourcalib = 0
score = 0
rps = 0
appno = 0
stepcounter = 0
appID = 0
time = ""
rps2 = 0
basic.show_string("Champ Smart Watch OS", 40)
input.calibrate_compass()
radio.set_group(109)
basic.show_string("What is the time?", 50)
appID = -100
stepcounter = 0
appno = 0
rps = 0
time = "" + str(hourcalib) + ":" + ("" + str(minutecalib))

def on_forever():
    global stepcounter, walkingDistance, runningDistance
    if input.acceleration(Dimension.STRENGTH) >= 1500 and input.acceleration(Dimension.STRENGTH) < 2000:
        stepcounter += 1
        walkingDistance += 0.0006
    if input.acceleration(Dimension.STRENGTH) >= 2000:
        stepcounter += 1
        runningDistance += 0.0007
basic.forever(on_forever)

def on_forever2():
    global minutecalib, hourcalib
    basic.pause(60000)
    minutecalib += 1
    if minutecalib == 60:
        hourcalib += 1
        minutecalib = 0
    if hourcalib == 24:
        hourcalib += 0
basic.forever(on_forever2)

def on_forever3():
    if appno == 10:
        basic.show_string(time)
basic.forever(on_forever3)

def on_forever4():
    if appno == 4:
        if input.compass_heading() < 23:
            basic.show_string("" + str(input.compass_heading()) + ":" + "N")
        elif input.compass_heading() < 68:
            basic.show_string("" + str(input.compass_heading()) + ":" + "NE")
        elif input.compass_heading() < 113:
            basic.show_string("" + str(input.compass_heading()) + ":" + "E")
        elif input.compass_heading() < 158:
            basic.show_string("" + str(input.compass_heading()) + ":" + "SE")
        elif input.compass_heading() < 203:
            basic.show_string("" + str(input.compass_heading()) + ":" + "S")
        elif input.compass_heading() < 248:
            basic.show_string("" + str(input.compass_heading()) + ":" + "SW")
        elif input.compass_heading() < 293:
            basic.show_string("" + str(input.compass_heading()) + ":" + "W")
        elif input.compass_heading() < 338:
            basic.show_string("" + str(input.compass_heading()) + ":" + "NW")
        else:
            basic.show_string("" + str(input.compass_heading()) + ":" + "N")
basic.forever(on_forever4)

def on_forever5():
    global time
    if minutecalib < 10 and not (hourcalib < 10):
        time = "" + str(hourcalib) + ":" + ("0" + ("" + str(minutecalib)))
    if minutecalib >= 10 and not (hourcalib < 10):
        time = "" + str(hourcalib) + ":" + ("" + str(minutecalib))
    if minutecalib < 10 and not (hourcalib >= 10):
        time = "0" + ("" + str(hourcalib)) + ":" + ("0" + ("" + str(minutecalib)))
    if minutecalib >= 10 and not (hourcalib >= 10):
        time = "0" + ("" + str(hourcalib)) + ":" + ("" + str(minutecalib))
basic.forever(on_forever5)

def on_forever6():
    global compplayedrps
    if appno2 == 5:
        compplayedrps = randint(1, 3)
    if compplayedrps == userplayedrps2 and userplayedrps2 != 0:
        basic.show_string("Draw")
    if compplayedrps == 1 and userplayedrps2 == 2 or (compplayedrps == 2 and userplayedrps2 == 3 or compplayedrps == 3 and userplayedrps2 == 1):
        basic.show_string("Win")
    if compplayedrps == 2 and userplayedrps2 == 1 or (compplayedrps == 3 and userplayedrps2 == 2 or compplayedrps == 1 and userplayedrps2 == 3):
        basic.show_string("Lose")
    userplayedrps2 = 0
    compplayedrps = 0
    appno2 = 5
basic.forever(on_forever6)
score += 1
