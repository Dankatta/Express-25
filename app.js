const constants = require('./common/constants');
const validation = require('./common/validation');
const models = require('./models')(constants, validation);
const mongodb = require('./data/mongodb')(constants);
const data = require('./data')(mongodb, models);
const app = require('./config/app')(data);

require('./routers')(app, data, models, validation);

app.listen(constants.PORT,
    () => console.log(`Server running at :${constants.PORT}`));