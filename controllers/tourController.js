const Tour = require('../models/tourModel')

exports.getAllTour = async (req, res) => {
    try {
        const tours = await Tour.find();
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
            message: 'Could not send data!'
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
