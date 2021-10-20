console.log("Hi");
//selectors
let updateBudgetButton = document.querySelector('#update_budget_button');
let addExpenseButton = document.querySelector('#add_expense_button');
let monthlyBudget = document.querySelector('#monthly_Budget');
let incomeInput = document.querySelector('#income_input');
let remainingBalance = document.querySelector('#remaining_balance');
let amountInput = document.querySelector('#amount_input');
let nameInput = document.querySelector('#name_input');
let expenseList = document.querySelector('#expense_list');
let totalExpenses = document.querySelector('#total_expenses');

//events
updateBudgetButton.onclick = updateBudget;
addExpenseButton.onclick = addExpense;

//variables
let monthlyIncome = 0;
let expenses= []
let expensesTotal=0
let balance= 0
//functions
function updateBudget(event) {
    event.preventDefault();
    monthlyIncome = incomeInput.value;
    monthlyBudget.innerText = '$' + monthlyIncome;
    updateBalance();
}

function updateBalance() {
    balance = monthlyIncome - expensesTotal;
    remainingBalance.innerText = '$' + balance;

    if (balance < 0) {
        remainingBalance.classList.remove('green');
        remainingBalance.classList.add('red');
    }
    else {
        remainingBalance.classList.remove('red');
        remainingBalance.classList.add('green');
    }
}

function addExpense(event) {
    event.preventDefault();

    let expense = {
        name: nameInput.value,
        amount: amountInput.value
    };

let newExpense = document.createElement('p');
newExpense.innerText = expense.name + ':$' + expense.amount;
expenseList.appendChild(newExpense);

let expenseAmount = parseInt(amountInput.value);
expenses.push(expenseAmount);
updateExpenseTotal();
}

function updateExpenseTotal(){
    expensesTotal =0;
    for(let i = 0; i < expenses.length; i++){
        expensesTotal = expensesTotal + expenses[i];
    }

    totalExpenses.innerText = '$' + expenseTotal;
    updateBalance();
}
    //console.log("I was clicked!");
