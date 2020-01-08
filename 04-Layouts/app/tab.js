Ext.onReady(function () {
    
    Ext.create('Ext.tab.Panel', {
        renderTo: 'tablayout',
        requires:['Ext.layout.container.card'],
        xtype:'layout-cardtabs', //tabpanel
        width:800,
        height:400,
        defaults: {
            bodyPadding: 25
        },
        items: [
            {
                title: 'ExtJS Panel 1',
                html: "Cell 1"
               
            },
            {
                title: 'ExtJS Panel 2',
                html: "Cell 2"
              
            },
            {
                title: 'ExtJS Panel 3',
                html: "Cell 3"
             
            },
       
            {
                title: 'ExtJS Panel 4',
                html: "Cell 4"
             
            },
            {
                title: 'ExtJS Panel 5',
                html: "Cell 5"
         
         
            },
            {
                title: 'ExtJS Panel 6',
                html: "Cell 6"
               
            }


        ]
    })
})