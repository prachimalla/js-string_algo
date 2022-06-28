// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//remove duplicat

function removeDuplicat(data) {
  let outPut = Array.from(new Set(data)).join('');
  // console.log(outPut)
}
function removeDuplicatCustom(data) {
  let obj = {};
  let returnData = '';
  for (let i = 0; i < data.length; i++) {
    obj[data[i]] = obj[data[i]] == undefined ? 1 : obj[data[i]] + 1;
  }
  for (let ele in obj) {
    returnData += ele;
  }
  console.log(obj, returnData);
}
removeDuplicatCustom('abcdda');
removeDuplicat('abcdda');

// sorting a sorting
function sortData(input) {
  console.log(input.split('').sort().join(''));
}
function sortDataCustome(ele) {
  let input = ele.split('');
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] > input[j]) {
        let temp = input[i];
        input[i] = input[j];
        input[j] = temp;
      }
    }
  }
  console.log(input);
}
sortDataCustome('Anbcdoa');
sortData('Anbcdoa');

// remove number from a string
function removeNumber(ele) {
  return ele.match(/\d+/g).join('');
}
console.log(removeNumber('wer45y678op'));
//search a element ina sorting
function searchEle(str, ele) {
  let data = str.split('').filter((e) => e == ele);
  console.log(data);
}
searchEle('ancktrytu', 't');

var longestCommonPrefix = function (strs) {
  let output = '';
  for (let i = 0; i < strs.length; i++) {
    //       if(strs[i][i] == strs[i+1][i]){
    //       output += strs[i][i];
    // }
  }
  return output;
};

var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return '';
  let prefix = strs[0];
  //console.log(prefix)
  for (let i = 1; i < strs.length; i++) {
    console.log(strs[i]);
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      console.log(prefix);
      if (prefix.length == 0) return '';
    }
  }

  //console.log(prefix)
  return prefix;
};
longestCommonPrefix(['flower', 'flow', 'floght']);

function Parentheses(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
      arr.push(str[i]);
    } else {
      if (arr.length == 0) {
        return false;
      } else if (
        (str[i] == ')' && arr[arr.length - 1] !== '(') ||
        (str[i] == '}' && arr[arr.length - 1] !== '{') ||
        (str[i] == ']' && arr[arr.length - 1] !== '[')
      ) {
        return false;
      }

      arr.pop();
    }
  }
  return arr.length == 0 ? true : false;
}

let patten = Parentheses('([{{)}}])');
console.log(patten);
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
     // nums.splice(i, 0, target);
    }
  }
  console.log(nums);
};
//searchInsert([1, 3, 4, 7, 8], 5);


var lengthOfLongestSubstring = function(s) {
  let subStr = []; 
   for(let i=0;i<s.length;i++){
    console.log(subStr )
       if(subStr.length != 0){
           for(let j = 0;j<subStr.length;j++){
               if(s[i] == subStr[j] ){
                console.log('subStr',subStr,j)
               subStr.splice(0,j+1);
              
               }
     } 
     subStr.push(s[i] ) 
       }else {
        subStr.push(s[i] ) 
        
       }
   }
   return subStr;
};
console.log(lengthOfLongestSubstring('abcabbc'))