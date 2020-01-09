Ext.onReady(function(){

    var area2 = Ext.create('Ext.panel.Panel', {
        title:'Area 2',
        region:'west',
        html:'I am in west!'
    })

    var area5 = Ext.create('Ext.panel.Panel', {
        title:'Area 5',
        region:'center',
        html:'I am in center!',
        layout:'absolute',
        items:[
            {
                height:100,
                width:100,
                title:'ExtJS Panel 1',
                html:"<h2>Hello from Ext.JS from 50,50</h2>",
                x:50, 
                y:50
            },
            {
         
                height:200,
                width:200,
                title:'ExtJS Panel 1',
                html:"<h2>Hello from Ext.JS from 100, 80</h2>",
                x:100, 
                y: 80
            }
        ]
    })


    Ext.create('Ext.panel.Panel', {
        renderTo:'borderlayout',
        height:600,
        width:800,
        layout:'border',
        defaults:{
            split:true,
            collapsible:true,
            bodyStyle:'padding: 25px'
        },
        items:[
            {
                title:'Area 1',
                region:'east',
                html:'This is east!'
            },
            area2,
            {
                title:'Area 3',
                region:'south',
                html:'This is south!'
            },
            {
                title:'Area 4',
                region:'north',
                html:'This is north!'
            },
            area5



    ]
    })
})