"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    apiKeys: {
    // Add your API keys here
    // Example: 'serviceName': process.env.SERVICE_API_KEY || '',
    },
    rateLimits: {
    // Define rate limits for various services
    // Example: 'serviceName': 100, // 100 requests per hour
    },
    environment: process.env.NODE_ENV || 'development',
};
exports.default = config;
