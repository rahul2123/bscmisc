const express = require('express');
const router = express.Router()
const request = require("request");

createtask = function (body) {
    return new Promise((resolve, reject) => {
        var options = {
            method: 'POST',
            url: 'https://projectsapi.zoho.com/restapi/portal/bombayshirts/projects/1230854000000020009/tasks/',
            qs: {
                authtoken: config.zoho_authtoken,
                person_responsible: config.zoho_rahul_user_id,
                tasklist_id: config.zoho_task_list,
                name: body.user_name + " - " + body.text.split('|')[0],
                description: body.text.split('|')[1]
            },
            headers: {
                'content-type': 'application/json'
            }
        };

        request(options, (error, response, body) => {
            if (error) {
                return reject(error)
            }
            if (response.statusCode == 201) {
                return resolve(true)
            }
            return reject(req.body)
        });
    })
}

verifyAuth = function (req, res, next) {
    if (req.body.token != "2LpV1m4oKDYrzfe3hbbFbZjB") {
        return res.status(200).send({
            text: 'Oops! not from slack'
        })
    }
    next()
}

checkChannel = function (req, res, next) {
    if (req.body.channel_id != 'G9EMNS9V5') {
        return res.status(200).send({
            text: 'Oops! you cannot execute this command from this channel'
        })
    }
    next()
}

router.post('/test', verifyAuth, checkChannel, (req, res) => {
    createtask(req.body)
        .then((created) => {
            return res.status(200).send({
                "text": `Hey ${req.body.user_name}`,
                "attachments": [
                    {
                        "text": "Your Task has been added to zoho.\n Thanks"
                    }
                ]
            })
        })
        .catch(error => {
            res.status(200).send(error)
        })
})

module.exports = router