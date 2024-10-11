document.getElementById('loginForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
        event.preventDefault(); 
    }
});

const bidButtons = document.querySelectorAll('.bid-btn');
bidButtons.forEach(button => {
    button.addEventListener('click', function() {
        const bid = prompt("Enter your bid:");
        if (bid !== null && bid !== "") {
            alert("You placed a bid of $" + bid);
        } else {
            alert("Bid canceled or invalid.");
        }
    });
});
