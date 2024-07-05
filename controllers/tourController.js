const Tour = require('../models/tourModel')

exports.getAllTour = async (req, res) => {
    try {
        // BUILD QUERY 
        // 1) Filtering 
        const queryObj = {...req.query};
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);

        // 2) Advanced Filtering 
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        console.log(JSON.parse(queryStr));

        const query = Tour.find(JSON.parse(queryStr))

        // const query = 
        Tour.find().where('duration').equals(5).where('difficulty').equals('easy');

        // EXECUTE QUERY 
        const tours = await query;

        // SEND RESPONSE 
        res.status(200).json({
            status:"success",
            results: tours.length,
            data: {
                tours: tours
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);

        res.status(200).json({
            status:"success",
            data: {
                tour: newTour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.getTour = async (req, res) => {
    try {
        const {id} = req.params;
        const tour = await Tour.findById(id);
        if(!tour){
            return res.status(404).json({
                status: 'fail',
                message: 'No tour found with this id'
            })
        }
        res.status(200).json({
            status: 'success',
            data: {
                tour: tour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.updateTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status:"success",
            data: {
                tour: tour
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.deleteTour = async (req, res) => {
    try {
        const tour = await Tour.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status:"success",
            data: null
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}
