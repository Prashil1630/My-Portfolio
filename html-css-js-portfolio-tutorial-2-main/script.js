// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU81y2TtibAYUlWKTw98Acj-DS5WmYqV4",
  authDomain: "portfolio-33adc.firebaseapp.com",
  projectId: "portfolio-33adc",
  storageBucket: "portfolio-33adc.appspot.com",
  messagingSenderId: "250889966831",
  appId: "1:250889966831:web:062ae138604d5f5dc8771a",
  measurementId: "G-9K93E51304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Contact Form Submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      try {
        await addDoc(collection(db, "messages"), {
          name,
          email,
          message,
          timestamp: new Date()
        });

        alert("✅ Message sent successfully!");
        form.reset();
      } catch (err) {
        console.error("❌ Error writing to Firestore:", err);
        alert("Error sending message. Please try again.");
      }
    });
  }
});
