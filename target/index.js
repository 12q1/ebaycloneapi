"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const routing_controllers_1 = require("routing-controllers");
const controller_1 = require("./products/controller");
const db_1 = require("./db");
const app = routing_controllers_1.createKoaServer({
    cors: true,
    controllers: [
        controller_1.default
    ]
});
db_1.default()
    .then(_ => app.listen(process.env.PORT || 4000, () => console.log('Listening on port 4000')))
    .catch(err => console.error(err));
//# sourceMappingURL=index.js.map