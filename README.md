# Crossover

## Table of Contents

**1. [Users**] [user]

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



## Users [user]

| Function      | Method        | Link          |
| ------------- | ------------- | ------------- |
| List all Users | GET           | [https://crossover-twitter.herokuapp.com/get](https://crossover-twitter.herokuapp.com/get) |
| Get one User by ID users | GET           | [https://crossover-twitter.herokuapp.com/get/user/:id](https://crossover-twitter.herokuapp.com/get/user/:id)|
| All messages belonging to one user | GET           | [https://crossover-twitter.herokuapp.com/getmessagesbyid/user/:user](https://crossover-twitter.herokuapp.com/getmessagesbyid/user/:user) |
| Create new user | POST           | [https://crossover-twitter.herokuapp.com/createuser](https://crossover-twitter.herokuapp.com/createuser) |

#### GET all users
Returns all users in the database as an array of objects.
[https://crossover-twitter.herokuapp.com/get](https://crossover-twitter.herokuapp.com/get)


#### GET one user by id
Returns user whose user_id matches the ${id} provided in the URL as a single object.
[https://crossover-twitter.herokuapp.com/get/user/:id](https://crossover-twitter.herokuapp.com/get/user/:id)

**Example:** https://crossover-twitter.herokuapp.com/get/user/61e079ce31a4bb0e6a2d2c75:

```
  {
      "_id":"61e079ce31a4bb0e6a2d2c75",
      "username":"Irene",
      "password":"",
      "profilPic":"https://photos.app.goo.gl/ufRYP8ZEpmSo26wv8"
   }
   ```

#### GET all messages belonging to one user

#### POST one user
[https://crossover-twitter.herokuapp.com/createuser](https://crossover-twitter.herokuapp.com/createuser) 
Adds a new user to the database. Requires username (UNIQUE), password. profile_picture

```
{
	"username": "Lance Vance",            //HAS TO BE UNIQUE!
	"password":"",                       //can be left empty
	"profile_picture": "http://...."     //URL of a picture
 }

```


## Messages
| Function      | Method        | Link          |
| ------------- | ------------- | ------------- |
| List all messages | GET           | [https://crossover-twitter.herokuapp.com/getmessages](https://crossover-twitter.herokuapp.com/getmessages) |
| Get one message by ID | GET           | [https://crossover-twitter.herokuapp.com/getmessagesbyid/message/:message](https://crossover-twitter.herokuapp.com/getmessagesbyid/message/:message)|
| Create new message by user ID | POST          | [https://crossover-twitter.herokuapp.com/createmessages/user/:user](https://crossover-twitter.herokuapp.com/createmessages/user/:user) |
| Create new message | POST          | [https://crossover-twitter.herokuapp.com/createmessages](https://crossover-twitter.herokuapp.com/createmessages) |
| Delete message |   DELETE    | [https://crossover-twitter.herokuapp.com/deletemessage/message/:id](https://crossover-twitter.herokuapp.com/deletemessage/message/:id)  |
#### GET all messages

[https://crossover-twitter.herokuapp.com/getmessages](https://crossover-twitter.herokuapp.com/getmessages)

Returns all messages in the database as an array of objects.

#### GET one message by id
Returns message whose message_id matches the ${id} provided in the URL.

**Example:** https://crossover-twitter.herokuapp.com/getmessagesbyid/message/61e076116a18ac312b073b4f would return you:
```
{
  "_id": "547456245245",
  "message": "Math is incredible like I absolutely do not have time to watch a 2 hour movie but I have more than enough time to watch four 30 minute shows.",
  "userId": "61e076796a18ac312b073b50",                        // Provides the user ID
  "comment":[""],
  "timestamp":"2000-01-01T00:00:00.000Z",

}
```
#### POST one message of a user

[https://crossover-twitter.herokuapp.com/createmessages/user/:user](https://crossover-twitter.herokuapp.com/createmessages/user/:user)

  Adds a new message to the database. Requires message, user_id. Example: POST-ing this data:
```
{
	"message": "Here's an example message being submitted",
	"user": "rdg242oihrg345oi3"
	
}
```

#### POST one message of ANONYMOUSLY

[https://crossover-twitter.herokuapp.com/createmessages](https://crossover-twitter.herokuapp.com/createmessages)

Adds a new message to the database. Requires message. Example: POST-ing this data:
```
{
	"message": "Here's an example message being submitted",
	
	
}
```

#### DELETE one message by id

[https://crossover-twitter.herokuapp.com/deletemessage/message/:id](https://crossover-twitter.herokuapp.com/deletemessage/message/:id) 

Deletes message whose message_id matches the ${id} provided in the URL. Returns true






