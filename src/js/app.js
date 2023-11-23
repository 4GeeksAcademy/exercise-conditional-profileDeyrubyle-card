import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name == null ? "Name" : variables.name} ${
    variables.lastName == null ? "Lastname" : variables.lastname
  }</h1>
          <h2>${variables.role == null ? "Role" : variables.role}</h2>
          <h3>${variables.city == null ? "City" : variables.city} ${
    variables.country == null ? "Country" : variables.country
  }</h3>
          <ul class=${variables.socialMediaPosition}>
            <li><a href="https://twitter.com/${
              variables.twitter == null ? "Twitter" : variables.twitter
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github == null ? "github" : variables.github
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin == null ? "linkedin" : variables.linkedin
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              variables.instagram == null ? "instagram" : variables.instagram
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://scontent.fccp4-1.fna.fbcdn.net/v/t39.30808-6/346305816_644313957515074_3832255550199159931_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEGtr0M3Ee3HTr6KuOVyTtQI22D0fOhkTwjbYPR86GRPM5dGX63KeP4juQajQtgH_v8pq44_Tygdb3vrYEJqY_2&_nc_ohc=2slU7f0DCIUAX_-_VXH&_nc_ht=scontent.fccp4-1.fna&oh=00_AfBgQ9eGqTTcpuvcoxVsE_U9C4_14OffG60l5Xj-_bdu5g&oe=65638294",
    // this is the url for the profile avatar
    avatarURL:
      "https://scontent.fccp4-1.fna.fbcdn.net/v/t39.30808-6/392946491_6701654049956063_9204560858615509947_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeECRnucj2siFg0idaPgBkHXr-PZmDMkJmKv49mYMyQmYo_IriXlrAGv-6FqcSXNy91HfPybwFPsjpId1xbiV4vS&_nc_ohc=-rVkTVmGF-4AX_E39Cr&_nc_ht=scontent.fccp4-1.fna&oh=00_AfBSGiaGfPNlsaVsFFtL0HAJohPUGgan0dm0nQ5bAZQNcg&oe=656385A4",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
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
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
