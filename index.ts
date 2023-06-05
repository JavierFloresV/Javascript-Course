// Ejercicio 1
interface Person {
  name: string;
  age: number;
  profession: string;
}

const getPersonProperties = (person: Person): Array<string | number> => {
  const { name, age, profession } = person;
  return [name, age, profession];
};


const person: Person = {
  name: "Javier",
  age: 34,
  profession: "Ingeniero",
};

const properties = getPersonProperties(person);
console.log(properties); // ["Juan", 30, "Ingeniero"]




// Ejercicio 2
function sumOrConcatenate(param1: number | string, param2: number | string): number | string {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2; 
  } else if (typeof param1 === "string" && typeof param2 === "string") {
    return param1 + "-" + param2; 
  } else {
    return param1.toString() + ":" + param2.toString(); 
}
}

console.log(sumOrConcatenate(3, 5)); 
console.log(sumOrConcatenate("Hola", "Mundo")); 
console.log(sumOrConcatenate(10, "Días"));



// Ejercicio 3
interface Car {
  tires: number;
  turnOnEngine(): void;
  pressPedal(): void;
}
interface Motorcycle {
  tires: number;
  turnOnEngine(): void;
  openThrottle(): void;
}
function startEngineAndMove(vehicle: Car | Motorcycle): void {
  vehicle.turnOnEngine();

  if ("pressPedal" in vehicle) {
    vehicle.pressPedal(); 
  } else {
    vehicle.openThrottle(); 
  }
}
const car: Car = {
  tires: 4,
  turnOnEngine() {
    console.log("Car engine start");
  },
  pressPedal() {
    console.log("Car Brake");
  },
};
const motorcycle: Motorcycle = {
  tires: 2,
  turnOnEngine() {
    console.log("Motorbike engine start");
  },
  openThrottle() {
    console.log("Motorbike throttle");
  },
};

startEngineAndMove(car); 
startEngineAndMove(motorcycle); 


// Ejercicio 4

function removeFirstElement<T>(array: Array<T>): Array<T> {
  return array.slice(1);
}


const stringsArray: Array<string> = ["apple", "banana", "cherry"];
const numbersArray: Array<number> = [1, 2, 3, 4, 5];

const updatedStringsArray = removeFirstElement(stringsArray);
console.log(updatedStringsArray); 

const updatedNumbersArray = removeFirstElement(numbersArray);
console.log(updatedNumbersArray);