
let chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },

    addLink(value) {
        if (arguments.length === 0) this.chain.push(`( )`);
        else this.chain.push(`( ${value} )`);
        return this;
    },

    removeLink(position ) {
       if (typeof position !== 'number' ||  position > this.chain.length || position <= 0 || (position ^ 0) !== position ) {
          
        throw new Error (`You can't remove incorrect link!`);
       }
       this.chain.splice(position-1,1);
       return this;
    },

    reverseChain() {
        this.chain.reverse();
        return this;
    },

    finishChain() {
        let oldchain = this.chain.join('~~');
        this.chain = [];
        return oldchain;
    }
};


// console.log (chainMaker.getLength());
//console.log(chainMaker.addLink('1'));
//console.log(chainMaker.addLink());
//console.log(chainMaker.addLink('3'));
// console.log (chainMaker.getLength());
//console.log(chainMaker.finishChain());
//console.log(chainMaker.reverseChain());
//console.log(chainMaker.finishChain());
console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));

chainMaker.addLink(1);
chainMaker.addLink(2);
chainMaker.reverseChain();
chainMaker.addLink(3);
console.log(chainMaker.finishChain());
chainMaker.removeLink(0);
console.log(chainMaker.finishChain());
