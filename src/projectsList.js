import hkLanding from './assets/product-preview.png';
import todoApp from './assets/todoReactApp.png';
import coMake from './assets/co-make.png';
import LAN from './assets/LAN.jpg';

const projectsList = [
  {
    id: 0,
    projectName: 'Lambda Alumni Association',
    hrefLink: 'https://a.lambdaalumninetwork.dev/welcome',
    imgSrc: LAN,
    imgAlt: 'Lambda Alumni Association project'
  },
  {
    id: 1,
    projectName: 'Co-Make',
    hrefLink: 'https://co-make-tt33.herokuapp.com/',
    imgSrc: coMake,
    imgAlt: 'Co-Make project'
  },
  {
    id: 2,
    projectName: 'ToDo Application',
    hrefLink: 'https://my-very-own-todo-app.netlify.app/',
    imgSrc: todoApp,
    imgAlt: 'ToDo React App'
  },
  {
    id: 3,
    projectName: 'Product Landing Page',
    hrefLink: 'https://hkproductlandingpage.netlify.app/',
    imgSrc: hkLanding,
    imgAlt: 'Product landing page project'
  },
];

export default projectsList;
