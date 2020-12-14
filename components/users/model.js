const mongoose = require('mongoose');

const Schema = mongoose.Schema;
bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    name: {type: 'string', required: true},
    lastName: {type: 'string', required: true},
    username: {type: 'string', unique: true, required: true},
    password: {type: 'string', required: true},
    cryptocurrencies: [String],
});

UserSchema.pre('save', function(next) {
    let user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


module.exports = mongoose.model('User', UserSchema);