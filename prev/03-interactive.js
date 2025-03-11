import {
  Application,
  Graphics,
  Text,
  TextStyle,
  Sprite,
  Assets,
} from "pixi.js";
import { initDevtools } from "@pixi/devtools";

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
  initDevtools({ app });
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

  //interactive

  rectangle.eventMode = "static";

  rectangle.cursor = "pointer";
  rectangle.on("mousedown", moveRect);

  function moveRect() {
    rectangle.x -= 5;
    rectangle.y += 5;
  }

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

  // sprites Intro

  const texture = await Assets.load("/images/logo2.svg");
  const sprite = new Sprite(texture);

  // sprite.width = 200;
  // sprite.height = 200;

  // sprite.scale.x = 0.5;
  // sprite.scale.y = 2;

  sprite.scale.set(0.5, 1);

  // text.x = 1000;
  // text.y = 100;

  // text.position.x = 1000;
  // text.position.y = 100;

  text.position.set(1000, 100);

  //sprite.skew.x = Math.PI/4;
  // sprite.skew.set(Math.PI / 4, 0); //skew (diagonal)

  sprite.rotation = Math.PI / 4;

  // sprite.pivot.x = 100; //fixed example
  // sprite.pivot.y = 200;

  // sprite.anchor.x = 0.5; //middle of the sprite
  // sprite.anchor.y = 0.5;

  sprite.anchor.set(0.5, 0.5);

  app.stage.addChild(sprite);
  document.body.appendChild(app.canvas);
})();
