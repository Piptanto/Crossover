const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: {
        type: String
    },
  user: {
      type: Schema.Types.ObjectId,
      ref:'User'
    },
  timestamp: {
      type: Date,
      default: Date.now
    }  

})




const Messages = mongoose.model('Message', messageSchema)

module.exports = Messages




// user: Will be having link with UserSchema.js,We will link it as Ref to the UserSchema Collection
// commentId:: Will be having link with CommentSchema.js,We will link it as Ref to the CommentSchema Collection
