
function render(variables = {}) {
  console.log("These are the current variables: ", variables);
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  let fullNAme =
    variables.name == null || variables.lastName == null
      ? `<h1>Lucy Boilett</h1>`
      : `<h1>${variables.name} ${variables.lastName}</h1>`;
  let role =
    variables.role == null
      ? `<h2>Web Developer</h2>`
      : `<h2>${variables.role}</h2>`;
  let country = variables.country == null ? "USA" : `${variables.country}`;
  let city = variables.city == null ? "Miami" : `${variables.city}`;
  let position =
    variables.socialMediaPosition.toLowerCase === "position-right"
      ? `"position-right"`
      : `${variables.socialMediaPosition}`;
  let twitter =
    variables.twitter == null
      ? `https://twitter.com/4geeksacademy`
      : `${variables.twitter}`;
  let github =
    variables.github == null
      ? `https://github.com/4geeksacademy`
      : `${variables.github}`;
  let linkedin =
    variables.linkedin == null
      ? `https://linkedin.com/4geeksacademy`
      : `${variables.linkedin}`;
  let instagram =
    variables.instagram == null
      ? `https://instagram.com/4geeksacademy`
      : `${variables.instagram}`;
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          ${fullNAme}
          ${role}
          <h3>${city}, ${country}</h3>
          <ul class=${position}>
            <li><a href="${twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${github}"><i class="fab fa-github"></i></a></li>
            <li><a href="${linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}
window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);
  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
