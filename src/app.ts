const cupon: string = 'pizza25';

function normalizeCupon (code: string): string{
    return code.toUpperCase();
}

const cuponMessage: string = `Final cupon is ${normalizeCupon(cupon)}`;

console.log (cuponMessage);