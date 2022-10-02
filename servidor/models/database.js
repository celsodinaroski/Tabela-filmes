var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adm:MAWhNbNflzW5Lr3I@cluster0.qq8ih.mongodb.net/movies?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    promiseLibrary: global.Promise
});

module.exports = mongoose;