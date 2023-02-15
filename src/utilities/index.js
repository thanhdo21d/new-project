import Navigo from 'navigo'; // When using ES modules.
const router = new Navigo("/", {linksSelector:"a", hash :true});


const render = (content,tagert) => {
    tagert.innerHTML = content();
}

export { render, router };