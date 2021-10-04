function changeBg() {
    const title = document.getElementById('title');
    const body = document.getElementById('body');

    let randomColor = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')';

    title.innerHTML = 'Current background color is <br>' + randomColor;
    body.style.background = randomColor;
}