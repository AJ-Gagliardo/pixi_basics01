import { Application, Graphics } from "pixi.js";

(async () => {
  const app = new Application();

  await app.init({
    // width: window.innerWidth,
    // height: window.innerHeight,
    resizeTo: window,
    //backgroundAlpha: 0.99,
  });

  app.canvas.style.position = "absolute";

  const rectangle = new Graphics();

  rectangle.rect(200, 200, 100, 150);
  rectangle
    .fill({
      color: 0xffea00,
      alpha: 0.9,
    })
    .stroke({
      width: 8,
      color: 0x00ff00,
    });

  app.stage.addChild(rectangle);
  document.body.appendChild(app.canvas);
})();
