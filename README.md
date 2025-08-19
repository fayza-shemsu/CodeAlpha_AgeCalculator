# Age Calculator

A simple **web-based Age Calculator** that computes your exact age in **years, months, and days** based on your date of birth.

## Features
- User inputs **Date of Birth** (day, month, year).  
- Calculates **age in years, months, and days**.  
- Validates input: ensures a date is selected and prevents future dates.  
- Responsive and user-friendly **calendar picker** via HTML5 `input type="date"`.  

## Tech Stack
- **HTML** – For the input form and layout.  
- **CSS** – For styling and layout.  
- **JavaScript** – For age calculation and DOM manipulation.

## How It Works
1. User selects their date of birth using the calendar input.  
2. JavaScript calculates:
   - Years = current year − birth year  
   - Months = current month − birth month  
   - Days = current day − birth day  
3. Adjusts for negative days/months to ensure correct age.  
4. Displays result dynamically on the webpage.
