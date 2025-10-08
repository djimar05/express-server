const dataValidation = (req, res, next) => {
    const blog = req.body;

    if (!blog || !blog.title || !blog.content || !blog.id) {
        return res.status(400).send({ message: 'Blog id, title and content are required' });
    }

    next();
}



function errorHandler(err, req, res, next) {
    console.error(err.stack); // Log the error for debugging

    // Set default status code and message
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";


    res.status(statusCode).json({
        error: true,
        message: message
    });
}

module.exports = {
    dataValidation,
    errorHandler
}