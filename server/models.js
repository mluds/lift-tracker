import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/lift-tracker');

export var User = mongoose.model('User', {
    gid: String,
    gender: String
});

export var Exercise = mongoose.model('Exercise', {
    name: { type: String, unique: true }
});

export var Set = mongoose.model('Set', {
    user_id: Schema.Types.ObjectId,
    ex_id: Schema.Types.ObjectId,
    reps: Number,
    weight: Number,
    duration: Number,
    created: { type: Date, default: Date.now }
});
