
A random number generator for registered users.

HOW IT WORKS:
Users register using a gmail account. Initialy the user will not have access to any features
until a request has be sent. Once a request has been sent an admin can approve the request
and the user will have access to generate random numbers. The admin can add and remove users.

GET /api/random: This gets a random number for any registered number.

GET /api/user/roles: Gets the roles of the user currently logged in.

GET /api/users: Gets a list of all registered users. Only admin can use this function.

GET /api/users/request: Get a list of requests. Only admin can use this function.

POST /api/user/request: Requests access for the current user.

POST /api/user/approve: Approves a users request.

DELETE: This deletes the selected user. Only admin can use this function.
