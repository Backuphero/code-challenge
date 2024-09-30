
const findSum = function(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];  
     }
    return total;
  }; 

  
const findFrequency = function(arr) {

const frequencyMap = {};
 let maxLetter = arr[0];
 let maxCount = 1;
 let minLetter = arr[0];
 let minCount = Infinity;
 for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (frequencyMap[element]) {
        frequencyMap[element]++;
    }
    else {
        frequencyMap[element] = 1;
    }
    if (frequencyMap[element] > maxCount) {
        maxLetter = element;
        maxCount = frequencyMap[element];
    }
    if (frequencyMap[element] <= minCount) {
        minLetter = element;
        minCount = frequencyMap[element];
    }
 }
 return (`Most: ${maxLetter}. Least: ${minLetter}`);
};

  

const isPalindrome = function(str) {
 
    let a = [];
    let b = str.toLowerCase();
    let c = '';

    for (let i = 0; i < b.length; i++) {
     a.push(b[i]);
    }

    for (let i = 0; i < b.length; i++) {
     c = c + a.pop();
}

if (b === c) {
  return ('true');
} else {
  return('false');
}
};



const largestPair = function(array) {
    
    var largestNum = array[0] + array[1]; 
  for (var i = 1; i < array.length; i++) {
    largestNum = Math.max(largestNum, array[i] * array[i-1]);
     
    }
 
    return largestNum;
};

    

const removeParenth = function(str) {
    let removeParenth = str.replace(/ *\([^)]*\) */g, "");
    return removeParenth;
};


 
  
const scoreScrabble = function(str) {
    const scoreMap= {
      a: 1,
      e: 1,
      i: 1,
      o: 1,
      u: 1,
      l: 1,
      n: 1,
      r: 1,
      s: 1,
      t: 1,
      d: 2,
      g: 2,
      b: 3,
      c: 3,
      m: 3,
      p: 3,
      f: 4,
      h: 4,
      v: 4,
      w: 4,
      y: 4,
      k: 5,
      j: 8,
      x: 8,
      q: 10,
      z: 10
    };
    let result = 0;
    str = str.toLowerCase();

    for (let i = 0; i< str.length; i++) {  
       result += scoreMap[str[i]] || 0;
    }
return result
};



  

