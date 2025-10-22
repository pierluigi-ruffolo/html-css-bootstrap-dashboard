console.log("ciao mondo");

const nameAuthor = document.querySelector("#author-name");
const authorSurname = document.querySelector("#author-surname");
const publication = document.querySelector("#publication");

nameAuthor.addEventListener("blur", function () {
  if (nameAuthor.value.length === 0 || !isNaN(nameAuthor.value)) {
    nameAuthor.classList.remove("is-valid");
    nameAuthor.classList.add("is-invalid");
  } else {
    nameAuthor.classList.remove("is-invalid");
    nameAuthor.classList.add("is-valid");
  }
});

authorSurname.addEventListener("blur", function () {
  if (authorSurname.value.length === 0 || !isNaN(authorSurname.value)) {
    authorSurname.classList.remove("is-valid");
    authorSurname.classList.add("is-invalid");
  } else {
    authorSurname.classList.remove("is-invalid");
    authorSurname.classList.add("is-valid");
  }
});

publication.addEventListener("blur", function () {
  if (
    isNaN(publication.value) ||
    publication.value < 1500 ||
    publication.value > 2025
  ) {
    publication.classList.remove("is-valid");
    publication.classList.add("is-invalid");
  } else {
    publication.classList.remove("is-invalid");
    publication.classList.add("is-valid");
  }
});
