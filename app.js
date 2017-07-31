/* globals global */

const constants = require('./common/constants');
const validation = require('./common/validation');
const models = require('./models')(constants, validation);
const repository = require('./data/repository')(constants);
const data = require('./data')(repository, models);
const app = require('./config/app')(data);
const socket = require('socket.io');

require('./routers')(app, data, models, validation);



const io = socket.listen(app.listen(constants.PORT,
    () => console.log(`Server running at :${constants.PORT}`)));


global.io = io;