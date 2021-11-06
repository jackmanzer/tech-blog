//DOM QUERIES
const newPostButton = document.querySelector(".dashboard-new-post-btn");

//EVENT LISTENERS 

newPostButton.addEventListener('click', () => {
    document.location.replace('dashboard/create-new-post');
})
