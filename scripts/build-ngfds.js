const { executeAsync, makeDir, copyFolder } = require('./helpers.js');

(async function () {
    await executeAsync(`node scripts/build-showroom`, '../ngfds');
    makeDir(`ngfds`, true);
    copyFolder(`../ngfds/showroom`, `ngfds`);
})();