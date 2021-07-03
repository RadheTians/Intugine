const express = require('express');
const router = express.Router();
const User = require('./models/userModel');
const Expense = require('./models/expenseModel');
const Record = require('./models/recordModel');

router.get("/pending", async(req, res) => {

    console.log(req.query.id)
    const expense = await Expense.find({"userId": req.query.id});
    res.status(200).json({
        status: 'success',
        data: expense,
    });
});

router.post("/createuser", async(req, res) => {

    console.log(req.body)
    const currentUser = await User.create(req.body);
    res.status(200).json({
        status: 'success',
        data: currentUser,
    });
});

router.post("/booking", async(req, res) => {

    console.log(req.body)
    const share = req.body.totalShare;
    const amount = req.body.totalAmount;
    let shared_amount = []
    share.forEach(element => {
        let temp = {
            id: element.id,
            share: element.share,
            name: element.name,
            amount: amount * (element.share / 100)
        }
        if(element.id != req.body.userId) {
            Record.create({
                userId: element.id,
                otherId: req.body.userId,
                name: req.body.userName,
                amount: amount * (element.share / 100)
            });
        }
        shared_amount.push(temp);
    });
    console.log(shared_amount);
    req.body.totalShare = shared_amount;
    const expense = await Expense.create(req.body);
    res.status(200).json({
        status: 'success',
        data: expense,
    });
});

router.get("/settlement", async(req, res) => {

    console.log(req.query.id)
    const record = await Record.find({"userId": req.query.id});
    res.status(200).json({
        status: 'success',
        data: record,
    });
});

module.exports = router;