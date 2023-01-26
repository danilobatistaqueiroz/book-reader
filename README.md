
debugar celular Android:  
vivaldi://inspect/device#devices  
chrome://inspect/device#devices


lista de comandos:  
```
ionic start iddd --type=angular --capacitor
npm install @capacitor/filesystem
ng serve
ionic build
ionic cap add android
ionic cap copy

npm install capacitor-volume-buttons
npx cap sync
ionic build
ionic cap copy

npm install cordova-plugin-screen-orientation
npm i es6-promise-plugin
npx cap sync
npx cap update
ionic build
ionic cap copy
```


É possível ouvir os eventos de volumeButtonDown, eventos de teclado, mouse, etc.

o arquivo encontra-se no AndroidStudio em:  
Android->app->capacitor-android->java->com.getcapacitor->CapacitorWebView

no vscode encontra-se em:  
node_modules/@capacitor/android/capacitor/src/main/java/com/getcapacitor/CapacitorWebView.java

exemplo de código para desabilitar volumeButtonDown e Up:  
```java
@Override
public boolean dispatchKeyEvent(KeyEvent event) {
    boolean result;
     switch( event.getKeyCode() ) {
        case KeyEvent.KEYCODE_VOLUME_UP:
        case KeyEvent.KEYCODE_VOLUME_DOWN:
            result = true;
            break;

         default:
            result= super.dispatchKeyEvent(event);
            break;
     }

     return result;
}
```

exemplo para volumeButtonDown e Up não alterarem o som:  

o arquivo encontra-se no vscode em:  
node_modules/@capacitor/android/capacitor/src/main/java/com/getcapacitor/BridgeActivity.java 

ou no AndroidStudio em:  
Android->app->capacitor-android->java->com.getcapacitor->BridgeActivity

```java
import android.view.KeyEvent;

  @Override
  public boolean onKeyDown(int keyCode, KeyEvent event) {
    if( keyCode == KeyEvent.KEYCODE_VOLUME_UP ||
      keyCode == KeyEvent.KEYCODE_VOLUME_DOWN)
    {
      event.startTracking();
      return true;
    }
    return super.onKeyDown(keyCode, event);
  }
```


para referenciar um elemento html dentro do typescript é necessário usar no html:  
```html
<ion-slides #slides>
```
e no typescript:  
```typescript
@ViewChild('slides') slider!: any;

  ngAfterViewInit(): void {
    this.slider
  }
```



Samsung M31 Galaxy tem width x height de: 1080×2340 pixels