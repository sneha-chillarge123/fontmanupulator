function preload(){

}

function setup(){
    video=createCapture(VIDEO);
    video.position(100,120);
    canvas=createCanvas(550,400);
    video.size(550,500);
    canvas.position(700,170);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#eecfff');
}

function modelLoaded(){
    console.log('posenet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}