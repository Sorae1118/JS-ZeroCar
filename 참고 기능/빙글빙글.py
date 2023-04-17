import turtle as t
import colorsys as c
h=0
t.bgcolor('black')
t.tracer(20)
for i in range(2000):
    color = c.hsv_to_rgb(h,1,1)
    h+=0.01
    t.pencolor('black')
    t.fillcolor(color)
    t.begin_fill()
    t.forward(i)
    t.right(63)
    t.forward(i)
    t.right(142)
    t.forward(i)
    t.circle(i,259)
    t.forward(i)
    t.left(48)
    t.forward(i)
    t.end_fill()
t.done()
