// interface Person {
//   firstName: string
//   lastName: string
// }

// function greeter (person: Person) {
//   return 'Hello ' + person.firstName + ' ' + person.lastName
// }
// let user:Person = {
//   firstName: 'taro',
//   lastName: 'sun'
// }
// console.log(greeter(user))

class User {
  fullName: string
  firstName: string
  lastName: string
  
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' + lastName
  }
}

let user = new User('taro', 'sun')