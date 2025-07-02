import express from "express"


export const router = express.Router();

// GET handler
function get(route, auth, controller) {
    if (auth === "noauth") return router.get(route, controller);
    if (auth === "protected") return router.get(route, middleware, controller);
    throw new Error("Invalid auth parameter");
}

// POST handler
function post(route, auth, controller) {
    if (auth === "noauth") return router.post(route, controller);
    if (auth === "protected") return router.post(route, middleware, controller);
    throw new Error("Invalid auth parameter");
}

// PUT handler
function put(route, auth, controller) {
    if (auth === "noauth") return router.put(route, controller);
    if (auth === "protected") return router.put(route, middleware, controller);
    throw new Error("Invalid auth parameter");
}

// DELETE handler (using 'del' to avoid reserved keyword)
function del(route, auth, controller) {
    if (auth === "noauth") return router.delete(route, controller);
    if (auth === "protected") return router.delete(route, middleware, controller);
    throw new Error("Invalid auth parameter");
}

const createApi = () => ({
    get, post, put, delete: del
});

export const api = createApi();

