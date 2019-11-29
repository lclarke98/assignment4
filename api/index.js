const db = {
    users: [
        {"email": "up817852@myport.ac.uk", "role": ['admin', 'user']}
],
}
let request = []

module.exports.randomNumber = async (id) => {
    return JSON.stringify(Math.random());
};

module.exports.roles = async (email) => {
    for (var i = 0; i < db.users.length; i++) {
        if (db.users[i].email === email) {
          return db.users[i].role;
        }
      }
}

//request access
module.exports.accessRequest = async (email) => {
    for (var i = 0; i < db.users.length; i++) {
        if (db.users[i].email === email) {
          console.log("alreasy have access")
        }
        else{
            request.email = email
            console.log("request sent")
            console.log(email)
        }
      }
    console.log("request");
};

//get user list
module.exports.userList = async () => {
    let arr = []
    for (var i = 0; i < db.users.length; i++) {
        arr.push(db.users[i])
      }
    console.log(arr)
    return JSON.stringify(arr)
};

// get user request list
module.exports.userRequest = async () => {
    return request
};

module.exports.aprove = async () => {
    console.log("aprove");
};

module.exports.delete = async (email) => {
    for (var i = 0; i < user.length; i++) {
        if (user[i].email === email) {
          user[i].role.pop;
        }
      }
};