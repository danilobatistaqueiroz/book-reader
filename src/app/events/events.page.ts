import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitorVolumeButtons, VolumeButtonPressed } from 'capacitor-volume-buttons';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { IonSlides } from '@ionic/angular';
import { Marker } from '../Marker';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit, AfterViewInit {

  @ViewChild('slides') slider!: IonSlides;

  totalPhotos: number[] = [...Array(30 + 1).keys()];

  photos: string[] = [
    '000.jpg',
    '20230125_140851.jpg',
    '20230125_140902.jpg',
    '20230125_140908.jpg',
    '20230125_140958.jpg',
    '20230125_141013.jpg',
    '20230125_141023.jpg',
    '20230125_141048.jpg',
    '20230125_141108.jpg',
    '20230125_141135.jpg',
    '20230125_141146.jpg',
    '20230125_141205.jpg',
    '20230125_141216.jpg',
    '20230125_141239.jpg',
    '20230125_141246.jpg',
    '20230125_141301.jpg',
    '20230125_141308.jpg',
    '20230125_141320.jpg',
    '20230125_141339.jpg',
    '20230125_141443.jpg',
    '20230125_141454.jpg',
    '20230125_141506.jpg',
    '20230125_141517.jpg',
    '20230125_141529.jpg',
    '20230125_141533.jpg',
    '20230125_141543.jpg',
    '20230125_141550.jpg',
    '20230125_141601.jpg',
    '20230125_141606.jpg',
    '20230125_141614.jpg',
    '20230125_141630.jpg'
  ];

  page: number = 0;
  chapter: string = 'events';

  markers: Marker[] = [];

  public screenOff: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private insomnia: Insomnia) { }

  ngOnInit() {
    this.screenOff = (localStorage.getItem('screenOff')??'false').toLowerCase()==='true';
    this.rubberDraggable();
    this.markerDraggable();
    this.volumeButtons();
  }

  ngAfterViewInit(): void {
    this.startNotebook();
    if (this.route.snapshot.paramMap.get('page')) {
      this.page = parseInt(this.route.snapshot.paramMap.get('page')??'0');
    } else {
      this.page = parseInt(localStorage.getItem(`currentPage_${this.chapter}`)??'0')
    }
    this.slider.slideTo(this.page,200);    
    this.mark();
  }

  home() {
    this.slider.slideTo(0,200);
  }

  eye() {
    this.screenOff = !this.screenOff;
    this.screenOff?this.insomnia.keepAwake():this.insomnia.allowSleepAgain();
    localStorage.setItem('screenOff',String(this.screenOff));
  }

  rubber() {
    const notebook:HTMLCanvasElement = document.getElementById('notebook') as HTMLCanvasElement;
    const context = notebook.getContext('2d');
    context!.clearRect(0, 0, notebook.width, notebook.height);
    localStorage.setItem(`penmarkers_${this.chapter}_${this.page}`,'[]');
    this.markers = [];
  }

  back() {
    if(this.page==0) return;
    this.slider.slidePrev();
    this.page--;
    this.mark();
  }

  forward() {
    if(this.page==30) return;
    this.slider.slideNext();
    this.page++;
    this.mark();
  }

  mark() {
    this.markers = JSON.parse(localStorage.getItem(`penmarkers_${this.chapter}_${this.page}`)??'[]');
    const notebook:HTMLCanvasElement = document.getElementById('notebook') as HTMLCanvasElement;
    const context = notebook.getContext('2d');
    context!.clearRect(0, 0, notebook.width, notebook.height);
    setTimeout(this.drawLines,200,context,this.markers,this.drawLine);
  }

  touch(e:any) {
    console.log(e);
    
  }

  untouch(e:any) {
    console.log(e);
    
  }

  drawLines(context:any,markers:Marker[],drawLine:any) {
    for(let mark of markers) {
      drawLine(context, mark.x1, mark.y1, mark.x2, mark.y2);
    }
  }

  markerDraggable() {
    const dv:HTMLDivElement = document.getElementById("dvMarker") as HTMLDivElement;
    const bts:HTMLButtonElement[]=[]
    bts.push(document.getElementById("btMarker") as HTMLButtonElement);
    bts.push(document.getElementById("back") as HTMLButtonElement);
    bts.push(document.getElementById("forward") as HTMLButtonElement);
    this.dragElement(dv,bts);
  }

  rubberDraggable() {
    const dv:HTMLDivElement = document.getElementById("dvRubber") as HTMLDivElement;
    const bts:HTMLButtonElement[]=[]
    bts.push(document.getElementById("btRubber") as HTMLButtonElement);
    bts.push(document.getElementById("btHome") as HTMLButtonElement);
    bts.push(document.getElementById("btEye") as HTMLButtonElement);
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
    
    let isDrawing = false;
    let x = 0;
    let y = 0;
    let x0 = 0;
    
    const notebook:HTMLCanvasElement = document.getElementById('notebook') as HTMLCanvasElement;
    const context = notebook.getContext('2d');

    notebook.width=1000; 
    notebook.height=960;
    
    this.markers = JSON.parse(localStorage.getItem(`penmarkers_${this.chapter}_${this.page}`)??'[]');
    for(let mark of this.markers) {
      this.drawLine(context,mark.x1,mark.y1,mark.x2,mark.y2);
    }
    
    notebook.addEventListener('mousedown', (e) => {
      x = e.offsetX;
      x0 = x;
      y = e.offsetY;
      isDrawing = true;
    });
    
    notebook.addEventListener('mousemove', (e) => {
      if (isDrawing) {
        this.drawLine(context, x, y, e.offsetX, y);
        x = e.offsetX;
      }
    });
    
    window.addEventListener('mouseup', (e) => {
      if (isDrawing) {
        this.drawLine(context, x, y, e.offsetX, y);
        this.markers.push({x1:x0, y1:y, x2:x, y2:y});
        localStorage.setItem(`penmarkers_${this.chapter}_${this.page}`,JSON.stringify(this.markers));
        x = 0;
        y = 0;
        isDrawing = false;
      }
    });

  }

  drawLine(context:any, x1:number, y1:number, x2:number, y2:number) {
    context.beginPath();
    context.strokeStyle = 'rgba(255,255,0,0.6)';
    context.lineWidth = '10';
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
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
      if(moved==false && e.toElement.id=="btRubber")
        self.rubber();
      if(moved==false && e.toElement.id=="btHome")
        self.home();
      if(moved==false && e.toElement.id=="btEye")
        self.eye();
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