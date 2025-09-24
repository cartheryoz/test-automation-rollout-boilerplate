Create a Playwright test automation project using TypeScript with the following setup:

1. Initialize a Node.js project with `npm init -y`.

2. Install the following dev dependencies:
   - `playwright`
   - `@playwright/test`
   - `typescript`
   - `ts-node`
   - `@types/node`

3. Generate a `tsconfig.json` configured for:
   - ESNext target
   - CommonJS module
   - Node module resolution
   - Output directory set to `dist`

4. Create a `tests` folder with a sample test file `example.spec.ts` that:
   - Navigates to https://playwright.dev
   - Verifies the page title contains "Playwright"

5. Implement a Page Object Model (POM) structure:
   - Create a `pages` folder
   - Add a `HomePage.ts` class with methods like `navigate()` and `getTitle()`
   - Use this page object in the sample test

6. Configure Playwright test runner:
   - Set up a retry strategy with 2 retries for failed tests
   - Use the HTML reporter for test results
   - Create a `playwright.config.ts` file with these settings
7. Add a script to `package.json` to run tests using Playwright:
   ```json
   "scripts": {
     "test": "npx playwright test"
   }
   ```