export const setupPageBasics = (parentEl) => {
    parentEl.innerHTML = `
      <h1>Intro To Fetch!</h1>
      <div id='status'></div>
      <div id='users'>
        <h2>Users</h2>
        <ul id='users-list'></ul>
      </div>
      <div id='posts'>
        <h2>Posts</h2>
        <ul id='posts-list'></ul>
      </div>
      <form id='new-user-form' aria-labelledby='new-user-heading'>
        <h2 id='new-user-heading'>Create A New Blog User!</h2>
        <label for='username'>Username:</label>
        <input type='text' id='username' name='username' />
        <label for='email'>Email:</label>
        <input type='email' id='email' name='email' />
        <button>Submit</button>
      </form>
      <div id='new-user'></div>
    `;

    const statusDiv = parentEl.querySelector('#status');
    const usersUl = parentEl.querySelector('#users-list');
    const postsUl = parentEl.querySelector('#posts-list');
    const newUserForm = parentEl.querySelector('#new-user-form');
    const newUserDiv = parentEl.querySelector('#new-user');

    return { statusDiv, usersUl, postsUl, newUserForm, newUserDiv };
};

//Question 5
export const renderStatus = (statusDiv, statusInfoObj) => {
  const h2 = document.createElement('h2')
  h2.id = 'status-heading'
  h2.textContent = `Info on - ${statusInfoObj.url}`

  const pTag = document.createElement('p')
  pTag.id = 'status-code'

  let statusText 
  if(statusInfoObj.ok) { // if the statusInfoObj, which is an object with a URL is 
    // What is .ok? -->
      // .ok is a property of the response, containing a boolean and stating wether the repsonse was successful or not (range of 200-299)
    statusText = 'OK'  // The use of string interpolation in the following below:
   pTag.textContent =  `Status code: ${statusInfoObj.status}, ${statusText}!` // (statusInfoObj.status) is the status code that is being returned
    statusDiv.append(h2, pTag)
  } else {
    statusText= "FAIL"
    pTag.textContent = `Status code: ${statusInfoObj.status}, ${statusText}!`
    statusDiv.append(h2, pTag)
  }
}

// Question 6 //
export const renderUsers = (usersUl, users) => { // usersUI : an unordered list, adding new li's to each user . Users : an array of user objects - bascially the usernames
  usersUl.innerHTML = ''

  users.forEach(user => {
  
  const listedItems = document.createElement('li')
  listedItems.setAttribute("class", 'user-card')

  const button = document.createElement('button')
  button.setAttribute('data-user-id', user.id)

  button.textContent = `Load ${user.username}'s posts`

  listedItems.append(button)

  usersUl.append(listedItems)
  })
};


// Question 7
export const renderPosts = (postsUl, posts) => {
  postsUl.innerHTML = ''

  posts.forEach(post => {

  const listedItems = document.createElement('li')

  const h2 = document.createElement('h2')
  h2.textContent = post.title

  const pTag = document.createElement('p')
  pTag.textContent = post.body

  listedItems.append(h2, pTag);
  postsUl.append(listedItems);
  })
}

// Question 8
export const renderNewUser = (newUserDiv, newUserInfo) => {

newUserDiv.innerHTML = ''

const h2 = document.createElement('h2')
h2.textContent = newUserInfo.username

const pTag = document.createElement('p')
pTag.textContent = newUserInfo.email

newUserDiv.append(h2, pTag)
}