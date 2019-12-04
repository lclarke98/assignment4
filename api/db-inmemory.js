let users = [
    {"email": "up817852@myport.ac.uk", "roles": ['admin','user']},
  ]
let request = []

//Function to verify if the user is admin
function getRole(email){
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      return users[i].roles;
    }
  }
  return [];
}

//Returns a random number to admin and users
module.exports.randomNumber = async (email) => {
    if(getRole(email).includes("admin") || getRole(email).includes("user") ){
      return JSON.stringify(Math.random());
    }else{
      return 403
    }
};

//Returns the roles of the current user
module.exports.roles = (email) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == email) {
      return users[i].roles;
    }
  }
  return [];
};

//Adds a request to the db
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

//Returns the list of registered users
module.exports.userList = async (email) => {
  if(getRole(email).includes("admin")){
    return JSON.stringify(users);
  }else{
    return 403
  }
};

//Returns the list of access requests
module.exports.userRequest = async (email) => {
  if(getRole(email).includes("admin")){
    return JSON.stringify(request);
  }else{
    return 403
  }
};

//Approves an access request
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

//Deletes a selected user
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