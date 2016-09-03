const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/lift-tracker');
mongoose.Promise = require('bluebird');

exports.User = mongoose.model('User', {
    googleId: { type: String, unique: true },
    lifts: [{ type: Schema.Types.ObjectId, ref: 'Lift' }]
});

exports.Lift = mongoose.model('Lift', {
    name: { type: String, unique: true }
});

exports.Set = mongoose.model('Set', {
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    liftId: { type: Schema.Types.ObjectId, ref: 'Lift' },
    reps: Number,
    weight: Number,
    created: { type: Date, default: Date.now }
});
