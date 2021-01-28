import whyLambda from './assets/LambdaIntroPagePreview.png';
import hkLanding from './assets/product-preview.png';
import tribute from './assets/TributePagePreview.png';
import survey from './assets/SurveyPagePreview.png';
import todoApp from './assets/todoReactApp.png';

const projectsList = [
  {
    id: 0,
    projectName: 'ToDo Application',
    hrefLink: 'https://my-very-own-todo-app.netlify.app/',
    // imgSrc: '.assets/todoReactApp.png',
    imgSrc: todoApp,
    imgAlt: 'ToDo React App'
  },
  {
    id: 1,
    projectName: 'Why I joined Lambda',
    hrefLink: 'https://nextsteplambda.netlify.app',
    imgSrc: whyLambda,
    // why does this imgSrc not work
    // imgSrc: './assets/LambdaIntroPagePreview.png',
    imgAlt: 'Why I joined Lambda project'
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
  {
    id: 4,
    projectName: 'Pet Survey',
    hrefLink: 'https://codepen.io/plofland/full/XWdjZNP',
    // imgSrc: './assets/SurveyPagePreview.png',
    imgSrc: survey,
    imgAlt: 'Pet survey form project'
  }
];

export default projectsList;
