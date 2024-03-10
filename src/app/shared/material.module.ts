import { NgModule } from "@angular/core";
import {MatTableModule} from '@angular/material/table';

const MAT = [
    MatTableModule
];

@NgModule({
    declarations:[],
    imports:[
        ...MAT
    ],
    exports:[
        ...MAT
    ]
})
export class MaterialModule{}