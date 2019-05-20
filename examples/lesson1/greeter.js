function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: 'taro',
    lastName: 'sun'
};
console.log(greeter(user));
