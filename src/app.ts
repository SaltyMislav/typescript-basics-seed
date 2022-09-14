abstract class Sizes {
    constructor (protected sizes: string[]) {}

    set availableSizes (sizes: string[]) {
        this.sizes = sizes;
    }

    get availableSizes () {
        return this.sizes;
    }
}

class Pizza extends Sizes {
    public toppoings: string[] = [];

    constructor(readonly name: string, sizes: string[]) {
        super(sizes);
    }

    public updateSizes (sizes: string[]) {
        this.sizes = sizes;
    }

    public addTopping (topping: string) {
        this.toppoings.push(topping);
    }
}

const pizza = new Pizza ('Pepperoni', ['small', 'medium']);

console.log(pizza.availableSizes);
pizza.updateSizes(['large']);
console.log(pizza.availableSizes);