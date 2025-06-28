import { Control } from 'ol/control';

export class DrawControl extends Control {
  constructor() {
    const element = document.createElement('div');
    element.className = 'ol-draw-control bg-primary-subtle';
    element.innerHTML = `<div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
  <label class="btn btn-outline-primary" for="vbtn-radio1"><i class="bi bi-circle"></i></label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
  <label class="btn btn-outline-primary" for="vbtn-radio2"><i class="bi bi-app"></i></label>
  <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
  <label class="btn btn-outline-primary" for="vbtn-radio3"><i class="bi bi-pentagon"></i></label>
   <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio4" autocomplete="off">
  <label class="btn btn-outline-primary" for="vbtn-radio4"><i class="bi bi-geo-alt"></i></label>
</div>`
    // const button = document.createElement('button');
    // button.className = 'btn btn-primary';
    // button.innerHTML = '<i class="bi bi-brush"></i>';
    // element.appendChild(button);
    super({ element });
  }
}
