const form = document.getElementById("uploadForm");
  const marketplace = document.getElementById("marketplace");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const type = document.getElementById("type").value;
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${image}" alt="">
      <h3>${title}</h3>
      <p>${type} · Desde $${price} COP</p>
      <button>Ver ${type}</button>
    `;

    marketplace.appendChild(card);

    form.reset();
  });
   const btnPublicar = document.getElementById("btnPublicar");
  const uploadSection = document.querySelector(".upload");

  btnPublicar.addEventListener("click", function (e) {
    e.preventDefault();

    if (uploadSection.style.display === "none" || uploadSection.style.display === "") {
      uploadSection.style.display = "block";
      uploadSection.scrollIntoView({ behavior: "smooth" });
    } else {
      uploadSection.style.display = "none";
    }
  });
  const btnLogin = document.getElementById("btnLogin");
  const loginModal = document.getElementById("loginModal");
  const closeLogin = document.getElementById("closeLogin");

  btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    loginModal.style.display = "flex";
  });

  closeLogin.addEventListener("click", function () {
    loginModal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const btnContacto = document.getElementById("btnContacto");
    const contactModal = document.getElementById("contactModal");
    const closeContact = document.getElementById("closeContact");

    if (!btnContacto || !contactModal || !closeContact) {
      console.error("Error: contacto no encontrado en el DOM");
      return;
    }

    btnContacto.addEventListener("click", function (e) {
      e.preventDefault();
      contactModal.style.display = "flex";
    });

    closeContact.addEventListener("click", function () {
      contactModal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target === contactModal) {
        contactModal.style.display = "none";
      }
    });
  });
  const provider = "Proveedor"; // luego será el usuario logueado

card.innerHTML = `
  <img src="${image}" alt="">
  <h3 class="item-title">${title}</h3>
  <p class="item-info">${type} · Desde $${price} COP</p>
  <p class="item-provider">Por ${provider}</p>
  <button>Ver ${type}</button>
`;
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const marketplace = document.getElementById("marketplace");

    function searchItems() {
      const keyword = searchInput.value.toLowerCase();
      const cards = marketplace.querySelectorAll(".card");

      cards.forEach(card => {
        const title = card.querySelector(".item-title")?.innerText.toLowerCase() || "";
        const info = card.querySelector(".item-info")?.innerText.toLowerCase() || "";
        const provider = card.querySelector(".item-provider")?.innerText.toLowerCase() || "";

        if (
          title.includes(keyword) ||
          info.includes(keyword) ||
          provider.includes(keyword)
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    searchBtn.addEventListener("click", searchItems);

    searchInput.addEventListener("keyup", function (e) {
      if (e.key === "Enter") {
        searchItems();
      }
    });
  });