let cupon: string | null = 'pizza25';

function removeCupon(): void {
    cupon = null;
}

console.log(cupon);

removeCupon();
console.log(cupon);