require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

console.log(process.env.MONGO_URI)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {console.log('DB connection successful!')})

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening...on port ${PORT}`);
});