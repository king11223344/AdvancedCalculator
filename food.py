# can aalso be done by using inheritance
from turtle import Turtle
from random import randint
class Food:
    def __init__(self) :
        self.food=Turtle('circle')
        self.food.color('red')
        self.food.penup()
        self.food.speed('fastest')
        self.food.shapesize(stretch_len=0.45,stretch_wid=0.45)
        self.new_location()
        
    def new_location(self):
        self.food.goto(randint(-270,270),randint(-270,270))

