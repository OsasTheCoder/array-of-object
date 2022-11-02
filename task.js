const array = [
    {
        id: 1,
        username: "john",
        password: "password"
    },
    {
        id: 2,
        username: "james",
        password: "12345"
    },
    {
        id: 3,
        username: "peter",
        password: "sadert"
    },
    {
        id: 4,
        username: "paul",
        password: "marody"
    },
    {
        id: 5,
        username: "simon",
        password: "getras12"
    },
    {
        id: 6,
        username: "femi",
        password: "claim34"
    },
]
const myFunc = (username, password) => {
    // write your own function
    for(i = 0; i < array.length; i++) {
        if(array[i].username === username && array[i].password ===password){
        return "username and password correct"
    } else {
        return "username and password incorrect";
    }
    }
    
}

console.log(myFunc("john", "password"));