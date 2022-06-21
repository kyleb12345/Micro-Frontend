import faker from 'faker';


const mount = (el) => {

    let products = '';

for (let i =0; i < 5; i++) {
    const name =  faker.commerce.productName();
    products += `<div>${name}</div>`;
}

el.innerHTML = products;

}

//#1 run this file in development in isolation, using index.html
//has a #dev-products, consider...

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
//assuming our container doesn't have an element with this id...
    if (el) {
// we are probably running in isolation then here
        mount(el);
    }
}

//#2 in the container app in development or production #dev-products may not exist
//we do NOT want to try to immediately render the app - up to the container (by exporting mount)
// instead of creating a div with an id and grabbing that, put it in a 'mount' function
//and make the argument element 'el'

export { mount };