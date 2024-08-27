function curriedAdd(total) {
    if (total === undefined) return 0;
    return function adder(num){
        if(num === undefined) return total;
        else return curriedAdd(total + num)
    }
}

module.exports = { curriedAdd };
