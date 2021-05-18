import hkLanding from './assets/product-preview.png';
import tribute from './assets/TributePagePreview.png';
import todoApp from './assets/todoReactApp.png';
import coMake from './assets/co-make.png';

const projectsList = [
  {
    id: 0,
    projectName: 'Co-Make',
    hrefLink: 'https://co-make-tt33.herokuapp.com/',
    imgSrc: coMake,
    imgAlt: 'Co-Make project'
  },
  {
    id: 1,
    projectName: 'ToDo Application',
    hrefLink: 'https://my-very-own-todo-app.netlify.app/',
    // imgSrc: '.assets/todoReactApp.png',
    imgSrc: todoApp,
    imgAlt: 'ToDo React App'
  },
  {
    id: 2,
    projectName: 'Product Landing Page',
    hrefLink: 'https://hkproductlandingpage.netlify.app/',
    // imgSrc: './assets/product-preview.png',
    imgSrc: hkLanding,
    imgAlt: 'Product landing page project'
  },
  {
    id: 3,
    projectName: 'Tribute Page',
    hrefLink: 'https://codepen.io/plofland/full/VwaYVEv',
    // imgSrc: './assets/TributePagePreview.png',
    imgSrc: tribute,
    imgAlt: 'Tribute page to MC Escher project'
  },
];

export default projectsList;
