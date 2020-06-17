/*! Rappid v3.1.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2020-06-11 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


import * as joint from './vendor/rappid';
import {ThemePicker} from './src/components/theme-picker';

import KitchenSinkService from './src/services/kitchensink-service'

import {StencilService} from './src/services/stencil-service';
import {ToolbarService} from './src/services/toolbar-service';
import {InspectorService} from './src/services/inspector-service';
import {HaloService} from './src/services/halo-service';
import {KeyboardService} from './src/services/keyboard-service';

const app = new KitchenSinkService(
    document.getElementById('app'),
    new StencilService(),
    new ToolbarService(),
    new InspectorService(),
    new HaloService(),
    new KeyboardService()
);

app.startRappid();

const themePicker = new ThemePicker({ mainView: app });
themePicker.render().$el.appendTo(document.body);

// for easier debugging in the browser's console
declare var window: any;
window['joint'] = joint;
window['app'] = app;
