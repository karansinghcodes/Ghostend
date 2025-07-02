import { api } from "../router/router.js";
import { prisma } from "../utils/dbConnect.js";
import { response } from "../utils/response.js";




const user = async (req, res) => {

  
    try {
        const data = req.body;

        if (data) {

            const date = new Date();
            const type = data.type;

            const endPoint = `${date.getTime()}`

            const newApiData = await prisma.apiData.create({
                data: {
                    type,
                    endPoint,
                    schema: data.schema
                }
            });

            if (!newApiData) {
                console.error("Failed to register new api");
                return response.error(res, "Failed To Create Api", 400);

            }

            const apiRoute = `api/${type}/${endPoint}`;

            return response.ok(res, "Created Api Successfully", 201, apiRoute);

        }

    } catch (error) {
        console.error("Api register route Error : ", error.message);
        return response.error(res, "Internal Server error", 501);

    }



}


api.post("/register-api","noauth",user);