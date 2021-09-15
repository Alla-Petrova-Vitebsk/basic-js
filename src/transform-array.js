import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  function isContrl(str) {
    if (str != `--discard-next` && str != `--discard-prev` && str != `--double-next` && str != `--double-prev`) return str;
  }
  
  if (Array.isArray(arr) != true)
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  
  let arrnew = [...arr];
  let flag = false,
    isdel = false;
  
  let i = arr.indexOf(`--discard-next`);
  if (i != -1 && arr[i + 1] != undefined) {
    flag = true;
    isdel = true;
    arrnew = arrnew.slice(0, i).concat(arrnew.slice(i + 2))
   };
   console.log(arrnew);
  
  i = arr.indexOf(`--discard-prev`);
  if (i != -1 && arr[i - 1] != undefined && isdel == false) {
    flag = true;
    arrnew = arrnew.slice(0, i - 1).concat(arrnew.slice(i + 1));
   };
   console.log(arrnew);
  
  i = arr.indexOf(`--double-next`);
  if (i != -1 && arr[i + 1] != undefined && isdel == false) {
    flag = true;
    arrnew = arrnew.slice(0, i).concat(arrnew[i + 1]).concat(arrnew.slice(i + 1));
   };
  console.log(arrnew);
  
  i = arr.indexOf(`--double-prev`);
  if (i != -1 && arr[i - 1] != undefined && isdel == false) {
    flag = true;
    arrnew = arrnew.slice(0, i).concat(arrnew[i - 1]).concat(arrnew.slice(i + 1));
   };
   console.log(arrnew);
  
  if (flag == false)  arrnew = [...arr];
  
  return arrnew.filter(isContrl);
  }
