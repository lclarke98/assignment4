let users = [
  {"email": "up817852@myport.ac.uk", "role": ['admin', 'user']}
]
let request = []

module.exports.randomNumber = async (id) => {
    return JSON.stringify(Math.random());
};

module.exports.roles = async (email) => {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          return users[i].role;
        }
      }
}

//request access
module.exports.accessRequest = async (email) => {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
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
ß
//get user list
module.exports.userList = async () => {
  console.log(users)
  return users;
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