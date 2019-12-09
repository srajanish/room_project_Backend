

exports.connect = () => {
    var mongoose = require('mongoose');

    const mongoUrl=process.env.MONGOURL;

    mongoose.connect(mongoUrl,
        { useNewUrlParser: true, useUnifiedTopology: true });

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("connected")
    });

}
