body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  background: #f0f8ff;
  color: #333;
}

header {
  background: #004d99;
  padding: 1rem 2rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header nav a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
  font-weight: 600;
}

header nav a:hover {
  text-decoration: underline;
}

#hero {
  text-align: center;
  padding: 3rem 1rem;
  background: #007acc;
  color: white;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #005fa3;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
}

.btn:hover {
  background: #004080;
}

.fish-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem 2rem;
}

.fish-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgb(0 0 0 / 0.1);
  overflow: hidden;
  transition: transform 0.2s ease;
}

.fish-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgb(0 0 0 / 0.15);
}

.fish-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.fish-card h3 {
  margin: 0.5rem 1rem 0;
}

.fish-card p {
  margin: 0.25rem 1rem;
  font-size: 0.9rem;
  color: #555;
}

.fish-card a {
  display: block;
  margin: 0.5rem 1rem 1rem;
  color: #007acc;
  font-weight: 600;
  text-decoration: none;
}

.fish-card a:hover {
  text-decoration: underline;
}

#search-filter input,
#search-filter select {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 200px;
  max-width: 90%;
}

form input,
form textarea {
  display: block;
  width: 90%;
  max-width: 400px;
  margin: 0.5rem auto;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

form button {
  display: block;
  margin: 1rem auto;
  background: #007acc;
  color: white;
  font-weight: bold;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button:hover {
  background: #005fa3;
}

footer {
  text-align: center;
  padding: 1rem;
  background: #004d99;
  color: white;
  margin-top: 3rem;
}
