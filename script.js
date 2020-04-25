console.log('helo');

const wrapper = document.querySelector('.wrapper');
console.log('wrapper', wrapper);

function createCard(cardObj) {
return `
<div class="card">
<div class="header">
    <img class="header-image" src="./ava.png" alt="avatar">
    <div class="header-title">
        ${cardObj.author}
    </div>
</div>
<div class="image-wrapper">
    <img class="image" src="${cardObj.download_url}" alt="test image">
</div>
<div class="content">
    Попробуй себя в разработке в прямом эфире под руководством эксперта
</div>
</div>
`
}

fetch('https://picsum.photos/v2/list')
    .then(function(response) {
     return response.json();
    })
    .then((data) => {
        console.log('data', data)


let cardList = '';

data.forEach((cardObj) => {
    cardList = cardList + createCard(cardObj)
});

//setTimeout(() => {
            wrapper.innerHTML = cardList;
//        }, 1000);

let msnry;
    setTimeout(() => {
        msnry = new Masonry(wrapper);
        console.log('mnsry', msnry)
    }, 1000)
    setTimeout(() => {msnry.reloadItems; }, 2000)

    });