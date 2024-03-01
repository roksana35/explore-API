function loadUser2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dataBage(data) )
}

function dataBage(data){
    const ul = document.getElementById('list-item');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText=user.name;
        ul.appendChild(li)
        
    }

}