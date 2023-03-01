from turtle import Screen,Turtle
import snake_body
import scoreboard
import food
import time
foont=('Arial',30,'normal')
sc=Screen()

sc.setup(600,600)
sc.bgcolor('black')
sc.title('The Sanke Game')
sc.tracer(0)



snake=snake_body.SnakeBody()
is_game_on=True
snake_food=food.Food()
Score=scoreboard.ScoreBoard()
def game_exit():
    global is_game_on
    is_game_on=False

sc.listen()

sc.onkey(key='Up',fun=snake.moveup)
sc.onkey(key='Down',fun=snake.movedown)
sc.onkey(key='Right',fun=snake.moveright)
sc.onkey(key='Left',fun=snake.moveleft)
sc.onkey(game_exit,'Escape')
a=Turtle()
a.color('white')
a.ht()
snake_move_speed=0.1




while is_game_on:
    sc.update()
    time.sleep(snake_move_speed)
    snake.move()
    if snake.segment[0].distance(snake_food.food) < 15:
        snake_food.new_location()
        Score.score +=1
        snake.extend()
        snake_move_speed *=0.95
    if snake.segment[0].xcor()>280 or snake.segment[0].ycor()>280 or snake.segment[0].xcor()<-280 or snake.segment[0].ycor()<-280:
        for i in snake.segment:
            i.goto(1000,1000)
        snake.reset()
        snake.move()
        Score.score=0
        snake_move_speed=0.1
    for seg in snake.segment[1:]:
        if snake.segment[0].distance(seg)<10:
            for i in snake.segment:
                i.goto(1000,1000)
            snake.reset()
            snake.move()
            Score.score=0
            snake_move_speed=0.1
            
        Score.clear()
        Score.writ()
            

    
    

    
        

        
        
sc.exitonclick()

