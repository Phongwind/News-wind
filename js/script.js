let newsList = []
let newListheadline = []


let callAPI = async () => {
    let apiKey = `75b17a84438b4ff69f993c0ec88706d3`
    let url = `http://newsapi.org/v2/everything?domains=wsj.com&pageSize=10&apiKey=${apiKey}`

    let data = await fetch(url);
    let result = await data.json();

    newsList = result.articles;

    render(newsList)

}

let callAPI2 = async () => {
    let apiKey = `75b17a84438b4ff69f993c0ec88706d3`
    let url = `http://newsapi.org/v2/everything?domains=wsj.com&pageSize=1&apiKey=${apiKey}`

    let data = await fetch(url);
    let result = await data.json();

    newsListheadline = result.articles;

    render2(newsListheadline);
}

let render2 = (array) => {
    let htmlForNews = array.map((item) => {
        return `<div class="col-sm-8">
        <div class="breakingnews" style="margin-bottom: 10%;">

    
            <h5>${item.source.name}</h5>
            <h2>${item.title}</h2>
            <h6>${item.publishedAt}</h6>
            <img src="${item.urlToImage}" style="max-width: 100%;>
            <p>${item.content}</p>
            <a href="#" class="card-link"><i class="far fa-thumbs-up"></i></a>
            <a href="#" class="card-link">Comment</a>
        </div>
    </div>`
}).join('')

document.getElementById('breakingnews').innerHTML = htmlForNews
}

let render = (array) => {
    let htmlForNews = array.map((item) => {

        return `
        <div class="card col-lg-4 col-sm-12" style="
            margin-right: 10%; margin-bottom: 2%; padding: 0">
                <div class="card-body news">
                    <h5 class="card-subtitle mb-2 text-muted">${item.source.name}</h5>
                    <h4 class="card-title">${item.title}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">${item.publishedAt}</h6>
                    <p class="card-text">${item.content}</p>
                    <a href="#" class="card-link"><i class="far fa-thumbs-up"></i></a>
                    <a href="#" class="card-link">Comment</a>
                </div>

                <img style="max-width: 100%;"
                    src="${item.urlToImage}"
                    class="card-img-top" alt="...">
        </div>
            
            
        `


    }).join('')

    document.getElementById('newsArea').innerHTML = htmlForNews
}

callAPI();
callAPI2();

