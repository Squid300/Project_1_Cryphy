
function randomGif(q){
    const apiKey = 'asFMu6rJdA39jyE6ZwygWoqWWaPprdRv'
    const giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=' + apiKey + '&q=' + q;
    
    fetch(giphyUrl).then(function (res) {
        return res.json()
    }).then(function (json) {
        console.log(json)
        const resultsEl = document.getElementById('results')
       
        let url;
        let resultsHTML = document.createElement('img');
        const random = Math.floor(Math.random() * json.data.length)
        const randomImg = json.data[random];
    
    
        url = randomImg.images.fixed_width.url
    
        resultsHTML.setAttribute('src', url)
        resultsHTML.setAttribute('width', '200')
    
        resultsEl.append(resultsHTML);
    }).catch(function (err) {
        console.log(err)
    })
}


// need to run if else based on if % change in ticker price works or not. 
 randomGif('cats')
// if (percentChange >0) {
//     q= 'happy'
//     randomGif
// else {




