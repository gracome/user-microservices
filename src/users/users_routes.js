const controller = require("./users_ctrls");
const passport= require('passport');
require('../../config/passport');

module.exports.config = function (app) {
    app.post("/user/add", controller.create);
    //  app.get("/user/:id", controller.findByPk);
    app.get("/user/all", controller.findAll);
    app.put("/user/update" , passport.authenticate('jwt', { session: false }), controller.update);
    app.delete("/user/delete", passport.authenticate('jwt', { session: false }), controller.delete);
    app.post("/user/login", controller.login);
    app.post("/user/me", controller.getProfile)
    app.put("/user/change_password", controller.changePassword);
    app.post("/user_channel/associate", passport.authenticate('jwt', { session: false }), controller.associate);
    app.delete("/user_channel/dissociate", passport.authenticate('jwt', { session: false }), controller.dissociate);

}