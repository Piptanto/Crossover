# Crossover

## Table of Contents

**1. Users**

* GET all users
* GET one user by id
* GET all messages belonging to one user
* POST one user
**/me - GET Random User**

**2. Messages**

* GET all messages
* GET one message by id
* POST one message
* DELETE one message by id
* Pagination of messages



## Users

| Function      | Method        | Link          |
| ------------- | ------------- | ------------- |
| List all Users | GET           | [https://crossover-twitter.herokuapp.com/get](https://crossover-twitter.herokuapp.com/get) |
| Get one User by ID users | GET           | [https://crossover-twitter.herokuapp.com/get/user/:id](https://crossover-twitter.herokuapp.com/get/user/:id)|
| All messages belonging to one user | GET           | xxxxxxx/users/${id}/messages |
| Create new user | POST           | [https://crossover-twitter.herokuapp.com/createuser](https://crossover-twitter.herokuapp.com/createuser) |

### GET all users
Returns all users in the database as an array of objects.
[https://crossover-twitter.herokuapp.com/get](https://crossover-twitter.herokuapp.com/get)


### GET one user by id
Returns user whose user_id matches the ${id} provided in the URL as a single object.
[https://crossover-twitter.herokuapp.com/get/user/:id](https://crossover-twitter.herokuapp.com/get/user/:id)

**Example: https://crossover-twitter.herokuapp.com/get/user/61e079ce31a4bb0e6a2d2c75:**

```
  {
      "_id":"61e079ce31a4bb0e6a2d2c75",
      "username":"Irene",
      "password":"",
      "profilPic":"https://photos.app.goo.gl/ufRYP8ZEpmSo26wv8"
   }
   ```

### GET all messages belonging to one user
URL	Method
xxxxxxxx/users/${id}/messages	GET
Returns all messages for a user whose user_id matches the ${id} provided in the URL.

Example: xxxxxxxxxxx/users/2/messages would return you an array, with every element being a message object:

[
  {
    "username": "Jane Doe",
    "user_id": 2,
    "message_id": 3,
    "message": "Trick served together birds ought Dory vest pages. There is only one Lord of the Ring.",
    "date": "2021-11-06T08:14:06.599Z",
    "image_url": "http://placekitten.com/200/200"
  }
]

### POST one user
URL	Method
xxxxxxxx/users/	POST
Adds a new user to the database. Requires username, email, password. profile_picture can be left empty, and will provide https://placedog.net/200 by default. Example: POST-ing this data:

{
	"username": "Lance Vance",
	"email": "lance@vance.com",
	"password": "qwerty",
	"profile_picture": ""
 }
will return you an HTTP status code of 200 and the following data:

{
  "user_id": 13, //id is generated automatically
  "username": "Lance Vance",
  "email": "lance@vance.com",
  "profile_picture": "https://placedog.net/200"
}
## messages
| Function      | Method        | Link          |
| ------------- | ------------- | ------------- |
| List all messages | GET           | [https://crossover-twitter.herokuapp.com/getmessages](https://crossover-twitter.herokuapp.com/getmessages) |
| Get one message by ID | GET           | [https://crossover-twitter.herokuapp.com/getmessages/message/:id](https://crossover-twitter.herokuapp.com/getmessages/message/:id)  |
| Get one message by user ID | GET           | [https://crossover-twitter.herokuapp.com/getmessagesbyid/user/:user](https://crossover-twitter.herokuapp.com/getmessagesbyid/user/:user)  |
| Create new message by user ID | POST          | [https://crossover-twitter.herokuapp.com/createmessages/user/:user](https://crossover-twitter.herokuapp.com/createmessages/user/:user) |
| Create new message | POST          | [https://crossover-twitter.herokuapp.com/createmessages](https://crossover-twitter.herokuapp.com/createmessages) |
| Delete message |   DELETE    | [https://crossover-twitter.herokuapp.com/deletemessage/message/:id](https://crossover-twitter.herokuapp.com/deletemessage/message/:id) |
### GET all messages

URL	Method
xxxxxxxxxx/messages/	GET
Returns all messages in the database as an array of objects.

### GET one message by id

URL	Method
xxxxxxxxx/messages/${id}	GET
Returns message whose message_id matches the ${id} provided in the URL.

Example: xxxxxxxxxxxxxx/messages/2 would return you:

{
  "username": "Elon Musk",
  "message": "Trick served together birds ought Dory vest pages. There is only one Lord of the Ring.",
  "date": "2021-11-06T08:14:06.599Z",
  "image_url": "http://placekitten.com/200/200",
  "message_id": 2
}

### POST one message

URL	Method
xxxxx/messages/	POST
Adds a new message to the database. Requires message, user_id. image_url can be left empty, and will provide https://placedog.net/200 by default. user_idfor a message should match an actual user's user_id Example: POST-ing this data:

{
	"message": "Here's an example message being submitted",
	"image_url": "",
	"user_id": 4
}
will return you an HTTP status code of 200 and the following data:

{
  "username": "John Doe", //username corresponding to the user_id
  "message": "Here's an example message being submitted",
  "date": "2021-11-06T12:07:39.507Z", //date is generated automatically
  "image_url": "https://placedog.net/200",
  "message_id": 9 //message_id is generated automatically
}

### DELETE one message by id

URL	Method
xxxxxxxxxxx/messages/${id}	DELETE
Deletes message whose message_id matches the ${id} provided in the URL. Returns true

## /me

URL	Method
xxxxxxxxxxxx/me/	GET
Returns a random user from the database.

### Pagination of messages
URL	Method
xxxxxxxxx/messages?page=1&rows=5	GET
This will return an array of messages with a pagination. Using ?page in your query you can adjust from which page you are querying your messages.

Using ?page=1&rows you can adjust how many messages you want to get per page. This requires ?page to be used. Having just ?rows will be ignored and instead return you all messages.

For example, getting 5 messages per page would have a query like this:

URL	Method
xxxxxxxxxxxxx/messages?page=1&rows=5	GET
