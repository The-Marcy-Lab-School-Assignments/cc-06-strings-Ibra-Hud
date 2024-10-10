//write your code here
const reverseString = (str) => {
  let strArr = str.split("");
  let reverseArr = [];
  for (let x = strArr.length - 1; x >= 0; x--) {
    reverseArr.push(strArr[x]);
  }

  console.log(reverseArr.join(""));
};

reverseString("hello"); //"olleh"
reverseString("oo"); //"oo"
reverseString(""); //""

const reverseZigZagString = (str) => {
  let strArr = str.split("");
  let reverseArr = [];
  for (let x = strArr.length - 1; x >= 0; x--) {
    if (x % 2 == 0) {
      reverseArr.push(strArr[x]);
    } else {
      reverseArr.push(strArr[x].toUpperCase());
    }
  }

  console.log(reverseArr.join(""));
};

reverseZigZagString("hello"); //"oOlLeH"
reverseZigZagString("Fellows"); //"sWoLlEf"
reverseZigZagString("Code Challenge "); //"eGnElLaHc EdOc"
