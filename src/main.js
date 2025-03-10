import { Application, Graphics, Text, TextStyle } from "pixi.js";

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

  app.stage.addChild(rectangle); // adds the shape to the canvas

  const star = new Graphics()
    .star(1000, 250, 12, 80, 2)
    .fill({ color: 0xffffff });

  app.stage.addChild(star);

  const style = new TextStyle({
    fill: 0xffffff,
    fontSize: 72,
    fontFamily: "Montserrat Medium",
  });
  const text = new Text({
    text: "Hello Pixi",
    style,
  });

  app.stage.addChild(text);
  document.body.appendChild(app.canvas);
})();
