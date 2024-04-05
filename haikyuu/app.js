fetch("https://imdb8.p.rapidapi.com/auto-complete?q=HAIKYUU", {
	"method": "GET",
	"headers": {
		'X-RapidAPI-Key': '9b901f0251mshf77cadb3baf361fp1c2cd5jsndb901f883543',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
})
.then(response => response.json())
.then(data => {
    //console.log(data)
    const arrayMovies = data.d
    arrayMovies.map( (element) => {
        //console.log(element)
        const title = element.l
        const image = element.i.imageUrl
        const cast = element.s
        const poster = `
            <div>
                <img src="${image}" />
                <h2>${title}</h2>
                <small>${cast}</small>
            </div>
        `
        document.getElementById('container').innerHTML += poster
    })
})
.catch(err => {
	console.error(err);
});