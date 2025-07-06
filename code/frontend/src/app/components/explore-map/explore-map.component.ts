import { Component, OnInit, inject } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_indiaLow from "@amcharts/amcharts5-geodata/indiaLow";
import stateTouristData from '../../../assets/resources/stateBasedTouristPlaces.json';

@Component({
  selector: 'app-explore-map',
  imports: [],
  templateUrl: './explore-map.component.html',
  styleUrl: './explore-map.component.scss'
})
export class ExploreMapComponent implements OnInit {

  stateName: string | null = "";
  stateTouristData: any = stateTouristData;
  stateData: any;
  private localStorage: LocalStorageService = inject(LocalStorageService);
  ngOnInit(): void {
    this.stateName = this.localStorage.get("stateName");
    console.log(this.stateName);
    if (this.stateName) {
      this.stateData = this.stateTouristData[this.stateName];
    }

  }

  ngAfterViewInit(): void {
    let root = am5.Root.new("stateMap");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        projection: am5map.geoMercator()
      })
    );

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_indiaLow
      })
    );

    // const trekPoints = this.stateData.treks.map((trek: any) =>
    //   am5map.MapPointSeries.new(root, {
    //     latitude: trek.latitude,
    //     longitude: trek.longitude,
    //     tooltipText: trek.name + "\n" + trek.info
    //   })
    // );
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        valueField: "value",
        latitudeField: "latitude",
        longitudeField: "longitude"
      })
    );

    pointSeries.data.setAll(this.stateData.treks);
    pointSeries.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 6,
          tooltipText: `[bold]{name}[/]\n{info}`,
          cursorOverStyle: 'pointer',
          fill: am5.color(0xD18C56)
        })
      });
    });

    //trekPoints.forEach((series: any) => chart.series.push(series));
  }

}
