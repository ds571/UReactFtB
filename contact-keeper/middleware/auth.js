// functions that have access to response object (middlewire fires when we hit an endpoint)
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){ // move on to next piece of middleware: 'next'
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if token doesn't exist
    if(!token) // if no token
    {
        return res.status(401).json({ msg: 'No token, authorization denied'});
    }

    try{
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch(err){
        res.status(401).json({ msg: 'Token is not valid' });
    }
};