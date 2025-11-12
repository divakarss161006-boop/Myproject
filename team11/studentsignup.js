// studentsignup.js
import { auth, db } from "./firebase/config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

window.signup = async function () {
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const dept = document.getElementById("dept").value.trim();
  const year = document.getElementById("year").value.trim();
  const hostel = document.getElementById("hostel").value.trim();
  const email = document.getElementById("email").value.toLowerCase().trim();
  const password = document.getElementById("password").value.trim();
  const msg = document.getElementById("msg");

  msg.style.color = "red";

  if (!name || !roll || !dept || !year || !hostel || !email || !password) {
    msg.textContent = "Please fill all fields.";
    return;
  }

  try {
    // Create Authentication Account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store Extra Student Data in Firestore
    await setDoc(doc(db, "students", user.uid), {
      name,
      roll,
      dept,
      year,
      hostel,
      email,
      role: "student"
    });

    msg.style.color = "green";
    msg.textContent = "Account created successfully! Redirecting...";

    setTimeout(() => {
      window.location.href = "user.html?role=student";
    }, 1500);

  } catch (error) {
    msg.textContent = error.message;
  }
}
