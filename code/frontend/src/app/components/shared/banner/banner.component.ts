import { Component, inject } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BannerDependency } from './banner.dependency';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
// import indiaGeoData from '@amcharts/amcharts5-geodata/indiaLow';
import indiaGeoData from '@amcharts/amcharts5-geodata/indiaHigh';
import statesThemes from '../../../../assets/resources/stateBasedColor.json';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../services/local-storage.service';

type Slide = {
  title: string;
  description?: string;
  steps?: string[];
  contact?: boolean;
};
@Component({
  selector: 'app-banner',
  imports: [BannerDependency],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  providers: [NgbCarouselConfig]
})
export class BannerComponent {
  banner1 = 'banner/banner_1.jpg';
  slides: Slide[] = [
    {
      title: 'Explore India with Us',
      description: 'Discover untold rural stories through guided treks and cultural journeys.',
      contact: true
    },
    {
      title: 'What We Do',
      description: 'We help you experience the soul of India through authentic trails, guides, and local experiences.',
    },
    {
      title: 'How This Map Works',
      steps: [
        '1. Hover on states to explore regional themes.',
        '2. Click pins to view trail or cultural experiences.',
        '3. Navigate to detailed trek pages with live weather, maps, and stories.'
      ]
    }
  ];


  showNavigationArrows = false;
  showNavigationIndicators = false;
  stateThemes: { [key: string]: { color: string; theme: string } } = statesThemes;
  // images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  images = [
    'assets/images/slide1.jpg',
    'assets/images/slide2.jpg',
    'assets/images/slide3.jpg'
  ];

  highlightedStates = [
    { id: 'uttarakhand', name: 'Uttarakhand', link: '/map/uttarakhand' },
    { id: 'himachal-pradesh', name: 'Himachal Pradesh', link: '/map/himachal' }
  ];

  private router: Router = inject(Router);
  private localStorage: LocalStorageService = inject(LocalStorageService);

  ngAfterViewInit(): void {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        wheelX: "none",
        wheelY: "none",
        projection: am5map.geoMercator()
      })
    );

    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: indiaGeoData
      })
    );


    const highlightedStates = ["Uttarakhand", "Rajasthan"];

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      interactive: true,
      cursorOverStyle: "pointer",
      stroke: am5.color(0x2B2B2B), // Dark charcoal
      strokeWidth: 1,
    });
    polygonSeries.mapPolygons.template.adapters.add("stroke", (stroke, target) => {
      const name = (target.dataItem?.dataContext as any)?.name;
      return highlightedStates.includes(name)
        ? am5.color(0x2B2B2B) // Stronger border
        : am5.color(0x4B4B4B); // Soft dark gray
    });

    polygonSeries.mapPolygons.template.adapters.add("fill", (fill, target) => {
      const name = (target.dataItem?.dataContext as any)?.name;
      return this.stateThemes[name] ? am5.color(this.stateThemes[name].color) : am5.color("#ccc");
    });

    const overlayLayer = chart.children.push(
      am5.Container.new(root, {
        isMeasured: false,
        x: 0,
        y: 0,
        width: am5.percent(100),
        height: am5.percent(100)
      })
    );

    // Add scaling on hover for highlighted states only
    polygonSeries.mapPolygons.template.events.on("pointerout", (ev) => {
      ev.target.animate({
        key: "scale",
        to: 1,
        duration: 300
      });
    });

    polygonSeries.mapPolygons.template.events.on("click", (ev) => {
      const name = (ev.target.dataItem?.dataContext as any)?.name;
      if (highlightedStates.includes(name)) {
        this.localStorage.set("stateName", name);
        this.router.navigate(['/explore-map']);
      }
    });

    const pinLayer = chart.children.push(am5.Container.new(root, {
      width: am5.p100,
      height: am5.p100,
      isMeasured: false
    }));

    highlightedStates.forEach((stateName) => {
      polygonSeries.events.once("datavalidated", () => {
        polygonSeries.mapPolygons.each((polygon) => {
          const name = (polygon.dataItem?.dataContext as any)?.name;

          // Check if the current polygon is one of the highlighted states
          if (name === stateName) {
            const coords = polygon.geoCentroid(); // Get geographic centroid of the polygon
            const point = chart.convert(coords); // Convert geo-coordinates to screen coordinates

            // Create a blinking pin
            const pin = am5.Circle.new(root, {
              x: point.x,
              y: point.y,
              radius: 6,
              fill: am5.color("#FFD700"),  // Yellow color
              stroke: am5.color("#3E4C3A"),
              strokeWidth: 2
            });

            // Pin animation (pulsing effect)
            pin.animate({
              key: "radius",
              to: 12,
              duration: 800,
              loops: Infinity,
              easing: am5.ease.inOut(am5.ease.cubic)
            });

            // Add the pin to the chart
            chart.children.push(pin);

            // Add custom icon (if needed)
            const iconSrc = {
              "Rajasthan": "assets/icons/red-fort.png",
              "Uttarakhand": "assets/icons/temple.png",
              "Jammu and Kashmir": "assets/icons/river.png"
            }[stateName];

            if (iconSrc) {
              const icon = am5.Picture.new(root, {
                x: point.x,
                y: point.y - 30,
                width: 32,
                height: 32,
                centerX: am5.p50,
                centerY: am5.p50,
                src: iconSrc
              });

              chart.children.push(icon);

              // Remove pin and icon when pointer out
              // polygon.events.once("pointerout", () => {
              //   chart.children.removeValue(pin);
              //   chart.children.removeValue(icon);
              // });
            } else {
              // Remove pin when pointer out
              polygon.events.once("pointerout", () => {
                chart.children.removeValue(pin);
              });
            }
          }
        });
      });
    });
  }

}
