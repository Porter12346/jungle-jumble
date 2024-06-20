
import { JumbleController } from "./controllers/JumbleController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [JumbleController],
    view: ''

  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])