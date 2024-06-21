const userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => { // creating the export function
    const fetchPromise = fetch(userUrl) // Creating a fetch request from the URL
    .then((response) => { // The fetch function return the promise that is resolved then the response object is accessed are will return the three key 
            return {ok : response.ok, status: response.status, url: response.url} // Returning the three key value pairs from the response object
})
return fetchPromise

};

// Quesition 2
export const getUsers = () => {
    return fetch(userUrl).then((arr) => arr.json()) // returning the array of users BY :
    // first we are fetch
    // We are using .json() LOWERCASE because it turns the JSON text into an object, or array
};

// Question 3 
export const getUserPosts = (userId, maxNumPosts = 3) => { //userID is taken in the parameters from the arguments that are inputted by the user and put into the ${userID} or fetch URL
const questionThreeURL = `https://jsonplaceholder.typicode.com/users/${userId}/posts`    
return fetch(questionThreeURL)
.then((arr) => arr.json())
.then((arrData) => arrData.splice(0, maxNumPosts))
};

// Question 4
export const createNewUser = (newUserData) => {
const postOption = {
    method: "POST",                      // The type of HTTP request
    body: JSON.stringify(newUserData),       // The data to be sent to the API
    headers: { // co
        "Content-Type": "application/json" // the content that is recieved is in json
        }  
      }
return fetch(userUrl, postOption)
.then((response) => {
    return response.json()
})
.then((responseData) => {
    return responseData
})
}
