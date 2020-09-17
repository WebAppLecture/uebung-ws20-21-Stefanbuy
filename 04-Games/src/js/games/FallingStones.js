import { GameTemplate } from "./GameTemplate.js";
import { Paddle} from "../games/Pong.js";
import { MovableGameObject} from "../GameObject.js";
export class FallingStones extends GameTemplate {
    start(){
        this.gameOver=false;
        this.player = new Paddle(200, 450, 50, 50, 5);
        this.bullets = [];
        this.stones = []
        this.timer = 0;
        this.cooldown = 0;
        this.points = 0;
        this.lifes = 5;
        
    }
        
    bindControls(){
        
        this.inputBinding = {"left": this.player.left.bind(this.player), 
        "right": this.player.right.bind(this.player),
        "primary": this.createBullet.bind(this),};
    }
    
    createBullet(bool){
        if(bool === true){
        if(this.cooldown <=0){    
        this.bullets.push(new MovableGameObject(this.player.x+25, this.player.y, 10, 10, "#6bd26b", 0, -10));
        this.cooldown = 50;
            }
        //this.bullets.push( new MovableGameObject(200, 200, 10, 10, "green", 0, 10));
        
    }
    }

    createStone(){
        this.stones.push(new MovableGameObject(Math.floor(Math.random() * 350), 0, 50, 100, "#6bd26b", 0, 2));
    }

    
    update(ctx){
    this.player.update(ctx);
    this.updateStone(ctx); 
    this.cooldown -=1;
    let colission = false;
    for(let i = this.bullets.length-1;i>=0;i--){
        this.bullets[i].update(ctx);
        colission = false;
       

        for(let j = this.stones.length-1;j>=0;j--){
            if(this.bullets[i].y<this.stones[j].y+this.stones[j].height){
                if(this.bullets[i].x<this.stones[j].x+this.stones[j].width){
                    if(this.bullets[i].x+this.bullets[i].width>this.stones[j].x){
                        this.bullets.splice(i,1);this.stones.splice(j,1);
                        colission = true;
                        this.points += 1;
                        break;
                    }
                }
            

            }
        }

        if(colission ==false && this.bullets[i].y<0){
            this.bullets.splice(i,1);
        }
/*collision
      for(let j = this.bullets.length-1;j>=0;j--){
            //a right b; left 
    if (this.bullets[i].x > this.stones[j].x+this.stones[j].width||this.bullets[i].x+this.bullets[i].width < this.stones[j].x){}else
    {this.bullets.splice(i,1);this.stones.splice(j,1);break;} 
         
        }
*/

    }
}

    updateStone(ctx){
        this.timer +=1;
        if(this.timer-60>=0){this.createStone();this.timer=0;}
        for(let i = this.stones.length-1;i>=0;i--){
            this.stones[i].update(ctx);
            if(this.stones[i].y>500){
                this.stones.splice(i,1);
                this.lifes -= 1;
                if(this.lifes == 0){
                   this.gameOverText[3]="Points "+this.points;
                    this.gameOver=true;
                }
            }
        }    


    }


    draw(ctx){
        this.player.draw(ctx)
        this.bullets.forEach(bullet=>bullet.draw(ctx));
        this.stones.forEach(stone=>stone.draw(ctx))
        ctx.fillStyle = "#498b49";
        ctx.font = "6vh Arial";
        ctx.fillText(""+this.lifes, this.player.x+15, this.player.y+30);
    }

    static get NAME() {
        return "FallingStones";
    }
}