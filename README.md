# EmojiPicker

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

See live demo <a href="https://adavtyan13.github.io/emoji-picker-angular8/">here</a>.

This library will help you to use Unicode emojis. There are 8 categories with 1525 emojis.

### Attributes
Attributes   | Description
-------------|--------------
@Input() <br> **emojiPickerOptions**: IEmojiPickerOptions | You can add options like <ul><li>btnIcon</li><li>searchIcon</li><li>customClass</li><li>emojisPerRow</li><li>emojiPickerPosition</li><li>defaultCatalogId</li></ul> * All are optional
@Output() <br> **selectEmojiEvent**: EventEmitter< string >() | Event will be fired when emoji selected

### Example and Sample Code
1) **Import _'EmojiPickerLibModule'_ in your app module**
```ts
import { EmojiPickerLibModule } from "emoji-picker-lib";

@NgModule({
  imports:[
    ..
    EmojiPickerLibModule
    ..
]
})
``` 

2) **Add _'emoji-picker'_ in your component html**
```html
<emoji-picker   [emojiPickerOptions]="emojiPickerOptions"
                (selectEmojiEvent)="selectEmoji($event)"></emoji-picker>
```

3) **Add a method in your component class to listen for **selectEmojiEvent** event**
```ts
selectEmoji(emoji: string): void {
  console.log(emoji);
}
```

4) **Add styles and assets folder in your angular.json**

```json
"styles": [
..
"node_modules/emoji-picker-lib/lib/assets/sass/emoji-picker.scss"
..
]
```
AND
```json
"assets": [
..
{
"glob": "**/*",
"input": "node_modules/emoji-picker-lib/lib/assets",
"output": "/assets/"
}
..
]
```
