function getArrayParams(...arr) {
 let min = Math.min(...arr);
 let max = Math.max(...arr);
 let sum = 0;

 for(let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
 }

 let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
