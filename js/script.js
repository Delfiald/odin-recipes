document.getElementById('aboutButton').addEventListener('click', function(event) {
    event.preventDefault();
    const aboutBox = document.getElementById('about');
    aboutBox.classList.add('show');

    setTimeout(() => {
      aboutBox.classList.add('scale');
    }, 500);
});

document.getElementById('aboutButton2').addEventListener('click', function(event) {
    event.preventDefault();
    const aboutBox = document.getElementById('about');
    aboutBox.classList.add('show');

    setTimeout(() => {
      aboutBox.classList.add('scale');
    }, 500);
});

document.getElementById('backAboutButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('about').classList.remove('show');
    setTimeout(() => {
      document.getElementById('about').classList.remove('scale');
    }, 500);
});

document.addEventListener('click', function(event) {
    var checkbox = document.getElementById('myCheckbox');
    var searchBtnDiv = document.getElementById('search-btn');

    if (checkbox && searchBtnDiv) {
        var isClickInside = searchBtnDiv.contains(event.target);
        if (!isClickInside) {
            checkbox.checked = false;
        }
    }
});

document.getElementById('hamburgerSearchBtn').addEventListener('click', function(event) {
  event.preventDefault();
  const hamburgerSearch = document.getElementById('hamburgerMenu');
  hamburgerSearch.classList.add('show');
});

document.getElementById('hamburgerSearchBack').addEventListener('click', function(event) {
  event.preventDefault();
  const hamburgerSearch = document.getElementById('hamburgerMenu');
  hamburgerSearch.classList.remove('show');
});