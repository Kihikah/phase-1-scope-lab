var customerName = "bob";  // global variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {  // creates a global variable
    bestCustomer = "not bob";
}
function overwriteBestCustomer() {  // modifies the global variable
    bestCustomer = "maybe bob"; 
}
const leastFavoriteCustomer = "Samuel"; // constant variable
function changeLeastFavoriteCustomer() { // This should couse an error
    leastFavoriteCustomer = "John"
}
