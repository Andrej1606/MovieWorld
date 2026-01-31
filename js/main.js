// views
window.addEventListener('beforeunload', function () {
    this.localStorage.db = JSON.stringify(db);
})
let movieList = document.querySelector('.movie-list');
let addMovies = document.querySelector('.add-movies');
let editDeleteView = document.querySelector('#edit-delete-view');
let editDeleteList = document.querySelector('#edit-delete-cards');
let editView = document.querySelector('#edit-movies');
let favoriteMoviesView = document.querySelector('#favorite-movies-view');
let asideView = document.querySelector('aside');

// description view
let description = document.querySelector('#description-container');

// description content
let descriptionContent = document.querySelector('#movie-description-window');

// settings selectors
let settings = document.querySelector('.settings');

// settings options
let settingsOptions = document.querySelector('.options');

// theme
let theme = document.querySelector('#theme');

// buttons
let changeThemebtns = document.querySelectorAll('.theme-changes');
let addMovieViewbtns = document.querySelectorAll('.adding-movies');
let movieListbtns = document.querySelectorAll('.movie-list-view');
let closeDescriptionbtns = document.querySelector('.close-btn');
let editDeleteViewbtns = document.querySelectorAll('.editing-movies');
let addMovieBtn = document.querySelector('#add-movie-btn');
let editMovieBtn = document.querySelector('#edit-movie-btn');
let favoriteMoviesViewBtns = document.querySelectorAll('.favorite-movies-view-btn');
let burgerBtn = document.querySelector('#burger-menu');
let closeOptionsMenuBtn = document.querySelector('.close-options-menu')

// input selectors
let movieImgInput = document.querySelector('#imageinput');
let movieNameInput = document.querySelector('#moviename');
let movieGenreInput = document.querySelector('#moviegenre');
let movieDurationInput = document.querySelector('#duration');
let movieRatingInput = document.querySelector('#movierating');
let movieYearInput = document.querySelector('#released');
let movieInfoInput = document.querySelector('#movieinfo');
let searchInput = document.querySelector('#mainsearch');
let searchInputDiv = document.querySelector("#search-input");

let id = null;

// edit inputs selector
let eMovieImgInput = document.querySelector('#e-imageinput');
let eMovieNameInput = document.querySelector('#e-moviename');
let eMovieGenreInput = document.querySelector('#e-moviegenre');
let eMovieDurationInput = document.querySelector('#e-duration');
let eMovieRatingInput = document.querySelector('#e-movierating');
let eMovieYearInput = document.querySelector('#e-released');
let eMovieInfoInput = document.querySelector('#e-movieinfo');

// saving URL of the image before submiting the form
let selectedImage = null;
document.getElementById("imageinput").addEventListener('change', saveUrl)
document.getElementById("e-imageinput").addEventListener('change', saveUrl)

// add/remove favourit movie button look
let outline = '<svg data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path></svg>'
let solid = '<svg data-slot="icon" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z"></path></svg>'

// event listeners
changeThemebtns.forEach(btn => btn.addEventListener('click', changeTheme));
addMovieViewbtns.forEach(btn => btn.addEventListener('click', displayAddMovies));
movieListbtns.forEach(btn => btn.addEventListener('click', displayMovieList));
settings.addEventListener('click', displaySettingsOptions);
editDeleteViewbtns.forEach(btn => btn.addEventListener('click', displayEditDeleteView));
searchInput.addEventListener('input', search);
addMovieBtn.addEventListener('click', addMovie);
closeDescriptionbtns.addEventListener('click', closeDescription);
editMovieBtn.addEventListener('click', updateMovieCard);
favoriteMoviesViewBtns.forEach(btn => btn.addEventListener('click', displayFavoriteMoviesView));
burgerBtn.addEventListener('click', openCloseAside);
closeOptionsMenuBtn.addEventListener('click', closeMenu)

// event hendlers
function changeTheme(e) {
    preventDefault(e)

    let currentTheme = theme.getAttribute("href");
    if (currentTheme === 'css/darktheme.css') {
        theme.setAttribute('href', 'css/lighttheme.css');

    } else {
        theme.setAttribute('href', 'css/darktheme.css');
    }
}

function displayAddMovies(e) {
    preventDefault(e)

    editDeleteView.style.display = 'none';
    description.style.display = "none"
    movieList.style.display = 'none';
    settingsOptions.style.display = 'none';
    favoriteMoviesView.style.display = 'none';
    editView.style.display = 'none';
    asideView.style.display = 'none'
    searchInputDiv.style.display = 'flex';
    addMovies.style.display = 'block';
}

function displayMovieList(e) {
    preventDefault(e)
    addMovies.style.display = 'none';
    editDeleteView.style.display = 'none';
    settingsOptions.style.display = 'none';
    favoriteMoviesView.style.display = 'none';
    asideView.style.display = 'none'
    editView.style.display = 'none';
    searchInputDiv.style.display = 'flex';
    movieList.style.display = 'flex';
}

function displaySettingsOptions(e) {
    preventDefault(e)
    if (settingsOptions.style.display === 'none') {
        settingsOptions.style.display = 'block';
    } else {
        settingsOptions.style.display = 'none';
    }
}

function displayDescription(e) {
    preventDefault(e)
    let movieId = e.target.dataset.id;
    description.style.display = "flex";
    descriptionContent.innerText = db[movieId].info;
}

function closeDescription(e) {
    preventDefault(e)
    description.style.display = 'none';
}

function displayEditDeleteView(e) {
    preventDefault(e)
    movieList.style.display = 'none';
    description.style.display = "none"
    addMovies.style.display = 'none';
    settingsOptions.style.display = 'none';
    asideView.style.display = 'none'
    editView.style.display = 'none';
    favoriteMoviesView.style.display = 'none';
    searchInputDiv.style.display = 'flex';
    editDeleteView.style.display = 'flex';
}
function openCloseAside(e) {
    asideView.style.display = 'flex'
}

function closeMenu(e) {
    asideView.style.display = 'none'
}


function showCard(e) {
    preventDefault(e)
    id = this.dataset.id;
    currentCard = db[id]

    eMovieNameInput.value = currentCard.name;
    eMovieGenreInput.value = currentCard.duration;
    eMovieDurationInput.value = currentCard.duration;
    eMovieRatingInput.value = currentCard.rating;
    eMovieYearInput.value = currentCard.year;
    eMovieInfoInput.value = currentCard.info;

    movieList.style.display = 'none';
    description.style.display = "none"
    addMovies.style.display = 'none';
    settingsOptions.style.display = 'none';
    editDeleteView.style.display = 'none';
    searchInputDiv.style.display = 'flex';
    editView.style.display = 'block';
}

function search(e) {
    preventDefault(e)
    let searchTerm = this.value.toLowerCase();
    let filtered = db.filter(card => card.name.toLowerCase().includes(searchTerm) || card.genre.toLowerCase().includes(searchTerm) || card.year.toString().includes(searchTerm))
    createMovieCard(filtered)
    createEditDeleteCards(filtered)
}

function addMovie(e) {
    preventDefault(e)
    let newMovie = {
        img: selectedImage,
        name: movieNameInput.value,
        genre: movieGenreInput.value,
        duration: movieDurationInput.value,
        rating: movieRatingInput.value,
        year: movieYearInput.value,
        info: movieInfoInput.value
    };
    db.push(newMovie);
    resetInput()
    createMovieCard()
    createEditDeleteCards()
    displayMovieList()
}

function deleteCards(e) {
    preventDefault(e)
    db.splice(this.dataset.id, 1)
    createMovieCard()
    createEditDeleteCards()
    displayEditDeleteView()
}

function displayFavoriteMoviesView(e) {
    preventDefault(e)

    let filtered = db.filter(card => card.favorites)
    favoriteMoviesView.innerHTML = "";
    if (filtered.length > 0) {
        createMovieCard(filtered, favoriteMoviesView, solid);
    } else {
        favoriteMoviesView.innerHTML = "<p class='no-favorites'>No favorites added yet.</p>";
    }
    movieList.style.display = 'none';
    description.style.display = "none"
    addMovies.style.display = 'none';
    settingsOptions.style.display = 'none';
    editView.style.display = 'none';
    asideView.style.display = 'none';
    editDeleteView.style.display = 'none';
    searchInputDiv.style.display = 'none';
    favoriteMoviesView.style.display = 'flex';
}

function updateMovieCard(e) {
    preventDefault(e)
    let updatedCard = {
        img: selectedImage,
        name: eMovieNameInput.value,
        genre: eMovieGenreInput.value,
        duration: eMovieDurationInput.value,
        rating: eMovieRatingInput.value,
        year: eMovieYearInput.value,
        info: eMovieInfoInput.value
    }
    db[id] = updatedCard;
    createMovieCard()
    createEditDeleteCards()
    displayEditDeleteView()
}

function addRemoveFavorites(e) {
    preventDefault(e)
    if (this.classList.contains('favorites')) {
        this.innerHTML = outline;
        this.classList.remove('favorites')
        delete db[this.dataset.id].favorites;
    } else {
        this.innerHTML = solid;
        this.classList.add('favorites')
        db[this.dataset.id].favorites = "yes";
    }
}

function saveUrl(e) {
    preventDefault(e)
    if (!e.target.files || e.target.files.length === 0) {
        console.error('Fajl nije odabran');
        return;
    }

    selectedImage = URL.createObjectURL(e.target.files[0])
}

createMovieCard()
createEditDeleteCards()

function createMovieCard(cards = db, container = movieList, heart = outline) {
    html = '';
    cards.forEach((movie, index) => {
        html += `
        <div class="movie-card">
        <div class="img-holder">
        <div class="rating">
        <p>${movie.rating}</p>
        </div>
        <img src="${movie.img}" alt="" />
 </div>
 <div class="movie-info">
    <h2 class="movie-name">${movie.name}</h2>
    <div class="movie-genre">
       <p>Genre:</p>
       <p>${movie.genre}</p>
       </div>
       <div class="release-year">
       <p>Year:</p>
       <p>${movie.year}</p>
       </div>
       <div class="movie-duration">
       <p>Duration:</p>
       <p>${movie.duration} min</p>
       </div>
       <button data-id="${index}"class="add-favorites-btn  ${heart === solid ? 'favorites' : ''}" title="Add to Favorite">
       ${heart}
       </button>
       <button data-id='${index}' class="movie-description-btn">Description</button>
       </div>
       </div>`.trim();
    })
    container.innerHTML = html;
    let descriptionbtns = document.querySelectorAll('.movie-description-btn');
    let addRemoveFavoritesBtns = document.querySelectorAll('.add-favorites-btn')
    descriptionbtns.forEach((btn, index) => {
        btn.addEventListener('click', displayDescription)
        addRemoveFavoritesBtns[index].addEventListener('click', addRemoveFavorites)
    })
}


function createEditDeleteCards(cards = db) {
    html = '';
    cards.forEach((movie, index) => {
        html += `
        <div class="movie-card">
        <div class="img-holder">
        <div class="rating">
        <p>${movie.rating}</p>
        </div>
        <img src="${movie.img}" alt="" />
 </div>
 <div class="movie-info">
    <h2 class="movie-name">${movie.name}</h2>
    <div class="movie-genre">
       <p>Genre:</p>
       <p>${movie.genre}</p>
       </div>
       <div class="release-year">
       <p>Year:</p>
       <p>${movie.year}</p>
       </div>
       <div class="movie-duration">
       <p>Duration:</p>
       <p>${movie.duration} min</p>
       </div>
       <div class="edit-delete-btns">
        <button data-id="${index}" class="delete">Delete</button>
        <button data-id="${index}" class="edit">Edit</button>
        </div>
       </div>
       </div>`.trim();
    })
    editDeleteList.innerHTML = html;
    let allDeleteBtns = document.querySelectorAll('.delete')
    let allEditBtns = document.querySelectorAll('.edit')

    allDeleteBtns.forEach((btn, index) => {
        btn.addEventListener('click', deleteCards)
        allEditBtns[index].addEventListener('click', showCard)
    })
}

// prevent default behavior of events
function preventDefault(e) {
    if (e) {
        e.preventDefault()
    }
}

// reseting inputs
function resetInput() {
    movieImgInput.value = '';
    movieNameInput.value = '';
    movieGenreInput.value = '';
    movieRatingInput.value = '0';
    movieInfoInput.value = '';
    movieYearInput.value = '';
    movieDurationInput.value = '';
}