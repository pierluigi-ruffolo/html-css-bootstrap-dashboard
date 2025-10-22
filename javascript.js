console.log("ciao mondo");

const nameAuthor = document.querySelector("#author-name");

nameAuthor.addEventListener("blur", function () {
  if (nameAuthor.value.length === 0 || !isNaN(nameAuthor.value)) {
    nameAuthor.classList.remove("is-valid");
    nameAuthor.classList.add("is-invalid");
  } else {
    nameAuthor.classList.remove("is-invalid");
    nameAuthor.classList.add("is-valid");
  }
});

const authorSurname = document.querySelector("#author-surname");

authorSurname.addEventListener("blur", function () {
  if (authorSurname.value.length === 0 || !isNaN(authorSurname.value)) {
    authorSurname.classList.remove("is-valid");
    authorSurname.classList.add("is-invalid");
  } else {
    authorSurname.classList.remove("is-invalid");
    authorSurname.classList.add("is-valid");
  }
});
