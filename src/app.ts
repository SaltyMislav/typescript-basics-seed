class Pizza {
    public toppoings: string[] = [];

    constructor(private name: string) {}

    public addTopping (topping: string){
        this.toppoings.push(topping);
    }
}

/*function Pizza(name: string) {
    this.name = name;
    this.toppings = [];
}

Pizza.prototype.addTopping = function addTopping(topping: string) {
    this.toppings.push(topping);
}*/

const pizza = new Pizza ('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);