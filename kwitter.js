function adduser()
{
    window.location = "kwitter_room.html";
    username = document.getElementById("username_input").value
    localStorage.setItem("username", username)
}