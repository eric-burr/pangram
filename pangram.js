//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const isPangram = (string) => {
 

    string = string.toLowerCase();
  console.log(string)
  


    var alphabet = "abcdefghijklmnopqrstuvwxyz";

    // Initialises a string with all the alphabets   

    // Iterate through the sentence and each for each letter, remove it from the array.
    for (var i = 0; i < string.length; i++) {


        // Find the index of the letter in array to delete
        var num = alphabet.indexOf(string[i]);

        //If the letter is present in the array, remove it
        if (string[i] == alphabet[num]) {
            alphabet = alphabet.replace(string[i], '') 
        } 

    }

    if (alphabet.length == 0) {
        return true;    
    }
    else {
        return false;
    }

}




























  
  // throw new Error("Remove this statement and implement this function");

