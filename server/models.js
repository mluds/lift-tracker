const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/lift-tracker');

exports.User = mongoose.model('User', {
    googleId: { type: String, unique: true }
});

exports.Exercise = mongoose.model('Exercise', {
    name: { type: String, unique: true }
});

exports.Set = mongoose.model('Set', {
    userId: Schema.Types.ObjectId,
    exerciseId: Schema.Types.ObjectId,
    reps: Number,
    weight: Number,
    created: { type: Date, default: Date.now }
});
