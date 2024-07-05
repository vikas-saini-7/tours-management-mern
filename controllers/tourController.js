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
            message: 'Invalid data sent!'
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

exports.updateTour = (req, res) => {
    const id = req.params.id * 1;
    // const tour = tours.find(el => el.id === id);

    res.status(200).json({
        status:"success",
        data: {
            tour: "<Updated tour...>"
        }
    })
}

exports.deleteTour = (req, res) => {
    const id = req.params.id * 1;
    // const tour = tours.find(el => el.id === id);

    res.status(204).json({
        status:"success",
        data: null
    })
}
