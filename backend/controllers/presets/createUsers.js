import { faker } from "@faker-js/faker"
import { api } from "../../router/router.js"
import { response } from "../../utils/response.js"


const createUsers = async (req, res) => {

    const count = req.params.count;

    if (count) {
        const users = [];

        for (let i = 1; i <= count; i++) {
            const user = {
                id: faker.string.uuid(),
                username: faker.internet.username(),
                email: faker.internet.email(),
                isActive: faker.datatype.boolean(),
                joinedAt: faker.date.past()
            }
            users.push(user);

        }

        return response.ok(res, "Users Fetched Successfully", 200, users);


    }
    return response.error(res, "Invalid parameters", 400);

}

//Route
api.get("/get/users/:count", "noauth", createUsers);