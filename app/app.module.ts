import { ButtonModule, CheckBoxModule   } from '@syncfusion/ej2-angular-buttons';

import { ContextMenuModule ,ToolbarModule  } from '@syncfusion/ej2-angular-navigations';

import { FileManagerAllModule } from '@syncfusion/ej2-angular-filemanager';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
@NgModule({ declarations: [ AppComponent ], imports: [ FileManagerAllModule, UploaderModule , DialogModule, CheckBoxModule, ButtonModule, CommonModule, ContextMenuModule, ToolbarModule, BrowserModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
