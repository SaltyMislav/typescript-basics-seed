class Sizes {
    constructor (public sizes: string[]) {}

    set availableSizes (sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes () {
        return this.sizes;
    }
}

const sizes = new Sizes (['small', 'medium']);
console.log(sizes.availableSizes);

sizes.availableSizes = ['medium', 'large'];
console.log(sizes.availableSizes);

class Pizza {
    public toppoings: string[] = [];

    constructor(readonly name: string) {}

    public addTopping (topping: string){
        this.toppoings.push(topping);
    }
}

const pizza = new Pizza ('Pepperoni');

pizza.addTopping('pepperoni');