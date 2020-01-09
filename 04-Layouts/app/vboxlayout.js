Ext.onReady(function () {
    
    Ext.create('Ext.panel.Panel', {
        renderTo: 'vboxlayout',
        requires:['Ext.layout.container.VBox'],
        xtype:'layout-vertical-vbox', //tabpanel
        layout:{
            type:'vbox',
            align:'stretch'
        },
        width:600,
        height:800,
        items: [
            {
                title: 'ExtJS Panel 1',
                html: "Cell 1",
                flex:1,
                margin:'10 0 10 0'
               
            },
            {
                title: 'ExtJS Panel 2',
                html: "Cell 2",
                flex:1 ,
                margin:'10 0 10 0'
              
            },
            {
                title: 'ExtJS Panel 3',
                html: "Cell 3",
                flex:1 ,
                margin:'10 0 10 0'
             
            },
       
            {
                title: 'ExtJS Panel 4',
                html: "Cell 4",
                flex:1 
             
            },
            {
                title: 'ExtJS Panel 5',
                html: "Cell 5",
                flex:4 
         
         
            },
            {
                title: 'ExtJS Panel 6',
                html: "Cell 6",
                flex:2
               
            }


        ]
    })
})