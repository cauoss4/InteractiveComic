/*! Rappid v3.1.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2020-06-11 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


import {Component, ElementRef, OnInit} from '@angular/core';

import {StencilService} from '../services/stencil-service';
import {ToolbarService} from '../services/toolbar-service';
import {InspectorService} from '../services/inspector-service';
import {HaloService} from '../services/halo-service';
import {KeyboardService} from '../services/keyboard-service';
import RappidService from '../services/kitchensink-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    private rappid: any;

    title ='Rappid App';

    constructor(private element: ElementRef) {

    }

    ngOnInit() {

        this.rappid = new RappidService(
            this.element.nativeElement,
            new StencilService(),
            new ToolbarService(),
            new InspectorService(),
            new HaloService(),
            new KeyboardService()
        );
        this.rappid.startRappid();
    }
}
