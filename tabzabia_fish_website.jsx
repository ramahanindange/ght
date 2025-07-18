<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tabzabia Fish Website</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

  <!-- Header -->
  <header>
    <h1>Tabzabia Fish of Tanzania</h1>
    <nav>
      <a href="index.html">Home</a>
      <a href="fish.html">Fish Species</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section id="hero">
    <h2>Explore 200 Unique Fish Species of Tanzania</h2>
    <p>Learn scientific and local Swahili names, habitats, and ecology of our precious aquatic life. Search and filter through 200 documented species.</p>
    <a href="fish.html" class="btn">View All Species</a>
  </section>

  <!-- Search and Filter Section -->
  <section id="search-filter">
    <h2>Search and Filter Fish Species</h2>
    <input type="text" id="search" placeholder="Search species by name...">
    <select id="habitat">
      <option value="">All Habitats</option>
      <option value="lake">Lake</option>
      <option value="river">River</option>
      <option value="ocean">Ocean</option>
    </select>
    <div id="fish-container" class="fish-grid"></div>
  </section>

  <script>
    async function loadFish() {
      const response = await fetch('assets/data/species.json');
      const data = await response.json();
      const container = document.getElementById('fish-container');
      const search = document.getElementById('search');
      const habitat = document.getElementById('habitat');

      function renderFish() {
        const keyword = search.value.toLowerCase();
        const filter = habitat.value;
        container.innerHTML = '';
        data.filter(fish => 
          (fish.local.toLowerCase().includes(keyword) || fish.scientific.toLowerCase().includes(keyword)) &&
          (filter === '' || fish.habitat === filter)
        ).forEach(fish => {
          const card = document.createElement('div');
          card.className = 'fish-card';
          card.innerHTML = `
            <img src="${fish.image}" alt="${fish.local}">
            <h3>${fish.local}</h3>
            <p><i>${fish.scientific}</i></p>
            <p>Habitat: ${fish.habitat}</p>
            <a href="https://www.fishbase.se/summary/${fish.scientific.replace(/ /g, '-').toLowerCase()}.html" target="_blank">View on FishBase</a>
          `;
          container.appendChild(card);
        });
      }

      search.addEventListener('input', renderFish);
      habitat.addEventListener('change', renderFish);
      renderFish();
    }

    loadFish();
  </script>

  <!-- About Section -->
  <section id="about">
    <h2>About Tabzabia</h2>
    <p>Tabzabia is a digital platform showcasing the diversity of 200 fish species from Tanzanian waters, promoting conservation and traditional knowledge.</p>
  </section>

  <!-- Contact Section -->
  <section id="contact">
    <h2>Contact Us</h2>
    <p>Send your questions or report fish sightings to help improve Tanzanian aquatic life knowledge.</p>
    <form>
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 Tabzabia | All rights reserved.</p>
  </footer>

</body>
</html>
