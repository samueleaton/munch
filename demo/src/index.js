import * as munch from '../../src/index'
import Hero from './components/Hero'

const h = new Hero
const renderer = munch.createRenderer(500, 300, {})
document.body.appendChild(renderer.view)
console.log('hero: ', h)
console.log('hero class: ', h.class)
h._render()
console.log('munch.renderedClasses: ', munch.renderedClasses)
console.log('h instanceof munch.Component: ', h instanceof munch.Component)
