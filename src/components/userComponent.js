import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("User component yüklendi");

let logger1=new MongoLogger()
let userService=new UserService(logger1)

let user1=new User(1,"Sedat","KOÇ","Diyarbakır")
let user2=new User(2,"Enes","KOÇ","Kayapınar")
userService.add(user1)
userService.add(user2)

console.log(userService.list());
console.log(userService.getBy(2));



userService.getBy(1)
userService.list()

let customer={id:1, firstName:"Sedat"}

//prototyping => sonradan bir değer eklenmesi

customer.lastName="KOÇ";
console.log(customer.lastName);

console.log("----------------------------");
userService.load()
console.log(userService.customers);
console.log(userService.employees);