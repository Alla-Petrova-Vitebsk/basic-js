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
    // throw new NotImplementedError('Not implemented');
    
function isContrl (str){
  if (str != `--discard-next` && str != `--discard-prev` && str != `--double-next`&& str != '--double-prev') return str;
}

      if (Array.isArray(arr) != true)
        throw new Error(`'arr' parameter must be an instance of the Array!`);
      
      let arrnew = [];
      let flag = false;
      let i = arr.indexOf(`--discard-next`);
      
      if (i != -1 && arr[i+1] != undefined) {
        flag = true;
        arrnew = arr.slice(0, i).concat(arr.slice(i + 2))
        return arrnew;
      };
    
      i = arr.indexOf(`--discard-prev`);
      if (i != -1 && arr[i-1] != undefined) {
        flag = true;
        arrnew = arr.slice(0, i-1).concat(arr.slice(i + 1));
        return arrnew;
      };
    
      i = arr.indexOf(`--double-next`);
      if (i != -1 && arr[i+1] != undefined) {
        flag = true;
        arrnew = arr.slice(0, i).concat(arr[i+1]).concat(arr.slice(i+1));
        return arrnew;
      };
    
      i = arr.indexOf('--double-prev');
      if (i != -1 && arr[i-1] != undefined) {
        flag = true;
        arrnew = arr.slice(0, i).concat(arr[i-1]).concat(arr.slice(i+1));
        return arrnew;
      };

    if (flag == false)   arrnew = arr.filter (isContrl);
      
      return arrnew;
    }
 