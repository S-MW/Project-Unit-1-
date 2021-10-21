        // ---------------Popular Movies---------------
        // ---------------Popular Movies---------------
        // ---------------Popular Movies---------------
        function popularMovies()
        {
            document.querySelector(".data-more-info").style.display = "none";

            document.querySelector(".WelcomeDiv").style.display = "none";


            fetch('https://api.themoviedb.org/3/movie/popular?api_key=9605b226360bf8f3f03d5da3c0a1f662')
        .then(function(response) {
        return response.json()})
        .then(function (json) { 
            console.log(json.results)
            let category = "movie"
            getTheData(json.results , category)
        })
        }

        // ---------------top rated Movies---------------
        // ---------------top rated Movies---------------
        // ---------------top rated Movies---------------
        function topRatedMovies()
        {
            document.querySelector(".data-more-info").style.display = "none";

            document.querySelector(".WelcomeDiv").style.display = "none";


            fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=9605b226360bf8f3f03d5da3c0a1f662')
        .then(function(response) {
        return response.json()})
        .then(function (json) { 
                        console.log(json.results)
            let category = "movie"
            getTheData(json.results, category)
        })
        }
        

        // ---------------popular person---------------
        // ---------------popular person---------------
        // ---------------popular person---------------
        function popularPerson()
        {
            document.querySelector(".data-more-info").style.display = "none";

            document.querySelector(".WelcomeDiv").style.display = "none";


            fetch('https://api.themoviedb.org/3/person/popular?api_key=9605b226360bf8f3f03d5da3c0a1f662')
        .then(function(response) {
        return response.json()})
        .then(function (json) { 
                        console.log(json.results)
            let category = "person"
            getTheData(json.results, category)
        })
        }
        

        // --------------- Search Movies---------------
        // --------------- Search Movies---------------
        // --------------- Search Movies---------------
        function searchMovies()
        {
            document.querySelector(".data-more-info").style.display = "none";

            document.querySelector(".WelcomeDiv").style.display = "none";


            const searchmovies_div_tag = document.querySelector(".searchmovies");


                                // remove redundant if off showing multi-search input
                                searchmovies_div_tag.innerHTML=""


            const movies_input_tag = document.createElement("input");
                    movies_input_tag.setAttribute("id","movies_input_tag")
                    movies_input_tag.placeholder="Movie Name"
            const movies_button_tag = document.createElement("button");
                    movies_button_tag.setAttribute("id","movies_button_tag")
                    movies_button_tag.setAttribute("class","fa fa-search")
                    movies_button_tag.setAttribute("onclick","addEventListenerForSearchButton()")


            searchmovies_div_tag.append(movies_input_tag)
            searchmovies_div_tag.append(movies_button_tag)
        }


        function addEventListenerForSearchButton(){
            const getValueOfmovies_input_tag = document.querySelector("#movies_input_tag")
                let movies_input_tag_value = getValueOfmovies_input_tag.value;
                
                // ----------------------------
                fetch('https://api.themoviedb.org/3/search/movie?api_key=9605b226360bf8f3f03d5da3c0a1f662&query='+movies_input_tag_value )
                .then(function(response) {
                return response.json()})
                .then(function (json) { 
                    console.log(json.results)
                    let category = "movie"
                    getTheData(json.results, category)
                    
                })
        }



        function getTheData(date,category)
        {
            // clear any data before fetch another movie
            const clear = document.querySelector("#movies-grid-container");
                    clear.innerHTML=""

                for(let i = 0 ; i<date.length ; i++)
                {
                    if(category == "movie")
                    {
                        appendElemntMovie(date[i])
                    }
                    if(category == "person")
                    {
                        appendElemntperson(date[i])
                    }
                }
                // fadeInAndfadeOutByJquery()
            
        }

        function appendElemntperson(index)
        {
            const ImageDiv = document.querySelector("#movies-grid-container");
        const ChildDiv = document.createElement("div");
        ChildDiv.classList.add("movies-grid-item");
        ImageDiv.append(ChildDiv);

        const clickImgToShowMoreData = document.createElement("a")
                clickImgToShowMoreData.addEventListener('click', function(){
                    getDataForThisMovie(index.id)
                });
        clickImgToShowMoreData.href="#"


        const img = document.createElement("img");
                img.setAttribute("id",index.id)
                img.style.width="100%"
                img.style.height="300px"
                img.style.borderTopLeftRadius="2ch"
                img.style.borderTopRightRadius="2ch"


        const paragraf = document.createElement("h1");
                paragraf.style.color="white"
        const vote_average = document.createElement("p");

        if(index['profile_path'] == null)
        {
            console.log("Missing image ID: " + index['id'])
            img.src="images/no_image.png"
        }
        else{
            img.src="https://image.tmdb.org/t/p/w500/"+index['profile_path']
        }
        paragraf.innerText=index['name']
        vote_average.innerText=index['popularity']
        clickImgToShowMoreData.append(img)
        ChildDiv.append(clickImgToShowMoreData);
        ChildDiv.append(paragraf);
        ChildDiv.append(vote_average);
        }


        function appendElemntMovie(index)
        {
        const ImageDiv = document.querySelector("#movies-grid-container");
        const ChildDiv = document.createElement("div");
        ChildDiv.classList.add("movies-grid-item");
        ImageDiv.append(ChildDiv);

        const clickImgToShowMoreData = document.createElement("a")
                clickImgToShowMoreData.addEventListener('click', function(){
                    getDataForThisMovie(index.id)
                });
        clickImgToShowMoreData.href="#"


        const img = document.createElement("img");
                img.setAttribute("id",index.id)
                img.style.width="100%"
                img.style.height="300px"
                img.style.borderTopLeftRadius="2ch"
                img.style.borderTopRightRadius="2ch"
                
        const paragraf = document.createElement("p");
                paragraf.style.backgroundColor="#363636"
        const vote_average = document.createElement("p");
        const vote_average_span = document.createElement("span");
                vote_average.style.backgroundColor="#363636"
                vote_average.style.fontSize="30px"
        const addToMyWatchlist = document.createElement("button")
                addToMyWatchlist.setAttribute("class","addToMyWatchlistButton")
                // addToMyWatchlist.style.display = "none";

        const voteOf10 = document.createElement("small")
                voteOf10.innerHTML=" /10"
                
                if(index['poster_path'] == null)
                {
                    console.log("Missing image ID: " + index['id'])
                    img.src="images/no_image.png"
                }
                else{
                    img.src="https://image.tmdb.org/t/p/w500/"+index['poster_path']
                }
        paragraf.innerText=index['title']
        paragraf.style.fontSize="30px"
        paragraf.style.color="white"
                if(index['vote_average'] >= 7)
                {
                    vote_average_span.style.color="green"
                }
                else if(index['vote_average'] < 7 && index['vote_average'] >= 5)
                {
                    vote_average_span.style.color="yellow"
                }
                else{
                    vote_average_span.style.color="red"
                }
        vote_average_span.innerText=index['vote_average']
        vote_average.appendChild(vote_average_span)
        vote_average.appendChild(voteOf10)
        addToMyWatchlist.innerHTML="Add To MyWatchlist"
        addToMyWatchlist.setAttribute("onclick",'addToWatchlist(" '+index['id']+' " )')
        clickImgToShowMoreData.append(img)
        ChildDiv.append(clickImgToShowMoreData);
        ChildDiv.append(paragraf);
        ChildDiv.append(vote_average);
        ChildDiv.append(addToMyWatchlist);
        }



// When the user clicks the button to show move info.
function getDataForThisMovie(id) { 
    // const mainPath = "https://api.themoviedb.org/3/movie/"+id+"?api_key=9605b226360bf8f3f03d5da3c0a1f662"
    const mainPath = `https://api.themoviedb.org/3/movie/${id}?api_key=9605b226360bf8f3f03d5da3c0a1f662`

    fetch(mainPath)
    .then(function(response) {
    return response.json()})
    .then(function (json) { 
        console.log(json)

                    // clear any data before fetch Movie details
                    const clear = document.querySelector("#movies-grid-container");
                    clear.innerHTML=""

                    const imge_more_info = document.querySelector(".imge-more-info");
                    imge_more_info.innerHTML=""
                    const data_more_info = document.querySelector(".data-more-info");
                    data_more_info.innerHTML=""

                    const imageOfMovie = document.createElement("iframe");
                            imageOfMovie.style.width="100%"
                            imageOfMovie.style.height="100%"



                            fetch("https://api.themoviedb.org/3/movie/"+json['id']+"/videos?api_key=9605b226360bf8f3f03d5da3c0a1f662")
                            .then(function(response) {
                            return response.json()})
                            .then(function (json) { 
                                const theYoutubeKey = json.results[0]['key']      
                                imageOfMovie.src="https://www.youtube.com/embed/"+theYoutubeKey
                            })
                            document.querySelector(".data-more-info").style.display = "block";

                    const id = document.createElement("h1")
                                id.innerHTML=json['id']
                    const title = document.createElement("h1")
                                title.innerHTML=json['title']
                    const overview = document.createElement("p")
                                overview.innerHTML=json['overview']
                    const vote_average = document.createElement("p")
                                vote_average.innerHTML=json['vote_average']
                    const release_date = document.createElement("p")
                                release_date.innerHTML="Release Date: " + json['release_date']






                            imge_more_info.append(imageOfMovie)
                            data_more_info.append(id)
                            data_more_info.append(title)
                            data_more_info.append(overview)
                            data_more_info.append(vote_average)
                            data_more_info.append(release_date)

                            showSimilarVideo()
    })


}


function showSimilarVideo()
{
    console.log("showSimilarVideo function")
}

// showAPI
function showAPI()
{
    // document.querySelector(".main-grid-container").style.visibility="hidden"
    // document.querySelector("#movies-grid-container").style.visibility="hidden"
    document.querySelector(".data-more-info").style.display = "none";

    document.querySelector(".main-grid-container").innerHTML=""
    document.querySelector(".searchmovies").innerHTML=""
    document.querySelector("#movies-grid-container").innerHTML=""
    document.querySelector(".WelcomeDiv").style.display = "none";

    document.querySelector("#APIinfo").style.display = "block";
}

function hiddenAPIinfo()
{
    document.querySelector("#APIinfo").innerHTML=""

}

// showWatchlist
function showWatchlist()
{
    document.querySelector("#APIinfo").style.display = "none";

    fetch('https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=9605b226360bf8f3f03d5da3c0a1f662&language&session_id=a506b5fc9d0378784a8c218fdabc95c8d3c41a73')
        .then(function(response) {
        return response.json()})
        .then(function (json) { 
            console.log(json.results)
            let category = "movie"
            getTheData(json.results,category)
        })
        
}

// addToWatchlist
function addToWatchlist(id){

    //Obj of data to send in future like a dummyDb
    const data = { 
        media_type: 'movie',
        media_id: id,
        watchlist: true
    };

    //POST request with body equal on data in JSON format
    fetch('https://api.themoviedb.org/3/account/548/watchlist?api_key=9605b226360bf8f3f03d5da3c0a1f662&session_id=a506b5fc9d0378784a8c218fdabc95c8d3c41a73', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })
    .then((response) => response.json())
    //Then with the data from the response in JSON...
    .then((data) => {
        alert('Success: added to Watchlist')
    console.log('Success:', data);
    })
    //Then with the error genereted...
    .catch((error) => {
    alert('Error: Somthing wrong!')
    // console.error('Error:', error);
    });

}

// // fadein and fadeout by jquery for .movies-grid-item
// function fadeInAndfadeOutByJquery()
// {  
//     const zzz =  document.querySelectorAll(".movies-grid-item");
//     addEventListenerList(zzz); 
// }
// // Help me a lot https://stackoverflow.com/questions/12362256/addeventlistener-on-nodelist
// function addEventListenerList(list) {
//     for (var i = 0, len = list.length; i < len; i++) {
//         list[i].addEventListener("mouseover",function(){
//             document.querySelector(".addToMyWatchlistButton").display="block"
//         });
//     }
// }