# FrontendEval Practice Solutions

This repository contains my solutions for the practice questions from [frontendeval.com](https://frontendeval.com/).

## Overview

In this repository, you'll find solutions for various frontend development practice questions. Each project is organized into its own folder, with a README.md file providing details about the project and its implementation.

## Projects

### 1. Countdown Timer  
<details>
<summary><strong>Requirements</strong></summary>

- **Accessibility**:
  - The 'Hours', 'Minutes', and 'Seconds' fields should not have visible labels, but they should be accessible and clearly labeled to a screen reader.
  
- **Placeholder Text**:
  - The input fields should use placeholder text as shown in the screenshot above.
  
- **Start Timer**:
  - Pressing 'Start' should start the timer, replace the input fields with plain text for the hours/minutes/seconds, and replace 'Start' with 'Pause' and 'Reset' buttons.
  
- **Pause Timer**:
  - Pressing 'Pause' should pause the timer, and replace the 'Pause' button with a 'Start' button.
  
- **Reset Timer**:
  - Pressing 'Reset' should revert the app back to the initial state.
  
- **Zero-padding**:
  - While the timer is counting down, the numbers should be zero-padded (e.g. 01 vs 1).
  
- **Notification**:
  - When the timer reaches zero, if the app has appropriate permissions, it should display a Notification that the timer is complete.
  
- **Alert**:
   - If the app doesn't have appropriate permissions, it should show an alert when the timer reaches zero.
- Technologies: ReactJS, Tailwinds.
- Installation: npm create vite@latest project-name
- Screenshots:
      <p style="text-align: center;">
    <img src="https://github.com/mrpankajpandey/Master-React-projects/assets/107976020/392722d8-405b-4fe0-bbbf-e6683e3d9bee" width="400px" style="display: inline-block; margin-right: 10px;" />
    <img src="https://github.com/mrpankajpandey/Master-React-projects/assets/107976020/14cb6c72-b1a6-4bfd-822a-f66a3604d105" width="400px" style="display: inline-block; margin-left: 10px;" />
</p>
</details>


### 2. EMI Calculator
<details>
<summary><strong>Requirements</strong></summary>

   - Technologies: ReactJS, Tailwinds.
   - Installation: npm create vite@latest project-name
   - Screenshots: ![image](https://github.com/mrpankajpandey/Master-React-projects/assets/107976020/89cb1d80-7914-486d-873b-2b4b1a062c6e)

</details>


### 2. FAQ component
<details>
<summary><strong>Requirements</strong></summary>
    
- The FAQ component should receive the list of questions in the JS object format above.
- Every question from the object should be displayed, with an adjacent chevron as in the mockup.
- Clicking any question should reveal the answer.
- Clicking a question again should hide the answer.
- The first answer should be revealed by default.
- Technologies: ReactJS, Tailwinds.
- Installation: npm create vite@latest project-name
- Screenshots: ![image](https://github.com/mrpankajpandey/Master-React-projects/assets/107976020/89cb1d80-7914-486d-873b-2b4b1a062c6e)

</details>


