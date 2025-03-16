import {
  Application,
  Graphics,
  Text,
  TextStyle,
  Sprite,
  Assets,
  Container,
  Spritesheet,
  AnimatedSprite,
  TilingSprite,
  BlurFilter,
  NoiseFilter,
} from "pixi.js";
import { initDevtools } from "@pixi/devtools";

(async () => {
  const app = new Application();

  await app.init({
    resizeTo: window,

    backgroundAlpha: 0.8,
  });

  initDevtools({ app });
  app.canvas.style.position = "absolute";

  document.body.appendChild(app.canvas);

  const texture = await Assets.load("/images/background.jpg");

  const bgSprite = new TilingSprite({
    texture,
    width: app.screen.width,
    height: app.screen.height,
  });

  bgSprite.tileScale.set(6, 2.2);

  app.ticker.add(function () {
    bgSprite.tilePosition.x -= 2;
  });

  app.stage.addChild(bgSprite);

  bgSprite.filters = [
    new BlurFilter({ strength: 4 }),
    new NoiseFilter({ noise: 0.2 }),
  ];
})();
