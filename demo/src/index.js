import * as munch from '../../src/index'
import Hero from './components/Hero'
import * as PIXI from 'pixi.js'

const renderer = window.renderer = munch.createRenderer(500, 300, {})
document.body.appendChild(renderer.view)
const stage = window.stage = new PIXI.Container()

const h = new Hero
h.render()
renderer.render(stage)

function loop() {
  renderer.render(stage)
  window.requestAnimationFrame(loop)
}
loop()
// console.log('hero: ', h)
// console.log('hero class: ', h.class)
// h._render()
// console.log('munch.renderedClasses: ', munch.renderedClasses)
// console.log('h instanceof munch.Component: ', h instanceof munch.Component)
