import { Application } from "pixi.js";

(async () => {
  const app = new Application();

  await app.init({
    // width: window.innerWidth,
    // height: window.innerHeight,
    resizeTo: window,
    //backgroundAlpha: 0.99,
    // backgroundColor: "yellow" // hcanges bg color
    // backgroundColor: 0xffea00, // changes color
    // anialias: true //avoid using this feature unless its completely neccesary, its for pixelated stuff
  });

  // app.render.background.alpha = 0.3

  app.canvas.style.position = "absolute";
  document.body.appendChild(app.canvas);
})();
