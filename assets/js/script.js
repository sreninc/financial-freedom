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
function populateTableData(table, map) {
    let tableBody = document.getElementById(table).getElementsByTagName('tbody')[0];
    tableBody.remove();
    tableBody = document.createElement('tbody');
    document.getElementById(table).appendChild(tableBody);
    if(map.size === 0) {
        const row = tableBody.insertRow(-1);
        row.insertAdjacentHTML(
            'beforeend',
            `
                <td colspan="8" class="text-center">
                    <p>
                        Add Your First Item
                    </p>
                    <p class="mb-7 mb-md-9 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150">
                        <a class="btn btn-primary shadow lift" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add New Item <i data-feather="arrow-right"></i>
                        </a>
                    </p>
                </td>
            `
        );
    } else {
        for (const elem of map.entries()) {
            const row = tableBody.insertRow(-1);
            row.insertAdjacentHTML(
                'beforeend',
                `
                    <td>
                        ${elem[1].description}
                    </td>
                    <td>
                        ${elem[1].category}
                    </td>
                    <td>
                        ${elem[1].amount}
                    </td>
                    <td>
                        ${elem[1].frequency}
                    </td>
                    <td>
                        €${Math.round(elem[1].monthlyAmount)}
                    </td>
                    <td>
                        ${elem[1].percentageMonthlyIncome}%
                    </td>
                    <td>
                        <a onclick="editItem('${table}', ${elem[0]})" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i data-feather="edit"></i>
                        </a>
                    </td>
                    <td>
                        <a onclick="removeItem('${table}', ${elem[0]})">
                            <i data-feather="trash-2"></i>
                        </a>
                    </td>
                `
            );
        }
    }
    feather.replace();
}

// When the user visits the page check if data already exists in localStorage (returning user) or if no data, or incomplete data exists (new user)
function newUserOrExisting() {

}

// #add-item submit action where the item is added to either mapIncome or mapExpenses
function addOrUpdateItem() {
    let form = document.getElementById("add-item");
    let updatingItem = form.itemId.value ? true : false;

    let item = {
        description: form.description.value,
        category: form.category.value,
        amount: form.paymentAmount.value,
        frequency: form.paymentFrequency.value,
        whenPaid: form.dueWhen.value,
        monthlyAmount: calculateMonthly(form.paymentFrequency.value, form.paymentAmount.value),
        percentageMonthlyIncome: 0
    };

    if (form.btnradio1.checked) {
        let expenseId = updatingItem ? parseInt(form.itemId.value) : mapExpenses.size + 1;
        mapExpenses.set(expenseId, item);
        localStorage.setItem("mapExpenses", JSON.stringify(Array.from(mapExpenses.entries())));
    } else {
        let incomeId = updatingItem ? parseInt(form.itemId.value) : mapIncome.size + 1;
        mapIncome.set(incomeId, item);
        localStorage.setItem("mapIncome", JSON.stringify(Array.from(mapIncome.entries())));
    }

    calculateMonthlyPercentage();
    form.reset();
    form.itemId.value = "";
}

// Populate the #add-item form with data of an existing item when the user clicks the edit button in one of the tables
function editItem(type, id) {

}

// Calaculates the monthly value for an income/expense item based on the frequency chosen during input
function calculateMonthly(frequency, value) {
    let totalMonthly = 0;

    switch(frequency) {
        case "Monthly":
            totalMonthly = value;
            break;
        case "Fortnightly":
            totalMonthly = (value * 2.165).toFixed(2);
            break;
        case "Weekly":
            totalMonthly = (value * 4.3333).toFixed(2);
            break;
        case "Daily":
            totalMonthly = (value * 30.3333).toFixed(2);
            break;
        default:
            totalMonthly = value;
    }
    return totalMonthly;
}

// Calaculates the items value compared to the total monthly income
function calculateMonthlyPercentage() {
    let total = 0;

    for (const value of mapIncome.values()) {
        total += parseInt(value.monthlyAmount);
    }

    for (const value of mapIncome.values()) {
        value.percentageMonthlyIncome = Math.round((value.monthlyAmount / total) * 100);
    }

    for (const value of mapExpenses.values()) {
        value.percentageMonthlyIncome = Math.round((value.monthlyAmount / total) * 100);
    }

    populateTableData("income", mapIncome);
    populateTableData("expenses", mapExpenses);
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