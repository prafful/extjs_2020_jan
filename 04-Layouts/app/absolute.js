Ext.onReady(function(){


    var panel1 = Ext.create('Ext.Panel', {
         
                height:200,
                width:600,
                title:'ExtJS Panel 1',
                html:"<h2>Hello from Ext.JS from 50,50</h2>",
                x:50, 
                y:50
            })

    var panel2 = Ext.create('Ext.Panel', {
         
                height:200,
                width:600,
                title:'ExtJS Panel 1',
                html:"<h2>Hello from Ext.JS from 100, 80</h2>",
                x:100, 
                y: 80
            })      


        



    Ext.create('Ext.container.Container', {
        renderTo:'absolute',
        layout:'absolute',
        items:[panel1, panel2]
    })

      

})