"use strict";

const path = require('path');

module.exports = Franz => {
    Franz.injectCSS(path.join(__dirname, 'style.css'));
    Franz.loop(() => {
        Franz.setBadge(parseInt(
            document.getElementById('_orders').getAttribute('_pending')));
    });
}