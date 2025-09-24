# AI-Assisted Test Automation Rollout Plan

This project is a boilerplate for setting up Playwright-based test automation using TypeScript, following a Page Object Model (POM) structure. It is designed to accelerate the rollout of automated testing in Digital OZ organization, leveraging AI-assisted best practices.

## Features
- **Playwright** for fast, reliable end-to-end testing
- **TypeScript** for type safety and maintainability
- **Page Object Model (POM)** structure for scalable test code
- **Retry strategy** and **HTML reporting** for robust test runs
- **Headed mode** enabled for visual debugging

## Project Structure
```
├── pages/           # Page Object Model classes
│   └── HomePage.ts
├── tests/           # Test specs
│   └── example.spec.ts
├── playwright.config.ts  # Playwright configuration
├── tsconfig.json    # TypeScript configuration
├── package.json     # Project metadata and scripts
```

## Getting Started

### 1. Install dependencies
```
npm install
```

### 2. Install Playwright browsers
```
npx playwright install
```

### 3. Run tests (headed mode)
```
npm test
```

## Sample Test
The sample test navigates to the Playwright homepage and verifies the page title using a POM class:
- `pages/HomePage.ts`: Encapsulates page actions
- `tests/example.spec.ts`: Uses the page object to run a test

## Customization
- Add new page objects in the `pages/` folder
- Add new test specs in the `tests/` folder
- Update `playwright.config.ts` for custom settings

## About
This project is part of an **AI-Assisted Test Automation Rollout Plan** to help teams quickly adopt modern, maintainable, and scalable test automation practices.
