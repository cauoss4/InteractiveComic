/*! Rappid v3.1.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2020-06-11 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


(function(joint, util) {

    joint.shapes.app.NavigatorElementView = joint.dia.ElementView.extend({

        body: null,

        markup: [{
            tagName: 'rect',
            selector: 'body',
            attributes: {
                'fill': '#31d0c6'
            }
        }],

        presentationAttributes: {
            position: ['TRANSLATE'],
            size: ['RESIZE'],
            angle: ['ROTATE']
        },

        render: function() {
            var doc = util.parseDOMJSON(this.markup);
            this.body = doc.selectors.body;
            this.el.appendChild(doc.fragment);
            this.updateNodesAttributes();
            this.updateTransformation();
        },

        updateNodesAttributes: function() {
            var size = this.model.get('size');
            this.body.setAttribute('width', size.width);
            this.body.setAttribute('height', size.height);
        }
    });

    joint.shapes.app.NavigatorLinkView = joint.dia.LinkView.extend({

        initialize: util.noop,

        render: util.noop,

        update: util.noop
    });

})(joint, joint.util);
