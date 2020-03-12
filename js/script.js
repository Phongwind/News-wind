let newsList = []
let newListheadline = []


let callAPI = async () => {
    let apiKey = `75b17a84438b4ff69f993c0ec88706d3`
    let url = `https://newsapi.org/v2/everything?domains=wsj.com,goal.com/en,theverge.com&pageSize=10&apiKey=${apiKey}`

    let data = await fetch(url);
    let result = await data.json();

    newsList = result.articles;

    render(newsList)

}



let render = (array) => {
    let htmlForNews = array.map((item) => {

        return `
        <div class="card col-lg-12 col-sm-12" style="margin-bottom: 2%;">
                <div class="card-body news">
                    <h5 class="card-subtitle mb-2 text-muted">${item.source.name}</h5>
                    <h4 class="card-title">${item.title}</h4>
                    <h6 class="card-subtitle mb-2 text-muted">${moment(item.publishedAt).fromNow()}</h6>
                    <p class="card-text">${item.content}</p>
                    <img style="max-width: 100%;"
                    src="${item.urlToImage}">
                    <br>
                    <a href="#" class="card-link"><i class="far fa-thumbs-up"></i></a>
                    <a href="#" class="card-link">Comment</a>
                </div>

               
        </div>`

    }).join('')

    document.getElementById('newsArea').innerHTML = htmlForNews
}

callAPI();


