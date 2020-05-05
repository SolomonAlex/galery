console.log('helo');

const wrapper = document.querySelector('.wrapper');
console.log('wrapper', wrapper);

function createCard(cardObj, cardNum) {
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
<div class="content${cardNum}">
Попробуй себя ....
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
        data.forEach((cardObj, cardNum) => {

            //let data2;
            fetch('https://cors-everywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json', {
            // fetch('https://cors-everywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=parseQuote', {
                //mode: 'no-cors', // 'cors' by default
                method: 'GET',
                headers: {
                    //'content-type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                    //"origin": "http://localhost:3000"
                    // 'Access-Control-Allow-Origin': '*',
                    // "Access-Control-Allow-Credentials" : 'true'
                }
              })
            .then(function(response2) {
            // console.log(response2);
            return response2.json();
            })
            .then((data2) => {
                console.log('data2', data2.quoteText)
                conte = document.querySelector('.content'+cardNum);
                conte.innerHTML = data2.quoteText;
                //cardObj.quote = data2.quoteText
                //console.log('data2', cardObj.quote)
            });

            //console.log('data2', cardObj.quote)
            cardList = cardList + createCard(cardObj, cardNum)
        });

//setTimeout(() => {
            wrapper.innerHTML = cardList;
//        }, 5000);

        let msnry;
        setTimeout(() => {
            msnry = new Masonry(wrapper);
            //console.log('mnsry', msnry)
        }, 15000)
        setTimeout(() => {msnry.reloadItems; }, 20000)

    });