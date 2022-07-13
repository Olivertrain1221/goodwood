/* jshint esversion: 11 */
const API_URL = "https://api.goodwood.com/v2/";
const getPagesEndpoint = "getpages/";
const getEventsEndpoint = "getevents/";
const getGrrcEndpoint = "getgrrcarticles/";


// API END POINT CONNECTION FOR GOODWOOD PAGE LINKS
fetch(`${API_URL}${getPagesEndpoint}`)
    // Using double .then to use the promise correctly
    .then(response => response.json())
    .then(data => displayPages(data))
    .catch((e) => {
        console.error("Error", e);
    });

// More of a basic code logic following through the api endpoint and accessing via indexes
function displayPages(data) {
    // API got updated so had to assign each item unique
    let spa;
    let flying;
    let fridayNights;
    let restaraunt;
    for (let i = 0; i < data.Result.length; i++) {
        if (data.Result[i].Id == 326953) {
            spa = data.Result[i];
        } else if (data.Result[i].Id == 326652) {
            flying = data.Result[i]; 
        } else if (data.Result[i].Id == 316485) {
            fridayNights = data.Result[i]; 
        } else if (data.Result[i].Id == 315134) {
            restaraunt = data.Result[i]; 
        }
    }
    // Injecting HTML by using a ID
    document.getElementById("flight").innerHTML = `
        <a href="${flying.Url}">${flying.Title}<i class="icon fa-solid fa-plane"></i></a>`;

    document.getElementById("three-friday-nights").innerHTML = `
        <a href="${fridayNights.Url}">${fridayNights.Title}<i class="icon fa-solid fa-music"></i></a>`;

    document.getElementById("spa").innerHTML = `
        <a href="${spa.Url}">${spa.Title}<i class="icon fa-solid fa-hot-tub-person"></a>`;

    document.getElementById("restaraunt").innerHTML = `
        <a href="${restaraunt.Url}">${restaraunt.Title}<i class="icon fa-solid fa-utensils"></i></i></a>`;
}
// API END POINT CONNECTION FOR GOODWOOD EVENT LINKS
fetch(`${API_URL}${getEventsEndpoint}`)
    // Using double.then to use the promise correctly
    .then(response => response.json())
    .then(dataEvents => displayEvents(dataEvents))
    .catch((e) => {
        console.error("Error", e);
    });
    

function displayEvents(dataEvents) {
    let result = dataEvents.Result;
    // Using a for loop to loop over result ^ and increment i unil max length
    for (let i = 0; i < result.length; i++) {
        // Injects HTML to areas on the page
        let card = `
            <a class="text-none" href="${result[i].Url}">
                <div class="card">
                    <img class="card-image" id="card-image-${i}" src=${result[i].ImageUrl} alt="${result[i].Name}" onError="this.onerror=null;this.src='https://picsum.photos/200';">
                    <div class="card-body ">
                        <h5 class="card-text-name">${result[i].Name}</h5>
                        <p class="card-text">${result[i].Description}</p>
                    </div>
                </div>
            </a>`;
        document.getElementById("events").insertAdjacentHTML('beforeend', card);
    }
}



fetch(`${API_URL}${getGrrcEndpoint}`)
    // Using double.then to use the promise correctly
    .then(response => response.json())
    .then(dataArticles => displayArticles(dataArticles))
    .catch((e) => {
        console.error("Error", e);
    });

function displayArticles(dataArticles) {
    let result = dataArticles.Result;
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].Title);
        let card = `
            <a class="text-none pts" href="${result[i].Url}">
                <div class="card-article">
                    <img src=${result[i].ImageUrl} alt="${result[i].Title}" class="card-img" onError="this.onerror=null;this.src='https://picsum.photos/200';">
                    <div class="article-card-body ">
                        <h5 class="article-card-text-name">Goodwood<br>${result[i].Title}</h5>
                        <p class="article-card-text">${result[i].Abstract}</p>
                    </div>
                </div>
            </a>`;
        document.getElementById("articles").insertAdjacentHTML('beforeend', card);
    }
}




console.log("end of task 1")