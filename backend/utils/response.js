
export const response = {

    ok: (res, message, statusCode, data) => {
        res.status(statusCode).json({
            success: true,
            message: message,
            ...(data !== undefined && { data }),

        })
    },
    error: (res, message, statusCode) => {
        return res.status(statusCode).json({
            success: false,
            message,

        });
    },
}