let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;
if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, user!";
    } 
} else {
        userMessage = "Please login to access the sytem";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
            userCategory = "Manager";
            break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown"; 
}
console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";
console.log("Authentication Status:", authenticationStatus);

let member = "enrolled member";
let dietaryServices;
switch (member) {
    case "employee":
        dietaryServices = "You have acess to dietary services";
        break;
    case "enrolled member" :
        dietaryServices = "You have access to dietary services and one on one interaction with a dietician";
        break;
    case "subscriber":
        dietaryServices = "You have access to dietary services only!";
        break;
    case "non-subscriber":
        dietaryServices = "Please enroll or subscribe first to avail this facility.";
        break;
}
console.log("Hey!", dietaryServices);