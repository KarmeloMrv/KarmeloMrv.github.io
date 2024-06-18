document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
      <div class="header">
        <div class="header-text">FAR CRY</div>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="index.html" style="text-transform: lowercase">g</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <!-- Dropdown Games -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownGames" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Games
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownGames">
                <div class="dropdown-item">
                  <div class="dropdown-title">Main Games</div>
                  <a class="dropdown-item" href="FarCry1.html">Far Cry 1</a>
                  <a class="dropdown-item" href="FarCry2.html">Far Cry 2</a>
                  <a class="dropdown-item" href="FarCry3.html">Far Cry 3</a>
                  <a class="dropdown-item" href="FarCry4.html">Far Cry 4</a>
                  <a class="dropdown-item" href="FarCry5.html">Far Cry 5</a>
                  <a class="dropdown-item" href="FarCry6.html">Far Cry 6</a>
                </div>
                <div class="dropdown-item">
                  <div class="dropdown-title">Other Games</div>
                  <a class="dropdown-item" href="FarCryBD.html">Far Cry 3: Blood Dragon</a>
                  <a class="dropdown-item" href="FarCryP.html">Far Cry Primal</a>
                  <a class="dropdown-item" href="FarCryND.html">Far Cry New Dawn</a>
                </div>
                <div class="dropdown-item">
                  <div class="dropdown-title">Quiz</div>
                  <a class="dropdown-item" href="Quiz.html">Recommend Me a Game</a>
                </div>
              </div>
            </li>
  
            <!-- Dropdown Maps -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMaps" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Interactive Maps
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMaps">
                <div class="dropdown-item">
                  <div class="dropdown-title">Main Games</div>
                  <a class="dropdown-item" href="Maps_FC1.html">Far Cry 1</a>
                  <a class="dropdown-item" href="Maps_FC2.html">Far Cry 2</a>
                  <a class="dropdown-item" href="Maps_FC3.html">Far Cry 3</a>
                  <a class="dropdown-item" href="Maps_FC4.html">Far Cry 4</a>
                  <a class="dropdown-item" href="Maps_FC5.html">Far Cry 5</a>
                  <a class="dropdown-item" href="Maps_FC6.html">Far Cry 6</a>
                </div>
                <div class="dropdown-item">
                  <div class="dropdown-title">Other Games</div>
                  <a class="dropdown-item" href="Maps_FCBD.html">Far Cry 3: Blood Dragon</a>
                  <a class="dropdown-item" href="Maps_FCP.html">Far Cry Primal</a>
                  <a class="dropdown-item" href="Maps_FCND.html">Far Cry New Dawn</a>
                </div>
              </div>
            </li>
  
            <li class="nav-item">
              <a class="nav-link" href="Shop.html">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="News.html">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Forum.html">Forums</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Gallery.html">Gallery</a>
            </li>
          </ul>
        </div>
      </nav>
      <a href="#top" class="to-top-btn">Top</a>
    `;
  
    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
  
    // Add event listener for toggling the navbar links on click
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
      const navbarLinks = document.querySelector('.navbar-collapse');
      navbarLinks.classList.toggle('show');
    });
  
    // Add hover functionality to dropdowns
    const dropdownGames = document.getElementById("navbarDropdownGames");
    const dropdownMaps = document.getElementById("navbarDropdownMaps");
  
    dropdownGames.addEventListener("mouseenter", function() {
      this.parentElement.classList.add("show");
    });
  
    dropdownGames.addEventListener("mouseleave", function() {
      this.parentElement.classList.remove("show");
    });
  
    dropdownMaps.addEventListener("mouseenter", function() {
      this.parentElement.classList.add("show");
    });
  
    dropdownMaps.addEventListener("mouseleave", function() {
      this.parentElement.classList.remove("show");
    });
  
    // Scroll to top button functionality
    document.querySelector('.to-top-btn').addEventListener('click', function(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  