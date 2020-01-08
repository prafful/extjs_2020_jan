Ext.onReady(function(){
    Ext.create('Ext.Panel', {
        renderTo:'helloext',
        height:200,
        width:600,
        title:'ExtJS Panel',
        html:"<h2>Hello from Ext.JS</h2>"
    })
})