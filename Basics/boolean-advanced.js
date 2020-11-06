/*
let isAccountLocked = false;

if (isAccountLocked) {
    console.log('Account is locked');
} else {
    console.log('Welcome');
}
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////
let isAccountLocked = false;
let userRole = 'user';
/*
if (isAccountLocked) {
    console.log('Account is locked');
} else {
    console.log('Welcome');
}
*/

if (isAccountLocked) {
    console.log('Account is locked')

} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
};