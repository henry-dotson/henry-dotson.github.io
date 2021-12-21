

window.onload = function () {
  /* Bindings */
  var seconds = 00;
  var tens = 00;
  var minutes = 00;
  var Interval;
  const appendTens = document.getElementById("tens");
  const appendSeconds = document.getElementById("seconds");
  const appendMinutes = document.getElementById("minutes");
  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const buttonReset = document.getElementById('button-reset');
  const powerSwitch = document.getElementById('powerSwitch');
  const stopwatch = document.getElementById('stopwatch');
  const warmup = document.getElementById("warmup");
  const poses = document.getElementById("poses");
  const posepatterns = document.getElementById("posepatterns");
  const walks = document.getElementById("walks");
  const walkrounds = document.getElementById("walkrounds");
  const power = document.getElementById("power");
  const appendTitle = document.getElementById("workouttitle");
  const appendInstructions = document.getElementById("instructions");
  const appendWorkout = document.getElementById("workoutinfo");

  /* Data */
  const poseData = [
    {
        "poseName": "Chimp",
        "imgName": "chimp.png",
        "suit": "dotsy",
        "rank": 1,
        "poseDesc": "Stand feet shoulder width apart, squat to the floor, and place hands in front of you."
    },
    {
        "poseName": "Duck",
        "imgName": "duck.png",
        "suit": "dotsy",
        "rank": 2,
        "poseDesc": "Bring your feet together. Knees over toes. Hands can be out for balance, or behind head, or on hips."
    },
    {
        "poseName": "Ostrich",
        "imgName": "ostrich.png",
        "suit": "dotsy",
        "rank": 3,
        "poseDesc": "From a squat position interlock fingers and press hands to the floor. Raise hips until stretch in hamstrings."
    },
    {
        "poseName": "Horse",
        "imgName": "horse.png",
        "suit": "dotsy",
        "rank": 4,
        "poseDesc": "Feet shoulder width and a half apart. Lower until thigs are parallel to the ground."
    },
    {
        "poseName": "Cobra",
        "imgName": "cobra.png",
        "suit": "dotsy",
        "rank": 4,
        "poseDesc": "Hands behind head. Drive elbows back as far as you can."
    },
    {
        "poseName": "Giraffe",
        "imgName": "giraffe.png",
        "suit": "dotsy",
        "rank": 5,
        "poseDesc": "Interlock fingers and stretch upward as high as you can. Sway from side to side or rotate to stretch core."
    },
    {
        "poseName": "Turtle",
        "imgName": "turtle.png",
        "suit": "dotsy",
        "rank": 6,
        "poseDesc": "Assume a top pushup position with fingers facing you. Lean forward and pike."
    },
    {
        "poseName": "Seal",
        "imgName": "seal.png",
        "suit": "dotsy",
        "rank": 7,
        "poseDesc": "From face down prone, lift up with fingers facing towards you. Balance on hands and tops of feet."
    },
    {
        "poseName": "Chameleon 1",
        "imgName": "chameleon1.png",
        "suit": "dotsy",
        "rank": 8,
        "poseDesc": "From pushup down position, turn right hand facing backwards and right knee up to right hand. Balance on hands and feet."
    },
    {
        "poseName": "Chameleon 2",
        "imgName": "chameleon2.png",
        "suit": "dotsy",
        "rank": 8,
        "poseDesc": "From pushup down position, turn left hand facing backwards and left knee up to left hand. Balance on hands and feet."
    },
    {
        "poseName": "Gorilla",
        "imgName": "gorilla.png",
        "suit": "dotsy",
        "rank": 9,
        "poseDesc": "Downward facing dog with hammer fists."
    },
    {
        "poseName": "Crab",
        "imgName": "crab.png",
        "suit": "dotsy",
        "rank": 10,
        "poseDesc": "From seated, place hands behind you, palms facing away, and lift. Balance on hands and feet."
    },
    {
        "poseName": "Koala",
        "imgName": "koala.png",
        "suit": "dotsy",
        "rank": 11,
        "poseDesc": "From seated, place hands behind you, hammer fists with palms facing towards you, and lift until core and thighs are parallel to ground."
    },
    {
        "poseName": "Scorpion 1",
        "imgName": "scorpion1.png",
        "suit": "dotsy",
        "rank": 12,
        "poseDesc": "From down pushup position, rotate hands to facing backwards. Lift up left leg as high as possible."
    },
    {
        "poseName": "Scorpion 2",
        "imgName": "scorpion2.png",
        "suit": "dotsy",
        "rank": 12,
        "poseDesc": "From down pushup position, rotate hands to facing backwards. Lift up right leg as high as possible."
    },
    {
        "poseName": "Panther",
        "imgName": "panther.png",
        "suit": "dotsy",
        "rank": 13,
        "poseDesc": "Assume a table position. Lift knees and balance only on hands and feet."
    }
]

const workoutData = {
    "warmup": {
        "name": "Warmup",
        "desc": "Circle of Life",
        "time": 2,
        "instr": "All moves in sequence. Breathe out on pose #1, in on pose #2, and continue the pattern."
    },
    "poses": {
        "name": "Poses",
        "desc": "Full Circle",
        "time": 15,
        "instr": "Hold each pose for one minute."
    },
    "circle 1": {
        "name": "Circle",
        "desc": "Lite",
        "time": 20,
        "instr": "Start in Chimp and alternate between chimp and the next pose."
    },
    "circle 2": {
        "name": "Circle",
        "desc": "Med",
        "time": 20,
        "instr": "Start in Crab and alternate between crab and the next pose."
    },
    "circle 3": {
        "name": "Circle",
        "desc": "Hard",
        "time": 20,
        "instr": "Start in Crab and alternate between crab and the next pose."
    },
    "walks": {
        "name": "Walk",
        "desc": "Life Walk",
        "time": 5,
        "instr": "Below is a random pose. Ambulate in it for one minute. Then take a one minute rest. Repeat for 5 rounds."
    },
    "walkrounds": {
        "name": "Rounds",
        "desc": "Life Walk",
        "time": 12,
        "instr": "Below are 3 random poses. Ambulate in pose #1 for one minute, then pose #2 for 1 minute, then pose #3 for one minute, then take a one minute rest. Repeat for 3 rounds."
    },
    "posepatterns": {
        "name": "Pose Pattern",
        "desc": "Flow",
        "time": 5,
        "instr": "Flow between the 5 poses. Inhale - hold the pose. Exhale - transition to next pose. Complete for 10 rounds."
    }
}
  /* Functions */

function card(imgName, poseName, poseDesc) {
  return `<div class="card glass-h">
            <div class="box workoutimg"><img src="https://assets.codepen.io/3932836/${imgName}" class="squareimg"/></div>
            <div class="box details">
              <p class="name h3">${poseName}</p>
              <p class="desc">${poseDesc}</p>
            </div>
            </div>`;
}

  //Workout Functions


 warmup.onclick = function() {
    appendTitle.innerHTML = workoutData["warmup"]["name"] + ": " + workoutData["warmup"]["desc"] + " — " + workoutData["warmup"]["time"] + " minutes";
    appendInstructions.innerHTML = workoutData["warmup"]["instr"];
    appendWorkout.innerHTML = "";
   for(let i = 0; i < poseData.length; i +=1) {
     appendWorkout.innerHTML += `<div class="card glass-h">
            <div class="box workoutimg"><img src="https://assets.codepen.io/3932836/${poseData[i]["imgName"]}" class="squareimg"/></div>
            <div class="box details">
              <p class="name h3">${poseData[i]["poseName"]}</p>
              <p class="desc">${poseData[i]["poseDesc"]}</p>
            </div>
            </div>`;
   }
  }

  poses.onclick = function() {
    appendTitle.innerHTML = workoutData["poses"]["name"] + ": " + workoutData["poses"]["desc"] + " — " + workoutData["poses"]["time"] + " minutes";
    appendInstructions.innerHTML = workoutData["poses"]["instr"];
    for(let i = 0; i < poseData.length; i +=1) {
     appendWorkout.innerHTML += `<div class="card glass-h">
            <div class="box workoutimg"><img src="https://assets.codepen.io/3932836/${poseData[i]["imgName"]}" class="squareimg"/></div>
            <div class="box details">
              <p class="name h3">${poseData[i]["poseName"]}</p>
              <p class="desc">${poseData[i]["poseDesc"]}</p>
            </div>
            </div>`;
   }
  }

  posepatterns.onclick = function() {
    appendTitle.innerHTML = workoutData["posepatterns"]["name"] + ": " + workoutData["posepatterns"]["desc"] + " — " + workoutData["posepatterns"]["time"] + " minutes";
    appendInstructions.innerHTML = workoutData["posepatterns"]["instr"];
    appendWorkout.innerHTML = "";
     for(let i = 0; i < 5; i +=1) {
     var temp = Math.floor(Math.random() * poseData.length);
     appendWorkout.innerHTML += `<div class="card glass-h">
            <div class="box workoutimg"><img src="https://assets.codepen.io/3932836/${poseData[temp]["imgName"]}" class="squareimg"/></div>
            <div class="box details">
              <p class="name h3">${poseData[temp]["poseName"]}</p>
              <p class="desc">${poseData[temp]["poseDesc"]}</p>
            </div>
            </div>`;
   }
  }

  walks.onclick = function() {
    appendTitle.innerHTML = workoutData["walks"]["name"] + ": " + workoutData["walks"]["desc"] + " — " + workoutData["walks"]["time"] + " minutes";
    appendInstructions.innerHTML = workoutData["walks"]["instr"];
    appendWorkout.innerHTML = "";
    var temp = Math.floor(Math.random() * poseData.length);
     appendWorkout.innerHTML += `<div class="card glass-h">
            <div class="box workoutimg"><img src="https://assets.codepen.io/3932836/${poseData[temp]["imgName"]}" class="squareimg"/></div>
            <div class="box details">
              <p class="name h3">${poseData[temp]["poseName"]}</p>
              <p class="desc">${poseData[temp]["poseDesc"]}</p>
            </div>
            </div>`;
  }


  walkrounds.onclick = function() {
    appendTitle.innerHTML = workoutData["walkrounds"]["name"] + ": " + workoutData["walkrounds"]["desc"] + " — " + workoutData["walkrounds"]["time"] + " minutes";
    appendInstructions.innerHTML = workoutData["walkrounds"]["instr"];
    appendWorkout.innerHTML = "";
     for(let i = 0; i < 3; i +=1) {
     var temp = Math.floor(Math.random() * poseData.length);
     appendWorkout.innerHTML += `<div class="card glass-h">
            <div class="box workoutimg"><img src="https://assets.codepen.io/3932836/${poseData[temp]["imgName"]}" class="squareimg"/></div>
            <div class="box details">
              <p class="name h3">${poseData[temp]["poseName"]}</p>
              <p class="desc">${poseData[temp]["poseDesc"]}</p>
            </div>
            </div>`;
   }
  }


  //Timer Functions
  buttonStart.onclick = function() {

    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }

    buttonStop.onclick = function() {
       clearInterval(Interval);
  }


  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;

  }



  function startTimer () {
    tens++;

    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9){
      appendTens.innerHTML = tens;

    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }

  }

  //Dashboard functions
  /*
  powerSwitch.onclick = function() {
    var arrayOfElements=document.getElementsByClassName('p');
var lengthOfArray=arrayOfElements.length;

for (var i=0; i<lengthOfArray;i++){
    arrayOfElements[i].style.display='none';
}
  }
  */

}
