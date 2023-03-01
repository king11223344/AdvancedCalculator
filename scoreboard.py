from turtle import Turtle
foont=('Arial',30,'normal')
class ScoreBoard(Turtle):
    def __init__(self):
        super().__init__()
        self.score=0
        with open('high_score.txt') as f:
            a=int(f.read())
        self.highscore=a
        self.penup()
        self.ht()
        self.color('white')
        self.goto(0,250)
        self.writ()

    def writ(self):
        if self.score>self.highscore:
            self.highscore=self.score
            with open('high_score.txt','w') as f:
                f.write(str(self.highscore))
        self.write(f'Score:{self.score}  High score : {self.highscore}',align='center',font=foont)
    