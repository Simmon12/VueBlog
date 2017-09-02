let express = require('express');
let router = express.Router();
let db = require('./db');

router.route('/api')
      .get((req, res) => {
        console.log("Req: ", req.session.user);
        db.Articles.find((err, articles) => {
          if(err) {
            console.log(err);
            return;
          }
          res.json(articles)
        })
      })
      .post((req, res) => {
        new db.Articles(req.body.postInformation).save((err) => {
          if(err) console.log(err);
            res.json({
              message: 'new article has been created'
            });
        })
      })

router.route('/api/:post_id')
      .get((req, res) => {
        db.Articles.findById(req.params.post_id, (err, post) => {
          if(err) console.log(err);
          res.json(post)
        })
      })
      .delete((req, res) => {
        db.Articles.remove({_id: req.params.post_id}, (err, post) => {
          if(err) console.log(err)
          res.json({
            message: 'Successfully Delete!'
          });
        })
      })
      .put((req, res) => {
        db.Articles.findById(req.params.post_id, (err, post) => {
          if(err) console.log(err);
          post.title = req.body.title;
          post.state = req.body.state;
          post.content = req.body.content;

          post.save(err => {
            if(err) console.log(err);
            res.json({
              message: 'Update Successfully'
            })
          })
        });
      })


router.route('/api/user/login')
   .post((req, res) => {
      let _user = req.body.user;
      let name = _user.account;
      let password = _user.password;


      db.Users.findOne({name: name}, (err, user) =>{

          if(err) {
            return res.json({
              "code": 500,
              "message": "内部服务器错误",

            })
          }
          if(!user) {
            console.log("body: ", req.body.user);
            console.log("name: ", name);
            return res.json({
              "code": 400,
              "message": "找不到用户名",

            })
          }
          user.comparePassword(password,(err, isMatch) => {
            if(err) {
              console.log("err: ", err);
              return res.json({
                "code": 500,
                "message": "内部服务器错误",

              })
            }
            if(isMatch) {
              req.session.user = user;
              console.log("Req: ", req.session.user);
              return res.json({
                "code": 200,
                "message": "登录成功",

              })
            } else {
              return res.json({
                "code": 401,
                "message": "密码错误",

              })
            }
          })


      })
   })

router.route('/api/user/logout')
   .get((req, res) => {
    delete req.session.user;
    console.log("Req2: ", req.session.user);
    return res.json({
      "code": 200,
      "message": "退出成功"
    })

   })

module.exports = router;

