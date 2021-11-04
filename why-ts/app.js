// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

/**
 * @typedef {object} Address
 * @property {string} street
 * @property {string} city
 *
 */

/**
 * @typedef {object} User // type에 대한 type 객체의 property 설정
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>} //generic
 */

function fetchUser() {
  return axios.get(url);
}

fetchUser().then(function (response) {});

function startApp() {
  fetchUser()
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user[0].name;
      email.innerText = user[0].email;
      address.innerText = user[0].address;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
