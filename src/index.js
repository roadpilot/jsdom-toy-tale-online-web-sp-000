let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  const fetchUrl = 'http://localhost:3000/toys'
  fetch(fetchUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
      // console.log(json)
      toyCard(json)
      // for (const key in json.message) {
      //     // console.log(key);
      //     showBreeds(key)
  });

  function toyCard(json){
    // <div class="card">
    // <h2>Woody</h2>
    // <img src=toy_image_url class="toy-avatar" />
    // <p>4 Likes </p>
    // <button class="like-btn">Like <3</button>
    // </div>
    b = document.getElementById('toy-collection')
    for (const key in json) {
        // console.log(json[key].image);
      a = document.createElement('div')
      a.class = "card"
      h2 = document.createElement('h2')
      h2.textContent = json[key].name
      p = document.createElement('p')
      p.textContent = `${json[key].likes} likes`
      btn = document.createElement('button')
      btn.class = "like-btn"
      btn.textContent = "Like <3"
      c = document.createElement('img')
      c.height = 100
      c.width = 100
      c.src = json[key].image
      b.appendChild(a)
      a.appendChild(h2)
      a.appendChild(p)
      a.appendChild(c)
      a.appendChild(btn)
    }
  }

});
