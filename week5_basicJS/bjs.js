function tickUp() {
   let counter = document.getElementById("counter");
   counter.textContent = Number(counter.textContent) + 1;

}

function tickDown() {
   let counter = document.getElementById("counter");
   let val = Number(counter.textContent);

   if (val > 0) {
    counter.textContent = val - 1;
   }

}

function runForLoop(){
   let counter = Number(document.getElementById("counter").textContent);
   let result = document.getElementById("forLoopResult");

   result.textContent = "";

   for(let i = 0; i <= counter; i++){
    result.textContent += i + " ";
   }
}

function showOddNumbers(){
   let counter = Number(document.getElementById("counter").textContent);
   let result = document.getElementById("oddNumberResult");

   result.textContent = "";

   for(let i = 0; i <= counter; i++){
    if (i % 2 !== 0) {
        result.textContent += i + " ";
    }
   }
}

function addMultiplesToArray(){
    let counter = Number(document.getElementById("counter").textContent);

    let reverseArray = [];

    for (let i = counter; i >= 5; i--){
      if (i % 5 === 0){
        reverseArray.push(i);
      }  
    }

    console.log(reverseArray);
}

function printCarObject(){
    let carType = document.getElementById("carType").value;
    let carMPG = document.getElementById("carMPG").value;
    let carColor = document.getElementById("carColor").value;

    let carObject = {
        cType: carType,
        cMPG: carMPG,
        cColor: carColor
    };

    console.log(carObject);
}

function loadCar(num){
    let car;

    if (num ===1){
        car = carObject1;
    } else if (num === 2) {
        car = carObject2;
    } else if (num === 3) {
        car = carObject3;
  }

  document.getElementById("carType").value = car.cType;
  document.getElementById("carMPG").value = car.cMPG;
  document.getElementById("carColor").value = car.cColor;
}

function changeColor(choice){
    let styleParagraph = document.getElementById("styleParagraph");

    if (choice === 1){
        styleParagraph.style.color = "red";
    } else if (choice === 2) {
        styleParagraph.style.color = "green";
    } else if (choice === 3) {
        styleParagraph.style.color = "blue";
    }

}