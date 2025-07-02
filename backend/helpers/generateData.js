import { DataTypeMaper } from "./dataMaper.js";

export function generateData(schema, count = 1) {
    const resData = []

    for (let i = 1; i <= count; i++) {

        const data = {};
        for (const [key, value] of Object.entries(schema)) {
            data[key] = DataTypeMaper[value]()

        }

        resData.push(data);

    }

    return resData;

}