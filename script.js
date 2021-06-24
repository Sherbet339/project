var output1 = document.getElementById('output1')
var id = 632110339
// ----------------------------------- Mylist Page -----------------------------------------------------------------------------------------------\\



// ----------------------------------- Search Page -----------------------------------------------------------------------------------------------\\


document.getElementById('submit').addEventListener('click', function (e) {
    var search = document.getElementById('search').value
    console.log(search)
    output1.innerHTML=''
    fetch(`https://api.jikan.moe/v3/search/anime?q=${search}`)
        .then((response) => {
            console.log('not found')

            return response.json()
        }).then((data => {
            Search(data.results)
        }))

})
function Search(dataList) {

    for (data of dataList) {

        addcard(data)

    }
}
function addcard(movie) {

    let Allmight = document.createElement('div')
    Allmight.classList.add("col-3")

    let one = document.createElement('div')
    one.classList.add("card")

    let img = document.createElement('img')
    img.classList.add("card-img-top")
    let imgname = movie.image_url
    img.setAttribute('src', imgname)

    let inone = document.createElement('div')
    inone.classList.add("card-body")
    let H5 = document.createElement('h5')
    H5.classList.add("card-title")
    let name = movie.title
    H5.innerHTML = name
    inone.appendChild(H5)





    one.appendChild(img)
    one.appendChild(inone)
    Allmight.appendChild(one)
    Allmight.addEventListener('dblclick', function () {
        console.log(data)
        var r = confirm(`Add ${name} to MyList`);
        if (r == true) {
            alldata={id,movie}
            console.log(alldata)
            addtoMylistToDB(alldata)
            output1.innerHTML=''
            onLoad()
        }
    })
    output1.appendChild(Allmight)
}
function addtoMylistToDB(al) {
    fetch(`https://se104-project-backend.du.r.appspot.com/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(al)
    }).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw Error(response.statusText)
        }
    }).then(data => {
        console.log(data)
        
    })
}