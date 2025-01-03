const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.end("welcome to home page")
    }else if(req.url == '/about'){
        res.end("welcome to my about page")
    }else{
        res.end(`
            <h1 style="color: red;">Opps</h1>
            <p>Page is not available, you are looking for</p>
            <a href = "/">Back to home</a>     
            `)
    }
    
})
server.listen(5000);