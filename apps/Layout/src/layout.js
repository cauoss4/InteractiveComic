/*! Rappid v3.1.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2015 client IO

 2020-06-11 


This Source Code Form is subject to the terms of the Rappid Trial License
, v. 2.0. If a copy of the Rappid License was not distributed with this
file, You can obtain one at http://jointjs.com/license/rappid_v2.txt
 or from the Rappid archive as was distributed by client IO. See the LICENSE file.*/


(function(joint) {

    var Shape = joint.shapes.standard.Rectangle;
    var Link = joint.shapes.standard.Link;

    function rnd(min, max) {

        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function rndColor() {

        return 'hsl(' + rnd(171, 181) + ',' + rnd(58, 72) + '%,' + rnd(45, 55) + '%)';
    }

    function createCells(struct, graph) {

        var label = struct.label
        var children = struct.children || []
        var embeds = struct.embeds || [];

        var root = new Shape({
            attrs: {
                label: {
                    text: label,
                    fill: 'yellow'
                },
                body: {
                    fill: rndColor(),
                    rx: 5,
                    ry: 5
                }
            }
        });
        root.addTo(graph);

        if (embeds.length > 0) {
            root.attr('label/refY', 20);
            embeds.forEach(function(text) {

                var embed = new Shape({
                    attrs: {
                        label: {
                            text: text,
                            fill: 'yellow'
                        },
                        body: {
                            fill: rndColor()
                        }
                    }
                });
                embed.resize(40, 40);
                embed.addTo(graph);
                root.embed(embed);
            });

        } else {
            root.resize(60, 60);
        }

        if (children.length > 0) {
            children.forEach(function(childStruct) {

                var child = createCells(childStruct, graph);
                var link = new Link();
                link.source(root);
                link.target(child);
                link.addTo(graph);
            });
        }

        return root;
    }

    function layoutCells(graph) {

        var cells = graph.getCells().filter(function(cell) {
            return !cell.isEmbedded();
        });

        cells.forEach(function(container) {

            var embeds = container.getEmbeddedCells();
            if (embeds.length === 0) return;

            joint.layout.GridLayout.layout(embeds, { columns: 2, dx: 10, dy: 10 });
            container.fitEmbeds({ padding: { horizontal: 10, bottom: 10, top: 40 }});
        });

        joint.layout.DirectedGraph.layout(cells, {
            setPosition: function(el, p) {
                el.position(p.x, p.y, { deep: true });
            }
        });
    }

    var structure = {
        label: 'a1',
        children: [{
            label: 'b1',
            embeds: ['e1', 'e2', 'e3'],
            children: [{
                label: 'c1',
                embeds: ['d1', 'd2', 'd3']
            }, {
                label: 'c2',
                embeds: ['d4', 'd5', 'd6']
            }]
        }, {
            label: 'b2',
            children: [{
                label: 'c3',
                embeds: ['d7', 'd8', 'd9', 'd10', 'd11']
            }]
        }]
    };

    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({
        el: document.getElementById('paper'),
        width: '100%',
        height: '100%',
        gridSize: 1,
        model: graph
    });

    console.time('layout');
    var tmpGraph = new joint.dia.Graph;
    createCells(structure, tmpGraph);
    layoutCells(tmpGraph);
    graph.resetCells(tmpGraph.getCells());
    console.timeEnd('layout');

    function rescale() {
        paper.scaleContentToFit({ padding: 50 });
    }

    window.addEventListener('resize', joint.util.debounce(rescale), false);
    rescale();

})(joint);

