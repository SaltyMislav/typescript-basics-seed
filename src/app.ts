class Pizza {
    public toppoings: string[] = [];

    constructor(readonly name: string) {}

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
//pizza.name = 'ABC';  cant assign the name because of readonly
console.log (pizza.name);