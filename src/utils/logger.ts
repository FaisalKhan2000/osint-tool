import winston from "winston";
import path from "path";
import fs from "fs";

// Ensure log directory exists
const LOG_DIR = "logs";
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR);
}

// Define log files
const ERROR_LOG_FILE = path.join(LOG_DIR, "error.log");
const COMBINED_LOG_FILE = path.join(LOG_DIR, "combined.log");

export const errorLogger = winston.createLogger({
  level: "error",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.errors({ stack: true }),
    winston.format.metadata(),
    winston.format.json()
  ),
  defaultMeta: { service: "osint-tool" },
  transports: [
    // Error log file
    new winston.transports.File({
      filename: ERROR_LOG_FILE,
      level: "error",
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    // Console output for errors
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

const logger = winston.createLogger({
  level: process.env.NODE_ENV === "production" ? "info" : "debug",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.metadata(),
    winston.format.json()
  ),
  defaultMeta: { service: "osint-tool" },
  transports: [
    // Combined log file
    new winston.transports.File({
      filename: COMBINED_LOG_FILE,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    // Console output
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

// Handle uncaught exceptions and unhandled rejections
errorLogger.exceptions.handle(
  new winston.transports.File({
    filename: path.join(LOG_DIR, "exceptions.log"),
  })
);

errorLogger.rejections.handle(
  new winston.transports.File({
    filename: path.join(LOG_DIR, "rejections.log"),
  })
);

export default logger;
