const { createServer } = require('@angular/ssr');
const { AppServerModule } = require('../dist/e-commerce/server/main');

exports.default = createServer(AppServerModule);