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

    updateIncomeExpensesBarChart();
    calculateMonthlyPercentage();
    form.reset();
    form.itemId.value = "";
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
    localStorage.setItem("mapIncome", JSON.stringify(Array.from(mapIncome.entries())));
    localStorage.setItem("mapExpenses", JSON.stringify(Array.from(mapExpenses.entries())));
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
                        <a class="btn btn-primary shadow lift" data-bs-toggle="modal" data-bs-target="#addItemModal">
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
                        <a onclick="editItem('${table}', ${elem[0]})" data-bs-toggle="modal" data-bs-target="#addItemModal">
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

// Generate a bar chart comparing monthly income and expenditure inputted by the user
function generateIncomeExpensesBarChart(ctxIncomeExpenses) {
    return new Chart(
        ctxIncomeExpenses,
        {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Income',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }, {
                    label: 'Expenses',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    datalabels: {
                        color: 'blue',
                        labels: {
                            value: {
                                formatter: function(value) {
                                    return "€" + value;
                                }
                            },
                            name: {
                                align: 'top',
                                font: {size: 16},
                                formatter: function(value, ctx) {
                                    if (ctx.dataset.label === "Income") {
                                        return "Income";
                                    } else {
                                        return "Expenses";
                                    }
                                }
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        bottom: 5
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function() {}
                    }
                },
                legend: {
                    display: false,
                    position: 'bottom'
                },
                scales: {
                    yAxes: [{
                        display: false,
                        ticks: {
                            beginAtZero: true,
                            display: false
                        }
                    }],
                    xAxes: [{
                        display: false,
                        tickes: {
                            display: false
                        },
                        gridLines: {
                            display: false
                        }
                    }]
                }
            }
        }
    );
}

// Update the income and expenses bar chart when a user adds, edits or removes an item
function updateIncomeExpensesBarChart() {
    removeData(chartIncomeExpenses);
    removeData(chartIncomeExpenses);

    let totalIncome = 0;
    for (const value of mapIncome.values()) {
        totalIncome += parseInt(value.monthlyAmount);
    }
    addData(chartIncomeExpenses, totalIncome, 0);

    let totalExpenses = 0;
    for (const value of mapExpenses.values()) {
        totalExpenses += parseInt(value.monthlyAmount);
    }
    addData(chartIncomeExpenses, totalExpenses, 1);

    if (totalExpenses + totalIncome === 0) {
        document.getElementById("chartContainer").classList.add("d-none");
        document.getElementById("newUserInfo").classList.remove("d-none");
    } else {
        document.getElementById("chartContainer").classList.remove("d-none");
        document.getElementById("newUserInfo").classList.add("d-none");
    }

    if (totalExpenses > 0 && totalIncome > 0) {
        document.getElementById("getAdviceButton").classList.remove("disabled");
    } else {
        document.getElementById("getAdviceButton").classList.add("disabled");
    }
}

// Adds data to the income expenses bar chart data array 
function addData(chartIncomeExpenses, data, order) {
    chartIncomeExpenses.data.datasets[order].data.push(data);
    chartIncomeExpenses.update();
}

// Removes data from the income expenses bar chart data array
function removeData(chart) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

// When the user visits the page check if data already exists in localStorage (returning user) or if no data, or incomplete data exists (new user)
function newUserOrExisting() {
    const incomeDataAvailable = localStorage.mapIncome && Object.keys(JSON.parse(localStorage.mapIncome)).length > 0 ? Object.keys(JSON.parse(localStorage.mapIncome)[0][1]).length : false;
    const expenseDataAvailable = localStorage.mapExpenses && Object.keys(JSON.parse(localStorage.mapExpenses)).length > 0 ? Object.keys(JSON.parse(localStorage.mapExpenses)[0][1]).length : false;
    let mapIncome;
    let mapExpenses;

    if (incomeDataAvailable && incomeDataAvailable === 7) {
        mapIncome = new Map(JSON.parse(localStorage.mapIncome));
    } else {
        mapIncome = new Map();
    }

    if (expenseDataAvailable && expenseDataAvailable === 7) {
        mapExpenses = new Map(JSON.parse(localStorage.mapExpenses));
    } else {
        mapExpenses = new Map();
    }

    populateTableData("income", mapIncome);
    populateTableData("expenses", mapExpenses);
    return [mapIncome, mapExpenses];
}

// Populate the #add-item form with data of an existing item when the user clicks the edit button in one of the tables
function editItem(type, id) {
    let form = document.getElementById("add-item");
    let item;
    if (type === "expenses") {
        form.btnradio1.checked = true;
        form.btnradio3.checked = false;
        item = mapExpenses.get(id);
    } else {
        form.btnradio1.checked = false;
        form.btnradio3.checked = true;
        item = mapIncome.get(id);
    }

    form.itemId.value = id;
    form.description.value = item.description;
    form.category.value = item.category;
    form.paymentAmount.value = item.amount;
    form.paymentFrequency.value = item.frequency;
    form.dueWhen.value = item.whenPaid;
}

// Removes item from mapIncome or mapExpenses and updates localStorage for the item
function removeItem(type, id) {
    type == "income" ? mapIncome.delete(id) : mapExpenses.delete(id);
    type == "income" ? resetMapKeys(mapIncome) : resetMapKeys(mapExpenses);
    updateIncomeExpensesBarChart();
    calculateMonthlyPercentage();
}

// When an item is removed from mapIncome or mapExpenses update all keys in the map to reset numerical order
function resetMapKeys(map) {
    let newKey = 1;
    let newMap = new Map(map);
    map.clear();
    for (const entry of newMap) {
        map.set(
            newKey,
            entry[1]
        );
        newKey++;
    }
}

// Updates the category maps by clearing them and rechecking all values and show advice against the entry maps
function updateCategoryMaps(entryMap, categoryMap) {
    for (const value of categoryMap.values()) {
        value.totalAmount = 0;
        value.totalMonthlyPercentage = 0;
    }

    for (const value of entryMap.values()) {
        categoryMap.set(
            value.category,
            {
                totalAmount: categoryMap.get(value.category).totalAmount += parseInt(value.monthlyAmount),
                totalMonthlyPercentage: categoryMap.get(value.category).totalMonthlyPercentage += value.percentageMonthlyIncome,
                actionLink: categoryMap.get(value.category).actionLink,
                advice: categoryMap.get(value.category).advice,
                blogLink: categoryMap.get(value.category).blogLink,
                recommendedPercentageOfIncome: categoryMap.get(value.category).recommendedPercentageOfIncome,
                showAdvice: (categoryMap.get(value.category).totalMonthlyPercentage += value.percentageMonthlyIncome) > categoryMap.get(value.category).recommendedPercentageOfIncome ? true : false,
                backgroundColor: categoryMap.get(value.category).backgroundColor
            }
        );
    }
}

// Generates a day by day income & expense map used to show the user a line graph of income and expense over a month
function generateIncomeExpensesByDate(incomeMap, expensesMap) {
    let monthlyArray = new Map();
    for (let i = 1; i <= datesOfMonth.length; i++) {
        monthlyArray.set(
            i,
            {
                income: 0,
                expenses: 0
            }
        );
    }

    for (const value of expensesMap.values()) {
        //Monthly Frequency
        if (value.frequency === "Monthly") {
            monthlyArray.set(
                parseInt(value.whenPaid),
                {
                    income: monthlyArray.get(parseInt(value.whenPaid)).income,
                    expenses: monthlyArray.get(parseInt(value.whenPaid)).expenses + parseInt(value.amount)
                }
            );
        }

        // Fortnightly Income
        if (value.frequency === "Fortnightly") {
            let secondFortnight = parseInt(value.whenPaid) + 14;
            secondFortnight > 31 ? secondFortnight -= 31 : secondFortnight - secondFortnight;
            monthlyArray.set(
                parseInt(value.whenPaid),
                {
                    income: monthlyArray.get(parseInt(value.whenPaid)).income,
                    expenses: monthlyArray.get(parseInt(value.whenPaid)).expenses + parseInt(value.amount)
                }
            );
            monthlyArray.set(
                parseInt(secondFortnight),
                {
                    income: monthlyArray.get(parseInt(secondFortnight)).income,
                    expenses: monthlyArray.get(parseInt(secondFortnight)).expenses + parseInt(value.amount)
                }
            );
        }

        // Weekly Income
        if (value.frequency === "Weekly") {
            let weeklyNumber = 0;
            switch (value.whenPaid) {
                case "Monday":
                    weeklyNumber = 1;
                    break;
                case "Tuesday":
                    weeklyNumber = 2;
                    break;
                case "Wednesday":
                    weeklyNumber = 3;
                    break;
                case "Thursday":
                    weeklyNumber = 4;
                    break;
                case "Friday":
                    weeklyNumber = 5;
                    break;
                case "Saturday":
                    weeklyNumber = 6;
                    break;
                case "Sunday":
                    weeklyNumber = 7;
                    break;
                default:
                    weeklyNumber = 1;
                    break;
            }
            for (const [weeklyKey, weeklyValue] of monthlyArray) {
                if (weeklyKey % 7 === weeklyNumber) {
                    monthlyArray.set(
                        parseInt(weeklyKey),
                        {
                            income: monthlyArray.get(weeklyKey).income,
                            expenses: monthlyArray.get(parseInt(weeklyKey)).expenses + parseInt(value.amount)
                        }
                    );
                }
            }
        }

        // Daily Income
        if (value.frequency === "Daily") {
            for (const [monthlyKey, monthlyValue] of monthlyArray) {
                monthlyArray.set(
                    parseInt(monthlyKey),
                    {
                        income: monthlyArray.get(monthlyKey).income,
                        expenses: monthlyArray.get(parseInt(monthlyKey)).expenses + parseInt(value.amount)
                    }
                );
            }
        }
    }

    for (const value of incomeMap.values()) {
        //Monthly Frequency
        if (value.frequency === "Monthly") {
            monthlyArray.set(
                parseInt(value.whenPaid),
                {
                    income: monthlyArray.get(parseInt(value.whenPaid)).income + parseInt(value.amount),
                    expenses: monthlyArray.get(parseInt(value.whenPaid)).expenses
                }
            );
        }

        // Fortnightly Income
        if (value.frequency === "Fortnightly") {
            let secondFortnight = parseInt(value.whenPaid) + 14;
            secondFortnight > 31 ? secondFortnight -= 31 : secondFortnight - secondFortnight;
            monthlyArray.set(
                parseInt(value.whenPaid),
                {
                    income: monthlyArray.get(parseInt(value.whenPaid)).income + parseInt(value.amount),
                    expenses: monthlyArray.get(parseInt(value.whenPaid)).expenses
                }
            );
            monthlyArray.set(
                parseInt(secondFortnight),
                {
                    income: monthlyArray.get(parseInt(secondFortnight)).income + parseInt(value.amount),
                    expenses: monthlyArray.get(parseInt(secondFortnight)).expenses
                }
            );
        }

        // Weekly Income
        if (value.frequency === "Weekly") {
            let weeklyNumber = 0;
            switch (value.whenPaid) {
                case "Monday":
                    weeklyNumber = 1;
                    break;
                case "Tuesday":
                    weeklyNumber = 2;
                    break;
                case "Wednesday":
                    weeklyNumber = 3;
                    break;
                case "Thursday":
                    weeklyNumber = 4;
                    break;
                case "Friday":
                    weeklyNumber = 5;
                    break;
                case "Saturday":
                    weeklyNumber = 6;
                    break;
                case "Sunday":
                    weeklyNumber = 7;
                    break;
                default:
                    weeklyNumber = 1;
                    break;
            }
            for (const [weeklyKey, weeklyValue] of monthlyArray) {
                if (weeklyKey % 7 === weeklyNumber) {
                    monthlyArray.set(
                        parseInt(weeklyKey),
                        {
                            income: monthlyArray.get(weeklyKey).income + parseInt(value.amount),
                            expenses: monthlyArray.get(parseInt(weeklyKey)).expenses
                        }
                    );
                }
            }
        }

        // Daily Income
        if (value.frequency === "Daily") {
            for (const [monthlyKey, monthlyValue] of monthlyArray) {
                monthlyArray.set(
                    parseInt(monthlyKey),
                    {
                        income: monthlyArray.get(monthlyKey).income + parseInt(value.amount),
                        expenses: monthlyArray.get(parseInt(monthlyKey)).expenses
                    }
                );
            }
        }
    }
    localStorage.setItem('mapIncomeExpensesByDate', JSON.stringify(Array.from(monthlyArray.entries())));
    mapIncomeExpensesByDate = monthlyArray;
}

// Generate line graph showing day by day income and expenses
function createResultsChart(ctx, map) {
    let labels = [];
    let income = [];
    let expenses = [];
    let incomeAccrual = 0;
    let expensesAccrual = 0;

    for (const [key, value] of map) {
        incomeAccrual += value.income;
        expensesAccrual += value.expenses;
        labels.push(key);
        income.push(incomeAccrual);
        expenses.push(expensesAccrual);
    }

    if(income[income.length -1] >= expenses[expenses.length -1]) {
        document.getElementById('positiveIncome').classList.remove('d-none');
        document.getElementById('negativeIncome').classList.add('d-none');
    } else {
        document.getElementById('positiveIncome').classList.add('d-none');
        document.getElementById('negativeIncome').classList.remove('d-none');
    }

    var chart = new Chart(
        ctx,
        {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Income',
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    data: income,
                    datalabels: {
                        align: 'end',
                        anchor: 'end'
                    }
                }, 
                {
                    label: 'Expenses',
                    backgroundColor: 'rgba(255, 99, 132, 0.7)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    data: expenses,
                    datalabels: {
                        align: 'start',
                        anchor: 'start'
                    }
                }]
            },
            options: {
                legend: {

                },
                plugins: {
                    datalabels: {
                        backgroundColor: function(context) {
                            return context.dataset.backgroundColor;
                        },
                        borderRadius: 4,
                        color: 'white',
                        font: {
                            weight: 'bold'
                        },
                        formatter: Math.round,
                        padding: 6,
                        display: function(context) {
                            return context.dataIndex % 2; // Only display odd numbered labels for ease of display
                        }
                    }
                },
                aspectRatio: 5 / 3,
                layout: {
                    padding: {
                        top: 32,
                        right: 16,
                        bottom: 35,
                        left: 8
                    }
                },
                elements: {
                    line: {
                        fill: false
                    }
                },
                scales: {
                    yAxes: [{
                        stacked: false,
                        display: true
                    }],
                    xAxes: [{
                        display: false
                    }]
                }
            }
        }
    );
}

// Generates a pie chart showing spend by income or expense category
function createResultsPieChart(ctx, map) {
    let labels = [];
    let percentage = [];
    let amount = [];
    let backgroundColor = [];
    for (const [key, value] of map) {
        if (value.totalAmount > 0) {
            labels.push(key);
            percentage.push(value.totalMonthlyPercentage);
            amount.push(value.totalAmount);
            backgroundColor.push(value.backgroundColor);
        }
    }

    var chart = new Chart(
        ctx,
        {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    backgroundColor: backgroundColor,
                    hoverBorderColor: 'white',
                    data: amount,
                    datalabels: {
                        labels: {
                            index: {
                                align: 'end',
                                anchor: 'end',
                                color: function(ctx) {
                                    return ctx.dataset.backgroundColor;
                                },
                                font: {
                                    size: 18
                                },
                                formatter: function(value, ctx) {
                                    return "€" + value;
                                },
                                offset: 8,
                                opacity: function(ctx) {
                                    return ctx.active ? 1 : 0.5;
                                }
                            },
                            name: {
                                align: 'top',
                                font: {
                                    size: 16
                                },
                                formatter: function(value, ctx) {
                                    return ctx.chart.data.labels[ctx.dataIndex];
                                }
                            },
                            value: {
                                align: 'bottom',
                                backgroundColor: function(ctx) {
                                    var value = ctx.dataset.data[ctx.dataIndex];
                                    return value > 50 ? 'white' : null;
                                },
                                borderColor: 'white',
                                borderWidth: 2,
                                borderRadius: 4,
                                color: function(ctx) {
                                    var value = ctx.dataset.data[ctx.dataIndex];
                                    return value > 50 ? ctx.dataset.backgroundColor : 'white';
                                },
                                formatter: function(value, ctx) {
                                    return Math.round(percentage[ctx.dataIndex]) + '%';
                                },
                                padding: 4
                            }
                        }
                    }
                }]
            },
            options: {
                plugins: {
                    datalabels: {
                        color: 'white',
                        display: function(ctx) {
                            return ctx.dataset.data[ctx.dataIndex] > 10;
                        },
                        font: {
                            weight: 'bold'
                        },
                        offset: 0,
                        padding: 0
                    }
                },
                legend: {
                    display: false
                },
                aspectRatio: 3 / 2,
                cutoutPercentage: 12,
                layout: {
                    padding: 30
                },
                elements: {
                    line: {
                        fill: false
                    },
                    point: {
                        hoverRadius: 7,
                        radius: 5
                    }
                }
            }
        }
    );
}

// Generates cards showing advice based on the monthly percentage for an income or expenses item compared to the recommended percentage in the category map
function generateResultsAdvice(map) {
    let resultArea = document.getElementById('resultsAdvice');
    for (const [key, value] of map.entries()) {
        if (value.showAdvice === true) {
            resultArea.insertAdjacentHTML(
                'beforeend',
                `
                    <div class="card m-3" style="width: 18rem;">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${key}
                            </h5>
                            <p class="card-text">
                                ${value.advice}
                            </p>
                        </div>
                        <div class="card-body d-flex justify-content-evenly">
                            <a href="${value.blogLink}" class="btn btn-primary">
                                Read Blog
                            </a>
                            <a href="${value.actionLink}" class="btn btn-primary">
                                Take Action
                            </a>
                        </div>
                    </div>
                `
            );
        }
    }
}

// Updates the category and date maps before loading the results page
function loadResultsPage() {
    updateCategoryMaps(mapIncome, mapIncomeCategories);
    updateCategoryMaps(mapExpenses, mapExpenseCategories);
    generateIncomeExpensesByDate(mapIncome, mapExpenses);
    localStorage.setItem('mapIncomeCategories', JSON.stringify(Array.from(mapIncomeCategories.entries())));
    localStorage.setItem('mapExpenseCategories', JSON.stringify(Array.from(mapExpenseCategories.entries())));
    window.open('results.html', '_self');
}

// Logic used to load the contact form and emailjs form handling on the about.html page
function loadContactFormLogic() {
    
}