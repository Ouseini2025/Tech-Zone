/* =========================================
   TECH ZONE
   PRODUITS / CATALOGUE
========================================= */


/* =========================================
   LISTE DES PRODUITS
========================================= */

const products = [

    {
        name: "HP EliteBook 840 G4",
        category: "pc",
        price: "Prix sur demande",
        description:
            "PC professionnel idéal pour les études, la bureautique et le développement.",
        specs: "Intel Core i5 • 8 Go RAM • SSD • 14 pouces",
        condition: "Occasion",
        availability: "Disponible",
        image: "images/hp-elitebook.jpg",
        badge: "Populaire"
    },


    {
        name: "Lenovo ThinkPad",
        category: "pc",
        price: "Prix sur demande",
        description:
            "Ordinateur professionnel robuste pour la bureautique, les études et le développement.",
        specs: "Intel Core i5 • RAM 8 Go • SSD",
        condition: "Occasion",
        availability: "Disponible",
        image: "images/thinkpad.jpg",
        badge: "Pro"
    },


    {
        name: "PC Gaming",
        category: "gaming",
        price: "Prix sur demande",
        description:
            "Configuration gaming personnalisée selon votre budget et vos besoins.",
        specs: "Configuration personnalisable • GPU dédié",
        condition: "Sur commande",
        availability: "Sur commande",
        image: "images/pc-gaming.jpg",
        badge: "Gaming"
    },


    {
        name: "PlayStation 5",
        category: "gaming",
        price: "Prix sur demande",
        description:
            "Console de salon nouvelle génération pour une expérience gaming immersive.",
        specs: "4K • SSD • Ray Tracing",
        condition: "Neuf",
        availability: "Sur commande",
        image: "images/ps5.jpg",
        badge: "Gaming"
    },


    {
        name: "Xbox Series X",
        category: "gaming",
        price: "Prix sur demande",
        description:
            "Console de salon haute performance pour les joueurs exigeants.",
        specs: "4K • SSD • 1 To",
        condition: "Neuf",
        availability: "Sur commande",
        image: "images/xbox.jpg",
        badge: "Gaming"
    },


    {
        name: "MacBook",
        category: "pc",
        price: "Prix sur demande",
        description:
            "MacBook adapté au travail, aux études, à la création et au développement.",
        specs: "Apple • SSD • Écran Retina",
        condition: "Selon modèle",
        availability: "Sur commande",
        image: "images/macbook.jpg",
        badge: "Apple"
    },


    {
        name: "SSD",
        category: "composants",
        price: "Prix sur demande",
        description:
            "SSD permettant d'améliorer considérablement la vitesse de votre ordinateur.",
        specs: "Plusieurs capacités disponibles",
        condition: "Neuf",
        availability: "Disponible",
        image: "images/ssd.jpg",
        badge: "Performance"
    },


    {
        name: "RAM",
        category: "composants",
        price: "Prix sur demande",
        description:
            "Mémoire RAM pour améliorer les performances et la fluidité de votre ordinateur.",
        specs: "Différentes capacités et générations",
        condition: "Neuf",
        availability: "Disponible",
        image: "images/ram.jpg",
        badge: "Upgrade"
    },


    {
        name: "Disque dur HDD",
        category: "composants",
        price: "Prix sur demande",
        description:
            "Solution de stockage adaptée aux ordinateurs et aux sauvegardes.",
        specs: "Plusieurs capacités disponibles",
        condition: "Neuf / Occasion",
        availability: "Disponible",
        image: "images/hdd.jpg",
        badge: "Stockage"
    },


    {
        name: "Clavier & Souris",
        category: "accessoires",
        price: "Prix sur demande",
        description:
            "Ensemble clavier et souris pour votre espace de travail ou votre setup.",
        specs: "USB • Sans fil selon modèle",
        condition: "Neuf",
        availability: "Disponible",
        image: "images/clavier-souris.jpg",
        badge: "Accessoire"
    },


    {
        name: "Manette",
        category: "accessoires",
        price: "Prix sur demande",
        description:
            "Manette adaptée aux jeux sur PC et console selon le modèle.",
        specs: "USB / Sans fil selon modèle",
        condition: "Neuf",
        availability: "Disponible",
        image: "images/manette.jpg",
        badge: "Accessoire"
    },


    {
        name: "Casque Gaming",
        category: "accessoires",
        price: "Prix sur demande",
        description:
            "Casque gaming pour profiter d'un son immersif pendant vos parties.",
        specs: "Microphone • Audio stéréo",
        condition: "Neuf",
        availability: "Disponible",
        image: "images/casque.jpg",
        badge: "Gaming"
    }

];



/* =========================================
   ELEMENTS HTML
========================================= */

const productsGrid =
    document.getElementById("productsGrid");

const noResult =
    document.getElementById("noResult");

const searchInput =
    document.getElementById("searchInput");

const filterButtons =
    document.querySelectorAll(".filter-btn");



/* =========================================
   VARIABLES
========================================= */

let currentCategory = "all";



/* =========================================
   NOM DES CATEGORIES
========================================= */

function getCategoryName(category) {

    const categories = {

        pc: "PC & Laptop",

        composants: "Composants",

        accessoires: "Accessoires",

        gaming: "Gaming"

    };

    return categories[category] || "Produit";

}



/* =========================================
   AFFICHER LES PRODUITS
========================================= */

function displayProducts(productsToDisplay) {

    productsGrid.innerHTML = "";


    /* Aucun résultat */

    if (productsToDisplay.length === 0) {

        noResult.style.display = "block";

        return;

    }


    noResult.style.display = "none";


    /* Génération des cartes */

    productsToDisplay.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <span class="product-badge">
                    ${product.badge}
                </span>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                    onerror="this.src='images/placeholder.jpg'"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${getCategoryName(product.category)}
                </span>


                <h3>
                    ${product.name}
                </h3>


                <p>
                    ${product.description}
                </p>


                <div class="product-specs">

                    <span>
                        <i class="fa-solid fa-microchip"></i>
                        ${product.specs}
                    </span>

                </div>


                <div class="product-meta">

                    <span class="product-condition">

                        <i class="fa-solid fa-box"></i>

                        ${product.condition}

                    </span>


                    <span
                        class="product-availability ${
                            product.availability === "Disponible"
                                ? "available"
                                : "on-order"
                        }"
                    >

                        <i class="fa-solid fa-circle"></i>

                        ${product.availability}

                    </span>

                </div>


                <div class="product-bottom">

                    <strong>
                        ${product.price}
                    </strong>


                    <a
                        href="https://wa.me/242067537383?text=${encodeURIComponent(
                            "Bonjour Tech Zone, je suis intéressé par le produit : " +
                            product.name +
                            ". Pouvez-vous me donner le prix et la disponibilité ?"
                        )}"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="product-btn"
                    >

                        <i class="fa-brands fa-whatsapp"></i>

                        Demander

                    </a>

                </div>

            </div>

        `;


        productsGrid.appendChild(card);

    });

}



/* =========================================
   FILTRAGE
========================================= */

function filterProducts() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const filteredProducts =
        products.filter(product => {

            /* Catégorie */

            const matchesCategory =
                currentCategory === "all" ||
                product.category === currentCategory;


            /* Recherche */

            const matchesSearch =

                product.name
                    .toLowerCase()
                    .includes(search)

                ||

                product.description
                    .toLowerCase()
                    .includes(search)

                ||

                product.specs
                    .toLowerCase()
                    .includes(search)

                ||

                getCategoryName(product.category)
                    .toLowerCase()
                    .includes(search);


            return matchesCategory && matchesSearch;

        });


    displayProducts(filteredProducts);

}



/* =========================================
   BOUTONS DE FILTRE
========================================= */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        currentCategory =
            button.dataset.category;


        filterProducts();

    });

});



/* =========================================
   RECHERCHE
========================================= */

if (searchInput) {

    searchInput.addEventListener("input", () => {

        filterProducts();

    });

}



/* =========================================
   MENU MOBILE
========================================= */

const burgerButton =
    document.querySelector(".burger-button");

const mobileMenu =
    document.querySelector(".mobile-menu");

const burgerIcon =
    document.querySelector(".burger-button i");



if (burgerButton && mobileMenu) {

    burgerButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");


        const isOpen =
            mobileMenu.classList.contains("open");


        if (burgerIcon) {

            burgerIcon.className =
                isOpen
                    ? "fa-solid fa-xmark"
                    : "fa-solid fa-bars";

        }


        burgerButton.setAttribute(
            "aria-label",
            isOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
        );

    });

}



/* =========================================
   FERMER LE MENU APRÈS UN CLIC
========================================= */

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (mobileMenu) {

            mobileMenu.classList.remove("open");

        }


        if (burgerIcon) {

            burgerIcon.className =
                "fa-solid fa-bars";

        }


        if (burgerButton) {

            burgerButton.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );

        }

    });

});



/* =========================================
   INITIALISATION
========================================= */

displayProducts(products);