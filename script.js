const loader = document.getElementById('loader')
const input = document.getElementById('input')
const results = document.getElementById('results')

function showLoader() {
  loader.style = "opacity: 1;"
}

function hideLoader() {
  loader.style = "opacity: 0;"
}

function addCard(name, description, photo, link) {
  results.innerHTML += `
  <div class="col-md-4 col-md-offset-2 col-sm-12  col-sm-offset-2">
    <img height="240" src="https://www.whittierfirstday.org/wp-content/uploads/default-user-image-e1501670968910.png" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  `
}

function onClickLoadButton() {
  const username = input.value
  input.value = ''

  if (!username) return

  showLoader()
  // TODO: remove
  setTimeout(() => {
    addCard(username)
    hideLoader()
  }, 3000)
}


// start application
hideLoader()