/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const instructors = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
]

instructors.forEach(instructor => {
  axios.get(`https://api.github.com/users/${instructor}`)
  .then(res => {
    createCard(res)
  })
  .catch(res => { 
    console.log(res, "Some kinda error occurred")
  })
})

const promise = axios.get(`https://api.github.com/users/Jay-Wood`)
  .then(data => {
    createCard(data)
  })
  .catch(res => { 
    console.log("An error occurred",res)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>*/

const cardsDiv = document.querySelector(".cards")

  
function createCard(inputObject) {
  //create elements and add class list
  const card = document.createElement("div")
  card.classList.add("card")
  const cardImg = document.createElement("img")
  cardImg.classList.add("img")
  const cardInfo = document.createElement("div")
  const cardH3 = document.createElement("h3")
  cardH3.classList.add("name")
  const cardUsername = document.createElement("p")
  cardUsername.classList.add("username")
  const cardLocation = document.createElement("p")
  // cardLocation.classList.add("p")
  const cardProfile = document.createElement("p")
  // cardProfile.classList.add("p")
  const cardProfileA = document.createElement("a")
  // cardProfileA.classList.add = ("p")
  const cardFollowers = document.createElement("p")
  const cardFollowing = document.createElement("p")
  const cardBio = document.createElement("p") 
  
//append children
  cardsDiv.appendChild(card)
  card.appendChild(cardImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(cardH3)
  cardInfo.appendChild(cardUsername)
  cardInfo.appendChild(cardLocation)
  cardInfo.appendChild(cardProfile)
  cardInfo.appendChild(cardProfileA)
  cardInfo.appendChild(cardFollowers)
  cardInfo.appendChild(cardFollowing)
  cardInfo.appendChild(cardBio)

//set text content
  cardH3.textContent = inputObject.data.name
  cardUsername.textContent = inputObject.data.login
  cardLocation.textContent = `Location: ${inputObject.data.location || "None"}`
  cardProfile.textContent = `Profile: ${inputObject.data.html_url}`
  cardBio.textContent = `Bio: ${inputObject.data.bio || "None"}` 
  cardFollowers.textContent = `Followers: ${inputObject.data.followers}`
  cardFollowing.textContent = `Following: ${inputObject.data.following}`
  cardImg.src = inputObject.data.avatar_url

return cardsDiv;
} 

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
