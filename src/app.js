import {
  renderStatus,
  setupPageBasics,
  renderUsers,
  renderPosts,
  renderNewUser,
} from './render-functions.js';
import {
  checkResponseStatus,
  getUserPosts,
  createNewUser,
  getUsers
} from './fetch-functions.js';

// Exporting the default function 'app' which takes an element 'appDiv' as a parameter
export default function app(appDiv) {
  // Call setupPageBasics with appDiv and assign the returned object to 'page'
  const pageRender = setupPageBasics(appDiv);

  // Call checkResponseStatus function and handle the promise it returns
  checkResponseStatus()
  // When the promise resolves, call renderStatus with page.statusDiv and the data
  .then((data) => renderStatus(pageRender.statusDiv, data))
  
  // After the status is rendered, call getUsers function
  .then(() => getUsers())
  // When getUsers promise resolves, call renderUsers with page.usersUl and the data
  .then((data) => renderUsers(pageRender.usersUl, data))
  // After users are rendered, set up an event listener on usersUl
  .then(() => {
    // Add a 'click' event listener to the usersUl element
    pageRender.usersUl.addEventListener('click', (event) => {
      // Check if the clicked target is a 'button' element
      if(event.target.matches('button')){
        // If it's a button, get the user ID from the button's data attribute
        getUserPosts(event.target.getAttribute('data-user-id'))
        // Call renderPosts with page.postsUl and the data when promise resolves
        .then((data) => renderPosts(pageRender.postsUl, data));
      }
    });
  });

  // Add a 'submit' event listener to the newUserForm element
  pageRender.newUserForm.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form element from the event
    const form = event.target;
    // Create a FormData object from the form
    const formData = new FormData(form);
    // Convert FormData to an object
    const formObj = Object.fromEntries(formData);

    // Call createNewUser with formObj and handle the promise it returns
    createNewUser(formObj)
    // When the promise resolves, call renderNewUser with page.newUserDiv and the data
    .then((data) => renderNewUser(pageRender.newUserDiv, data));
  });
}
