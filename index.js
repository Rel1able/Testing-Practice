export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function reverseString(string) {
    return string.split("").reverse().join("");
}

export const calculator = {
    add(num1, num2) {
        return num1 + num2;
    },
    subtract(num1, num2) {
        return num1 - num2;
    },
    divide(num1, num2) {
        return num1 / num2;
    },
    multiply(num1, num2) {
        return num1 * num2;
    },
    
}


export function caesarCipher(string, shift) {
    let shifted = "";
    for (let char of string){
        let newChar = char.charCodeAt(0);
        if (65 <= newChar && newChar <= 90){
        	newChar += shift;
          if (newChar > 90){
          	newChar -= 26;
          }
        }
        else if (97 <= newChar && newChar <= 122){
        	newChar += shift;
          if (newChar > 122){
          	newChar -= 26;
          }
        }
        
        let updatedChar = String.fromCharCode(newChar);
        shifted += updatedChar;
    }
    return shifted;
}

export function analyzeArray(arr) {
    let obj = {};

    let average = arr.reduce((prev, cur) => prev + cur, 0) / arr.length;

    let length = arr.length;

    let min = Math.min(...arr);

    let max = Math.max(...arr);

    obj["average"] = average;
    obj["min"] = min;
    obj["max"] = max;
    obj["length"] = length;

    return obj;
}

