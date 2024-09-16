// Manejo del encabezado al hacer scroll
window.onscroll = function() {
  const scroll = document.documentElement.scrollTop;
  const header = document.getElementById('header');
  
  if (scroll > 20) {
      header.classList.add('nav_mod');
  } else {
      header.classList.remove('nav_mod');
  }
}

// Función para mostrar/ocultar el menú en dispositivos móviles
document.getElementById("btn_menu").addEventListener("click", function() {
  const menu = document.getElementById("header");
  const body = document.getElementById("container_all");
  const nav = document.getElementById("nav");

  menu.classList.toggle('move_content');
  body.classList.toggle('move_content');
  nav.classList.toggle('move_nav');
});

// Restablecer el estado del menú al cambiar el tamaño de la ventana
window.addEventListener("resize", function() {
  if (window.innerWidth > 760) {
      const menu = document.getElementById("header");
      const body = document.getElementById("container_all");
      const nav = document.getElementById("nav");

      menu.classList.remove('move_content');
      body.classList.remove('move_content');
      nav.classList.remove('move_nav');
  }
});

// Biblioteca
document.addEventListener("DOMContentLoaded", () => {
  const bookTableBody = document.getElementById("bookTableBody");
  const addBookBtn = document.getElementById("addBookBtn");
  const searchInput = document.getElementById("searchInput");
  const filterBtns = document.querySelectorAll(".filter-btn");

  addBookBtn.addEventListener("click", () => {
      const newRow = document.createElement("tr");

      newRow.innerHTML = `
          <td><input type="text" placeholder="Nombre del Autor" class="disabled-input" disabled></td>
          <td><input type="text" placeholder="Nombre del Libro" class="disabled-input" disabled></td>
          <td>
              <select class="disabled-input" disabled>
                  <option value="seleccionar">Seleccionar...</option>
                  <option value="pendiente">Pendiente</option>
                  <option value="leyendo">Leyendo</option>
                  <option value="completo">Completado</option>
                  <option value="abandonado">Abandonado</option>
              </select>
          </td>
          <td>
              <input type="number" min="0" max="10" value="0" class="disabled-input" disabled>
          </td>
          <td>
              <textarea class="disabled-input" placeholder="Escribe aquí tus citas favoritas..." disabled></textarea>
          </td>
          <td class="action-buttons">
              <button class="edit-btn">Editar</button>
              <button class="delete-btn">Eliminar</button>
          </td>
      `;

      bookTableBody.appendChild(newRow);

      const editButton = newRow.querySelector(".edit-btn");
      const deleteButton = newRow.querySelector(".delete-btn");

      editButton.addEventListener("click", () => {
          const inputs = newRow.querySelectorAll("input, select, textarea");

          if (editButton.textContent === "Editar") {
              inputs.forEach(input => {
                  input.disabled = false;
                  input.classList.remove('disabled-input');
              });
              editButton.textContent = "Guardar";
          } else {
              inputs.forEach(input => {
                  input.disabled = true;
                  input.classList.add('disabled-input');
              });
              editButton.textContent = "Editar";
          }
      });

      deleteButton.addEventListener("click", () => {
          newRow.remove();
      });
  });

  // Búsqueda en la tabla
  searchInput.addEventListener("input", () => {
      const filter = searchInput.value.toLowerCase();
      const rows = bookTableBody.querySelectorAll("tr");

      rows.forEach(row => {
          const author = row.cells[0].textContent.toLowerCase();
          const title = row.cells[1].textContent.toLowerCase();
          row.style.display = (author.includes(filter) || title.includes(filter)) ? "" : "none";
      });
  });

  // Filtrar la tabla según el estado
  filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
          const filter = btn.dataset.filter;
          filterBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          const rows = bookTableBody.querySelectorAll("tr");
          rows.forEach(row => {
              const status = row.querySelector("select").value;
              row.style.display = (filter === "all" || status === filter) ? "" : "none";
          });
      });
  });
});
