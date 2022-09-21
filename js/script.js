const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users");


const getData = async function (numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();

    const userResults = data.results; // array of objects
    displayUsers(userResults);
};

getData(1);

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";

//Next, loop over userResults. For every user, select their country, first name, and 
//avatar URL with a size of medium. Save the results of these 3 properties to three 
//variables called country, name, and imageUrl.
for (const user of userResults) {
    const country= user.location.country;
    const name= user.name.first;
    const imageUrl = user.picture.medium;
    
    const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
        `;
    //Append userDiv to the randomFolks element.
    randomFolks.append(userDiv);
    }   
}; 

selectUserNumber.addEventListener('change', function(e) {
    const numUsers = e.target.value;
    getData(numUsers);
});


