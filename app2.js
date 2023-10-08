const form = document.getElementById('memeForm');
const topText = document.querySelector('input.topText');
const botText = document.querySelector('input.bottomText');
const memeImage = document.querySelector('input.imageURL');
const generatedMeme = document.querySelector('div.generatedMeme');

generatedMeme.addEventListener("click", deleteMeme);
form.addEventListener("submit", function(e){
    e.preventDefault();

    const memeBox = makeMeme(topText, memeImage, botText);
    generatedMeme.append(memeBox);

    e.target.reset();
});

function makeMeme(top, img, bot){
    // make top text
    const memeBox = document.createElement('div');
    memeBox.setAttribute('class','memeBox');

    const memeImg = document.createElement('img');
    memeImg.setAttribute('class', 'memeImg');

    const topTxt = document.createElement('p');
    topTxt.setAttribute('class', 'topTxt');

    const botTxt = document.createElement('p');
    botTxt.setAttribute('class', 'botTxt');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const del = document.createElement('p');
    del.classList.add('delete');


    del.innerText = 'X';
    topTxt.innerText = top.value;
    memeImg.src = img.value;
    botTxt.innerText = bot.value;

    overlay.append(del);
    memeBox.append(overlay);
    memeBox.append(topTxt);
    memeBox.append(memeImg);
    memeBox.append(botTxt);

    return memeBox;
}

function deleteMeme(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
}

