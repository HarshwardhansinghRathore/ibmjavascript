let userRole = 'admin';
let accessLevel;
let isLoggedIn = true;
let userMessage;


if (userRole === 'admin') {
    accessLevel = 'Full access granted';
} else if (userRole === 'manager'){
    accessLevel = 'Limited access granted';
} else {
    accessLevel = 'no access granted';
}

console.log('Access Level:',accessLevel);

if (isLoggedIn) {
    if (userRole === 'admin'){
        userMessage = 'welcome, admin';
    } else {
        userMessage = 'Welcome , User';
    }
} else {
    userMessage = 'please log in to access the system';
}

console.log('users message:', userMessage);

let userType = 'subscriber';;
let userCategory;

switch (userType) {
    case 'admin':
        userCategory = 'Administrator';
        break;
    case 'manager':
        userCategory = 'Manager';
        break;
    case 'subscriber':
        userCategory = 'Subscriber';
        break;
    default:
        userCategory = 'unknown';
}

console.log(userCategory);