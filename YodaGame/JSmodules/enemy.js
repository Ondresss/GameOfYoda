class Enemy {
    constructor(game){
        this.game = game;
        this.heightForE = this.game.gameHeight;
        this.widthForE = this.game.gameWidth;
        this.enemyStartX =  this.widthForE;
        this.enemyStartY = 50;
        this.enemySpeed = 4;
        this.context = this.game.context;
        this.enemyProjectileX = 600;
        this.enemyProjectileY = this.enemyStartY;
        this.switchSide = false;
        this.enemyImage = document.querySelector(".enemyImage");
    }

    invokeEnemy(context){
       this.animateEnemies();
        context.drawImage(this.enemyImage, this.enemyStartX,this.enemyStartY,100,100);
        
        
        
    }
   animateEnemies(){
        if(this.enemyStartX<600){
            this.enemySpeed = 0;
            this.enemyProjectile(this.context);
        }
        this.enemyStartX-=this.enemySpeed;;
    }
    enemyProjectile(context){
       this.animateProjectiles();
        context.fillStyle = 'red';
        context.fillRect(this.enemyProjectileX ,this.enemyProjectileY,30,30);
    }
   animateProjectiles(){
        if(this.enemyProjectileY>400){
            this.enemyProjectileX = 600;
            this.enemyProjectileY = 20;
            this.switchSide = true;
        } else if(this.switchSide){
            this.enemyProjectileX+=Math.random() * 3 + 1 ;
            this.enemyProjectileY+=Math.random() * 3 + 1;
            
        } else if(this.enemyProjectileY === 50){
            this.enemyProjectileX-=Math.random() * 2 + 1;
            this.enemyProjectileY+=Math.random() * 3 + 1;
        } else {
            this.enemyProjectileX-=Math.random() * 2 + 1;
            this.enemyProjectileY+=Math.random() * 3 + 1;
           

        }
       
   
       
     
    }
}