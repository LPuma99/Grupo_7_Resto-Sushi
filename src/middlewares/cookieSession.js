const cookieSession = (req, res, next) => {
    if(req.cookies.restoCookie){
        req.session.user = req.cookies.restoCookie;
        res.locals.user = req.session.user;
    }
    next()
}

module.exports = cookieSession;