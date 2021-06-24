/*function mouseClick() {
    var txt;
    if (confirm("You need to save on My list")) {
        txt = " "
    }else {
        txt = " "
    }
    document.getElementById("myP").innerHTML = txt;
}*/

var output = document.getElementById('output')
// ----------------------------------- Mylist Page -----------------------------------------------------------------------------------------------\\

function addcard(data){
    let Allmight = document.createElement('div')
    Allmight.classList.add("col-3")

        let one = document.createElement('div')
        one.classList.add("card")

            let img = document.createElement('img')
            img.classList.add("card-img-top")
            let imgname = data.image_url
            img.setAttribute( 'src' , imgname)
        
            let inone = document.createElement('div')
            inone.classList.add("card-body")
                let H5 = document.createElement('h5')
                H5.classList.add("card-title")
                let name = data.title
                H5.innerHTML = name
                inone.appendChild(H5)

                

                

            one.appendChild(img)
            one.appendChild(inone)
        Allmight.appendChild(one)
    output.appendChild(Allmight)
}
function MyList(dataList){
    
     for(data of dataList){
         
        addcard(data)
    }
}
function onLoad(){
    fetch('https://se104-project-backend.du.r.appspot.com/movies/601232100')
    .then((response) => {
        return response.json()
    }).then((data => {
        MyList(data)
    }))
}

// ----------------------------------- Search Page -----------------------------------------------------------------------------------------------\\


document.getElementById('submit').addEventListener('click' ,function (e){
    var search = document.getElementById('search').value
    console.log(search)
    fetch(`https://api.jikan.moe/v3/search/anime?q=${search}`)
    .then((response) => {
        console.log('not found')
        
        return response.json()
    }).then((data => {
        Search(data)
    }))
    
})
function Search(dataList){
    
    for(data of dataList.results){
         
        addcard(data)
        
    }
}