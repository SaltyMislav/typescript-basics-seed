class Cupon {
    static allowed = ['Pepperoni', 'Blazing Inferno'];
    static create(percentage: number) {
        return `PIZZA_RESTAURANT_${percentage}`;
    }
}

console.log(Cupon.create(25));

//const date = Date.now()