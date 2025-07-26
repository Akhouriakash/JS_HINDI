//Constructor se banega to  singleton
// Object.create 

// Object literals se  
// inside a object : we can define key as well as value 

const mySym = Symbol("key1")


const Jsuser = {
    name : "Akash",
    [mySym] : "mykey1",  // for making a symbol it needs to bracket otherwise its an string 
    "full name" : "Akhouri Akash", //  **  we cannot able to access by a .(operator)
    age : 18,
    location : "Jaipur",
    email : "akash@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(typeof mySym);
// console.log(Jsuser [mySym]);

// console.log(Jsuser.mySym);



// console.log(Jsuser.full name)

// myArray = ["h" ,"i"]
// myArray[1]



Jsuser.email = "akash@chatgpt.com"
Object.freeze(Jsuser)
Jsuser.email = "akash@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Juse.greetingTwo = function(){
    console.log(`Hello JS user, $(this.name)`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());