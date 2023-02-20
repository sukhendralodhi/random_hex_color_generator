const btn = document.getElementById('btn');
let colorHolder = document.getElementById('colorHolder');
let bodyTag = document.querySelector('body');


const randomColor = () => {
    const color = Math.random().toString(16).substring(2,8);
    colorHolder.innerText = '#'+ color;
    container.style.backgroundColor = '#'+color;
    bodyTag.style.backgroundColor = '#'+color;
}

btn.addEventListener('click', () => {
    randomColor();
});

// initial call, when page get refresh this function will call
randomColor();