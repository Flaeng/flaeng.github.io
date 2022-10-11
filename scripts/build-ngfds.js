const { executeAsync, copyFolder } = require('./helpers.js');

(async function () {
    await executeAsync(`node scripts/build-showroom`, '../ngfds');
    copyFolder(`../ngfds/showroom`, `./`);
})();