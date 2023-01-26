import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CapacitorVolumeButtons, VolumeButtonPressed } from 'capacitor-volume-buttons';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit, AfterViewInit {

  @ViewChild('slides') slider!: any;

  totalPhotos: number[] = [...Array(142 + 1).keys()];

  photos: string[] = ["000.jpg",'20230125_140851.jpg'];

  page: number = 0;
  chapter: string = 'events';

  constructor() { }

  ngOnInit() {
    this.markerDraggable();
    this.volumeButtons();
  }

  ngAfterViewInit(): void {
    this.startNotebook();
  }

  back() {
    if(this.page==0) return;
    this.slider.slidePrev();
    this.page--;
  }

  forward() {
    if(this.page==2-1) return;
    this.slider.slideNext();
    this.page++;
  }

  markerDraggable() {
    const dv:HTMLDivElement = document.getElementById("dvMarker") as HTMLDivElement;
    const bts:HTMLButtonElement[]=[]
    bts.push(document.getElementById("btMarker") as HTMLButtonElement);
    bts.push(document.getElementById("back") as HTMLButtonElement);
    bts.push(document.getElementById("forward") as HTMLButtonElement);
    this.dragElement(dv,bts);
  }

  isPageBookmarked() {
    if (this.getBookmarkedPages().find(p => p == this.page.toString())) {
      return true;
    }
    return false;
  }

  private getBookmarkedPages():string[] {
    let pagesMarked = localStorage.getItem(`bookmarkers_${this.chapter}`);
    let all:string[] = [];
    if(pagesMarked)
      all = pagesMarked.split(',');
    return all;
  }

  private bookmarkPage(){
    let all = this.getBookmarkedPages();
    if(all.find(p => p==this.page.toString()))
      all = all.filter(p => p!=this.page.toString());
    else
      all.push(this.page.toString());
    localStorage.setItem(`bookmarkers_${this.chapter}`,all.toString());
  }

  startNotebook() {

    class Marker {
      x1:number=0;
      y1:number=0;
    }

    let isDrawing = false;
    let x = 0;
    let y = 0;
    
    const notebook:HTMLCanvasElement = document.getElementById('notebook') as HTMLCanvasElement;
    const context = notebook.getContext('2d');

    notebook.width=1000; 
    notebook.height=960;
    
    let markers = JSON.parse(localStorage.getItem(`penmarkers_${this.chapter}_${this.page}`)??'[]');
    for(let mark of markers) {
      drawLine(context,mark.x1,mark.y1,mark.x2,mark.y2);
    }
    
    let beginMark:Marker = new Marker();
    
    notebook.addEventListener('mousedown', (e) => {
      x = e.offsetX;
      y = e.offsetY;
      beginMark.x1=x;
      beginMark.y1=y;
      isDrawing = true;
    });
    
    notebook.addEventListener('mousemove', (e) => {
      if (isDrawing) {
        drawLine(context, x, y, e.offsetX, y);
        x = e.offsetX;
      }
    });
    
    window.addEventListener('mouseup', (e) => {
      if (isDrawing) {
        drawLine(context, x, y, e.offsetX, y);
        markers.push({x1:beginMark.x1,y1:beginMark.y1,x2:e.offsetX,y2:y});
        localStorage.setItem(`penmarkers_${this.chapter}_${this.page}`,JSON.stringify(markers));
        x = 0;
        y = 0;
        isDrawing = false;
      }
    });
    
    function drawLine(context:any, x1:number, y1:number, x2:number, y2:number) {
      context.beginPath();
      context.strokeStyle = 'rgba(255,255,0,0.7)';
      context.lineWidth = '10';
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
      context.closePath();
    }

  }

  dragElement(dv:HTMLDivElement, bts:HTMLButtonElement[]) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    let moved = false;
    for(let bt of bts)
      bt.onmousedown = mouseDown;
    function mouseDown(e: any) {
      moved=false;
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = mouseUp;
      document.onmousemove = elementDrag;
    }
    function elementDrag(e: any) {
      moved = true;
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      dv.style.top = (dv.offsetTop - pos2) + "px";
      dv.style.left = (dv.offsetLeft - pos1) + "px";
    }
    let self = this;
    function mouseUp(e: any) {
      if(moved==false && e.toElement.id=="btMarker")
        self.bookmarkPage();
      if(moved==false && e.toElement.id=="back")
        self.back();
      if(moved==false && e.toElement.id=="forward")
        self.forward();
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  volumeButtons() {
    const onVolumeButtonPressed = ({ direction }: VolumeButtonPressed) => {
      if (direction === 'up') {
        this.back();
      } else {
        this.forward();
      }
    };
    CapacitorVolumeButtons.addListener('volumeButtonPressed', onVolumeButtonPressed);
  }

}
