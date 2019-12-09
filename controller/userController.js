const User = require('../model/userModel');

var jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');



exports.createUser = (request, res) => {
    let req = request.body;
    console.log(req);

    User.findOne({ email: req.email }).then(user => {
            if (user) {

                res.status(400).json({
                    err: "User Is Existed"
                });
            }
            let newUser = new User({
                name: req.name,
                email: req.email,
                phoneNo: req.phoneNo,
                role: "user"
            });

            newUser
                        .save()
                        .then(user => {
                            res.json("User created successfully")
                        })
                        .catch(err => {
                            console.log(err)
                        });



        })
        //End of find
}
