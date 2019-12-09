const User = require('../model/userModel');
var jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;



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
                password: req.password,
                phoneNo:req.phoneNo,
                role: "user"
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => {
                            res.json("User created successfully")
                        })
                        .catch(err => {
                            console.log(err)
                        });
                });
            });


        })
        //End of find
}


exports.loginUser = (req, res) => {
    let data = req.body;


    User.findOne({ email: data.email }).then(user => {

            bcrypt.compare(data.password, user.password).then(isMatch => {
                console.log(isMatch);
                if (isMatch) {
                    // Dealer Matched

                    const payload = {
                        user: {
                            name: user.name,
                            email: user.email,
                            role: user.role
                        }
                    };
                    //  console.log(payload)

                    // Sign Token
                    jwt.sign(
                        payload,
                        process.env.SECRET_KEY, { expiresIn: 18000 },
                        (err, token) => {
                            res.header('x-auth-header', token).send({
                                success: true,
                                token
                            });


                        });
                    //End of bycrpt

                } else {

                    //errors.password = "The password doesn't match";
                    res.status(404).json({ msg: "The password doesn't matching" });
                }
            });



        }).catch(err => {

            res.status(400).json({ msg: "User Not exist" + err });
        })
        //End of findone


}



exports.getUsersByEmail = (req, res) => {
    let email = req.params.email;
    User.findOne({ email: email }).then(user => {
        console.log(user)
        res.status(200).json(user);
    }).catch(err => {
        res.status(400).json(err);
    })

}


exports.getAlluserData = (req, res) => {
    User.find().then(user => {
        res.status(200).json(user);
    }).catch(err => {
        res.status(400).json(err);
    })
}




exports.deleteUser = (req, res) => {
    let email = req.params.email;
    console.log(email)
    User.findOne({ email }).then(user => {
        if (user) {
            User.deleteOne({ email: email }).then(user => {
                res.status(200).json({ msg: "Deleted successful" });
            }).catch(err => {
                res.status(400).json(err);
            })
        } else {
            res.status(400).json({ msg: "UserNot found" });
        }
    })

}