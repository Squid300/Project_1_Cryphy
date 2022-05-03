const q = 'cats';
const apiKey = 'asFMu6rJdA39jyE6ZwygWoqWWaPprdRv'
const giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key='+apiKey+'&q='+q;

fetch(giphyUrl).then(function(res) {
    return res.json()
}).then(function(json) {
    console.log(json.data[0].images.fixed_width.url)
    const resultsEl = document.getElementById('results')
    let resultsHTML = ''
    json.data.forEach(function(obj) {
        console.log(obj.images.fixed_width.url)
        const url = obj.images.fixed_width.url
        const width = obj.images.fixed_width.width
        resultsHTML += '<img src="${url} width="${width}>'
    })

    resultsEl.innerHTML
}).catch(function(err) {
    console.log(err.messsage)
})