import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule];

@NgModule({

    imports: [MaterialComponents],
    exports: [MaterialComponents]
})
export class MaterialModule { }
