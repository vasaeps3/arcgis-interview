import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModuleSub } from '@app/common/helpers';
import { environment } from '@env/environment';


@Component({
  selector: 'app-arcgis-map',
  templateUrl: './arcgis-map.component.html',
  styleUrls: ['./arcgis-map.component.scss']
})
export class ArcgisMapComponent implements OnInit {
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  constructor() { }

  ngOnInit() {
    this.initializeMap();
  }

  private initializeMap() {
    loadModuleSub([
      'esri/WebMap',
      'esri/views/MapView'
    ])
      .subscribe(([esriWebMap, esriMapView]) => {
        const webMapProperties = {
          portalItem: {
            id: environment.portalItem
          }
        };
        const webMap: __esri.WebMap = new esriWebMap(webMapProperties);

        const mapViewProperties: __esri.MapViewProperties = {
          container: this.mapViewEl.nativeElement,
          map: webMap
        };

        const mapView: __esri.MapView = new esriMapView(mapViewProperties);
        mapView.when(() => {
          console.log('The map was uploaded');
        });
      });
  }

}
