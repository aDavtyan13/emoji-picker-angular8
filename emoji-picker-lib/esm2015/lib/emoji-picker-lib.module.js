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
export class EmojiPickerLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktcGlja2VyLWxpYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9lbW9qaS1waWNrZXItbGliLyIsInNvdXJjZXMiOlsibGliL2Vtb2ppLXBpY2tlci1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFFN0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDckUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDekUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFpQjNFLE1BQU0sT0FBTyxvQkFBb0I7OztZQWZoQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLFlBQVk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUM7YUFDckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge0Vtb2ppUGlja2VyU2VydmljZX0gZnJvbSAnLi9lbW9qaS1waWNrZXItbGliLnNlcnZpY2UnO1xuaW1wb3J0IHtFbW9qaXNTaGFyZWRTZXJ2aWNlfSBmcm9tICcuL0Bjb3JlL3NlcnZpY2VzL2Vtb2ppcy5zaGFyZWQnO1xuaW1wb3J0IHtFbW9qaVBpY2tlckxpYkNvbXBvbmVudH0gZnJvbSAnLi9lbW9qaS1waWNrZXItbGliLmNvbXBvbmVudCc7XG5pbXBvcnQge091dENsaWNrRGlyZWN0aXZlfSBmcm9tICcuL0B0aGVtZS9kaXJlY3RpdmVzL291dGNsaWNrLmRpcmVjdGl2ZSc7XG5pbXBvcnQge0F1dG9mb2N1c0RpcmVjdGl2ZX0gZnJvbSAnLi9AdGhlbWUvZGlyZWN0aXZlcy9hdXRvZm9jdXMuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgT3V0Q2xpY2tEaXJlY3RpdmUsXG4gICAgQXV0b2ZvY3VzRGlyZWN0aXZlLFxuICAgIEVtb2ppUGlja2VyTGliQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBFbW9qaVBpY2tlckxpYkNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtFbW9qaVBpY2tlclNlcnZpY2UsIEVtb2ppc1NoYXJlZFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEVtb2ppUGlja2VyTGliTW9kdWxlIHtcbn1cbiJdfQ==