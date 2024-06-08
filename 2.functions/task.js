function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min;
  let max;
  if (arr.length != 0) {
    min = Math.min(...arr);
    max = Math.max(...arr);
  } else {
    min = arr.length;
    max = arr.length;
  }

  let difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  }
  let difference = sumEvenElement - sumOddElement;
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length != 0) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        sumEvenElement = sumEvenElement + arr[i];
      } else {
        sumOddElement++;
      }
    }
  } else {
    return 0;
  }
  let difference = arr.length - sumOddElement
  let avg = sumEvenElement / difference;
  return avg;

}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const maxVal = func(...arrOfArr[i]);
    if (maxVal > maxWorkerResult) {
      maxWorkerResult = maxVal;
    }
  }
  return maxWorkerResult;
}
