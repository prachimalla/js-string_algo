// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//remove duplicat

function removeDuplicat(data){
  let outPut = Array.from(new Set(data)).join('');
  console.log(outPut)
}
function removeDuplicatCustom(data){
  let obj = {}
  let returnData = ''
  for(let i = 0 ;i< data.length;i++){
    obj[data[i]] = obj[data[i]] == undefined ? 1 :  obj[data[i]]+1; 
  }  
  for(let ele in obj){
    returnData +=ele
  }
  console.log(obj,returnData)
}
removeDuplicatCustom('abcdda');
removeDuplicat('abcdda');

// sorting a sorting
function sortData(input){
  console.log(input.split('').sort().join(''))
}
function sortDataCustome(ele){
  let input = ele.split('')
for(let i = 0 ;i< input.length;i++){
  for(let j=i+1;j<input.length;j++){
    if(input[i]>input[j]){
let temp = input[i];
input[i] =input[j];
input[j] = temp;
    }
  }
}
console.log(input)
}
sortDataCustome('Anbcdoa')
sortData('Anbcdoa')

// remove number from a string
function removeNumber(ele){
  return ele.match(/\d+/)

}
console.log(removeNumber('wer45y678op'))
