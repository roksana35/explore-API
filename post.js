function localPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data =>displyData(data))

}
function displyData(posts){
    for (const post of posts) {
        console.log(post)
        const container = document.getElementById('main-div');
        
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <h4>userId:${post.userId}</h4>
        <h5>${post.title}</h5>
        <p>${post.body}</p>

        `;
        container.appendChild(postDiv);
        
    }

}

localPost();