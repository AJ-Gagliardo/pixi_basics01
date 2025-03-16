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
    resizeTo: window,

    backgroundAlpha: 0.8,
  });

  initDevtools({ app });
  app.canvas.style.position = "absolute";

  document.body.appendChild(app.canvas);

  await Assets.init({ manifest: "/manifest.json" });

  const warriorAssets = await Assets.loadBundle("warriors");

  const sprite = await Sprite.from(warriorAssets.guy_warrior);

  sprite.scale.set(0.1, 0.1);
  app.stage.addChild(sprite);
})();
