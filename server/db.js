let mongoose = require('mongoose');
let bcrypt = require('bcrypt-nodejs');
let SALUT_WORK_FACTOR = 10


/*Article*/
const ArticleSchema = new mongoose.Schema({
  title: String,
  content: String,
  state: String
});

/*article end*/

/** User **/
const UserSchema = new mongoose.Schema({
  name: {
    unique: true,
    type: String
  },
  password: String,
  // normal admin whose role < 10 while super admin whose role >=10
  role: {
    type: Number,
    default: 0
  },
});

UserSchema.pre('save', function(next) {
  let user = this;
  bcrypt.genSalt(SALUT_WORK_FACTOR, function(err, salt) {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if(err) return next(err);
      user.password = hash;
      next();
    })
  })
});

UserSchema.methods = {
  comparePassword: function(_password, cb) {
    bcrypt.compare(_password, this.password, function(err, isMatch) {
       if(err) return cb(err);
       cb(null, isMatch);
    })
  }
}
/** end **/

const Models = {
  Users: mongoose.model('user', UserSchema),
  Articles: mongoose.model('article', ArticleSchema)
}

module.exports = Models;
