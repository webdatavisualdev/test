var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var UserType = require('../types/user');
var UserModel = require('../../models/user');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var env = process.env.NODE_ENV || 'production';
var tokenSecret = require('../../config/config')[env].tokenSecret;

exports.add = {
  type: UserType.userType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
        type: new GraphQLNonNull(GraphQLString),
    },
    password: {
        type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    console.log(params)
      return new Promise((resolve, reject) => {
        bcrypt.hash(params.password, 10, function(err, hash) {
            // Store hash in your password DB.
            var token = jwt.sign(params, tokenSecret);
            params.password = hash;
            params.token = token;
            const uModel = new UserModel(params);
            const newUser = uModel.save();
            delete newUser.password;
            if (!newUser) {
              throw new Error('Error');
            }
            resolve(newUser);
          });
      }); 
  }
}