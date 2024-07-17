# 17/07/24 - Straight Lines (#2)
This is a canvas to test how straight your lines are. Start by clicking onto
the screen and then draging the mouse to create the line. Let go of the mouse
when you are done with the line. The max score is 1 and the higher it is, the
less straight your line is.

This was quite an annoying project to make and the end result is very
inaccurate. I try to calculate the straightness of the line by a mathematical
concept called sinuosity which is basically the total length of the line
divided by the shortest possible line which is the straight line. I tried to
apply this concept by using the number of pixels present on the canvas after
the stroke to represent the total length of the line and the minimum amount of
pixels possible to get from the starting point to end point as the shortest
possible line.

The issue is that each time the mouse is dragged on a non-straight path, it
produces some extra gray pixels to create the illusion of a smooth diagonal
path. Unfortunately I could not figure out an accurate enough formula to
account for this so I consider this project to be a failure in it's aim.
However, from a programming perspective I did learn a couple of things:
- Basic methods and usages of the HTML canvas api
- One of my first times using the 'useRef' hook so I am slightly more confident
with using it

Maybe in the future I can create a true version of this project but I am glad
to lay this one to rest for now.