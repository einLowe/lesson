let random = (min, max) => {
    let rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

let btn = document.querySelector('#btn');

btn.addEventListener('mouseenter', () => {
    btn.style.left = `${random(0, 90)}%`;
    btn.style.top = `${random(0, 90)}%`;
});

btn.addEventListener('click', () => {
    alert('На что ты тратишь жизнь? :D');
});