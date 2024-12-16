const authentificateJWT=(req, res, next)=>{
    const token = req.headers['authorization'];

    if(token){
        jwt.verify(token, 'JWT token', (err, user)=>{
            if(err){
                return res.sendStatus(403)
            }
            req.user=user;
            next();
        });
    }else{
        res.sendStatus(401);
    }
};

// пример защищенног маршрута
app.get('/api/protected', authentificateJWT, (req, res)=>{
    res.send('Это защищенный маршрут')
})