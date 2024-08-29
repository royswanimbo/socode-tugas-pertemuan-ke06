let username;

const mySubmit = document.getElementById("mySubmit");
mySubmit.onclick = function() {
    username = document.getElementById("mytext").onvolumechange;
    document.getElementById("myH1").textContent = `Hello ${username}`;
};