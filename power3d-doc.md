How to use Power3D:

Part 1 - Creating a cube:
Import the Power3D module:

from Power3D import *

First, you will need a cube model. Try the following code to create a cube model:

cube = (((-1.0,1.0,1.0),(1.0,1.0,1.0),(1.0,-1.0,1.0),(-1.0,-1.0,1.0),(-1.0,1.0,-1.0),(1.0,1.0,-1.0),(1.0,-1.0,-1.0),(-1.0,-1.0,-1.0)),((0,1),(1,2),(2,3),(3,0),(4,5),(5,6),(6,7),(7,4),(0,4),(1,5),(2,6),(3,7)),((0,1,2,3),(4,5,6,7),(0,4,5,1),(1,5,6,2),(2,6,7,3),(0,3,7,4)))

Now we need to create a game object out of that model and add it to the scene. Use the GameObject class:

myCube = GameObject(cube,0)
addToScene(myCube)

The first parameter is the model, and the second is the texture to put on it. If you don't want a texture, just pu 0.
We'll get into loading textures later.

Next, point the camera forward (in later versions, the camera will by default be pointed at the scene):

rotateCamera(0,-90)

We now need to create a main game loop. It's not too hard. Just do this:

while True:
    drawScene()

It just looks like a square, so let's move it so we can see the sides. Change the game loop to this:

deg=0
while True:
    drawScene()
    myCube.x=math.cos(math.radians(deg))*3
    myCube.y=math.sin(math.radians(deg))*3
    deg += 1

Part 2 - Loading Textures:

As you remember from the first part, we can add textures to objects. Let's see how:

tex = loadTexture('<filename>.png')
myCube = GameObject(cube,tex)

You obviously need to replace <filename> with the actual name of your texture file.
