const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const Credentials = require('../../config/config');
const ChartsData = require('../models/ChartData');

let wastonAssistant = new AssistantV1({
    version: "2018-02-16",
    username: Credentials.WA_username,
    password: Credentials.WA_password
});

exports.sendMessage = function (req, res, next) {
    wastonAssistant.message({
        workspace_id: Credentials.WA_workspace_id,
        input: { text: req.body.message },
        context: req.body.context
    }, (err, response) => {
        if (err) {
            next(err);
        } else {
            console.log(response);
            let chartData = [];
            if (response.entities[0]) {
                chartData = ChartsData.get(response.entities[0].entity);
            }
            res.json({
                response: response.output.text,
                context: response.context,
                chartData: chartData
            });
        }
    });
};
