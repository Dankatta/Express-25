/* globals __dirname */

const fs = require('fs');
const path = require('path');

module.exports = function(constants, validation) {
    const models = {};

    fs.readdirSync('./models/')
        .filter((x) => x.includes('-model'))
        .forEach((file) => {
            const currentModel =
                require(path.join(__dirname, file))(constants, validation);

            Object.keys(currentModel)
                .forEach((key) => {
                    models[key] = currentModel[key];
                });
        });

    return models;
};
