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
        frame: {
          x: 0,
          y: 0,
          w: 350,
          h: 350,
        },
        //coordinations to get the sprice
        sourceSize: { w: 350, h: 350 }, //the actual sprite, coordinate on the sprite sheet

        spritesSourceSize: { x: 0, y: 0, w: 350, h: 350 }, //space arund the sprite
        // this can be done better with an application instead of manually
        // an app can help me with the json to be more specific
      },
      talk2: {
        frame: { x: 350, y: 0, w: 350, h: 350 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      talk3: {
        frame: { x: 700, y: 0, w: 350, h: 350 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      talk4: {
        frame: { x: 1050, y: 0, w: 350, h: 350 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      talk5: {
        frame: { x: 1400, y: 0, w: 350, h: 350 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },

      walk1: {
        frame: { x: 0, y: 350, w: 350, h: 350 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      walk2: {
        frame: { x: 350, y: 350, w: 350, h: 350 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      walk3: {
        frame: { x: 700, y: 350, w: 350, h: 350 },
        sourceSize: { w: 350, h: 350 },
        spriteSourceSize: { x: 0, y: 0, w: 350, h: 350 },
      },
      walk4: {
        frame: { x: 1050, y: 350, w: 350, h: 350 },
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

  const animatedSprite = new AnimatedSprite(spritesheet.animations.talk);
  app.stage.addChild(animatedSprite);

  animatedSprite.play();
  animatedSprite.animationSpeed = 0.05;
})();
