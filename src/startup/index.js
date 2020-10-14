const express = require("express");

// let para que sean privadas
let _express = null;
let _config = null;

class Server {
    constructor({ config, router}) {
        _config = config;
        _express = router;
    }

    start(){
        return new Promise(resolve => {
            _express.listen(_config.PORT, () => {
                console.log(_config.APPLICATION_NAME + " API running at port " + _config.PORT);
            })

            resolve();
        })
    }
}

module.exports = Server;

