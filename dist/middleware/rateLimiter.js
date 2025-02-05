"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const rateLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: {
        status: 'error',
        message: 'Too many requests, please try again later.',
    },
    handler: (req, res, next) => {
        // Log the rate limit error
        console.error(`Rate limit exceeded for IP: ${req.ip}`);
        res.status(429).json({
            status: 'error',
            message: 'Too many requests, please try again later.',
        });
    },
});
exports.default = rateLimiter;
