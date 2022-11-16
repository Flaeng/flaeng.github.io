const { executeAsync, copyFolder } = require("./helpers.js");
const fs = require("fs");

(async function () {
  fs.rmdirSync("angular", { recursive: true, force: true });
  await executeAsync(
    `node scripts/build-showroom.js --base-href=/angular/`,
    "../ngfds"
  );
  copyFolder(`../ngfds/showroom`, `./angular`);
})();
