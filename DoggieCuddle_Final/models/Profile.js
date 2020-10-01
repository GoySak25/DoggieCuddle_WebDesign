const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },

    status: {
        type: String,
    },

    dog: [
        {
          dogName: {
            type: String,
            required: true
          },
          breed: {
            type: String,
            required: true
          },
          sex:{
              type:String,
              required: true
          },
          age: {
            type: String,
            required: true
          },
          location: {
            type: String
          },
          dateOfBirth: {
            type: Date,
          },
          image: { type: String }
          
        }
      ],

      social: {
        youtube: {
          type: String
        },
        twitter: {
          type: String
        },
        facebook: {
          type: String
        },
        linkedin: {
          type: String
        },
        instagram: {
          type: String
        }
      },
      date: {
        type: Date,
        default: Date.now
      }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);