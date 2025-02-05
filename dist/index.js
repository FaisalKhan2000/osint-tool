"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_js_1 = require("./commands/cli.js");
async function main() {
    try {
        await (0, cli_js_1.cli)();
    }
    catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}
main();
