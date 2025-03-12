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

    backgroundAlpha: 0.8,
    // backgroundColor: "yellow" // hcanges bg color
    // backgroundColor: 0xffea00, // changes color
    // anialias: true //avoid using this feature unless its completely neccesary, its for pixelated stuff
  });
  document.body.appendChild(app.canvas);

  // app.render.background.alpha = 0.3
  initDevtools({ app });
  app.canvas.style.position = "absolute";

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

  // ##one way of loading assets ### but the next one is better , remember  need manifest.json
  // Assets.addBundle("warriors", {
  //   girl_warrior: "/images/girl_warrior.png",
  //   guy_warrior: "/images/guy_warrior",
  // });

  // Assets.addBundle("ninjas", {
  //   guy_ninja: "/images/guy_ninja.png",
  // });
  // const ninjaAssets = await Assets.loadBundle("ninjas");
  // const sprite = Sprite.from(ninjaAssets.guy_ninja);

  await Assets.init({ manifest: "/manifest.json" });

  const warriorAssets = await Assets.loadBundle("warriors");
  console.log("Loaded warriorAssets:", warriorAssets);
  const sprite1 = Sprite.from(warriorAssets.guy_warrior);

  sprite1.scale.set(0.5, 0.5);
  app.stage.addChild(sprite1);

  // const warriorAssets = await Assets.loadBundle("warriors");
  // const sprite1 = Sprite.from(warriorAssets.guy_warrior);

  // const ninjaAssets = await Assets.loadBundle("ninjas");
  // const sprite2 = Sprite.from(ninjaAssets.guy_ninja);

  // sprite1.scale.set(0.5, 0.5);
  // sprite2.scale.set(0.5, 0.5);
  // app.stage.addChild(sprite1);
  // app.stage.addChild(sprite2);
})();
