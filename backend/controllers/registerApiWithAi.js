import { api } from "../router/router.js";
import { prisma } from "../utils/dbConnect.js";
import { response } from "../utils/response.js";
import { generateWithAi } from "../helpers/aiGeneration/geminiAi.js";

const registerApiWithAI = async (req, res) => {
  try {
    const data = req.body;

    const aiResponse = await generateWithAi(data.message);

    if (data) {
      const date = new Date();
      const type = aiResponse.type;
      console.log(type);

      const endPoint = `${date.getTime()}`;

      const newApiData = await prisma.apiData.create({
        data: {
          type,
          endPoint,
          schema: aiResponse.schema,
        },
      });

      if (!newApiData) {
        console.error("Failed to register new api");
        return response.error(res, "Failed To Create Api", 400);
      }

      const apiRoute = `api/${type}/${endPoint}`;

      return response.ok(res, "Created Api Successfully", 201, apiRoute);
    }
  } catch (error) {
    console.error("Api register with ai route Error : ", error.message);
    return response.error(res, "Internal Server error", 501);
  }
};

api.post("/register-api-ai", "noauth", registerApiWithAI);
