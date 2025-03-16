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

  const atlasData = {
    frames: {
      talk1: {
        // //w + h width adn size of image (should be the same in all )
        frame: { x: 0, y: 0, w: 200, h: 200 }, // x and y are coordinates to find sprite
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      talk2: {
        frame: { x: 200, y: 0, w: 200, h: 200 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      talk3: {
        frame: { x: 400, y: 0, w: 200, h: 200 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      talk4: {
        frame: { x: 600, y: 0, w: 200, h: 200 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      talk5: {
        frame: { x: 800, y: 0, w: 200, h: 200 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },

      walk1: {
        //w and h shuold be the same in the images from the same animation
        frame: { x: 0, y: 200, w: 200, h: 200 }, // for this I had to move Y , Y stays the same in next ones, x changes
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      walk2: {
        frame: { x: 200, y: 200, w: 200, h: 200 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      walk3: {
        frame: { x: 400, y: 200, w: 200, h: 200 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      walk4: {
        frame: { x: 600, y: 200, w: 200, h: 200 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
    },
    meta: {
      image: "/images/frog.png",
      // size: { w: 1750, h: 700 },
    },
    animations: {
      talk: ["talk1", "talk2", "talk3", "talk4", "talk5"],
      walk: ["walk1", "walk2", "walk3", "walk4"],
    },
  };
  const texture = await Assets.load(atlasData.meta.image);
  const spritesheet = new Spritesheet(texture, atlasData);
  await spritesheet.parse();

  const animatedSprite = new AnimatedSprite(spritesheet.animations.walk);
  app.stage.addChild(animatedSprite);

  animatedSprite.play();
  animatedSprite.animationSpeed = 0.11;
})();
