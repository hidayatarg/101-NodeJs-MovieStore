const pool = require('./pool');

const getMovies = (req, res) => {
    pool.query('SELECT * FROM movies ORDER BY "id" DESC', (error, result) => {
        if (error)
            return res.status(500).json({
                errors: {
                    global: "Something went wrong"
                }
            });
        const response = {
            success: true,
            data: result.rows
        }
        return res.status(200).json(response)
    })
}

module.exports = {
    getMovies
}