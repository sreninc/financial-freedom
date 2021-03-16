/*jshint esversion: 6 */

// Setup default Expense Categpories for user input and results
function generateMapExpenseCategories() {

}

// Setup default Income Expense Categories for user input and results
function generateMapIncomeCategories() {

}

// Array for the days of the week used in the #add-item form
const daysOfWeek = [

];

// Array for the dates of the month from 1-31 used in the #add-item form
const datesOfMonth = [];
for (let i = 1; i <= 31; i++) {
    datesOfMonth.push(i);
}

// Populates the #add-item select menues with the appropriate data when the page has loaded
function populateAddItemFormSelects() {

}

// Generate a bar chart comparing monthly income and expenditure inputted by the user
function generateIncomeExpensesBarChart(ctxIncomeExpenses) {

}

// Update the income and expenses bar chart when a user adds, edits or removes an item
function updateIncomeExpensesBarChart() {

}

// Adds data to the income expenses bar chart data array 
function addData(chartIncomeExpenses, data, order) {

}

// Removes data from the income expenses bar chart data array
function removeData(chart) {

}

// Populates the appropriate table with the data from income or expenses map object
function populateTableData(table, data) {

}

// When the user visits the page check if data already exists in localStorage (returning user) or if no data, or incomplete data exists (new user)
function newUserOrExisting() {

}

// #add-item submit action where the item is added to either mapIncome or mapExpenses
function addOrUpdateItem() {

}

// Populate the #add-item form with data of an existing item when the user clicks the edit button in one of the tables
function editItem(type, id) {

}

// Calaculates the monthly value for an income/expense item based on the frequency chosen during input
function calculateMonthly(frequency, value) {

}

// Calaculates the items value compared to the total monthly income
function calculateMonthlyPercentage() {

}

// Removes item from mapIncome or mapExpenses and updates localStorage for the item
function removeItem(type, id) {

}

// When an item is removed from mapIncome or mapExpenses update all keys in the map to reset numerical order
function resetMapKeys(map) {

}

// Updates the category maps by clearing them and rechecking all values and show advice against the entry maps
function updateCategoryMaps(entryMap, categoryMap) {

}

// When the #add-item form toggle for income/expenses is clicked change options
function toggleCategory() {

}

// When the #add-item form select menu for payment frequency is changed update payment due select options
function toggleDate(type) {

}

// Generates a day by day income & expense map used to show the user a line graph of income and expense over a month
function generateIncomeExpensesByDate(incomeMap, expensesMap) {

}

// Generate line graph showing day by day income and expenses
function createResultsChart(ctx, map) {

}

// Generates a pie chart showing spend by income or expense category
function createResultsPieChart(ctx, map) {

}

// Generates cards showing advice based on the monthly percentage for an income or expenses item compared to the recommended percentage in the category map
function generateResultsAdvice(map) {

}

// Updates the category and date maps before loading the results page
function loadResultsPage() {

}

// Logic used to load the contact form and emailjs form handling on the about.html page
function loadContactFormLogic() {
    
}