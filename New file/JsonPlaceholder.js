/* function LoadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
} */

function LoadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
//Users
function LoadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

// Post
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}
// User Function call display data  

function displayUser(data) {
    const ul = document.getElementById('Users');
    for (const user of data) {
        // console.log(user.name);

        //Create li
        const li = document.createElement('li');
        //Without Dynamic 
        li.innerText = user.name;
        //Dynamic
        li.innerText = `Name:${user.name} Mail:${user.email}`
        ul.appendChild(li);
    }
}