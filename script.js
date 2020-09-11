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
    <img height="240" src="${photo}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>
      <a href="${link}" class="btn btn-primary">My Profile</a>
    </div>
  </div>
  `
}

function onClickLoadButton() {
  const username = input.value
  input.value = ''

  if (!username) return

  showLoader()

  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      const SUCCESS = 200
      if (response.status !== SUCCESS) {
        throw new Error(response)
      }
      return response.json()
    })
    .then(data => {
      addCard(
        data.name || data.login,
        data.bio,
        data.avatar_url,
        data.html_url,
      )
    })
    .catch(error => {
      alert(error)
    })
    .finally(() => {
      hideLoader()
    })
  }


// start application
hideLoader()