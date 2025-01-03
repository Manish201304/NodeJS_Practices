// const http = require('http');
// const data = require('./data')
// http.createServer((req, res)=>{
//     res.writeHead(200,{'content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000)

console.log(process.argv[2]);
// const fs = require('fs');
// let input = process.argv;
// fs.writeFileSync(input[2], input[3]);

// const fs = require('fs')
// const path = require('path')
// const dirPath = path.join(__dirname, 'files')
// // console.warn(dirPath)
// // for( i=0;i<5;i++){
// //     fs.writeFileSync(`${dirPath}/hello${i}.txt`, `Something something ${i}`)
// // }
// fs.readdir(dirPath, (err, files)=>{
//     files.forEach((item)=>{
//         console.log(item)
//     })
// })

// const fs = require('fs')
// const path = require('path')
// const dirname = path.join(__dirname, 'files')
// const filepath = `${dirname}/Hello.txt`
// fs.writeFileSync(filepath, "Something something nothing nothing")
// for(i=0;i<5;i++){
//     fs.unlinkSync(`${dirname}/hello${i}.txt` )
// }

// const express = require('express')
// const app = express()

// app.get("", (req, res)=>{
//     res.send("Demo page")
// })

// app.listen(5000);

// app.get("/about", (req, res)=>{
//     res.send(`
//         <input type="text" placeholder="Write something"value="${req.query.name}"/>
//         <button>Click me </button >
//         `)
// })

// const express = require('express')
// const path = require('path')

// const app = express()

// const filepath = path.join(__dirname, 'files')

// app.use(express.static(filepath))
// app.listen(5000)




// const express = require('express')
// const app = express()

// app.set('view engine', 'ejs')

// app.get('/home',(req, res)=>{
//     const user = {
//         name:'Manish kumar',
//         course: 'MCA'
//     }
//     res.render('home', {user})
// })
// app.listen(5000)



// const express = require('express')
// const app = express()
// const reqFilter = require('./middleware')
// const route = express.Router();

// const reqFilter = (req, res, next)=>{
//     if(!req.query.age){
//         res.send('plz provide age');
//     }else if(req.query.age<18){
//         res.send('your are under 18');
//     }else{
//         next();
//     }
// }

// route.use(reqFilter);

// app.get('/', (req, res)=>{
//     res.send('welcome to about page')
// });
// route.get('/about', (req, res)=>{
//     res.send('welcome to about page')
// });
// route.get('/contact', (req, res)=>{
//     res.send('welcome to contact page')
// });
// app.get('/help', (req, res)=>{
//     res.send('welcome to help page')
// });

// app.use('/', route)
// app.listen(5000)


// const {MongoClient} = require('mongodb')
// const url = 'mongodb://localhost:27017';
// const database = 'Todo-App';

// const client = new MongoClient(url);

// async function getData(){
//     let result = await client.connect()
//     let db = result.db(database)
//     let collection = db.collection('todos')
//     let response = await collection.find({}).toArray();
//     console.log(response)
// }

// getData();




// const express = require('express')
// const multer = require('multer')
// const app = express();


// const upload = multer({
//     storage:multer.diskStorage({
//         destination:function(req, file, cb){
//             cb(null, "views")
//         },
//         filename:function(req, file, cb){
//             cb(null, file.fieldname+"-"+Date.now()+".jpg")
//         }
//     })
// }).single("user_file")
// app.post('/upload',upload, (req, res)=>{
//     res.send('file uploaded')
// })

// app.listen(5000)

// const os = require('os');
// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.totalmem()/(1024*1024*1024));
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.userInfo());

const express = require('express');
const EventEmitter = require('events');
const app = express();
const event  = new EventEmitter();
let count = 0;
event.on("countAPI",()=>{
    count++;
    console.log("Total visted person: ",count)
})
app.get('/',(req, res)=>{
    res.send("api called")
    event.emit('countAPI');
});

app.get('/search',(req, res)=>{
    res.send("search api called")
    event.emit('countAPI');
});

app.get('/about',(req, res)=>{
    res.send("about api called")
    event.emit('countAPI');
});


app.listen(5000);