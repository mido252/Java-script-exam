// const cardContainer = document.getElementById("card-container");
const spinnerCover = document.getElementById("spinner-cover");
const burgerBox = document.getElementById("burger");
const navBar = document.getElementById("navBar");
const container = document.getElementById("card-container");
const search = document.getElementById("search");
const searchByLetter = document.getElementById("searchByLetter");
const categoris = document.getElementById("categoris");
const area = document.getElementById("area");
const Ingredients = document.getElementById("Ingredients");
const contact = document.getElementById("contact");
const card = document.getElementById("card-info");
const cardcontainer = document.getElementById("card");
const base_url = "https://www.themealdb.com/api/json/v1/1/categories.php";
const mainUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s";

//!_____________________________________ Events
search.addEventListener("click", () => {
  displaySearch();
  const SearchByName = document.getElementById("searchByName");

  SearchByName.addEventListener("input", (e) => {
    matchSearch(e.target.value);
  });
});

burgerBox.addEventListener("click", () => {
  // console.log("hi");
  document.querySelector(".nav-bar").classList.toggle("widthUp");

  $("#navBar ul").slideToggle(500).slideDown(200);
});
contact.addEventListener("click", () => {
  showContact();
});
categoris.addEventListener("click", () => {
  getApiData();
});
area.addEventListener("click", () => {
  getAreaName();
});
Ingredients.addEventListener("click", () => {
  getIngredients();
});
//!_____________________________________ End Events

//!---------------------------------- Main Page
getMainData();
async function getMainData() {
  try {
    showSpinner();
    const response = await fetch(mainUrl);
    if (!response.ok) {
      throw new Error("Response Wrong");
    }
    const data = await response.json();
    const newData = data.meals;
    // console.log(newData);
    displayMain(newData);
  } catch (err) {
    console.error(err);
  } finally {
    showSpinner();
  }
}

function displayMain(data) {
  let box = "";
  data.forEach((element) => {
    box += `<div class="col rounded-2">
        <div class="col-content position-relative rounded-2" id="card-info " onclick="getmeal(${element.idMeal})">
          <div class="img-box rounded-3">
            <img src="${element.strMealThumb}" class="rounded-2" alt="" />
          </div>
          <div class="layer position-absolute rounded-2">
            <h2 class="text-white">${element.strMeal}</h2>
          </div>
        </div>
      </div>`;
  });

  container.innerHTML = box;
}
async function getmeal(id) {
  try {
    showSpinner();
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    if (!response.ok) {
      throw new Error("Response Wrong");
    }
    const data = await response.json();

    displaymeal(data.meals[0]);
  } catch (err) {
    console.error(err);
  } finally {
    showSpinner();
  }
}
function displaymeal(newdata) {
  let box = `<div class="meal-detilas container row g-3 my-3 text-white">
  <div class="img-container col-md-3 col-lg-4 text-center">
    <img src="${newdata.strMealThumb}" alt="Meal image" class="w-100 rounded-2" />
    <h2>${newdata.strMeal}</h2>
  </div>
  <div class="meal-info col-md-9 col-lg-8">
    <h2>Instructions</h2>
    <p class="description">
     ${newdata.strInstructions}
    </p>
    <ul>
      <li>Area : ${newdata.strArea}</li>
      <li>Category : ${newdata.strCategory}</li>
      <li>
        Recipes:
        <div class="recipes-tag d-flex flex-wrap gap-2 justify-content-center mt-2">

          <span class="p-2 rounded-2"> ${newdata.strMeasure1} ${newdata.strIngredient1}</span>
          <span class="p-2 rounded-2"> ${newdata.strMeasure2} ${newdata.strIngredient2}</span>
          <span class="p-2 rounded-2"> ${newdata.strMeasure3} ${newdata.strIngredient3}</span>
          <span class="p-2 rounded-2">${newdata.strMeasure4} ${newdata.strIngredient4}</span>
          <span class="p-2 rounded-2">${newdata.strMeasure5} ${newdata.strIngredient5}</span>
          <span class="p-2 rounded-2">${newdata.strMeasure6} ${newdata.strIngredient6}</span>
          
        </div>
      </li>
      <li>Tags : <span class="rounded-2 text-danger"> Pudding </span></li>
    </ul>
    <div class="links mt-4">
    ${newdata.strSource ? `<a href="${newdata.strSource}" class="btn btn-success">Source</a>` : ""}
    <a href="${newdata.strYoutube}" class="btn btn-danger">Youtube</a>
    </div>
  </div>
</div>`;
  cardcontainer.innerHTML = box;
  container.innerHTML = "";
}
//!--------------------------------------- End Main Page

//!--------------------------------------- get section data
async function getSectionData(api) {
  try {
    showSpinner();
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Response Wrong");
    }
    const data = await response.json();

    displayMain(data.meals);
  } catch (err) {
    console.error(err);
  } finally {
    showSpinner();
  }
}

//!--------------------------------------- End get sectino data

//!--------------------------------------- Categoris
async function getApiData() {
  try {
    showSpinner();
    const response = await fetch(base_url);
    if (!response.ok) {
      throw new Error("Response Wrong");
    }
    const data = await response.json();
    const newData = data.categories;
    displayData(newData);
  } catch (err) {
    console.error(err);
  } finally {
    showSpinner();
  }
}
displayData();
function displayData(data) {
  document.querySelector(".container #search").innerHTML = "";
  let box = "";
  data.forEach((element) => {
    box += `<div class="col" onclick="getSectionData('https://www.themealdb.com/api/json/v1/1/filter.php?c=${element.strCategory}')">
        <div class="col-content position-relative rounded-3">
          <div class="img-box">
            <img src="${element.strCategoryThumb}" alt="" />
          </div>
          <div class="layer position-absolute">
            <h2>${element.strCategory}</h2>
          </div>
        </div>
      </div>`;
  });

  container.innerHTML = box;
}
//!--------------------------------------- End Categoris

//!--------------------------------------- Area Page
async function getAreaName() {
  try {
    showSpinner();
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    if (!response.ok) {
      throw new Error("Response Wrong");
    }
    const data = await response.json();
    const newData = data.meals;
    console.log(newData);
    displayArea(newData);
  } catch (err) {
    console.error(err);
  } finally {
    showSpinner();
  }
}

function showSpinner() {
  spinnerCover.classList.toggle("d-none");
}

function displayArea(data) {
  document.querySelector(".container #search").innerHTML = "";

  let box = "";
  data.forEach((element) => {
    box += `    <div class="area" onclick="getSectionData('https://www.themealdb.com/api/json/v1/1/filter.php?a=${element.strArea}')">
    <span>
    <i class="fa-solid fa-earth-europe"></i>
    </span>
    <p>${element.strArea}</p>
  </div>`;
  });

  container.innerHTML = box;
}
//!--------------------------------------- End Area Page

//!--------------------------------------- Contact Page

function showContact() {
  document.querySelector(".container #search").innerHTML = "";
  container.innerHTML = `    <div class="inputs-box">
  <input type="text" name="UserName" id="UserName" class="form-control" placeholder=" Enter your Name " />
  <input type="email" name="UserEmail" id="UserEmail" class="form-control" placeholder=" Enter your Email" />
  <input type="number" name="UserPhone" id="UserPhone" class="form-control" placeholder=" Enter your Phone" />
  <input type="number" name="UserAge" id="UserAge" class="form-control" placeholder=" Enter Your Age" />
  <input type="password" name="UserPassword" id="UserPassword" class="form-control " placeholder=" Enter your Password " />
  <input type="password" id="confirmPass" class="form-control" placeholder=" Confirm your Password" />
  <button class="btn btn-outline-danger disabled" id="btn-submit">Submit</button>
  </div>`;

  //!-------------------------------Validation

  let user = document.getElementById("UserName");
  let email = document.getElementById("UserEmail");
  let number = document.getElementById("UserPhone");
  let confirmPass = document.getElementById("confirmPass");
  let btn = document.getElementById("btn-submit");
  let age = document.getElementById("UserAge");
  let pass = document.getElementById("UserPassword");

  let validation = {
    // name: false,
    user: false,
    pass: false,
    confirmPass: false,
    age: false,
    number: false,
    email: false,
    validationAll: function () {
      return this.email && this.user && this.pass && this.confirmPass && this.number && this.age;
    },
  };
  pass.addEventListener("input", () => {
    let regexPassword = /^[A-z0-9]{8,20}$/;
    if (regexPassword.test(pass.value)) {
      pass.classList.add("is-valid");
      pass.classList.remove("is-invalid");
      validation.pass = true;
    } else {
      pass.classList.add("is-invalid");
      pass.classList.remove("is-valid");
      validation.pass = false;
    }
    if (pass.value != confirmPass.value) {
      confirmPass.classList.add("is-invalid");
      confirmPass.classList.remove("is-valid");
      validation.confirmPass = true;
    } else {
      confirmPass.classList.remove("is-invalid");
      confirmPass.classList.add("is-valid");
      validation.confirmPass = false;
    }
    if (validation.validationAll()) {
      btn.classList.remove("disabled");
      btn.classList.add("btn-outline-success");
      btn.classList.remove("btn-outline-danger");
    } else {
      btn.classList.add("disabled");
      btn.classList.remove("btn-outline-success");
    }
  });

  confirmPass.addEventListener("input", () => {
    if (pass.value == confirmPass.value) {
      confirmPass.classList.add("is-valid");
      confirmPass.classList.remove("is-invalid");
      validation.confirmPass = true;
    } else {
      confirmPass.classList.add("is-invalid");
      confirmPass.classList.remove("is-valid");
      validation.confirmPass = false;
    }

    if (validation.validationAll()) {
      btn.classList.remove("disabled");
      btn.classList.add("btn-outline-success");
      btn.classList.remove("btn-outline-danger");
    } else {
      btn.classList.add("disabled");
      btn.classList.remove("btn-outline-success");
    }
    console.log(validation);
  });
  email.addEventListener("input", () => {
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regexEmail.test(email.value)) {
      email.classList.add("is-valid");
      email.classList.remove("is-invalid");
      validation.email = true;
    } else {
      email.classList.add("is-invalid");
      email.classList.remove("is-valid");
      validation.email = false;
    }
    if (validation.validationAll()) {
      btn.classList.remove("disabled");
      btn.classList.add("btn-outline-success");
      btn.classList.remove("btn-outline-danger");
    } else {
      btn.classList.add("disabled");
      btn.classList.remove("btn-outline-success");
    }
  });
  number.addEventListener("input", () => {
    let regexNumber = /^[0-9]{9,20}$/;
    if (regexNumber.test(number.value)) {
      number.classList.add("is-valid");
      number.classList.remove("is-invalid");
      validation.number = true;
    } else {
      number.classList.add("is-invalid");
      number.classList.remove("is-valid");
      validation.number = false;
    }
    if (validation.validationAll()) {
      btn.classList.remove("disabled");
      btn.classList.add("btn-outline-success");
      btn.classList.remove("btn-outline-danger");
    } else {
      btn.classList.add("disabled");
      btn.classList.remove("btn-outline-success");
    }
  });
  user.addEventListener("input", () => {
    let regexUser = /^[A-z]{9,40}$/;
    if (regexUser.test(user.value)) {
      user.classList.add("is-valid");
      user.classList.remove("is-invalid");
      validation.user = true;
    } else {
      user.classList.add("is-invalid");
      user.classList.remove("is-valid");
      validation.user = false;
    }
    if (validation.validationAll()) {
      btn.classList.remove("disabled");
      btn.classList.add("btn-outline-success");
      btn.classList.remove("btn-outline-danger");
    } else {
      btn.classList.add("disabled");
      btn.classList.remove("btn-outline-success");
    }
  });
  age.addEventListener("input", () => {
    let regexAge = age.value;
    if (regexAge >= 16 && regexAge <= 70) {
      age.classList.add("is-valid");
      age.classList.remove("is-invalid");
      validation.age = true;
    } else {
      age.classList.add("is-invalid");
      age.classList.remove("is-valid");
      validation.age = false;
    }
    if (validation.validationAll()) {
      btn.classList.remove("disabled");
      btn.classList.add("btn-outline-success");
      btn.classList.remove("btn-outline-danger");
    } else {
      btn.classList.add("disabled");
      btn.classList.remove("btn-outline-success");
    }
  });
}

//!--------------------------Validation

//!--------------------------------------- End Contact Page

//!______________________________________________ Validation  Varables

//!------------------------------------------- Search

function displaySearch() {
  document.querySelector(".container #search").innerHTML = ` <div class="search-box container" id="search-box">
  <input type="search" name="search" class="form-control" id="searchByName" placeholder="Search By Name" />
  <input type="search" name="search" class="form-control" id="searchByLetter" placeholder="Search By First Letter" maxlength="1"/>
</div>`;
  container.innerHTML = "";
}

//!----------------------------------------- End Search

//!----------------------------------------- Ingredients
// Ingredients.addEventListener("click", () => {
//   document.querySelector(".container #search").innerHTML = "";
// });

async function getIngredients() {
  try {
    showSpinner();
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    if (!response.ok) {
      throw new Error("Response Wrong");
    }
    const data = await response.json();
    // console.log(data);

    const newData = data.meals;
    // console.log(newData);
    displayIngredients(newData);
  } catch (err) {
    console.error(err);
  } finally {
    showSpinner();
  }
}

function displayIngredients(data) {
  document.querySelector(".container #search").innerHTML = "";

  let box = "";
  data.slice(0, 20).forEach((element) => {
    box += `    <div class="fav-meal col d-flex justify-content-center" onclick="getSectionData('https://www.themealdb.com/api/json/v1/1/filter.php?i=${
      element.strIngredient
    }')">
    <div class="min-box text-center">
      <i class="fa-solid fa-utensils"></i>
      <h3>${element.strIngredient}</h3>
      <p>${element.strDescription.slice(0, 100)}</p>
    </div>
  </div>`;
  });

  container.innerHTML = box;
}
//!----------------------------------------- End Ingredients

async function matchSearch(value) {
  try {
    showSpinner();
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    if (!response.ok) {
      throw new Error("Response Wrong");
    }
    const data = await response.json();
    const newData = data.meals;
    displayMain(newData);
  } catch (err) {
    console.error(err);
  } finally {
    showSpinner();
  }
}

// async function searchByFirstLetter(value) {
//   try {
//     showSpinner();
//     const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a${value}`);
//     if (!response.ok) {
//       throw new Error("Response Wrong");
//     }
//     const data = await response.json();
//     const newData = data.meals;
//     displayMain(newData);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     showSpinner();
//   }
// }
// searchByLetter.addEventListener("click", () => {
//   displaySearch();
//   const SearchByName = document.getElementById("searchByLetter");
//   SearchByName.addEventListener("input", (e) => {
//     searchByFirstLetter(e.target.value);
//   });
// });
