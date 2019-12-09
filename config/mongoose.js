

exports.connect = () => {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://srajanish:maharana1995@cluster0-595zc.mongodb.net/room?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true });

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("connected")
    });

}
