import { DataTypeMaper } from "./dataMaper.js";

export function resolveValue(value) {
  // at the end all values will be string
  if (typeof value === "string") {
    return DataTypeMaper[value]?.() || null;
  }

  // Map values in array
  else if (Array.isArray(value)) {
    const length = value.length;

    const arr = [];
    const template = value[0]; //assuming first data is schema

    for (let i = 0; i < length; i++) {
      arr.push(resolveValue(template));
    }
    return arr;
  }

  // Map Values for object
  else if (typeof value === "object" && value !== null) {
    const obj = {};
    for (const [k, v] of Object.entries(value)) {
      obj[k] = resolveValue(v);
    }
    return obj;
  }

  //otherwise null
  else {
    return null;
  }
}
