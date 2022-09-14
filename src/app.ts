const pizzas = [
    { name: 'Pepperoni', toppings: ['pepperoni']}
];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);
const pizza = {
    name: 'Blazzing Inferno',
    getName: () => pizza.name,
}

console.log(pizza.getName());