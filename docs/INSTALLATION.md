# Installation Guide for OSINT Tool

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 14 or higher)
- **npm** (Node package manager, comes with Node.js)
- **TypeScript** (optional, for development)

## Setup Instructions

1. **Clone the Repository**

   Open your terminal and run the following command to clone the repository:

   ```
   git clone https://github.com/yourusername/osint-tool.git
   ```

   Replace `yourusername` with your GitHub username.

2. **Navigate to the Project Directory**

   Change into the project directory:

   ```
   cd osint-tool
   ```

3. **Install Dependencies**

   Run the following command to install the required dependencies:

   ```
   npm install
   ```

4. **Build the Project**

   If you want to compile the TypeScript files, run:

   ```
   npm run build
   ```

   This will generate the necessary JavaScript files in the `dist` directory.

5. **Run the Tool**

   You can now run the OSINT tool using the command line. Use the following command:

   ```
   npm start
   ```

   Alternatively, if you want to run it directly from the built files, use:

   ```
   node dist/commands/cli.js
   ```

## Additional Configuration

- You may need to configure API keys and other settings in the `src/config/config.ts` file based on the services you intend to use.

## Legal and Ethical Considerations

Ensure you have read and understood the legal and ethical guidelines provided in the documentation before using the tool. Always respect the terms of service of the data sources you query.