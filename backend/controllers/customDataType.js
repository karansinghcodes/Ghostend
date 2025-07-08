import { generateData } from "../helpers/generateData.js";
import { api } from "../router/router.js";
import { prisma } from "../utils/dbConnect.js";
import { response } from "../utils/response.js";

const customDataType = async (req, res) => {
  try {
    const endPoint = req.params.endpoint;
    const count = req.query.count;

    if (endPoint) {
      const apiData = await prisma.apiData.findUnique({
        where: {
          endPoint,
        },
      });

      if (apiData) {
        const resData = generateData(apiData.schema, count);

        return response.ok(res, "Data Fetched Successfully", 200, resData);
      } else {
        console.error("Failed to generate custom data");
        return response.error(res, "Failed To Fetch Data", 400);
      }
    }

    return response.error(res, "No Api Exists", 404);
  } catch (error) {
    console.error("Custom Data route Error : ", error.message);

    return response.error(res, "Internal Server error", 501);
  }
};

api.get("/api/:any/:endpoint", "noauth", customDataType);
