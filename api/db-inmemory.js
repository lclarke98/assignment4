let users = [
    {"email": "up817852@myport.ac.uk", "roles": ['admin','user']},
  ]
let request = []

function getRole(email){
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      return users[i].roles;
    }
  }
  return [];
}

module.exports.randomNumber = async (email) => {
    if(getRole(email).includes("admin") || getRole(email).includes("user") ){
      return JSON.stringify(Math.random());
    }else{
      return 403
    }
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
module.exports.userList = async (email) => {
  if(getRole(email).includes("admin")){
    return JSON.stringify(users);
  }else{
    return 403
  }
};

// get user request list
module.exports.userRequest = async (email) => {
  if(getRole(email).includes("admin")){
    return JSON.stringify(request);
  }else{
    return 403
  }
};

module.exports.aprove = async (admin, email) => {
  if(getRole(admin).includes("admin")){
    let reqIndex = request.indexOf(email);
    request.splice(reqIndex, 1);
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        users[i].roles = ['user'];
        return users[i];
      }
    }
    return [];
  }else{
    return 403
  }
};

module.exports.delete = async (admin, email) => {
      if(getRole(admin).includes("admin")){
        for (var i = 0; i < users.length; i++) {
          if (users[i].email === email) {
            users.splice(i, 1);
          }
        }
      }else{
        return 403
      }
};