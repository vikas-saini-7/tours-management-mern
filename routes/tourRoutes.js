const fs = require('fs');
const express = require('express');

const router = express.Router();

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

const getAllTour = (req, res) => {
    res.status(200).json({
        status:"success",
        results: tours.length,
        data: {
            tours: tours
        }
    })
}

const createTour = (req, res) => {
    // console.log(req.body);
    const newId = tours[tours.length-1].id + 1;
    console.log(newId);
    const newTour = Object.assign({id: newId}, req.body);
    tours.push(newTour);
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: "success",
            data: {
                tour: newTour
            }
        })
    })
}

const getTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    if(!tour){
        return res.status(404).json({
            status:"fail",
            message: "Invalid id"
        })
    }

    res.status(200).json({
        status:"success",
        data: {
            tour: tour
        }
    })
}

const updateTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    if(!tour){
        return res.status(404).json({
            status:"fail",
            message: "Invalid id"
        })
    }

    res.status(200).json({
        status:"success",
        data: {
            tour: "<Updated tour...>"
        }
    })
}

const deleteTour = (req, res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    if(!tour){
        return res.status(404).json({
            status:"fail",
            message: "Invalid id"
        })
    }

    res.status(204).json({
        status:"success",
        data: null
    })
}

router.route('/').get(getAllTour).post(createTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;