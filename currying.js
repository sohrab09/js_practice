function currying(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d;
            };
        }
    }
}

console.log(currying(10)(20)(30)(40));