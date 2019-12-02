let users = [
    {"email": "up817852@myport.ac.uk", "roles": ['admin','user']},
  ]
let request = []


module.exports.randomNumber = async (id) => {
    return Math.random();
};

module.exports.roles = (email) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      return users[i].roles;
    }
  }
  return [];
};

//request access
module.exports.accessRequest = async (email) => {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          return 202
        }
        else{
          preparedEntry = {"email": email, "roles": []}
          request.push(email)
          users.push(preparedEntry)
          return 202
        }
      }
};

//get user list
module.exports.userList = async () => {
  return users;
};

// get user request list
module.exports.userRequest = async () => {
  return request;
};

module.exports.aprove = async (email) => {
  let reqIndex = request.indexOf(email);
  request.splice(reqIndex, 1);
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      users[i].roles = ['user'];
      return users[i];
    }
  }
  return [];
};

module.exports.delete = async (email) => {
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
          users.splice(i, 1);
        }
      }
};