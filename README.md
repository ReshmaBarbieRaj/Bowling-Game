# Web UI Automation using Playwright with Typescript

<img height="24" width="24" src="https://playwright.dev/img/playwright-logo.svg" />   Frameworks: Playwright

<img height="24" width="24" src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" />   Language: TypeScript  



![image](https://github.com/ReshmaBarbieRaj/Bowling-Game/assets/85567781/83cb300e-29ea-479b-bf9e-e6a1e1129d24)

# About the Project

- This project aims to automate test scenarios for the [nopCommerce demo store](https://demo.nopcommerce.com/)
website using TypeScript along with Playwright test automation framework.

- The automation tests follows the Page Object Model (POM) and Data-Driven Test
(DDT) for the better code readability and maintainability.

- The project is integrated with Jenkins for continuous integration.

## Getting Started

### Prerequisites

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```
  
### Installation

1. Clone the repo using below URL

```sh
https://github.com/ReshmaBarbieRaj/webUIAutomation.git
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```
3. For first time installation run below command to download required browsers

```sh
npx playwright install
```

# Running the tests

Test Cases are present in "test-suites" folder

1. For execution end-to-end tests:

```JS
npx playwright test
```

2. For execution of tests in specific browser:

```JS
npx playwright test --project = chromium
```

3. For execution of specific test file:

```JS
npx playwright test test folder/example.spec.ts
```

4. For execution of test in headed mode:

```JS
npx playwright test --headed
```

## Reports

The test reports are found inside "test-results" folder

To open last report:

```JS
npx playwright show-report
```

## Project Structure

```JS
project-root

│   README.md

│   .gitignore

│   package.json

│   playwright.config.ts

└─── resources\TestDate

         │   test1.spec.ts

└───pages

      │       │   home-page.po.ts

      │       │   user-actions.po.ts

│   └───tests-suites

      │       │   user-interactions.spec.ts

└───test-results




![image](https://github.com/ReshmaBarbieRaj/Bowling-Game/assets/85567781/35459342-2708-4c02-929b-462ad1e4fd5e)


      │       │   index.html

```


