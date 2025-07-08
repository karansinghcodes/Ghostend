import { resolveValue } from "./resolveValue.js";

export function generateData(schema, count = 1) {
  const resData = [];

  for (let i = 0; i < count; i++) {
    const data = {};
    for (const [key, value] of Object.entries(schema)) {
      data[key] = resolveValue(value);
    }
    resData.push(data);
  }

  return resData;
}
