const express = require('express')
const app = new express()
const sqlite = require(‘sqlite3’).verbose();
const users = loadData().users
const db = new db.Database(‘/db/social.db’)
//3. New posts save on server
//3.1 create variable posts as empty array
const posts = loadData().posts
//serve client side files
app.use(express.static('public'))
app.use(express.json())

//3.2 define request handler for POST on /posts
app.post("/posts", (req, res) => {
    const post = req.body
    if (post.text.length >= 5) {
        const newPost = post.text
        posts.push(post.text)
        console.log(posts)
        res.send ({
            message: "New post successfully saved."
        })
    }
    else {
        res.status(401)
        res.send ({
            message: "Post was too short."
        })
    }
})

//3.2.1. verify the post is at least 5 characters long
//3.2.2. add to posts array if valid
//3.2.3. send response 'New post successfully saved.'
//3.2.4. if invalid send error response

function testDB() {
	const query = ‘ INSERT INTO users (id, username, password, first_name, last_name) VALUES (1, “doe84”, “1234”, “John”, “Word”) ’
	db.run(query,(error) => {console.error(err)})
}


app.post("/login", (req, res) => {
    const user = req.body
    let userMatch = users.find( (u) => u.username == user.username && u.password == user.password )
    //Does userMatch exist?
    if (userMatch) {
        res.send({
            message: "Successful login!",
            userMatch
        })
    }
    else {
        if (user.username.length >= 4 && user.password.length >= 4) {
            //save new account on server
            const newUser = {
                id: users.length+1,
                username: user.username,
                password: user.password
            }
            users.push(newUser)
            console.log(users)
            res.send({
                message: "Your account was successfully created.",
                newUser
            })
        }
        else {
            res.status(401)
            res.send({
                message: "Username or password is invalid."
            })
        }
    }
})

app.listen(3000, () => console.log("Server started"))

function loadData() {
    return {
        users:
        [
            {
                id: 1,
                username: "jword",
                password: "hello2021"
            },
            {
                id: 2,
                username: "tommyinnit",
                password: "blockgame"
            },
            {
                id: 3,
                username: "joel15",
                password: "kirby"
            }
        ], 
        
        posts:
        [

        ]
    }
}