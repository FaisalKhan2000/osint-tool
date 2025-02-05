# API Documentation for OSINT Tool

## Overview
This document outlines the API endpoints available in the OSINT research tool. Each endpoint is designed to perform specific OSINT searches, including email lookups, username analysis, and company research.

## Endpoints

### 1. Email Lookup
- **Endpoint**: `/api/email-lookup`
- **Method**: `POST`
- **Description**: Searches for public information related to a given email address.
- **Request Body**:
  ```json
  {
    "email": "user@example.com"
  }
  ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "domainValid": true,
      "publicProfiles": [
        {
          "platform": "LinkedIn",
          "url": "https://www.linkedin.com/in/user"
        }
      ],
      "mailingLists": [
        "https://example.com/archive"
      ]
    }
    ```
  - **Error (400)**:
    ```json
    {
      "error": "Invalid email format."
    }
    ```

### 2. Username/Nickname Analysis
- **Endpoint**: `/api/username-analysis`
- **Method**: `POST`
- **Description**: Analyzes the presence of a username across various public platforms.
- **Request Body**:
  ```json
  {
    "username": "exampleUser"
  }
  ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "socialMediaProfiles": [
        {
          "platform": "Twitter",
          "url": "https://twitter.com/exampleUser"
        }
      ],
      "forumParticipation": [
        {
          "forum": "Example Forum",
          "url": "https://exampleforum.com/user/exampleUser"
        }
      ]
    }
    ```
  - **Error (400)**:
    ```json
    {
      "error": "Username cannot be empty."
    }
    ```

### 3. Company/Organization Research
- **Endpoint**: `/api/company-research`
- **Method**: `POST`
- **Description**: Gathers public information about a specified company or organization.
- **Request Body**:
  ```json
  {
    "companyName": "Example Corp"
  }
  ```
- **Response**:
  - **Success (200)**:
    ```json
    {
      "businessRegistry": "https://businessregistry.example.com/example-corp",
      "pressReleases": [
        "https://example.com/press-release"
      ],
      "socialMediaPresence": [
        {
          "platform": "Facebook",
          "url": "https://facebook.com/examplecorp"
        }
      ]
    }
    ```
  - **Error (400)**:
    ```json
    {
      "error": "Company name is required."
    }
    ```

## Rate Limiting
All endpoints are subject to rate limiting to ensure responsible data collection practices. Exceeding the rate limit will result in a `429 Too Many Requests` response.

## Legal and Ethical Usage
Users must ensure compliance with the terms of service of the data sources queried and adhere to privacy regulations and ethical guidelines when using this tool.