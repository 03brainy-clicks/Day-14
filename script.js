// selectors
const image = document.getElementById("image");
const names = document.getElementById("name");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const mail = document.getElementById("email");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
const eventBtn = document.getElementById("btn");
// selectors

// value adder
async function value() {
  let response = await axios.get("https://randomuser.me/api/");
  let data = response.data;
  //   image
  let img = document.createElement("img");
  img.src = data.results[0].picture.large;
  image.append(img);
  //   name
  names.innerText = `${data.results[0].name.title}.  ${data.results[0].name.first} ${data.results[0].name.last}`;
  //   age
  age.innerText = data.results[0].dob.age;
  // gender
  gender.innerText = data.results[0].gender === "male" ? "Male" : "Female";
  //   street
  street.innerText = data.results[0].location.street.name;
  //   city
  city.innerText = data.results[0].location.city;
  //   state
  state.innerText = data.results[0].location.state;
  //   country
  country.innerText = data.results[0].location.country;
  //  mail
  mail.innerText = data.results[0].email;
}
value();

// value adder

// event listeners

eventBtn.addEventListener("click", () => {
  image.innerHTML = "";
  value();
});
// event listeners
