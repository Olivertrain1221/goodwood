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

// More of a basic code logic following throught the api endpoint and accessing via indexes
function displayPages(data) {
    let spaTitle = data.Result[0].Title;
    let spaUrl = data.Result[0].Url;
    let flyingTitle = data.Result[2].Title;
    let flyingUrl = data.Result[2].Url;
    let fridayNightsTitle = data.Result[20].Title;
    let fridayNightsUrl = data.Result[20].Url;
    let restarauntTitle = data.Result[26].Title;
    let restarauntUrl = data.Result[26].Url;

    // Injecting HTML by using a ID
    document.getElementById("flight").innerHTML = `
        <a href="${flyingUrl}">${flyingTitle}<i class="icon fa-solid fa-plane"></i></a>`;

    document.getElementById("three-friday-nights").innerHTML = `
        <a href="${fridayNightsUrl}">${fridayNightsTitle}<i class="icon fa-solid fa-music"></i></a>`;

    document.getElementById("spa").innerHTML = `
        <a href="${spaUrl}">${spaTitle}<i class="icon fa-solid fa-hot-tub-person"></a>`;

    document.getElementById("restaraunt").innerHTML = `
        <a href="${restarauntUrl}">${restarauntTitle}<i class="icon fa-solid fa-utensils"></i></i></a>`;
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
                    <img src=${result[i].ImageUrl} alt="${result[i].Name}" class="card-img" onError="this.onerror=null;this.src='https://picsum.photos/200';">
                    <div class="card-body ">
                        <h5 class="card-text-name">Goodwood<br>${result[i].Name}</h5>
                        <p class="card-text">${result[i].Description}</p>
                    </div>
                </div>
            </a>`;
        // Using the insertAdjacentHTML with a direction to ensure it loops appose to edits.
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
        console.log(result[i].EventToDate);
        let card = `
            <a class="text-none" href="${result[i].Url}">
                <div class="card-article">
                    <img src=${result[i].ImageUrl} alt="${result[i].Title}" class="card-img" onError="this.onerror=null;this.src='https://picsum.photos/200';">
                    <div class="card-body ">
                        <h5 class="card-text-name">Goodwood<br>${result[i].Title}</h5>
                        <p class="card-text">${result[i].EventFromDate}</p>
                        <p class="card-text">${result[i].Abstract}</p>
                    </div>
                </div>
            </a>`;
        document.getElementById("articles").insertAdjacentHTML('beforeend', card);
    }
}

$('')