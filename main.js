function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(450,450);
    canvas.position(560,100);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    background('#F344A9');
}

function modelLoaded()
{
    console.log('Model has been loaded');
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
}
}