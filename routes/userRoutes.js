const fs = require('fs');
const express = require('express');

const router = express.Router();

const getAllUser = (req, res) => {
    res.status(500).json({
        status:"success",
        data: "This route is not created yet"
    })
}

const createUser = (req, res) => {
    res.status(500).json({
        status:"success",
        data: "This route is not created yet"
    })
}

const getUser = (req, res) => {
    res.status(500).json({
        status:"success",
        data: "This route is not created yet"
    })
}

const updateUser = (req, res) => {
    res.status(500).json({
        status:"success",
        data: "This route is not created yet"
    })
}

const deleteUser = (req, res) => {
    res.status(500).json({
        status:"success",
        data: "This route is not created yet"
    })
}

router.route('/').get(getAllUser).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;