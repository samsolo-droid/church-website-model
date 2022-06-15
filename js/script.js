let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})

upComing = document.querySelector('a.up-coming')

// const data = {
//     id: 13,
//     name: " next Level Spee "
// }

// const options = {
//     method: 'POST',
//     headers: {
//         'Conten-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// }
// upComing.addEventListener('dblclick', fetch('js/cool.json', options))
