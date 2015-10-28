//Fork this repository and write these algorithms! Share with your colleagues!
//1. print1To255: Print all integers from 1 to 255.
	function print1To255(){
		for(var i = 1; i < 256; i++){
			console.log(i);
		}
	}
	print1To255();
//2. printOdds1To255: Print all the odd integers from 1 to 255.
	function printOdds1To255(){
		for(var i = 1; i < 256; i+= 2){
			console.log(i);
		}
	}
	printOdds1To255();
//3. printIntsAndSum1To255: Print integers from 0 to 255 and the running sum.
	function printIntsAndSum1to255(){
		var sum = 0;
		for(var i = 0; i < 256; i++){
			sum+= i;
			console.log(i + " " + sum);
		}
	}
	printIntsAndSum1to255();
// FOR ARRAYS make the array and pass it as an argument to this function!
//4. printArrayVals: Print all the value in a given array --
	var myArray = ["uno", "dos", "tres"];
	function printArrayVals(array){
		for(var i = 0; i < array.length; i++){
			console.log(array[i]);
		}
	}
	printArrayVals(myArray);
//5. printMaxOfArray: Print the largest element of an array.
	var myArray = [3, 2, 0, 2, 3, 7, 0, 1, 8, 4];
	function printMaxOfArray(array){
		var max = array[0];
		for(var i = 1; i < array.length; i++){
			if(array[i] > max){
				max = i;
			}
		}
		console.log(max);
	}
	printMaxOfArray(myArray);
//6. printAverageOfArray: Print the average of all the elements value of an array.
	var myArray = [3, 2, 0, 2, 3, 7, 0, 1, 8, 4];
	function printAverageOfArray(array){
		var sum = 0;
		for(var i = 0; i < array.length; i++){
			sum+= array[i];
		}
		console.log(sum/array.length);
	}
	printAverageOfArray(myArray);
//7. returnOddsArray1to255: Return an aray with just the odd integers from 1-255.
	function returnOddsArray1to255(){
		var array = [];
		for(var i = 1; i < 256; i+= 2){
			array.push(i);
		}
		return array;
	}
	console.log(returnOddsArray1to255());
//8. squareArrayVals: Given an array, square each value in the array.
	var myArray = [3, 2, 0, 2, 3, 7, 0, 1, 8, 4];
	function squareArrayVals(array){
		for(var i = 0; i < array.length; i++){
			array[i]*=array[i];
		}
		return array;
	}
	console.log(squareArrayVals(myArray));
//9.  returnCountOfElementsWithValueGreaterThanY: pass to arguments to the function, the array and y.  Return the number of elements in the array with a value greater than y.
	var myArray = [3, 2, 0, 2, 3, 7, 0, 1, 8, 4];
	function returnCountofElementsWithValueGreaterThanY(array, y){
		var count = 0;
		for (var i = 0; i < array.length; i++){
			if (array[i] > y){
				count++;
			}
		}
		return count;
	}
	console.log(returnCountofElementsWithValueGreaterThanY(myArray, 5));
//10.  setNegativeValuesOfArrayToZero: Set all of the negative values in an array to zero and return the array.
	var myArray = [3, 2, -4, 2, 3, 7, 0, 1, 8, 4];
	function setNegativeValuesOfArrayToZero(array){
		for (var i = 0; i < array.length; i++){
			if(array[i] < 0){
				array[i] = 0;
			}
		}
		return array;
	}
	console.log(setNegativeValuesOfArrayToZero(myArray));
//11. printMaxMinAverageArrayVals:  given an array, print the min, max and average values of that array.
	var myArray = [3, 2, 0, 2, 3, 7, 0, 1, 8, 4];
	function printMaxMinAverageArrayVals(array){
		var max = array[0];
		var min = array[0];
		sum = array[0];
		for (var i = 1; i < array.length; i++) {
			sum+= array[i];
			if(array[i] > max){
				max = array[i];
			} else if(array[i] < min){
				min = array[i];
			}
		}
		console.log([max, min, sum/array.length]);
	}
	printMaxMinAverageArrayVals(myArray);
//12. shiftArrayValsLeft:  Given an array, move all of the values of the array to the left, removing element 0, and having the new last element of the array be zero.
	var myArray = [3, 2, 0, 2, 3, 7, 0, 1, 8, 4];
	function shiftArrayValsLeft(array){
		array.shift();
		array.push(0);
		return array;
	}
	console.log(shiftArrayValsLeft(myArray));
//13. swapStringForNegativeValues:  Pass an array and a string into the function.  Replace all of the negative values with that string and return the array.  
	var myArray = [3, 2, -4, 2, 3, 7, 0, 1, 8, 4];
	function setNegativeValuesOfArrayToZero(array, string){
		for (var i = 0; i < array.length; i++){
			if(array[i] < 0){
				array[i] = string;
			}
		}
		return array;
	}
	console.log(setNegativeValuesOfArrayToZero(myArray, "negative"));
