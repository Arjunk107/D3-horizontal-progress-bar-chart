import { Component, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-ax-horizontal-progress',
  templateUrl: './ax-horizontal-progress.component.html',
  styleUrls: ['./ax-horizontal-progress.component.scss']
})
export class AxHorizontalProgressComponent {
  @ViewChild('svg', { static: true })
  private svgElement!: ElementRef;

  private margin = { top: 50, right: 20, bottom: 30, left: 40 };
  private width = 960 - this.margin.left - this.margin.right;
  private height = 400 - this.margin.top - this.margin.bottom;

  // Define the chart elements
  private svg: any;
  private xScale: any;
  private yScale: any;
  private xAxis: any;
  private yAxis: any;
  private bars: any;
  private barsbg: any;
  private name: any;
  private values: any;
  // Define the chart data
  private data = [
    { category: 'Executive Management', value: 31 },
    { category: 'Finance and Accounting', value: 16 },
    { category: 'Human Resources', value: 11 },
    { category: 'Information Technology', value: 8 },
    { category: 'Marketing', value: 27 },
    { category: 'Operations1', value: 6 },
    { category: 'Sales', value: 4 },
    { category: 'Operations', value: 3 }
  ];

  constructor() { }



  ngOnInit(): void {
    this.initChart();
    this.drawChart();
  }

  initChart() {
    this.svg = d3.select('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')


    // Create the x-scale
    this.xScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, (d: any) => d.value)])
      .range([0, this.width]);

    // Create the y-scale
    this.yScale = d3.scaleBand()
      .domain(this.data.map((d: any) => d.category))
      .range([this.height, 0])
      .padding(0.6);


  }
  drawChart(): void {
    this.barsbg = this.svg.selectAll('.bar-background')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', '"bar-background"')
      .attr('x', 10)
      .attr('y', (d: any) => this.yScale(d.category))
      .attr('width', 900)
      .attr('height', 15)
      .attr('transform', 'translate(' + 0 + ',' + ((this.yScale.bandwidth() / 2) - 5) + ')')
      .style('fill', '#EBEBEB')
      .attr('rx', 6) // Set the horizontal radius for rounded corners
      .attr('ry', 6);

    this.bars = this.svg.selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'progress-bar')
      .attr('x', 0)
      .attr('y', (d: any) => this.yScale(d.category))
      .attr('width', 0)
      .attr('height', this.yScale.bandwidth())
      .attr('transform', 'translate(' + 0 + ',' + ((this.yScale.bandwidth() / 2) - 5) + ')')
      .style('fill', (d: any) => this.getColor(d.value))
      .attr('rx', 6) // Set the horizontal radius for rounded corners
      .attr('ry', 6)
      .transition()
      .duration(2000)
      .attr('width', (d: any) => this.xScale(d.value));

    this.name = this.svg.selectAll('name')
      .data(this.data)
      .enter()
      .append('text')
      .attr('class', 'name')
      .text((d: any) => {
        return d.category
      })
      .attr('x', 0)
      .attr('y', (d: any) => { return this.yScale(d.category) })
      .attr('transform', 'translate(' + 0 + ',' + ((this.yScale.bandwidth() / 2) - 15) + ')')
      .style('text-anchor', 'start');

    this.values = this.svg.selectAll('value')
      .data(this.data)
      .enter()
      .append('text').attr('class', 'value')
      .text((d: any) => {
        return d.value
      }).attr('x', this.width - this.margin.left)
      .attr('y', (d: any) => { return this.yScale(d.category) })
      .attr('transform', 'translate(' + 30 + ',' + ((this.yScale.bandwidth() / 2) - 15) + ')')
    // .style('text-anchor', 'end');

  }

  getColor(value: number): string {
    if (value < 10) {
      return 'red';
    } else if (value < 20) {
      return 'orange';
    } else if (value < 30) {
      return 'yellow';
    } else {
      return 'green';
    }
  }
}