
import { faker } from "@faker-js/faker"
import { api } from "../../router/router.js"
import { response } from "../../utils/response.js"


const createComments = async (req, res) => {

    const count = req.query.count;

    if (count) {
        const comments = [];

        for (let i = 1; i <= count; i++) {
            const comment = {
                id: faker.string.uuid(),
                postId:faker.string.uuid(),
                user:faker.internet.username(),
                message:faker.lorem.sentence(),
                createdAt: faker.date.past(),
                userImage: faker.image.avatar(),
            
            }

            comments.push(comment);

        }

        return response.ok(res, "Comments Fetched Successfully", 200, comments);


    }
    return response.error(res, "Invalid parameters", 400);

}

//Route
api.get("/get/comments", "noauth", createComments);





















