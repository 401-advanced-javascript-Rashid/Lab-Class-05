'use strict';

const mongoose = require('mongoose');

const MONGOOSE_URI = 'mongodb://localhost:27017/Sony';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true });
