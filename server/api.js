const app = require('./app.js').app;
const models = require('./models.js');
const Lift = models.Lift;

app.get('/lifts/data', (req, res) => {
    Lift.find().select('name').then(lifts => {
        res.send(lifts);
    });
});

app.post('/lifts/add', (req, res) => {
    // Find a lift by name
    Lift.findOne({
        name: req.body.name
    }).then(lift => {
        // If it doesn't exist, create it
        if (lift) {
            return Promise.resolve(lift);
        } else {
            return Lift.create({ name: req.body.name });
        }
    }).then(lift => {
        // Add the lift if it doesn't exist
        req.user.lifts.addToSet(lift);
        req.user.save();
    }).then(() => {
        res.status(204).end();
    });
});
