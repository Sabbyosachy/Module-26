function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => Displaypost(data))
}

function Displaypost(data) {
    const Postcontainer = document.getElementById('Blogs');
    for (const post of data) {
        const div = document.createElement('div');
        // div.classList.add('post');
        div.innerHTML = `<h3>${post.title}</h3>
       <p>${post.body}</p>`;
        Postcontainer.appendChild(div);
    }
}