//  #1. Promises: testNum
function testNum(num) {
  console.log(num) // 11
  return new Promise((resolve, reject) => {
    resolve(console.log(num > 10));
  });
};
console.log(testNum(11)); //true;

//another way is using [then]
function testNum(num) {
  console.log(num) // 11
  return new Promise((resolve, reject) => {
    resolve(num > 10);
  }).then(bool => {
    console.log(bool);
  });
};
console.log(testNum(11)); //true;

//  #2. Promises: whisperShout
const whisperShout = str => {
  console.log(str);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(str.toUpperCase()));
    }, 3000);
  })
};
whisperShout("whatever");
//Another way w/ [then]
const whisperShout = str => {
  console.log(str);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(str.toUpperCase()));
    }, 3000);
  }).then(newStr => {
    console.log(newStr)
    return newStr;
  })
};
whisperShout("whatever");

//  #3. Promises: waitFact
const waitFact = (arrItg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        if(arrItg = 0){
          return arrItg = 1;
        }
        return arrItg * waitFact(arrItg - 1));
    }, 3000);
  });
};
waitFact(4)// isn't work.

//Another way like a for loop to look thru indx
const waitFact = (arrItg) => {
  let ind = 0;
  let interval = setInterval(() => {
    if(ind < arrItg.length){
      new Promise((resolve, reject) => {
        console.log(arrItg[ind]);
        ind++;
        resolve();
      });
    } else {
    clearInterval(interval);
    }
  }, 3000);
};
waitFact([1,2,3, 4])
