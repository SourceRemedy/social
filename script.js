const $postContainer = document.getElementById("Posts")
//1.1 js reference to the section element with id users
const $userContainer = document.getElementById("Users")
spawnPosts()
//1.4 call function to spawn user elements
spawnUser()


function spawnPost() {
    const postsHTML = loadData().posts.map( post => `
        <div class="post">
            <p>${post.text}</p>
            <div class="details">
                <div>${post.numLikes}</div>
                <div>${post.user}</div>
                <div>${post.datetime}</div>
            </div>
        </div>
    ` ).join("")
    $postContainer.innerHTML = postsHTML
}

//1.2 define a function to spawn user elements
function spawnUser() {
    const postsHTML = loadData2().users.map( user => `
        <div class="user">
            <p>${user.username}</p>
            <div class="details">
                <div>${user.firstName}</div>
                <div>${user.lastName}</div>
                <div>${user.gender}</div>
                <div>${user.age}</div>
                <button type="button">Add Friend</button>
            </div>
        </div>
    ` ).join("")
    $userContainer.innerHTML = usersHTML
}

//1.3 each user element should be a div that shows user info
//... and has a button that says Add Friend (doesn't work)
function loadData2() {
    return{
        users: [
            {
                username: "kimmy23",
                firstName: "Kimberly",
                lastName: "Bash",
                gender: "F",
                age: 45
            },
            {
                username: "wordup",
                firstName: "John",
                lastName: "Word",
                gender: "M",
                age: 31
            },
            {
                username: "dogguy23",
                firstName: "Rob",
                lastName: "Obeneur",
                gender: "M",
                age: 62
            },
            {
                username: "silentninja84",
                firstName: "Lesa",
                lastName: "Kirkland",
                gender: "F",
                age: 17
            }
        ]
    }
}


function loadData() {
    return {
        posts: [
            {
                text: "I got a new dog last night! It's so cute!",
                user: "kimmy23",
                datetime: new Date(),
                numLikes: 3,
                comments: [

                ]
            }
        ]
        
    }
}