module.exports =  reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send('plz provide age');
    }else if(req.query.age<18){
        res.send('your are under 18');
    }else{
        next();
    }
}