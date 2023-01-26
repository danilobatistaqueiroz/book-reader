import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.page.html',
  styleUrls: ['./architecture.page.scss'],
})
export class ArchitecturePage implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    let isDrawing = false;
    let x = 0;
    let y = 0;
    
    const myPics:HTMLCanvasElement = document.getElementById('myPics') as HTMLCanvasElement;
    const context = myPics.getContext('2d');
    
    let markers = JSON.parse(localStorage.getItem('markers')??'[{"x1":30,"y1":5,"x2":90,"y2":5}]');
    for(let mark of markers) {
      console.log(mark);
      drawLine(context,mark.x1,mark.y1,mark.x2,mark.y2);
    }
    
    let beginMark:Marker = new Marker();
    
    myPics.addEventListener('mousedown', (e) => {
      x = e.offsetX;
      y = e.offsetY;
      beginMark.x1=x;
      beginMark.y1=y;
      isDrawing = true;
    });
    
    myPics.addEventListener('mousemove', (e) => {
      if (isDrawing) {
        drawLine(context, x, y, e.offsetX, y);
        x = e.offsetX;
      }
    });
    
    window.addEventListener('mouseup', (e) => {
      if (isDrawing) {
        drawLine(context, x, y, e.offsetX, y);
        markers.push({x1:beginMark.x1,y1:beginMark.y1,x2:e.offsetX,y2:y});
        localStorage.setItem('markers',JSON.stringify(markers));
        x = 0;
        y = 0;
        isDrawing = false;
      }
    });
    
    function drawLine(context:any, x1:number, y1:number, x2:number, y2:number) {
      context.beginPath();
      context.strokeStyle = 'rgba(255,255,0,0.7)';
      context.lineWidth = 10;
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    }
  }

  ngOnInit() {
  
  }

}

class Marker {
  x1:number=0;
  y1:number=0;
}