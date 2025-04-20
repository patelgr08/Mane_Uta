function login(event) {
    event.preventDefault();
    var gmail = document.getElementById('gmail').value;
    var password = document.getElementById('password').value;
    if(gmail.length < 1 && password.length < 1) {
        alert("Enter your gmail and password to login.");
    } else if(password.length <= 5) {
        alert("Password is incoorect please enter your password correctly.")
    } else {
        window.location.href = 'index2.html';
    }
}

function showbtn() {
    var btn = document.getElementById('passbtn');
    var password = document.getElementById('password');
    if(password.type === 'password') {
        password.type = 'text';
        btn.textContent = '🙈';
    } else {
        password.type = 'password';
        btn.textContent = '👁️';
    }
}






































// let cart = [];
// let totalPrice = 0;
// function addToCart(productName, productPrice) {
//     cart.push({name:productName, price:productPrice});
//     totalPrice += productPrice;
//     const cartItems = document.getElementById('cartItems');
//     const totPrice = document.getElementById('totalPrice');
//     cartItems.innerHTML = "";
//     cart.forEach((item, index) => {
//         const li = document.createElement('li');
//         li.textContent = `${item.name} - RS${item.price}`;
//         cartItems.appendChild(li);
//     });
//     totPrice.textContent = `TOTAL: RS${totalPrice}`;

// }







































// function login(event) {
//     event.preventDefault();
//     var gmail = document.getElementById('gmail').value;
//     var password = document.getElementById('password').value;

//     if (gmail.length < 1 && password.length < 1) {
//         alert("Enter your gmail and password.");
//     } else if(password.length <=7) {
//         alert("Please enter you password correctly.")
//     }else {
//         window.location.href = "index2.html";
//     }
// }

// function refreshPag() {
//     location.reload();
// }

// const search = document.getElementById('search');
// const searchbar = document.getElementById('searchbar');
// search.addEventListener('click', () => {
//     if(searchbar.style.display === 'none' || searchbar.style.display === '') {
//         searchbar.style.display = 'block';
//     } else {
//         searchbar.style.display = '';
//     }
// });

// document.getElementById('contact').addEventListener('click', () => {
//     const num = "+919962233886";
//     window.location.href = `tel:${num}`
// });

// document.addEventListener('DOMContentLoaded', () => {
//     let total = 0;
//     const buttons = document.querySelectorAll('.add-to-cart');
//     buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             const price = parseFloat(button.getAttribute('data-price'));
//             total += price;
//             document.getElementById('total').textContent = total.toFixed(2);
//         });
//     });
// });

// function sign() {
//     window.location.href = 'sign.html';
// }

// function showbtn() {
//     const password = document.getElementById('password');
//     const btn = document.getElementById('showbtn');
//     if(password.type === 'password') {
//         password.type = 'text';
//         btn.textContent = '🙈'
//     } else {
//         password.type = 'password';
//         btn.textContent = '👁️';
//     }
// }

// document.addEventListener('DOMContentLoaded', () => {
//     let total = 0;
//     const buttons = document.querySelectorAll('#add-to-cart');
//     buttons.forEach(button => {
//       button.addEventListener('click', () => {
//         const price = parseFloat(button.getAttribute('data-price'));
//       total += price;
//       document.getElementById('total').textContent = total.toFixed(2);
//    });
//   });
// });





















// function login(event) {
//     event.preventDefault();
//     var gmail = document.getElementById('gmail').value;
//     var password = document.getElementById('password').value;

//     if (gmail.length < 1 && password.length < 1) {
//         alert("Enter your gmail and password.");
//     } else if(password.length <=7) {
//         alert("Please enter you password correctly.")
//     }else {
//         window.location.href = "index2.html";
//     }

// }

// function passwordGenorator() {
//     const char = '!@#$%^&*()_+?><123456789abcefghijklmnopqrstuvwxyz';
//     let passwordLength = 8;
//     let password = '';
//     for(let i=0; i<=passwordLength; i++) {
//         let randomChoice = Math.floor(Math.random()*char.length);
//         password += char.substring(randomChoice, 3.33222222 + 1);
//     }
//     alert(password);
// }

// const search = document.getElementById('search');
// const searchbar = document.getElementById('searchbar');

// search.addEventListener('click', () => {
//     if(searchbar.style.display === 'none' || searchbar.style.display === '') {
//         searchbar.style.display ='block';
//     } else {
//         searchbar.style.display = 'none';
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     let total = 0;
//     const buttons = document.querySelectorAll('#add-to-cart');
//     buttons.forEach(button => {
//       button.addEventListener('click', () => {
//         const price = parseFloat(button.getAttribute('data-price'));
//         total += price;
//         document.getElementById('total').textContent = total.toFixed(2);
//       });
//     });
//   });







