export const pathName = (page) =>{
    //Lógica para establecer el pathname en que nos encontramos
    let pageTitle, titleLink;

    if (page === "/products") {
        pageTitle = "Productos";
        titleLink =page;
    } else if (page.includes("/stores")) {
        pageTitle = "Tiendas";
        titleLink =page;
    } else if (page === "/products/new") {
        pageTitle = "Productos";
        titleLink ="/products";
    } else if (page.includes("/products/")) {
        pageTitle = "Productos";
        titleLink ="/products";
    }else{
        pageTitle = "¡Hola Olivia!";
        titleLink = "/home";
    }
    return [pageTitle, titleLink];

}
