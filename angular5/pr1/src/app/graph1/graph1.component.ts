import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styleUrls: ['./graph1.component.css']
})
export class Graph1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() { debugger;
    d3.select("p#graph1p").style("color", "red");
  }

}
