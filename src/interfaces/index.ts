// src/interfaces/index.ts

export interface EmailLookupResult {
  email: string;
  domainValid: boolean;
  linkedInProfile?: string;
  mailingListArchives?: string[];
}

export interface UsernameAnalysisResult {
  username: string;
  socialMediaProfiles: string[];
  developerProfiles: string[];
  forumParticipation: string[];
  gamingProfiles: string[];
}

export interface CompanyResearchResult {
  companyName: string;
  businessRegistryInfo?: string;
  pressReleases?: string[];
  financialRecords?: string[];
  socialMediaPresence?: string[];
}

export interface Config {
  apiKeys: {
    linkedIn: string;
    github: string;
    // Add other API keys as needed
  };
  rateLimits: {
    emailLookup: number; // requests per minute
    usernameAnalysis: number; // requests per minute
    companyResearch: number; // requests per minute
  };
}

export interface UserInput {
  email?: string;
  username?: string;
  companyName?: string;
}
