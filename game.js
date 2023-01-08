// Suzdavame promenlivi
let myX = 55, myY = 500;
let sizeX = 50, sizeY = 50;
let bobX = 670, bobY = 70;
let moving = 0;
let gravity = 3, antiGravity = 0;
let level = 0;
let deds = 0;
function init() {
    // Kodut tuk se izpulnqva vednuj v nachaloto

}
function update() {
    // Kodut tuk se izpulnqva (okolo) 100 puti v sekunda
    /*myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;*/


}
function draw() {
    // Tuk naprogramirai kakvo da se risuva
    //drawImage(backDesert, 0, 0, 800, 600);

    if(level == 0){
        startScreen();
    };

    if(level == 1){
    bobX = 670;
    bobY = 70;
    Map1();
    igrachM1();
    };

    if(level == 2){
    bobX = 600;
    bobY = 400;
    Map2();
    igrachM1();
    };

    if(level == 3){
    endScreen();
    };
}
function mouseup() {
    // Pri klik s lqv buton - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);

    if(areColliding(mouseX, mouseY, 0, 0, 200, 200, 300, 200) && mouseup && level < 1){
        level += 1;
    };
}
function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}
function startScreen(){
    drawImage(start_button, 200, 200, 300, 200);

    context.font = "40px Arial"
    context.fillStyle = "Black"
    context.fillText("Circle Adventure 1", 200, 80, 400, 10);

    context.font = "20px Arial"
    context.fillStyle = "Black"
    context.fillText("A - move left", 50, 80, 400, 10);

    context.font = "20px Arial"
    context.fillStyle = "Black"
    context.fillText("D - move right", 50, 100, 400, 10);

    context.font = "20px Arial"
    context.fillStyle = "Black"
    context.fillText("Space - jump (hold = bigger jump)", 50, 120, 400, 10);

    context.font = "40px Arial"
    context.fillStyle = "Black"
    context.fillText("Bounce of walls, avoid the lava, use ropes to go higher and collect the beans", 50, 400, 700, 10);

    context.font = "40px Arial"
    context.fillStyle = "Black"
    context.fillText("Have fun playing Circle Adventure 1!", 150, 450, 400, 10);

    context.font = "10px Arial"
    context.fillStyle = "Black"
    context.fillText("Please ignore the bad drawings", 270, 20, 400, 10);
}
function endScreen(){
    context.font = "40px Arial"
    context.fillStyle = "Black"
    context.fillText("Thanks for playing Circle Adventure 1!", 200, 100, 400, 10);

    if(deds != 1){
    context.font = "20px Arial"
    context.fillStyle = "Black"
    context.fillText("You died " + deds + " times", 300, 200, 400, 10);
    }else{
        context.font = "20px Arial"
        context.fillStyle = "Black"
        context.fillText("You died 1 time", 300, 200, 400, 10);
    };
}
function Map2(){
    drawImage(bob, bobX, bobY, 50, 50);//bob
    drawImage(dirt_map_2, 0, 0, 50, 600);//left
    drawImage(dirt_map_2, 0, 0, 800, 50);//top
    drawImage(dirt_map_2, 0, 550, 800, 50);//bottom
    drawImage(dirt_map_2, 750, 0, 50, 600);//right

    drawImage(spikes, 170, 550 - 100, 200, 100);//spike

    drawImage(rope_map_1, 70, 50, 40, 400);//rope 1
    drawImage(rope_map_1, 300, 300, 60, 150);//rope 2

    drawImage(dirt_map_2, 150, 130, 20, 450)//wall 1
    drawImage(dirt_map_2, 300, 50, 100, 250)//wall 2

    //colision map2
    

    if(areColliding(myX, myY, sizeX, sizeY, bobX, bobY, 50, 50)){//bob
        level += 1;
    };

    if(areColliding(myX, myY, sizeX, sizeY, 300, 50, 100, 250) && myX <= 320 && myY < 250){//wall 2, left
        myX = 249.9;
        gravity--;
        gravity = 2;
    };

    if(areColliding(myX, myY, sizeX, sizeY, 300, 50, 100, 250) && myY >= 50){//wall 2, down
        myY = 300.1;
    };

   /* if(areColliding(myX, myY, sizeX, sizeY, 300, 50, 100, 250) && myX >= 160){//wall 2, right
        myX = 170.1;
        gravity--;
        gravity = 2;
    };*/

    if(areColliding(myX, myY, sizeX, sizeY, 170, 550 - 100, 200, 100)){//spike collision
        myX = 55;
        myY = 500;
        level = 1;
        deds += 1;
    };

    if(areColliding(myX, myY, sizeX, sizeY, 70, 50, 40, 400) && isKeyPressed[32]){//rope 1 collision
        myY -= 10;
        gravity = 0;
        antiGravity = 0
    };

    if(areColliding(myX, myY, sizeX, sizeY, 300, 300, 60, 150) && isKeyPressed[32]){//rope 2 collision
        myY -= 10;
        gravity = 0;
        antiGravity = 0
    };

    if(areColliding(myX, myY, sizeX, sizeY, 150, 130, 20, 450) && myY <= 130){//wall 1, top
        myY = 80;
        myY -= gravity;
        gravity = 0;
        antiGravity = 25;
    };

    if(areColliding(myX, myY, sizeX, sizeY, 150, 130, 20, 450) && myX <= 110){//wall 1, left
        myX = 100.1;
        gravity--;
        gravity = 2;
    };

    if(areColliding(myX, myY, sizeX, sizeY, 150, 130, 20, 450) && myX >= 160){//wall 1, right
        myX = 170.1;
        gravity--;
        gravity = 2;
    };

    if(areColliding(myX, myY, sizeX, sizeY, 0, 550, 800, 50)){//bottom
        myY -= gravity;
        gravity = 0;
        antiGravity = 25;
    }else{
        gravity++;
        antiGravity--;
    }

    if(areColliding(myX, myY, sizeX, sizeY, 0, 0, 50, 600)){//left
        myX = 50.1;
        gravity--;
        gravity = 2;
    }

    if(areColliding(myX, myY, sizeX, sizeY, 750, 0, 50, 600)){//right
        myX = 700.1;
        gravity--;
        gravity = 2;
    }

    if(areColliding(myX, myY, sizeX, sizeY, 0, 0, 800, 50)){//top
        myY = 51;
        antiGravity = 0;
    }
}

function Map1(){
    drawImage(bob, bobX, bobY, 50, 50);//bob
    drawImage(dirt_map_1, 0, 0, 50, 600);//left
    drawImage(dirt_map_1, 0, 0, 800, 50);//top
    drawImage(dirt_map_1, 0, 550, 800, 50);//bottom
    drawImage(dirt_map_1, 750, 0, 50, 600);//right

    drawImage(rope_map_1, 50, 50, 70, 300);//rope
    drawImage(rope_map_1, 360, 150, 70, 200);//rope above lava right
    drawImage(rope_map_1, 220, 150, 70, 200);//rope above lava left

    drawImage(dirt_map_1, 0, 450, 630, 20);//ramp down
    drawImage(dirt_map_1, 170, 130, 630, 20);// ramp up

    drawImage(lava_map_1, 230 , 400, 200, 50);//lava

    //collision map1

    if(areColliding(myX, myY, sizeX, sizeY, 230 , 400, 200, 50)){//lava colision
        myX = 50;
        myY = 500;
        deds++;
    };

    if(areColliding(myX, myY, sizeX, sizeY, 360, 150, 70, 200) && isKeyPressed[32]){//rope collision  above lava right
        myY -= 10;
        gravity = 0;
        antiGravity = 0
    };

    if(areColliding(myX, myY, sizeX, sizeY, 220, 150, 70, 200) && isKeyPressed[32]){//rope collision  above lava left
        myY -= 10;
        gravity = 0;
        antiGravity = 0
    };

    if(areColliding(myX, myY, sizeX, sizeY, 50, 50, 70, 300) && isKeyPressed[32]){//rope collision
        myY -= 10;
        gravity = 0;
        antiGravity = 0
    };

    if(areColliding(myX, myY, sizeX, sizeY, 170, 130, 630, 20) && myY <= 130 && myX > 150){//ramp up, up
        myY = 80;
        myY -= gravity;
        gravity = 0;
        antiGravity = 25;
    };

    if(areColliding(myX, myY, sizeX, sizeY, 170, 130, 630, 20) && myY >= 130 && myX < 630){//ramp up, down
        myY = 151;
        antiGravity = 0;
    };

    if(areColliding(myX, myY, sizeX, sizeY, 0, 450, 630, 20) && myY <= 450 && myX < 630){//ramp down, up
        myY = 400;
        myY -= gravity;
        gravity = 0;
        antiGravity = 25;
    };

    if(areColliding(myX, myY, sizeX, sizeY, 0, 450, 630, 20) && myY >= 450 && myX < 630){//ramp down, down
        myY = 471;
        antiGravity = 0;
    };

    //sides

    if(areColliding(myX, myY, sizeX, sizeY, bobX, bobY, 50, 50)){//bob
        level += 1;
        myX = 55;
        myY = 500;
    };

    if(areColliding(myX, myY, sizeX, sizeY, 0, 550, 800, 50)){//bottom
        myY -= gravity;
        gravity = 0;
        antiGravity = 25;
    }else{
        gravity++;
        antiGravity--;
    }

    if(areColliding(myX, myY, sizeX, sizeY, 0, 0, 50, 600)){//left
        myX = 50.1;
        gravity--;
        gravity = 2;
    }

    if(areColliding(myX, myY, sizeX, sizeY, 750, 0, 50, 600)){//right
        myX = 700.1;
        gravity--;
        gravity = 2;
    }

    if(areColliding(myX, myY, sizeX, sizeY, 0, 0, 800, 50)){//top
        myY = 51;
        antiGravity = 0;
    }
}
function igrachM1(){
    drawImage(circle, myX, myY, sizeX, sizeY);


//movement
    if(isKeyPressed[65]){//a
        moving--;
        myX += moving;
    }

    if(isKeyPressed[68]){//d
        moving++;
        myX += moving;
    }

    if(isKeyPressed[32]){//space
        antiGravity -= 1;
        myY -= antiGravity;
    }else{
        myY += gravity;
    }

    if(moving > 5){
        moving = 4;
    }

    if(moving < -5){
        moving = -4;
    }

    if(isKeyPressed[68] && areColliding(myX, myY, sizeX, sizeY, 0, 0, 50, 600 && level == 1)){
        moving += 60;
    }

    if(isKeyPressed[65] && areColliding(myX, myY, sizeX, sizeY, 750, 0, 50, 600)){
        moving -= 60;
    }
}
