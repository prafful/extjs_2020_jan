Ext.onReady(function () {
    
    Ext.create('Ext.container.Container', {
        renderTo: Ext.getBody(),
        layout: 'accordion',
        width:800,
        height:400,
        items: [
            {
                title: 'ExtJS Panel 1',
                html: "Cell 1"
               
            },
            {
                title: 'ExtJS Panel 2',
                html: "Cell 2",
                height:100
            },
            {
                title: 'ExtJS Panel 3',
                html: "Cell 3",
                height:100
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