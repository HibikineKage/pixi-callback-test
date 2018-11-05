/// <reference path="./index.d.ts" />
import * as PIXI from 'pixi.js';
import image from './sample.jpg';

const sprite = new PIXI.Sprite(PIXI.Texture.fromImage(image));
// This is not documented function!
sprite.pointerdown = () => console.log('clicked');
sprite.interactive = true;
const app = new PIXI.Application({ width: 256, height: 256 });
app.stage.addChild(sprite);
document.body.appendChild(app.view);
