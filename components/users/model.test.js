var mongoose = require('mongoose'),
User = require('./model');
     
var connStr = 'mongodb+srv://lucho:443889@cluster0.x11rk.mongodb.net/wolox1?retryWrites=true&w=majority';
mongoose.connect(connStr, function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});
     
// create a user a new user
var testUser = new User({
    name: 'Lucho',
    lastName: 'John',
    username: 'jmar777',
    password: 'Password123'
});
     
async function test() {
// save the user to database
    await testUser.save(function(err) {
        if (err) throw err;
    });
        
    // fetch the user and test password verification
    User.findOne({ username: 'jmar777' }, function(err, user) {
        if (err) throw err;
        console.log(user);
        
    // test a matching password
    user.comparePassword('Password123', function(err, isMatch) {
        if (err) throw err;
        console.log('Password123:', isMatch); // -&gt; Password123: true
    });
        
    // test a failing password
    user.comparePassword('123Password', function(err, isMatch) {
        if (err) throw err;
        console.log('123Password:', isMatch); // -&gt; 123Password: false
    });
    });
};

test();