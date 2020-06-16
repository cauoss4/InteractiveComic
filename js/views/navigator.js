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

        initFlag: ['RENDER', 'UPDATE', 'TRANSFORM'],

        presentationAttributes: {
            size: ['UPDATE'],
            position: ['TRANSFORM'],
            angle: ['TRANSFORM']
        },

        confirmUpdate: function(flags) {

            if (this.hasFlag(flags, 'RENDER')) this.render();
            if (this.hasFlag(flags, 'UPDATE')) this.update();
            if (this.hasFlag(flags, 'TRANSFORM')) this.updateTransformation();
        },

        render: function() {
            var doc = util.parseDOMJSON(this.markup);
            this.body = doc.selectors.body;
            this.el.appendChild(doc.fragment);
        },

        update: function() {
            var size = this.model.size();
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
