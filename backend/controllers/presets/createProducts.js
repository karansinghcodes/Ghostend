import { faker } from "@faker-js/faker"
import { api } from "../../router/router.js"
import { response } from "../../utils/response.js"


const createProducts = async (req, res) => {

    const count = req.query.count;

    if (count) {
        const products = [];

        for (let i = 1; i <= count; i++) {
            const product = {
                id: faker.string.uuid(),
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                inStock: faker.datatype.boolean(),
                image: faker.image.url(),
                category: faker.commerce.productAdjective()
            }
            products.push(product);

        }

        return response.ok(res, "Products Fetched Successfully", 200, products);


    }
    return response.error(res, "Invalid parameters", 400);

}

//Route
api.get("/get/products", "noauth", createProducts);