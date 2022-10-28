window.addEventListener('load', (e) => {
    const loggedIn = window.localStorage.getItem('loggedIn');
    if (loggedIn && loggedIn == 'true') {
        window.location = '../index.html';
    }

})

window.localStorage.setItem('user', JSON.stringify({ name: 'jaspreet', pass: "123456" }))
function handleFormSubmit(e) {
    let user = document.getElementById('user').value
    let pass = document.getElementById('pass').value;

    if (user.length < 1 || pass.length < 3) {
        alert("Length of username or password is not sufficient")
        return;
    }
    const localData = JSON.parse(window.localStorage.getItem('user'));
    console.log(localData);
    if (localData.name == user && localData.pass == pass) {
        window.localStorage.setItem('loggedIn', 'true');
        window.location = '../index.html'
    }
    else {
        alert('Invalid username or password')
    }



}