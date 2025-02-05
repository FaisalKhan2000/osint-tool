"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companySchema = exports.usernameSchema = exports.emailSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.emailSchema = zod_1.default.string().email();
exports.usernameSchema = zod_1.default
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain alphanumeric characters and underscores");
exports.companySchema = zod_1.default
    .string()
    .trim()
    .min(1, "Company name cannot be empty");
