import * as React from 'react';

import {StencilService} from './services/stencil-service';
import {ToolbarService} from './services/toolbar-service';
import {InspectorService} from './services/inspector-service';
import {HaloService} from './services/halo-service';
import {KeyboardService} from './services/keyboard-service';
import RappidService from './services/kitchensink-service';

interface Props {
}

interface State {
}

class Rappid extends React.Component<Props, State> {

    rappid: RappidService;

    constructor(props: Props) {
        super(props);
    }

    componentDidMount() {

        this.rappid = new RappidService(
            document.getElementById('app'),
            new StencilService(),
            new ToolbarService(),
            new InspectorService(),
            new HaloService(),
            new KeyboardService()
        );

        this.rappid.startRappid();
    }

    render() {

        return (
            <div id="app" ref="app" className="joint-app joint-theme-modern">
                <div className="app-header">
                    <div className="app-title">
                        <h1>Rappid</h1>
                    </div>
                    <div className="toolbar-container"/>
                </div>
                <div className="app-body">
                    <div className="stencil-container"/>
                    <div className="paper-container"/>
                    <div className="inspector-container"/>
                    <div className="navigator-container"/>
                </div>
            </div>
        );
    }
}

export default Rappid;
