
const login = document.getElementById("login");

login.onclick = (e) => {
    e.preventDefault();
    
    const userAdd = document.getElementById("username").value;
    const passAdd = document.getElementById("password").value;
    const getUser = localStorage.getItem("username");
    const getPass = localStorage.getItem("Password");

    if (userAdd === "" || passAdd === "") {
        alert("Input fields cannot be empty");
    } else {
        if (userAdd === getUser && passAdd === getPass) {
            alert(`Successfully logged, dear ${userAdd}`);
        } else {
            alert("Invalid username or password");
        }
    }
}
