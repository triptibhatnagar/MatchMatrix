const errHandler = (err, req, res, next) => {
    const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

    res.status(statusCode.json({
        success: false,
        message: err.message || "Server Errrorrrrr",
        stack: process.env.NODE_ENV === "development" ? err.stack : null
    }))
}

module.exports = errHandler