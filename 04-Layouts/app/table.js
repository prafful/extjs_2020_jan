Ext.onReady(function () {
    var panel1 = Ext.create('Ext.Panel', {
        title: 'ExtJS Panel 1',
        html: "Cell 1",
        colspan:3
    })
    var panel2 = Ext.create('Ext.Panel', {
        title: 'ExtJS Panel 2',
        html: "Cell 2",
        height:100
    })
    var panel3 = Ext.create('Ext.Panel', {
        title: 'ExtJS Panel 3',
        html: "Cell 3",
        height:100
    })
    var panel4 = Ext.create('Ext.Panel', {
        title: 'ExtJS Panel 4',
        html: "Cell 4",
        rowspan:2
    })
    var panel5 = Ext.create('Ext.Panel', {
        title: 'ExtJS Panel 5',
        html: "Cell 5"
 
    })
    var panel6 = Ext.create('Ext.Panel', {
        title: 'ExtJS Panel 6',
        html: "Cell 6",
        colspan:3
    })





    Ext.create('Ext.container.Container', {
        renderTo: Ext.getBody(),
        layout: {
            type: 'table',
            columns:3,
            table: {
                style: {
                    width: '100%'
                }
            }
        },
        width:800,
        height:400,
        items: [panel1, panel2, panel3, panel4, panel5, panel6]
    })
})