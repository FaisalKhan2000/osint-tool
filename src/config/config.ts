import dotenv from 'dotenv';

dotenv.config();

interface Config {
  apiKeys: {
    [key: string]: string;
  };
  rateLimits: {
    [key: string]: number;
  };
  environment: string;
}

const config: Config = {
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

export default config;