const getUsers = (req, res) => {
    res.send(`Fetching all users`);
}

const getUserById = (req, res) => {
    const userId = req.params.id;

    if(!userId) {
        const error = new Error('User ID is required');
        error.statusCode = 400;
        throw error;
    }
    res.send(`Fetching user with ID: ${userId}`);
}

const postUsers = (req, res) => {
    res.send(`New user added`);
} 

module.exports = {
    getUsers,
    getUserById,
    postUsers,
}