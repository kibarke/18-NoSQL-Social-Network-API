const { Schema, model } = require('mongoose'); 
const reactSchema = require('./Reaction');

// Schema to create thought model

const thoughtsSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minlength: 1,
            maxlenght: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString(),
        },
        username:{
            type: String,  
            required: true,
        },
        reactions:[reactSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

thoughtsSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});

const Thoughts = model('Thoughts',thoughtsSchema)

module.exports = Thoughts