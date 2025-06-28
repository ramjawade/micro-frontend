import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { TileDebug, XYZ } from 'ol/source';
import { Attribution, defaults as defaultsControl } from 'ol/control';
import { fromLonLat } from 'ol/proj';
import { PanZoomControl } from './classes/pan-zoom-control';
import { DrawControl } from './classes/draw-control';

@Component({
  selector: 'lib-map',
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent implements OnInit {
  ngOnInit(): void {
    const indiaExtent = [
      fromLonLat([64.98536225213587, 5.6092920522406615]), // Southwest corner (minX, minY)
      fromLonLat([97.87998266483964, 38.875874229746984]), // Northeast corner (maxX, maxY)
    ];

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
        new TileLayer({
          source: new TileDebug(),
        }),
      ],
      view: new View({
        center: fromLonLat([78.9629, 20.5937]), // Center of India
        zoom: 5,
        maxZoom: 19,
        // extent: [
        //   indiaExtent[0][0], indiaExtent[0][1],
        //   indiaExtent[1][0], indiaExtent[1][1]
        // ],
      }),
      controls: defaultsControl({ attribution: false }).extend([
        new Attribution({ className: 'ol-zoom' }),
        new PanZoomControl(),
        new DrawControl(),
      ]),
    });
    console.log(map);
  }
}
