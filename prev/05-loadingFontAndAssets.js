import {
  Application,
  Graphics,
  Text,
  TextStyle,
  Sprite,
  Assets,
  Container,
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
  // const text = new Text({
  //   text: "Hello Pixi",
  //   style,
  // });
  // app.stage.addChild(text);

  const font = await Assets.load("/fonts/GreatVibes-Regular.ttf");

  const text = new Text({
    text: "Hello Pixi.js !",
    style: {
      fontFamily: font.family,
      fontSize: 72,
      fill: 0xffffff,
    },
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

  // ticker ... sprites and movement?

  const circle = new Graphics();

  app.ticker.add(() => {
    circle
      .circle(
        Math.random() * app.screen.width,
        Math.random() * app.screen.height,
        5
      )
      .fill({
        color: 0xffffff,
      });
    // app.stage.addChild(circle);
  });

  app.stage.addChild(sprite);
  document.body.appendChild(app.canvas);

  const warriorsContainer = new Container();
  app.stage.addChild(warriorsContainer);

  const girlTexture = await Assets.load("/images/girl_warrior.png");
  const girlSprite = Sprite.from(girlTexture);
  girlSprite.scale.set(0.3, 0.3);

  warriorsContainer.addChild(girlSprite);

  const guyTexture = await Assets.load("/images/guy_warrior.png");
  const guySprite = Sprite.from(guyTexture);
  guySprite.scale.set(0.3, 0.3);

  warriorsContainer.addChild(guySprite);

  guySprite.x = 500;
  guySprite.y = 200;

  warriorsContainer.position.set(150, 150);

  const x = girlSprite.getGlobalPosition().x;
  const y = girlSprite.getGlobalPosition().y;

  console.log(`x: ${girlSprite.x}, y: ${girlSprite.y}`); // this will give 0 because it local
  console.log(`global: x: ${x}, y: ${y}`); // this will give global

  const texturePromise = Assets.load("/images/guy_ninja");
  texturePromise.then((resolvedTexture) => {
    const sprite = sprite.from(resolvedTexture);
    sprite.scale.set(0.5, 0.5);
    app.stage.addChild(sprite);
  });
})();
