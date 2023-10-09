document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    const pizzaInfo = document.getElementById('pizza-info');
    const localStorageKey = 'lastPizza';

    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const pizzaIdInput = document.getElementById('pizzaId');
        const pizzaId = parseInt(pizzaIdInput.value);

        const pizza = findPizzaById(pizzaId);

        if (pizza) {
            renderPizzaInfo(pizza);
            localStorage.setItem(localStorageKey, JSON.stringify(pizza));
        } else {
            renderError("Pizza no encontrada, verificar si el codigo esta ingresado correctamente");
        }
    });

    function findPizzaById(id) {
        const pizzas = [
            {
                id: 1,
                nombre: "Pizza de Muzzarella",
                precio: 500,
                ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
                imagen: "./img/muzzarella.png",
              },
            
              {
                id: 2,
                nombre: "Pizza de Cebolla",
                precio: 1500,
                ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
                imagen: "./img/cebolla.png",
              },
            
              {
                id: 3,
                nombre: "Pizza 4 Quesos",
                precio: 1380,
                ingredientes: [
                  "Muzzarella",
                  "Tomate",
                  "Queso Azul",
                  "Parmesano",
                  "Roquefort",
                ],
                imagen: "./img/4quesos.png",
              },
            
              {
                id: 4,
                nombre: "Pizza Especial",
                precio: 1000,
                ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
                imagen: "./img/especial.png",
              },
            
              {
                id: 5,
                nombre: "Pizza con Anana",
                precio: 600,
                ingredientes: ["Muzzarella", "Tomate", "Anana"],
                imagen: "./img/anana.png",
              },
        ];

        return pizzas.find(pizza => pizza.id === id);
    }

    // Función para renderizar la información de la pizza
    function renderPizzaInfo(pizza) {
        const pizzaCard = document.createElement('div');
        pizzaCard.className = 'pizza-card';

        const pizzaImage = document.createElement('img');
        pizzaImage.src = pizza.imagen;
        pizzaImage.alt = pizza.nombre;

        const pizzaName = document.createElement('h2');
        pizzaName.textContent = pizza.nombre;

        const pizzaPrice = document.createElement('p');
        pizzaPrice.textContent = `Precio: $${pizza.precio.toFixed(2)}`;

        // Limpia el contenido anterior
        pizzaInfo.innerHTML = '';

        pizzaCard.appendChild(pizzaImage);
        pizzaCard.appendChild(pizzaName);
        pizzaCard.appendChild(pizzaPrice);

        pizzaInfo.appendChild(pizzaCard);
    }

    // Función para renderizar un mensaje de error
    function renderError(message) {
        pizzaInfo.innerHTML = `<h3 class="error">${message}</h3>`;
    }

    // Verificar si hay una pizza en el localStorage y mostrarla al cargar la página
    const lastPizza = JSON.parse(localStorage.getItem(localStorageKey));
    if (lastPizza) {
        renderPizzaInfo(lastPizza);
    }
});
