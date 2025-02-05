# OSINT Tool Usage Guide

## Overview
This document provides usage examples for the OSINT research tool CLI. The tool allows users to perform various OSINT searches, including email lookups, username analysis, and company research.

## Installation
Before using the tool, ensure that you have followed the installation guide in `INSTALLATION.md`.

## Usage
To use the OSINT tool, open your command line interface and run the following command:

```
node dist/cli.js [command] [options]
```

### Commands

#### Email Lookup
To perform an email lookup, use the following command:

```
node dist/cli.js email-lookup [email]
```

**Example:**
```
node dist/cli.js email-lookup example@example.com
```

This command will validate the domain, check for public email formats, and search for the email on professional networks and mailing list archives.

#### Username Analysis
To analyze a username or nickname, use the following command:

```
node dist/cli.js username-analysis [username]
```

**Example:**
```
node dist/cli.js username-analysis user123
```

This command will search across public social media platforms, developer platforms, forums, and gaming profiles.

#### Company Research
To research a company or organization, use the following command:

```
node dist/cli.js company-research [company-name]
```

**Example:**
```
node dist/cli.js company-research "Example Corp"
```

This command will search public business registries, press releases, financial records, and social media presence.

## Important Notes
- Ensure you have explicit user consent before performing searches.
- Respect the rate limits of queried services.
- Follow the ethical guidelines outlined in `ETHICS.md`.

## Help
For more information on available commands and options, use:

```
node dist/cli.js --help
```

This will display a list of all commands and their descriptions.