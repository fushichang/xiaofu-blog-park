const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

mongoose.connect('mongodb://localhost:27017/itc', { useNewUrlParser: true }, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Connection success!')
  }
})
const Schema = mongoose.Schema

// 验证码
let checkcodeSchema = new Schema({
  token: String,
  code: String
})

// 用户
let userSchema = new Schema({
  user_name: String,
  user_id: String,
  user_pwd: String,
  avatar: {
    type: String,
    default: ''
  },
  token: {
    type: String,
    default: ''
  }
})

let recordSchema = new Schema({
  title: String,
  type: String,
  detail: String,
  create_time: {
    type: String,
    default: Date.now
  },
  img: Array,
  view: 0,
  creater: String,
  // TODO:这里很重要，需要什么记得加上
  avatar: String,
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
})

let articleSchema = new Schema({
  title: String,//文章标题
  classfiy: String,//分类
  detail: String,//文章内容
  pic: String,//文章封面
  creator: String,//作者
  avatar: String,//作者头像
  delState: 0,//列表是否显示 文章 1 显示 0 隐藏
  userId: '',//作者uid
  create_time: {
    type: String,
    default: Date.now
  },
  create_user_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }
})

exports.CheckCode = mongoose.model('Checkcode', checkcodeSchema)
exports.User = mongoose.model('User', userSchema)
exports.Record = mongoose.model('Record', recordSchema)
exports.Article = mongoose.model('Article', articleSchema)