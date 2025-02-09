import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from 'uuid';
import logger from '../utils/logger';

export const requestMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers['x-request-id']) {
    const requestId = uuidv4();
    req.headers['x-request-id'] = requestId;
    logger.info(`Generated new x-request-id: ${requestId}`);
  } else if (Array.isArray(req.headers['x-request-id'])) {
    req.headers['x-request-id'] = req.headers['x-request-id'][0];
  }
  next();
};