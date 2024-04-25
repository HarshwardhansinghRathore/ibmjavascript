let userRole = 'subscriber';
let userAccess;

switch(userRole){
    case 'employee':
        userAccess = 'Employed';
        break;
    case 'member':
        userAccess = 'Membership';
        break;
    case 'subscriber':
        userAccess = 'Subs';
        break;
    default:
        userAccess = 'please Sign in or enroll in the program';
}

console.log(userAccess);