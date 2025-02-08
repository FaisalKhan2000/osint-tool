// import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import rateLimit from "axios-rate-limit";
// import axiosRetry from "axios-retry";
// import NodeCache from "node-cache";
// import { z } from "zod";
// import winston from "winston";

// // Custom error class
// class APIError extends Error {
//   constructor(
//     message: string,
//     public statusCode?: number,
//     public response?: any
//   ) {
//     super(message);
//     this.name = "APIError";
//   }
// }

// // Configuration interface
// interface APIConfig {
//   baseURL: string;
//   timeout?: number;
//   retries?: number;
//   cacheDuration?: number;
//   rateLimit?: {
//     maxRequests: number;
//     perMilliseconds: number;
//   };
// }

// // Response interface
// interface APIResponse<T> {
//   data: T;
//   metadata: {
//     timestamp: Date;
//     cached: boolean;
//     retryCount: number;
//   };
// }

// // Email schema validation
// const emailSchema = z.string().email();

// // Initialize cache
// const cache = new NodeCache();

// // Initialize logger
// const logger = winston.createLogger({
//   level: "info",
//   format: winston.format.json(),
//   transports: [
//     new winston.transports.File({ filename: "error.log", level: "error" }),
//     new winston.transports.Console(),
//   ],
// });

// export const createAPIClient = (config: APIConfig) => {
//   // Create axios instance with base configuration
//   const axiosInstance = axios.create({
//     baseURL: config.baseURL,
//     timeout: config.timeout || 5000,
//   });

//   // Apply rate limiting
//   if (config.rateLimit) {
//     rateLimit(axiosInstance, {
//       maxRequests: config.rateLimit.maxRequests,
//       perMilliseconds: config.rateLimit.perMilliseconds,
//     });
//   }

//   // Apply retry logic
//   axiosRetry(axiosInstance, {
//     retries: config.retries || 3,
//     retryDelay: axiosRetry.exponentialDelay,
//     retryCondition: (error) => {
//       return (
//         axiosRetry.isNetworkOrIdempotentRequestError(error) ||
//         error.response?.status === 429
//       );
//     },
//   });

//   // Request interceptor
//   axiosInstance.interceptors.request.use((config) => {
//     logger.info(`Making request to ${config.url}`);
//     return config;
//   });

//   // Response interceptor
//   axiosInstance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       logger.error("API Error:", error);
//       throw new APIError(
//         error.message,
//         error.response?.status,
//         error.response?.data
//       );
//     }
//   );

//   return {
//     fetchUsersByEmail: async <T = any>(
//       email: string,
//       options: Partial<AxiosRequestConfig> = {}
//     ): Promise<APIResponse<T>> => {
//       try {
//         // Validate email
//         emailSchema.parse(email);

//         // Check cache
//         const cacheKey = `email_${email}`;
//         const cachedResponse = cache.get<APIResponse<T>>(cacheKey);
//         if (cachedResponse) {
//           logger.info(`Cache hit for email: ${email}`);
//           return cachedResponse;
//         }

//         // Make request
//         const startTime = Date.now();
//         const response: AxiosResponse<T> = await axiosInstance.get("", {
//           ...options,
//           params: {
//             ...options.params,
//             email,
//           },
//         });

//         // Create response object
//         const apiResponse: APIResponse<T> = {
//           data: response.data,
//           metadata: {
//             timestamp: new Date(),
//             cached: false,
//             retryCount:
//               (response.config as any)["axios-retry"]?.retryCount || 0,
//           },
//         };

//         // Cache response
//         if (config.cacheDuration) {
//           cache.set(cacheKey, apiResponse, config.cacheDuration);
//         }

//         // Log response time
//         logger.info(`Request completed in ${Date.now() - startTime}ms`);

//         return apiResponse;
//       } catch (error) {
//         if (error instanceof z.ZodError) {
//           throw new APIError("Invalid email format");
//         }
//         throw error;
//       }
//     },
//   };
// };
