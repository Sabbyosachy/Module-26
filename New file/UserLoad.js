function LoadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    const ul = document.getElementById('User');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `Name:${user.name} Email:${user.email}`;
        ul.appendChild(li);
    }

}