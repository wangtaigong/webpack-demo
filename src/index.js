import { cube} from './math.js'

function component() {
  let element = document.createElement('pre');

  element.innerHTML = [
    'Hello Webpack',
    '5 cubed is equare to ' + cube(5)
  ].join('\n\n')

  return element;
}

document.body.appendChild(component());