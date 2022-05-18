/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmojiPickerService } from './emoji-picker-lib.service';
import { EmojisSharedService } from './@core/services/emojis.shared';
import { EmojiPickerLibComponent } from './emoji-picker-lib.component';
import { OutClickDirective } from './@theme/directives/outclick.directive';
import { AutofocusDirective } from './@theme/directives/autofocus.directive';
var EmojiPickerLibModule = /** @class */ (function () {
    function EmojiPickerLibModule() {
    }
    EmojiPickerLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        OutClickDirective,
                        AutofocusDirective,
                        EmojiPickerLibComponent
                    ],
                    imports: [
                        FormsModule,
                        CommonModule,
                    ],
                    exports: [
                        EmojiPickerLibComponent
                    ],
                    providers: [EmojiPickerService, EmojisSharedService]
                },] }
    ];
    return EmojiPickerLibModule;
}());
export { EmojiPickerLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbW9qaS1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2Vtb2ppLXBpY2tlci1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFFM0U7SUFBQTtJQWdCQSxDQUFDOztnQkFoQkEsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7cUJBQ3hCO29CQUNELFNBQVMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLG1CQUFtQixDQUFDO2lCQUNyRDs7SUFFRCwyQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBRFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtFbW9qaVBpY2tlclNlcnZpY2V9IGZyb20gJy4vZW1vamktcGlja2VyLWxpYi5zZXJ2aWNlJztcbmltcG9ydCB7RW1vamlzU2hhcmVkU2VydmljZX0gZnJvbSAnLi9AY29yZS9zZXJ2aWNlcy9lbW9qaXMuc2hhcmVkJztcbmltcG9ydCB7RW1vamlQaWNrZXJMaWJDb21wb25lbnR9IGZyb20gJy4vZW1vamktcGlja2VyLWxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHtPdXRDbGlja0RpcmVjdGl2ZX0gZnJvbSAnLi9AdGhlbWUvZGlyZWN0aXZlcy9vdXRjbGljay5kaXJlY3RpdmUnO1xuaW1wb3J0IHtBdXRvZm9jdXNEaXJlY3RpdmV9IGZyb20gJy4vQHRoZW1lL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE91dENsaWNrRGlyZWN0aXZlLFxuICAgIEF1dG9mb2N1c0RpcmVjdGl2ZSxcbiAgICBFbW9qaVBpY2tlckxpYkNvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRW1vamlQaWNrZXJMaWJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbRW1vamlQaWNrZXJTZXJ2aWNlLCBFbW9qaXNTaGFyZWRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBFbW9qaVBpY2tlckxpYk1vZHVsZSB7XG59XG4iXX0=