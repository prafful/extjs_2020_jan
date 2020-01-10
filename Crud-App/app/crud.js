
Ext.define('CrudApp.model.Friend',{
    extend:'Ext.data.Model',
    fields:[
        {name: 'friendname', type:'string'},
        {name: 'friendlocation', type:'string'},
        {name: 'friendscore', type:'int'}
    ]
})


Ext.define('CrudApp.store.AllFriends', {
    extend:'Ext.data.Store',
    model:'CrudApp.model.Friend',
    fields:['friendname', 'friendlocation', 'friendscore'],
    data:[
        {
            friendname:'OMA', friendlocation:'Tokyo', friendscore: 52
        },
        {
            friendname:'Peru', friendlocation:'Macau', friendscore: 55
        },
        {
            friendname:'Pesa', friendlocation:'MonteCarlo', friendscore: 53
        },
        {
            friendname:'Nena', friendlocation:'NZ', friendscore: 62
        }
    ]
})


Ext.define('CrudApp.view.FriendList', {
    extend:'Ext.grid.Panel',
    alias: 'widget.friendlist',
    title: 'All Friends List',
    store: 'AllFriends',//store name will come here
    initComponent: function(){
        this.tbar = [{
            text:'Add Friend',
            action:'add'
        }]
        this.columns = [
            { header: 'Friend Name', dataIndex:'friendname'},
            { header: 'Friend Location', dataIndex:'friendlocation'},
            { header: 'Friend Score', dataIndex:'friendscore'}
        ]
        this.callParent(arguments)
    }
})

Ext.define('CrudApp.view.FriendForm', {
    extend: 'Ext.window.Window',
    alias:'widget.friendform',
    title:'Add Friend',
    width:300,
    layout:'fit',
    resizable:false,
    closeAction:'hide',
    modal:true,
    items:[
        {
            xtype:'form',
            layout:'anchor',
            defaults:{
                xtype:'textfield',
                anchor:'100%'
            },
            items:[
                { name: 'friendname', fieldLabel:'Name: '},
                { name: 'friendlocation', fieldLabel:'Location: '},
                { name: 'friendscore', fieldLabel:'Score: '},
            ]

        }
    ],
    buttons:[
        {
            text: 'Add'
        },
        {
            text: 'Reset', 
            handler: function(){
                this.up('window').down('form').getForm().reset()
            }
        },
        {
            text: 'Cancel', 
            handler: function(){
                this.up('window').close()
            }
        }
    ]

})



Ext.define('CrudApp.controller.Friends', {
    extend:'Ext.app.Controller',
    stores:['AllFriends'], //store name will come here
    views:['FriendList', 'FriendForm'] ,   //view names will come here
    refs:[
        {
            ref:'formWindow',
            xtype:'friendform',
            selector:'friendform',
            autoCreate: true
        }
    ],
    init: function(){
        this.control(
            {
                'friendlist > toolbar > button[action=add]':{
                    click: this.someFunction
                }
            }
            )
    },
    someFunction: function(){
        console.log("Help Me Please!")
        var friendwindow = this.getFormWindow()
        friendwindow.setTitle('Add Friend')
        //friendwindow.setAction('add');
        friendwindow.show();
    }
})




Ext.application({
    name:'CrudApp',
    controllers:['Friends'],
    launch: function(){
        Ext.widget('friendlist', {
            width:800,
            height:600,
            renderTo:'crud'
        })
    }
})

