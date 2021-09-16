
function transform(arr) {

    let isdel = false;
    let arrnew = [...arr];

    if (Array.isArray(arr) != true)
        throw new Error(`'arr' parameter must be an instance of the Array!`);

    function isContrl(str) {
        if (str != `--discard-next` && str != `--discard-prev` && str != `--double-next` && str != `--double-prev`) return str;
    }

    function discardNext(arr, index) {
        if (index !== -1 && arr[index + 1] !== undefined) {
            isdel = true;
            arrnew = arrnew.slice(0, index).concat(arrnew.slice(index + 2))
        };
        return arrnew;
    }

    function discardPrev(arr, index) {
        if (index !== -1 && arr[index - 1] !== undefined && isdel === false) {
            arrnew = arrnew.slice(0, index - 1).concat(arrnew.slice(index + 1));
        };
        return arrnew;
    }

    function doubleNext(arr, index) {
        if (index !== -1 && arr[index + 1] !== undefined && isdel === false) {
            let temp1 = arrnew[index + 1];
            let temp2 = arrnew.slice(index + 1);  
             arrnew = arrnew.slice(0, index).concat(temp1, temp2);
        };
        return arrnew;
    }

    function doublePrev(arr, index) {
        if (index !== -1 && arr[index - 1] !== undefined && isdel === false) {
           let temp1 = arrnew[index-1];
           let temp2 = arrnew.slice(index + 1);
           arrnew = arrnew.slice(0, index).concat(temp1,temp2);
        };
        return arrnew;
    }

    for (let i = 0; i < arrnew.length; i++) {
        switch (arrnew[i]) {
            case `--discard-next`: discardNext(arrnew, i); break;
            case `--discard-prev`: discardPrev(arrnew, i); break;
            case `--double-next`: doubleNext(arrnew, i); break;
            case `--double-prev`: doublePrev(arrnew, i); break;        
        }
    }

     return arrnew.filter(isContrl);
}

console.log (transform( [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]));
//console.log(transform([1, 2, 3, '--double-next', 4, 5]));
