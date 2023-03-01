from turtle import Turtle
startpostion=[(0,0),(-20,0),(-40,0)]
move_distance=20
class SnakeBody:
    def __init__(self) :
        self.segment=[]
        self.create_snake()
        
      
    def create_snake(self):
        for i in startpostion:
            self.add_segment(i)
            
    def add_segment(self,position):
        nsegment=Turtle('square')
        nsegment.color('white')
        nsegment.penup()
        nsegment.speed('fastest')
        nsegment.goto(position)
        self.segment.append(nsegment)
    def reset(self):
        self.segment.clear()
        self.create_snake()
    def extend(self):
        self.add_segment(self.segment[-1].position())

    def move(self):
        for i in range(len(self.segment)-1,0,-1):
            new_position=self.segment[i-1].position()
            self.segment[i].goto(new_position[0],new_position[1])
        self.segment[0].forward(move_distance)
    def moveup(self):
        if self.segment[0].heading() != 270:
            self.segment[0].setheading(90)
    def movedown(self):
        if self.segment[0].heading() != 90:

            self.segment[0].setheading(270)
    def moveright(self):
        if self.segment[0].heading() != 180:
            self.segment[0].setheading(0)
    def moveleft(self):
        if self.segment[0].heading() != 0:

            self.segment[0].setheading(180)
    


