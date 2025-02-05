import { cli } from "./commands/cli.js";

async function main() {
  try {
    await cli();
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main();
