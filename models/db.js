const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Raja:Raj789@cluster0-hpicx.mongodb.net/employeeDB?retryWrites=true&w=majority', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');