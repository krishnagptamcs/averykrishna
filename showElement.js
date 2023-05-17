let a=1;

function show_hide() {
  if (a === 1) {
    document.getElementById("contactform").style.display = "block";

    return (a = 0);
  } else {
    document.getElementById("contactform").style.display = "none";

    return (a = 1);
  }
}

// const contact = document.querySelector("#contactform");

// document.querySelector("#requestbtn").addEventListener("click", () => {
//   contact.scrollIntoView({ behavior: "smooth" });
// });
