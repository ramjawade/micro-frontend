import { Control } from 'ol/control';

export class PanZoomControl extends Control {
  constructor(opt_options?: any) {
    const options = opt_options || {};
    const button = document.createElement('button');
    button.innerHTML = '<i class="bi bi-house"></i>';
    button.className = 'btn btn-primary';
    const element = document.createElement('div');
    element.className = 'ol-pan-zoom';
    element.appendChild(button);
    super({ element: element, target: options['target'] as HTMLElement });
    button.addEventListener('click', this.click.bind(this), false);
  }

  click() {
    this.getMap()?.getControls().get('Zoom');
    console.log(this.getMap());
  }
}
