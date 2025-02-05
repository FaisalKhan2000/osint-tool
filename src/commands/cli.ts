import { Command } from "commander";
import {
  emailLookup,
  usernameAnalysis,
  companyResearch,
} from "../services/osintService.js";
import {
  validateEmail,
  validateUsername,
  validateCompany,
} from "../validators/inputValidator.js";
import logger from "../utils/logger.js";

export async function cli() {
  const program = new Command();

  program
    .version("1.0.0")
    .description(
      "OSINT Research CLI Tool - Only use with explicit consent and for publicly available data."
    );

  const requireConsent = (options: { consent?: boolean }) => {
    if (!options.consent) {
      console.error(
        "User consent required. Please acknowledge the terms of use using the '--consent' flag."
      );
      process.exit(1);
    }
  };

  program
    .command("email <email>")
    .description("Perform an email lookup")
    .option("-c, --consent", "User consent acknowledged")
    .action(async (email: string, options: { consent?: boolean }) => {
      requireConsent(options);
      if (!validateEmail(email)) {
        logger.error("Invalid email provided");
        console.error("Invalid email format. Please provide a valid email.");
        return;
      }
      try {
        const result = await emailLookup(email);
        logger.info(`Email lookup performed for: ${email}`);
        console.log(result);
      } catch (error) {
        logger.error(`Error during email lookup: ${error}`);
        console.error("Error occurred during email lookup:", error);
      }
    });

  program
    .command("username <username>")
    .description("Perform a username/nickname analysis")
    .option("-c, --consent", "User consent acknowledged")
    .action(async (username: string, options: { consent?: boolean }) => {
      requireConsent(options);
      if (!validateUsername(username)) {
        logger.error("Invalid username provided");
        console.error(
          "Invalid username format. Please provide a valid username."
        );
        return;
      }
      try {
        const result = await usernameAnalysis(username);
        logger.info(`Username analysis performed for: ${username}`);
        console.log(result);
      } catch (error) {
        logger.error(`Error during username analysis: ${error}`);
        console.error("Error occurred during username analysis:", error);
      }
    });

  program
    .command("company <company>")
    .description("Perform company research")
    .option("-c, --consent", "User consent acknowledged")
    .action(async (company: string, options: { consent?: boolean }) => {
      requireConsent(options);
      if (!validateCompany(company)) {
        logger.error("Invalid company provided");
        console.error(
          "Invalid company format. Please provide a valid company name."
        );
        return;
      }
      try {
        const result = await companyResearch(company);
        logger.info(`Company research performed for: ${company}`);
        console.log(result);
      } catch (error) {
        logger.error(`Error during company research: ${error}`);
        console.error("Error occurred during company research:", error);
      }
    });

  program.parse(process.argv);
}
