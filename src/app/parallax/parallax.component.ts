import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../map/map.component';
declare var $: any;
@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {

  ngOnInit() {
    $(document).ready(function () {
      $('.parallax').parallax();
    });
  }

}
