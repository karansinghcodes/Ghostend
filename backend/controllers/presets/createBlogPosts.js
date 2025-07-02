
import { faker } from "@faker-js/faker"
import { api } from "../../router/router.js"
import { response } from "../../utils/response.js"


const createBlogPosts = async (req, res) => {

    const count = req.params.count;

    if (count) {
        const blogPosts = [];

        for (let i = 1; i <= count; i++) {
            const blogPost = {
                id: faker.string.uuid(),
                title: faker.book.title(),
                content: faker.lorem.paragraph(30),
                author: `${faker.person.firstName()}  ${faker.person.lastName()}`,
                publishedAt: faker.date.past(),
                coverImage: faker.image.url(),
            
            }
            blogPosts.push(blogPost);

        }

        return response.ok(res, "Blos Posts Fetched Successfully", 200, blogPosts);


    }
    return response.error(res, "Invalid parameters", 400);

}

//Route
api.get("/get/blog-posts/:count", "noauth", createBlogPosts);





















