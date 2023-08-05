var username = "";
var cart = document.querySelector(".cart");

async function getUserData() {
    var response = await fetch("https://api.github.com/users/" + username);
    const datas = await response.json();
    cart.innerHTML = htmlGenerate(datas)+cart.innerHTML;
}

function inputValue(ele) {
    username = ele.value;
}

function htmlGenerate(data) {
    var res = `<div class="cart-details">
    <h1>Username: ${data.login}</h1>
    <img src="${data.avatar_url}" alt="" srcset="">
    <p>Repositories: ${data.public_repos}</p>
    <p>Location: ${data.location}</p>
    </div>`;
    return res;
}
