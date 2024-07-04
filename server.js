require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

console.log(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {console.log('DB connection successful!')})

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name']
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
});

const Tour = mongoose.model('Tour', tourSchema)

const testTour = new Tour({
    name: 'The Forest Hiker',
    rating: 4.7,
    price: 497
});

testTour.save().then(doc => {
    console.log(doc);
}).catch(err => {
    console.log(err);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening...on port ${PORT}`);
});