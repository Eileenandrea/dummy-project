let johnMass, victorMass, johnHeight, victorHeight;

johnMass = Math.round((Math.random() * 200) * 100) / 100;
victorMass = Math.round((Math.random() * 200) * 100) / 100;
johnHeight = Math.round((Math.random() * 2) * 100) / 100;
victorHeight = Math.round((Math.random() * 2) * 100) / 100;

function calcBMI(mass, height) {
    BMI = mass / (height * height);
    return BMI;
}
 
let johnBMI = calcBMI(johnMass, johnHeight);
let victorBMI = calcBMI(victorMass, victorHeight);

let isVictorBMIGreater = victorBMI > johnBMI ? true : false;

console.log(`John=> \n Weight: ${johnMass} \n Height: ${johnHeight} \n BMI:${johnBMI}`);

console.log(`Victor=> \n Weight: ${victorMass} \n Height: ${victorHeight} \n BMI:${victorBMI}`);
console.log(`is Victor's BMI heigher than John's? ${isVictorBMIGreater}`);