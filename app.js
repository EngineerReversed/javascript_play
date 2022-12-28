const url = "https://yesno.wtf/api";
const imgArticle = document.getElementById('image-article');
const ansText = document.getElementById('answer-text');
const thinkingArticle= document.getElementById('thinking');

function showThinking(){
    thinkingArticle.classList.remove('hide');
}

function hideThinking(){
    thinkingArticle.classList.add('hide');
}

// fetch function is used for dealing with api requests
// takes in two parameters
// url: endpoint
// paramters: method and headers
function decide(event){
    event.preventDefault();
    imgArticle.innerHTML = "";  // setting it to empty to clear the DOM everytime request is made
    ansText.innerHTML = "";     // otherwise you end up seeing previous image again
    showThinking();
    fetch(url,{
        method:'GET',
        headers:{
            'accept': 'application/json'
        }
    }).then(async (response)=>{     // returns a Promise therefore we need async and await
        const result = await response.json();
        // display the result in img-article or answer-text
        const img = document.createElement('img');
        img.setAttribute('src', result.image);
        imgArticle.appendChild(img);
        ansText.textContent = result.answer;
        hideThinking();
    })
}


// when the user enters the question, it should call the api
// receive the response and display the result in
// img-article and answer-text

document.querySelector('form').addEventListener('submit',decide);
