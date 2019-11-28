const user = [
        {"email": "up817852@myport.ac.uk", "role": ["admin", "user"]},
        {"email": "clarkleo20@gmail.com", "role": ["user"]}
];

let request = []

module.exports.randomNumber = async (id) => {
    return Math.random().toString();
};

module.exports.roles = async (email) => {
    for (var i = 0; i < user.length; i++) {
        if (user[i].email === email) {
          return user[i].role;
        }
      }
}

//request access
module.exports.accessRequest = async (email) => {
    console.log("request");
    request.email = email
    console.log(request)
};

//get user list
module.exports.userList = async (id) => {
    console.log(user)
    return Object.keys(user)
};

// get user request list
module.exports.userRequest = async (id) => {
    console.log("user request list")
    console.log(request.email)
    return user.email
};

module.exports.aprove = async (id) => {
    console.log("aprove");
};

module.exports.delete = async (id) => {
    console.log("users");
};