import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    status: 'error',
    message: 'Too many requests, please try again later.',
  },
  handler: (req: Request, res: Response, next: NextFunction) => {
    // Log the rate limit error
    console.error(`Rate limit exceeded for IP: ${req.ip}`);
    res.status(429).json({
      status: 'error',
      message: 'Too many requests, please try again later.',
    });
  },
});

export default rateLimiter;