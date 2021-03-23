/*jshint esversion: 6 */

// If either income or expense is already present in localStorage use that. Otherwise generate default category maps.
const mapExpenseCategories = (localStorage.mapExpenseCategories ? new Map(JSON.parse(localStorage.mapExpenseCategories)) : generateMapExpenseCategories());
const mapIncomeCategories = (localStorage.mapIncomeCategories ? new Map(JSON.parse(localStorage.mapIncomeCategories)) : generateMapIncomeCategories());
var mapIncomeExpensesByDate = (localStorage.mapIncomeExpensesByDate ? new Map(JSON.parse(localStorage.mapIncomeExpensesByDate)) : new Map());

// Setup default Expense Categpories for user input and results
function generateMapExpenseCategories() {
    const map = new Map();
    map.set(
        "Broadband",
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Broadband, like utilities can often be found cheaper if you switch on a yearly basis. Many suppliers offer deals for 6 momnths in a 12 month contract so make sure to shop around.",
            blogLink: "https://www.moneyguideireland.com/cheapest-phone-and-broadband-package.html",
            actionLink: "https://switcher.ie/broadband/compare/cheap-broadband/",
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
            advice: "In Ireland your rent or mortgage is often the biggest chunk of your expenditure. Reviewing your living situation can take a lot of pressure off you. Look to move to a cheaper rental or consider selling your home and moving into a cheaper option if possible.",
            blogLink: "https://www.daveramsey.com/blog/how-much-rent-can-i-afford",
            actionLink: "https://www.daft.ie/",
            recommendedPercentageOfIncome: 25,
            showAdvice: false,
            backgroundColor: "#B28DFF"
        }
    );
    map.set(
        "Utilities",
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Utilities in Ireland absolutely should be changed every single year. The amount you save from switching at the end of each contract is considerable. Also look at timer switches or smart plugs across your home to help improve your energy efficiency easily.",
            blogLink: "https://www.moneysupermarket.com/gas-and-electricity/energy-saving-tips/",
            actionLink: "https://www.bonkers.ie/compare-gas-electricity-prices/dual-fuel/",
            recommendedPercentageOfIncome: 4,
            showAdvice: false,
            backgroundColor: "#BFFC66"
        }
    );
    map.set(
        "Phone & Mobile",
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Advances in technology have meant significant decreases in mobile purchase an plan costs. If you have a landline consider removing it, line rentals add up each month. For your mobile consider moving providers and only going pay as you go. Bill pay may seem attractive however it is vastly more expensive than pay as you go.",
            blogLink: "https://www.thejournal.ie/mobile-plan-consider-2015-2409066-Nov2015/#:~:text=While%20it%20may%20seem%20like,expensive%20over%20the%20long%2Dterm.",
            actionLink: "https://switcher.ie/mobiles/guides/sim-only/compare-sim-only-bill-pay-deals/",
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
            advice: "Groceries are a big part of your budget. Consider where you shop at the moment and also look at writing a shopping list and setting a budget before heading to the shop. With groceries random snacks from the corner shop are often where you see big overspends.",
            blogLink: "https://www.daveramsey.com/blog/ways-to-save-on-groceries",
            actionLink: "https://www.moneyguideireland.com/supermarket-price-comparison-ireland.html",
            recommendedPercentageOfIncome: 15,
            showAdvice: false,
            backgroundColor: "#FFD700"
        }
    );
    map.set(
        "Car",
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Transport, and more particullary a car, is a major expense. If you take public transport switch to an annual pass. If you have a car work to get rid of your car loan as quickly as possible. Car loans are a major loss of money.",
            blogLink: "https://www.cashfloat.co.uk/blog/money-borrowing/cut-car-costs/",
            actionLink: "https://www.taxsaver.ie/Ticket-Types/Annual-Tickets/",
            recommendedPercentageOfIncome: 10,
            showAdvice: false,
            backgroundColor: "#FFBEBC"
        }
    );
    map.set(
        "Holidays",
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Holidays are the perfect way to relax and unwind. However they don't have to break the bank. Book direct instead of using travel agents and think about travelling to less popular destinations such as eastern europe.",
            blogLink: "https://www.independent.co.uk/travel/cheap-holidays-europe-spain-majorca-hungary-budapest-croatia-dubrovnik-budget-flights-hotels-a8272021.html",
            actionLink: "https://www.skyscanner.ie/",
            recommendedPercentageOfIncome: 5,
            showAdvice: false,
            backgroundColor: "#C4FAF8"
        }
    );
    map.set(
        "Credit Cards",
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Credit card debt is often the highest debt cost you will have in your life. Take steps today to start reducing your credit card debt.",
            blogLink: "https://www.askpaul.ie/smart-ways-to-eliminate-credit-card-debt/",
            actionLink: "https://www.nationaldebtrelief.ie/debt-settlement-arrangement.html",
            recommendedPercentageOfIncome: 1,
            showAdvice: false,
            backgroundColor: "#BFFCC6"
        }
    );
    map.set(
        "Other",
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 100000000,
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
            advice: "A salary for most people is their only source of income. While there is nothing wrong with this, if you want to be financially free you need to expand into different income streams. Freelancing is a great way to start.",
            blogLink: "https://www.askpaul.ie/create-another-source-income-heres/",
            actionLink: "https://www.upwork.com/",
            recommendedPercentageOfIncome: 90,
            showAdvice: false,
            backgroundColor: "#FF9AA2"
        }
    );
    map.set(
        "Investments",
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Investing comes in many shapes and forms, shares and bonds being the most popular. Research and investigation leads to a solid choice and yearly returns as well as growth on your investment.",
            blogLink: "https://moneycube.ie/5-tips-beginner-investor-ireland/",
            actionLink: "https://www.kbc.ie/investments/new-to-investment",
            recommendedPercentageOfIncome: 5,
            showAdvice: false,
            backgroundColor: "#FFDAC1"
        }
    );
    map.set(
        "Business",
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Starting and running a business can be scary and has a high rate of failure. However even moderately successful businesses or a side business can be greatly rewarding and an excellent way to start a business.",
            blogLink: "https://www.citizensinformation.ie/en/employment/types_of_employment/self_employment/setting_up_a_business_in_ireland.html",
            actionLink: "https://www.revenue.ie/en/starting-a-business/index.aspx",
            recommendedPercentageOfIncome: 5,
            showAdvice: false,
            backgroundColor: "#E2F0CB"
        }
    );
    map.set(
        "Property",
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "Rental properties are a great source of residual income and also an excellent store of wealth. When invested in wisely property has an excellent rate of return.",
            blogLink: "https://personalbanking.bankofireland.com/borrow/mortgages/articles/thinking-investment-property/",
            actionLink: "https://www.daft.ie/",
            recommendedPercentageOfIncome: 5,
            showAdvice: false,
            backgroundColor: "#B5EAD7"
        }
    );
    map.set(
        "Other",
        {
            totalAmount: 0,
            totalMonthlyPercentage: 0,
            advice: "",
            blogLink: "",
            actionLink: "",
            recommendedPercentageOfIncome: 10000,
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
        option.classList.add("expense");
        selectCategory.add(option);
    }
    for (const value of mapIncomeCategories) {
        const option = document.createElement("option");
        option.text = value[0];
        option.value = value[0];
        option.classList.add("income");
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

    if(type === "income") {
        document.getElementById("btnradio1").checked = false;
        document.getElementById("btnradio3").checked = true;
    } else {
        document.getElementById("btnradio1").checked = true;
        document.getElementById("btnradio3").checked = false;
    }

    for (let i = 0; i < categories.length; i++) {
        const element = categories[i];
        const matchesType = element.classList.contains(type);
        if (matchesType) {
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

// Checks the data validity of the #add-item form prior to adding the item
function validateAddItemForm() {
    let form = document.getElementById("add-item");

    if(!form.description.value || form.description.value.length > 100) {
        form.description.classList.add("is-invalid");
    } else {
        form.description.classList.remove("is-invalid");
    }

    if(!form.paymentAmount.value || form.paymentAmount.value > 1000000) {
        form.paymentAmount.classList.add("is-invalid");
    } else {
        form.paymentAmount.classList.remove("is-invalid");
    }

    if(form.description.value && form.paymentAmount.value && form.description.value.length <= 100 && form.paymentAmount.value <= 1000000) {
        addOrUpdateItem(form);
        document.getElementById("addItemClose").click();
    }
}

// #add-item submit action where the item is added to either mapIncome or mapExpenses
function addOrUpdateItem(form) {
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
    let tableBody = document.getElementById(table).getElementsByTagName("tbody")[0];
    tableBody.remove();
    tableBody = document.createElement("tbody");
    document.getElementById(table).appendChild(tableBody);
    if(map.size === 0) {
        const row = tableBody.insertRow(-1);
        row.insertAdjacentHTML(
            "beforeend",
            `
                <td colspan="8" class="text-center">
                    <button class="btn btn-primary shadow lift m-3" data-bs-toggle="modal" data-bs-target="#addItemModal">
                        Add ${table.charAt(0).toUpperCase() + table.slice(1)} <i data-feather="arrow-right"></i>
                    </button>
                </td>
            `
        );
    } else {
        for (const elem of map.entries()) {
            const row = tableBody.insertRow(-1);
            row.insertAdjacentHTML(
                "beforeend",
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
            type: "bar",
            data: {
                datasets: [{
                    label: "Income",
                    backgroundColor: "rgba(54, 162, 235, 0.2)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    borderWidth: 1
                }, {
                    label: "Expenses",
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    datalabels: {
                        color: "blue",
                        labels: {
                            value: {
                                formatter: function(value) {
                                    return "€" + value;
                                }
                            },
                            name: {
                                align: "top",
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
                    position: "bottom"
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
    } else {
        document.getElementById("chartContainer").classList.remove("d-none");
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
        form.btnradio3.nextElementSibling.classList.add("invisible");
        form.btnradio1.nextElementSibling.classList.remove("invisible");
        item = mapExpenses.get(id);
    } else {
        form.btnradio1.checked = false;
        form.btnradio3.checked = true;
        form.btnradio3.nextElementSibling.classList.remove("invisible");
        form.btnradio1.nextElementSibling.classList.add("invisible");
        item = mapIncome.get(id);
    }

    form.itemId.value = id;
    form.description.value = item.description;
    form.category.value = item.category;
    form.paymentAmount.value = item.amount;
    form.paymentFrequency.value = item.frequency;
    form.dueWhen.value = item.whenPaid;

    toggleCategory(type);
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
    localStorage.setItem("mapIncomeExpensesByDate", JSON.stringify(Array.from(monthlyArray.entries())));
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
        document.getElementById("positiveIncome").classList.remove("d-none");
        document.getElementById("negativeIncome").classList.add("d-none");
    } else {
        document.getElementById("positiveIncome").classList.add("d-none");
        document.getElementById("negativeIncome").classList.remove("d-none");
    }

    var chart = new Chart(
        ctx,
        {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Income",
                    backgroundColor: "rgba(54, 162, 235, 0.7)",
                    borderColor: "rgba(54, 162, 235, 1)",
                    data: income,
                    datalabels: {
                        align: "end",
                        anchor: "end"
                    }
                },
                {
                    label: "Expenses",
                    backgroundColor: "rgba(255, 99, 132, 0.7)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    data: expenses,
                    datalabels: {
                        align: "start",
                        anchor: "start"
                    }
                }]
            },
            options: {
                legend: {
                    position: 'bottom'
                },
                plugins: {
                    datalabels: {
                        backgroundColor: function(context) {
                            return context.dataset.backgroundColor;
                        },
                        borderRadius: 4,
                        color: "white",
                        font: {
                            weight: "bold"
                        },
                        formatter: Math.round,
                        padding: 6,
                        display: 'auto'
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
            type: "doughnut",
            data: {
                labels: labels,
                datasets: [{
                    backgroundColor: backgroundColor,
                    hoverBorderColor: "white",
                    data: amount,
                    datalabels: {
                        labels: {
                            index: {
                                align: "end",
                                anchor: "end",
                                color: "black",
                                font: {
                                    size: 18
                                },
                                formatter: function(value, ctx) {
                                    return "€" + value;
                                },
                                offset: 8,
                                opacity: function(ctx) {
                                    return ctx.active ? 1 : 0.9;
                                }
                            },
                            name: {
                                align: "top",
                                font: {
                                    size: 16
                                },
                                formatter: function(value, ctx) {
                                    return ctx.chart.data.labels[ctx.dataIndex];
                                }
                            },
                            value: {
                                align: "bottom",
                                backgroundColor: function(ctx) {
                                    var value = ctx.dataset.data[ctx.dataIndex];
                                    return value > 50 ? "black" : null;
                                },
                                borderColor: "black",
                                borderWidth: 2,
                                borderRadius: 4,
                                color: function(ctx) {
                                    var value = ctx.dataset.data[ctx.dataIndex];
                                    return value > 50 ? ctx.dataset.backgroundColor : "black";
                                },
                                formatter: function(value, ctx) {
                                    return Math.round(percentage[ctx.dataIndex]) + "%";
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
                        color: "black",
                        display: function(ctx) {
                            return ctx.dataset.data[ctx.dataIndex] > 10;
                        },
                        font: {
                            weight: "bold"
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
    let resultArea = document.getElementById("resultsAdvice");
    for (const [key, value] of map.entries()) {
        if (value.showAdvice === true) {
            resultArea.insertAdjacentHTML(
                "beforeend",
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
                        <div class="card-footer bg-white border-top-0 d-flex justify-content-evenly">
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
    localStorage.setItem("mapIncomeCategories", JSON.stringify(Array.from(mapIncomeCategories.entries())));
    localStorage.setItem("mapExpenseCategories", JSON.stringify(Array.from(mapExpenseCategories.entries())));
    window.open("results.html", "_self");
}

// Logic used to load the contact form and emailjs form handling on the about.html page
function loadContactFormLogic() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const templateParams = {
            from_name: this.from_name.value,
            email: this.email.value,
            contact_type: this.contact_type.value,
            message: this.message.value
        };
        emailjs.send("financial_freedom", "financial_f_contact", templateParams)
            .then(function(response) {
                //console.log('SUCCESS!', response.status, response.text);
                this.formSubmit.innerHTML = "Form Submitted";
                this.formSubmit.classList.remove("btn-primary");
                this.formSubmit.classList.add("btn-success");
                this.formSubmit.classList.add("disabled");
                this.formSubmit.type = "button";

            }, function(error) {
                //console.log('FAILED...', error);
            });
            this.reset();
    });
}