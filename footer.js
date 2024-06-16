document.addEventListener("DOMContentLoaded", function() {
  // Initial language setup
  let currentLanguage = 'ENGLISH'; // Default language

  const footerHTML = `
    <div class="container">
      <div class="footer-content row no-gutters justify-content-center"> <!-- Center content -->
        <div class="col-md-2 mb-3 footer-column">
          <nav>
            <ul class="list-unstyled">
              <li>
                <a href="ContactUs.html" class="text-white">CONTACT US</a>
              </li>
              <li>
                <a href="PrivacyLegal.html" class="text-white">PRIVACY / LEGAL</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-2 mb-3 footer-column">
          <nav>
            <ul class="list-unstyled">
              <li>
                <a href="FarCryConnect.html" class="text-white">FAR CRY CONNECT</a>
              </li>
              <li>
                <a href="Support.html" class="text-white">SUPPORT</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-2 mb-3 footer-column">
          <h1 class="logo">e</h1>
        </div>
        <div class="col-md-2 mb-3 footer-column">
          <nav>
            <ul class="list-unstyled">
              <li class="nav-about-us">
                <a href="AboutUs.html" class="text-white">ABOUT US</a>
              </li>
              <li>
                <a href="Careers.html" class="text-white">CAREERS</a>
              </li>
              <li>
                <a href="Locations.html" class="text-white">LOCATIONS</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="col-md-2 mb-3 d-flex align-items-center justify-content-center language-dropdown footer-column">
          <div class="dropdown">
            <button class="btn dropdown-toggle" type="button" id="languageDropdown" aria-haspopup="true" aria-expanded="false">
              ${currentLanguage}
            </button>
            <div class="dropdown-menu" aria-labelledby="languageDropdown">
              <div class="dropdown-item">
                <a class="dropdown-item language english" href="#">English</a>
                <a class="dropdown-item language french" href="#">French</a>
                <a class="dropdown-item language spanish" href="#">Spanish</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById("footer-placeholder").innerHTML = footerHTML;

  // Event listener for language dropdown items
  const languageItems = document.querySelectorAll('.dropdown-item.language');
  languageItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      currentLanguage = event.target.textContent.toUpperCase(); // Update selected language
      document.getElementById('languageDropdown').textContent = currentLanguage; // Update dropdown trigger text
    });
  });
});
