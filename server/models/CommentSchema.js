const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const commentSchema = new Schema({

    comment: {
        type: String
    }

})

const Comments = mongoose.model('Comment', commentSchema)

module.exports = Comments

