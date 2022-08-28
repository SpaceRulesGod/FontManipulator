nose_X = 0;
nose_Y=0;
leftWrist = 0;
rightWrist = 0;
difference = 0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,550);
    canvas.position(560,75);

    poseNet = ml5.poseNet(video, modelLoaded);//Initiallized
    poseNet.on('pose', gotPoses);//Execution
}

function modelLoaded(){
    console.log("Posenet has been initiallized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_X = results[0].pose.nose.x;
        nose_Y = results[0].pose.nose.y;
        console.log("Nose_X is"+ nose_X + "Nose_Y is"+ nose_Y);

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
        console.log("Left Wrist is " + leftWrist + "Right Wrist is " + rightWrist + "Difference is " + difference);
    }
}

function draw(){
    background("grey")
    fill("red");
    textSize(difference);
    text("Ishaan",nose_X,nose_Y);
    document.getElementById("square_sides").innerHTML = "Width & Heigth of the Font is "+difference+"px";
}
