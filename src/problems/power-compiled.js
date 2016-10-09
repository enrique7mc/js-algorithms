/**
 * Created by enrique.munguia on 10/9/16.
 */

function power(base, exponent) {
    if (exponent === 1) {
        return base;
    }

    return base * power(base, exponent - 1);
}

const result = power(3, 4);
console.log(result);

//# sourceMappingURL=power-compiled.js.map