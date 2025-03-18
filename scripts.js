// Import the necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgHo92-VfKS3Xm7LtnlltRliUFoDMIdS0",
    authDomain: "sumi-box.firebaseapp.com",
    databaseURL: "https://sumi-box-default-rtdb.firebaseio.com",
    projectId: "sumi-box",
    storageBucket: "sumi-box.firebasestorage.app",
    messagingSenderId: "364105414666",
    appId: "1:364105414666:web:709968e2ed4621bf6247f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to handle login
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Sign in user
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User signed in
            alert("Login successful!");
            console.log("User:", userCredential.user);
        })
        .catch((error) => {
            // Handle errors
            alert("Login failed: " + error.message);
            console.error("Error:", error);
        });
});
