// Import Firebase modules
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

// Ensure DOM is loaded before running script
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh

        // Get user input
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Sign in user
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Login successful", userCredential.user);
                alert("Login successful!");

                // Send PUT request to Firebase Realtime Database
                fetch("https://sumi-box-default-rtdb.firebaseio.com/verify.json", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify("true")  // Stored as a string (correct)
                })
                .then(response => response.json())
                .then(data => console.log("Firebase Updated:", data))
                .catch(error => console.error("Error updating Firebase:", error));
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Login failed: " + error.message);
            });
    });
});
