function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data => console.log(data))
}

function loadUser(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>databage(data) )
}
function databage (data){
    console.log(data)
}