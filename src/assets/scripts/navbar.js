/**
 * Mapping of web urls with link ids
 */
const pagesToLinks = {
  "/band": "band-link",
  "/bio": "bio-link",
  "/media": "media-link",
  // ...
};

/**
 * Function that sets the current active navbar link and listens for future changes
 */
export const initializeNavbar = () => {
  // Get first render active link
  const { pathname } = window.location;
  const linkId = pagesToLinks[pathname.replace(".html", "")];
  const activePageLink = document.getElementById(linkId);

  // Add active class in case there is an active link attached to current page
  if (activePageLink) {
    activePageLink.classList.add("active");
  }
  // Listen for future clicks in the links to toggle the active class
  const allLinks = document.querySelectorAll(".nav-link");
  allLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const currentActive = document.querySelector(".nav-link.active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }
      link.classList.add("active");
    });
  });
};
