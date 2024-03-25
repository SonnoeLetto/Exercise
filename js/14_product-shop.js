const productsInShop = [
    {
        code: 1111,
        name: 'Oreo',
        priсe: 20,
    },

    {
        code: 1112,
        name: 'Chips',
        priсe: 40,
    },

    {
        code: 1113,
        name: 'Cola',
        priсe: 10,
    },

    {
        code: 1114,
        name: 'Oranges',
        priсe: 25,
    }
];

const checkOfProducts = {
    productsInCheck: [
        {
            code: 1114,
            name: 'Oranges',
            priсe: 25,
        }
    ],
    getProductByCode(code, obj) {
        return obj.find((product) => product.code === code);
    },

    addProduct(code, count = 1) {
        const recurringProduct = this.getProductByCode(code, this.productsInCheck);
        if (recurringProduct) {
            return recurringProduct.count++
        }
        const product = this.getProductByCode(code, productsInShop);
        if (product) {
            this.productsInCheck.push({
                ...product,
                count
            })
        } else {
            throw new Error('Not available in shop')
        }

    },

    removeProduct(code) {
        const findIndex = this.productsInCheck.findIndex((product) => product.code === code);
        this.productsInCheck.splice(findIndex, 1);
    },

    decrementProd(code, count = 1) {
        const productInCheck = this.getProductByCode(code, this.productsInCheck);
        if (productInCheck.count > count) {
            productInCheck.count -= count
        } else if (productInCheck.count === count) {
            this.removeProduct(code)
        } else if (productInCheck.count < count) {
            throw new Error('You can\'t delete more than have')
        }
    },

    printCheck(discount) {
        this.productsInCheck.forEach((product) => {
            for (let value in product) {
                console.log(`${value}: ${product[value]}`)
            }
            console.log('\n')
        });
        if (discount) {
            try {
                const totalPriceWithDiscount = this.applyDiscount(discount);
                console.log(`Sum with discount: ${totalPriceWithDiscount}`);
                return;
            } catch (e) {
                console.log(e)
            }

        }

        console.log(`sum: ${this.totalPrice()}`)
    },

    totalPrice() {
        let sum = 0
        this.productsInCheck.forEach((product) => sum += product.priсe * product.count);
        return sum
    },

    applyDiscount(discount) {
        let coef;

        switch (discount) {
            case 'PROMO20':
                coef = 0.8
                break;

            default:
                throw new Error('Incorrect discount')
        }

        return this.totalPrice() * coef;
    }

}
checkOfProducts.addProduct(1114)
checkOfProducts.addProduct(1114)


checkOfProducts.printCheck('PROMO2s0')
