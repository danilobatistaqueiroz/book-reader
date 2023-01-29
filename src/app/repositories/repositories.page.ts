import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { IonSlides } from '@ionic/angular';
import { CapacitorVolumeButtons, VolumeButtonPressed } from 'capacitor-volume-buttons';
import { Marker } from '../Marker';

@Component({
  selector: 'app-repositories',
  templateUrl: 'repositories.page.html',
  styleUrls: ['repositories.page.scss'],
})
export class RepositoriesPage implements OnInit {

  @ViewChild('slides') slider!: IonSlides;

  totalPhotos: number[] = [...Array(142 + 1).keys()];

  photos: string[] = ["000.jpg", "20230124_020420.jpg",
    "20230124_020432.jpg",
    "20230124_020529.jpg",
    "20230124_020539.jpg",
    "20230124_020555.jpg",
    "20230124_020609.jpg",
    "20230124_020623.jpg",
    "20230124_020636.jpg",
    "20230124_020654.jpg",
    "20230124_020702.jpg",
    "20230124_020715.jpg",
    "20230124_020729.jpg",
    "20230124_020750.jpg",
    "20230124_020757.jpg",
    "20230124_020819.jpg",
    "20230124_020843.jpg",
    "20230124_020914.jpg",
    "20230124_020920.jpg",
    "20230124_020926.jpg",
    "20230124_020935.jpg",
    "20230124_020952.jpg",
    "20230124_021008.jpg",
    "20230124_021018.jpg",
    "20230124_021038.jpg",
    "20230124_021054.jpg",
    "20230124_021108.jpg",
    "20230124_021149.jpg",
    "20230124_150703.jpg",
    "20230124_202917.jpg",
    "20230124_203007.jpg",
    "20230124_203048.jpg",
    "20230124_203112.jpg",
    "20230124_203132.jpg",
    "20230124_203206.jpg",
    "20230124_203212.jpg",
    "20230124_203230.jpg",
    "20230124_203242.jpg",
    "20230124_203337.jpg",
    "20230124_203357.jpg",
    "20230124_203407.jpg",
    "20230124_203437.jpg",
    "20230124_203447.jpg",
    "20230124_203500.jpg",
    "20230124_203514.jpg",
    "20230124_203523.jpg",
    "20230124_203532.jpg",
    "20230124_203541.jpg",
    "20230124_203548.jpg",
    "20230124_203608.jpg",
    "20230124_203614.jpg",
    "20230124_203621.jpg",
    "20230124_203635.jpg",
    "20230124_203648.jpg",
    "20230124_203655.jpg",
    "20230124_203726.jpg",
    "20230124_203741.jpg",
    "20230124_203748.jpg",
    "20230124_203808.jpg",
    "20230124_203823.jpg",
    "20230124_203828.jpg",
    "20230124_203907.jpg",
    "20230124_203922.jpg",
    "20230124_203934.jpg",
    "20230124_204021.jpg",
    "20230124_204030.jpg",
    "20230124_204039.jpg",
    "20230124_204100.jpg",
    "20230124_204105.jpg",
    "20230124_204112.jpg",
    "20230124_204123.jpg",
    "20230124_204132.jpg",
    "20230124_204138.jpg",
    "20230124_204148.jpg",
    "20230124_204154.jpg",
    "20230124_204202.jpg",
    "20230124_204239.jpg",
    "20230124_204253.jpg",
    "20230124_204302.jpg",
    "20230124_204318.jpg",
    "20230124_204324.jpg",
    "20230124_204342.jpg",
    "20230124_204350.jpg",
    "20230124_204441.jpg",
    "20230124_204455.jpg",
    "20230124_204508.jpg",
    "20230124_204520.jpg",
    "20230124_204526.jpg",
    "20230124_204539.jpg",
    "20230124_204629.jpg",
    "20230124_204635.jpg",
    "20230124_204701.jpg",
    "20230124_204709.jpg",
    "20230124_204715.jpg",
    "20230124_204726.jpg",
    "20230124_204749.jpg",
    "20230124_204820.jpg",
    "20230124_204841.jpg",
    "20230124_204905.jpg",
    "20230124_204922.jpg",
    "20230124_204940.jpg",
    "20230124_205008.jpg",
    "20230124_205019.jpg",
    "20230124_205029.jpg",
    "20230124_205033.jpg",
    "20230124_205047.jpg",
    "20230124_205056.jpg",
    "20230124_205103.jpg",
    "20230124_205118.jpg",
    "20230124_205132.jpg",
    "20230124_205148.jpg",
    "20230124_205203.jpg",
    "20230124_205211.jpg",
    "20230124_205215.jpg",
    "20230124_205229.jpg",
    "20230124_205237.jpg",
    "20230124_205243.jpg",
    "20230124_205249.jpg",
    "20230124_205255.jpg",
    "20230124_205301.jpg",
    "20230124_205310.jpg",
    "20230124_205314.jpg",
    "20230124_205318.jpg",
    "20230124_205328.jpg",
    "20230124_205335.jpg",
    "20230124_205340.jpg",
    "20230124_205345.jpg",
    "20230124_205356.jpg",
    "20230124_205412.jpg",
    "20230124_205419.jpg",
    "20230124_205434.jpg",
    "20230124_205445.jpg",
    "20230124_205451.jpg",
    "20230124_205500.jpg",
    "20230124_205506.jpg",
    "20230124_205521.jpg",
    "20230124_205544.jpg",
    "20230124_205558.jpg",
    "20230124_205608.jpg",
    "20230124_205612.jpg",
    "20230124_205623.jpg",
    "20230124_205631.jpg",
    "20230124_205635.jpg"]

  page: number = 0;
  chapter: string = 'repositories';

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

  sliderChanges() {
    this.slider.getActiveIndex().then(index => {
      localStorage.setItem(`currentPage_${this.chapter}`,index.toString());
    });
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
