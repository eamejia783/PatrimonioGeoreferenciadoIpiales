import { Component, OnInit, NgModule } from '@angular/core';

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
