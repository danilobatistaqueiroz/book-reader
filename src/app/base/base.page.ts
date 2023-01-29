import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitorVolumeButtons, VolumeButtonPressed } from 'capacitor-volume-buttons';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { IonSlides } from '@ionic/angular';
import { Marker } from '../Marker';

@Component({
  selector: 'app-base',
  templateUrl: './base.page.html',
  styleUrls: ['./base.page.scss'],
})
export class BasePage implements OnInit, AfterViewInit {
  
    @ViewChild('slides') slider!: IonSlides;
  
    page: number = 0;

    totalPhotos: number[]=[]
    photos: string[]=[]
    chapter: string=''
  
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
      this.penmarks();
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

    hideBtPage(){
      (document.querySelector("#btPage") as HTMLButtonElement)!.style.display = 'none';
    }

    allHideTimeout:NodeJS.Timeout[] = []
  
    back() {
      if(this.page==0) return;
      this.slider.slidePrev();
      this.page--;
      this.penmarks();
      this.allHideTimeout.forEach(t => clearTimeout(t));
      this.allHideTimeout.push(setTimeout(this.hideBtPage,1000));
      (document.querySelector("#btPage") as HTMLButtonElement)!.style.display = 'inline-block';
    }
  
    forward() {
      if(this.page==30) return;
      this.slider.slideNext();
      this.page++;
      this.penmarks();
      this.allHideTimeout.forEach(t => clearTimeout(t));
      this.allHideTimeout.push(setTimeout(this.hideBtPage,1000));
      (document.querySelector("#btPage") as HTMLButtonElement)!.style.display = 'inline-block';
    }
  
    penmarks() {
      this.markers = JSON.parse(localStorage.getItem(`penmarkers_${this.chapter}_${this.page}`)??'[]');
      const notebook:HTMLCanvasElement = document.getElementById('notebook') as HTMLCanvasElement;
      const context = notebook.getContext('2d');
      context!.clearRect(0, 0, notebook.width, notebook.height);
      setTimeout(this.drawLines,300,context,this.markers,this.drawLine);
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
  
    bookmarkPage() {
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
  
      var w = document.documentElement.clientWidth || document.body.clientWidth;
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      notebook.width=w;
      notebook.height=h;
      
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
      
      notebook.addEventListener('touchstart', (e:TouchEvent) => {
        x = e.touches[0]?.clientX;
        x0 = x;
        y = e.touches[0]?.clientY;
        isDrawing = true;
      });
      notebook.addEventListener('touchmove', (e:TouchEvent) => {
        if (isDrawing) {
          this.drawLine(context, x, y, e.changedTouches[0].pageX, y);
          x = e.changedTouches[0].pageX;
        }
      });
      notebook.addEventListener('touchend', (e:TouchEvent) => {
        if (isDrawing) {
          if (e.changedTouches[0]){
            this.drawLine(context, x, y, e.changedTouches[0].clientX, y);
            this.markers.push({x1:x0, y1:y, x2:x, y2:y});
            localStorage.setItem(`penmarkers_${this.chapter}_${this.page}`,JSON.stringify(this.markers));
            x = 0;
            y = 0;
            isDrawing = false;
          }
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
      let self = this;

      for(let bt of bts) {
        bt.onmousedown = mouseDown;
        bt.ontouchstart = touch;
      }

      function touch(e:TouchEvent) {
        moved=false;
        e = e || window.event;
        e.preventDefault();
        pos3 = e.touches[0].clientX;
        pos4 = e.touches[0].clientY;
        document.ontouchmove = touchmove;
        document.ontouchend = untouch;
      }

      function touchmove(e:TouchEvent) {
        moved = true;
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.changedTouches[0].clientX;
        pos2 = pos4 - e.changedTouches[0].clientY;
        pos3 = e.changedTouches[0].clientX;
        pos4 = e.changedTouches[0].clientY;
        dv.style.top = (dv.offsetTop - pos2) + "px";
        dv.style.left = (dv.offsetLeft - pos1) + "px";
      }

      function untouch(e:TouchEvent) {
        document.ontouchmove = null;
        document.ontouchend = null;
        const id:string = (e.target as HTMLElement).id;
        if(moved==true)
          return;
        if(id=="btMarker")
          self.bookmarkPage();
        else if(id=="back")
          self.back();
        else if(id=="forward")
          self.forward();
        else if(id=="btRubber")
          self.rubber();
        else if(id=="btHome")
          self.home();
        else if(id=="btEye")
          self.eye();
      }
  
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