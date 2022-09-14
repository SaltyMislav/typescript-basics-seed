const pizza = {
    name: 'Pepperoni',
    price: 15,
    getname() {
        return this.name;
    }
};

console.log(pizza.getname());

const toppings = ['pepperoni'];

const order = {
    pizza,
    toppings
};

console.log(order)