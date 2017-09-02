let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let router = require('./api');
let app = express();
let cookieParser = require('cookie-parser');
let session = require('express-session');
let MongoStore = require('connect-mongo')(session);
let dbUrl = 'mongodb://localhost/lizhiBlog';
//连接mongodb数据库
mongoose.connect(dbUrl);
mongoose.connection.on("connected", ()=> {
   console.log("mongodb connected success");
});
mongoose.connection.on("disconnected", ()=>{
  console.log("mongodb connected disconnected");
});
mongoose.connection.on("error", ()=>{
  console.log("mongodb connected error");
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 实现会话持久化和用户登录状态的保存
app.use(cookieParser());
app.use(session({
  secret: 'blog',
  store: new MongoStore({
    url: dbUrl,
    collection: 'sessions'
  }),
  resave: false,
  saveUninitialized: true
}))



app.use('/', router);
app.listen(3000);

