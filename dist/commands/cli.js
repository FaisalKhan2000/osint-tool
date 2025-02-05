"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = cli;
const commander_1 = require("commander");
const osintService_js_1 = require("../services/osintService.js");
const inputValidator_js_1 = require("../validators/inputValidator.js");
const logger_js_1 = __importDefault(require("../utils/logger.js"));
async function cli() {
    const program = new commander_1.Command();
    program
        .version("1.0.0")
        .description("OSINT Research CLI Tool - Only use with explicit consent and for publicly available data.");
    const requireConsent = (options) => {
        if (!options.consent) {
            console.error("User consent required. Please acknowledge the terms of use using the '--consent' flag.");
            process.exit(1);
        }
    };
    program
        .command("email <email>")
        .description("Perform an email lookup")
        .option("-c, --consent", "User consent acknowledged")
        .action(async (email, options) => {
        requireConsent(options);
        if (!(0, inputValidator_js_1.validateEmail)(email)) {
            logger_js_1.default.error("Invalid email provided");
            console.error("Invalid email format. Please provide a valid email.");
            return;
        }
        try {
            const result = await (0, osintService_js_1.emailLookup)(email);
            logger_js_1.default.info(`Email lookup performed for: ${email}`);
            console.log(result);
        }
        catch (error) {
            logger_js_1.default.error(`Error during email lookup: ${error}`);
            console.error("Error occurred during email lookup:", error);
        }
    });
    program
        .command("username <username>")
        .description("Perform a username/nickname analysis")
        .option("-c, --consent", "User consent acknowledged")
        .action(async (username, options) => {
        requireConsent(options);
        if (!(0, inputValidator_js_1.validateUsername)(username)) {
            logger_js_1.default.error("Invalid username provided");
            console.error("Invalid username format. Please provide a valid username.");
            return;
        }
        try {
            const result = await (0, osintService_js_1.usernameAnalysis)(username);
            logger_js_1.default.info(`Username analysis performed for: ${username}`);
            console.log(result);
        }
        catch (error) {
            logger_js_1.default.error(`Error during username analysis: ${error}`);
            console.error("Error occurred during username analysis:", error);
        }
    });
    program
        .command("company <company>")
        .description("Perform company research")
        .option("-c, --consent", "User consent acknowledged")
        .action(async (company, options) => {
        requireConsent(options);
        if (!(0, inputValidator_js_1.validateCompany)(company)) {
            logger_js_1.default.error("Invalid company provided");
            console.error("Invalid company format. Please provide a valid company name.");
            return;
        }
        try {
            const result = await (0, osintService_js_1.companyResearch)(company);
            logger_js_1.default.info(`Company research performed for: ${company}`);
            console.log(result);
        }
        catch (error) {
            logger_js_1.default.error(`Error during company research: ${error}`);
            console.error("Error occurred during company research:", error);
        }
    });
    program.parse(process.argv);
}
