/*jshint esversion: 6 */

// If either income or expense is already present in localStorage use that. Otherwise generate default category maps. 
const mapExpenseCategories = localStorage.mapExpenseCategories ? new Map(JSON.parse(localStorage.mapExpenseCategories)) : generateMapExpenseCategories();
const mapIncomeCategories = localStorage.mapIncomeCategories ? new Map(JSON.parse(localStorage.mapIncomeCategories)) : generateMapIncomeCategories();
var mapIncomeExpensesByDate = localStorage.mapIncomeExpensesByDate ? new Map(JSON.parse(localStorage.mapIncomeExpensesByDate)) : new Map();

// Setup default Expense Categpories for user input and results
function generateMapExpenseCategories() {
    const map = new Map();
    map.set(
        "Broadband", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#FFB5E8"
        }
    );
    map.set(
        "Rent or Mortgage", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#B28DFF"
        }
    );
    map.set(
        "Utilities", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#BFFC66"
        }
    );
    map.set(
        "Phone & Mobile", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#FFABAB"
        }
    );
    map.set(
        "Groceries", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#FFD700"
        }
    );
    map.set(
        "Eating Out", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#6EB5FF"
        }
    );
    map.set(
        "Household", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#85E3FF"
        }
    );
    map.set(
        "Car", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#FFBEBC"
        }
    );
    map.set(
        "Insurance", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#97A2FF"
        }
    );
    map.set(
        "Holidays", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#C4FAF8"
        }
    );
    map.set(
        "Gifts", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#A79AFF"
        }
    );
    map.set(
        "Loans", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#F6A6FF"
        }
    );
    map.set(
        "Credit Cards", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#BFFCC6"
        }
    );
    map.set(
        "Other", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#E7FFAC"
        }
    );
    return new Map([...map.entries()].sort((a, b) => String(a[0]).localeCompare(b[0])));
}

// Setup default Income Expense Categories for user input and results
function generateMapIncomeCategories() {
    const map = new Map();
    map.set(
        "Salary", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#FF9AA2"
        }
    );
    map.set(
        "Bonus", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#FFB7B2"
        }
    );
    map.set(
        "Investments", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#FFDAC1"
        }
    );
    map.set(
        "Business", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#E2F0CB"
        }
    );
    map.set(
        "Property", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#B5EAD7"
        }
    );
    map.set(
        "Other", 
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 2,
            showAdvice: false,
            backgroundColor: "#C7CEEA"
        }
    );
    return new Map([...map.entries()].sort((a, b) => String(a[0]).localeCompare(b[0])));
}

// Array for the days of the week used in the #add-item form
const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

// Array for the dates of the month from 1-31 used in the #add-item form
const datesOfMonth = [];
for (let i = 1; i <= 31; i++) {
    datesOfMonth.push(i);
}

// Populates the #add-item select menues with the appropriate data when the page has loaded
function populateAddItemFormSelects() {
    const selectCategory = document.getElementById("category");
    for (const value of mapExpenseCategories) {
        const option = document.createElement("option");
        option.text = value[0];
        option.value = value[0];
        selectCategory.add(option);
    }
    for (const value of mapIncomeCategories) {
        const option = document.createElement("option");
        option.text = value[0];
        option.value = value[0];
        option.classList.add("d-none");
        selectCategory.add(option);
    }

    const selectDueWhen = document.getElementById("dueWhen");
    for(const element in datesOfMonth) {
        const option = document.createElement("option");
        option.text = datesOfMonth[element];
        option.classList.add("date");
        selectDueWhen.add(option);
    }
    for(const element in daysOfWeek) {
        const option = document.createElement("option");
        option.text = daysOfWeek[element];
        option.classList.add("week");
        option.classList.add("d-none");
        selectDueWhen.add(option);
    }
}

// When the #add-item form toggle for income/expenses is clicked change options
function toggleCategory(type) {
    const categories = document.getElementById("category").options;
    let select = true; 

    for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        const display = element.classList.contains("d-none");
        if (display) {
            element.classList.remove("d-none");

            if (select) {
                element.selected = true;
                select = false;
            }
        } else {
            element.classList.add("d-none");
        }
    }
}

// When the #add-item form select menu for payment frequency is changed update payment due select options
function toggleDate(type) {
    const date = document.getElementsByClassName("date");
    const week = document.getElementsByClassName("week");
    const selectMenu = document.getElementById("dueWhen");

    let select = true;

    if (type === "Monthly" || type === "Fortnightly") {
        for (let i = 0; i < date.length; i++) {
            date[i].classList.remove("d-none");

            if (select) {
                date[i].selected = true;
                select = false;
            }
        }

        for (let i = 0; i < week.length; i++) {
            week[i].classList.add("d-none");
        }

    } else {
        for (let i = 0; i < week.length; i++) {
            week[i].classList.remove("d-none");

            if (select) {
                week[i].selected = true;
                select = false;
            }
        }

        for (let i = 0; i < date.length; i++) {
            date[i].classList.add("d-none");
        }
    }
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