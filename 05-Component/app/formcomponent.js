Ext.onReady(function(){
    Ext.create('Ext.panel.Panel', {
        id:'myform',
        renderTo:'formcomponent',
        width:800,
        items:[
            {
                xtype:'textfield',
                fieldLabel: 'Full Name:'
            },
            {
                xtype:'textarea',
                fieldLabel: 'Description'
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Date Of Birth'
            },
            {
                xtype:'fieldcontainer',
                fieldLabel: 'Marital Status ',
                defaultType:'radiofield',
                layout:'hbox',
                items:[
                    {
                        boxLabel: 'Married',
                        inputValue:1,
                        id:'radio1',
                        name:'ms'
                    },
                    {
                        boxLabel: 'Un-Married',
                        inputValue:2,
                        id:'radio2',
                        name:'ms'
                    },
                ]
            },
            {
                xtype:'fieldcontainer',
                fieldLabel: 'Locations Visited ',
                defaultType:'checkboxfield',
                layout:'hbox',
                items:[
                    {
                        boxLabel: 'Chennai',
                        inputValue:1,
                        id:'check1',
                        name:'lv'
                    },
                    {
                        boxLabel: 'Tokyo',
                        inputValue:2,
                        id:'check2',
                        name:'lv'
                    },
                    {
                        boxLabel: 'China',
                        inputValue:3,
                        id:'check3',
                        name:'lv'
                    },
                    {
                        boxLabel: 'Assam',
                        inputValue:4,
                        id:'check4',
                        name:'lv'
                    }
                ]
            }
            

        ],
        bbar:[
            {
                text:'Select All Locations',
                handler: function(){
                    Ext.getCmp("check1").setValue(true)
                    Ext.getCmp("check2").setValue(true)
                    Ext.getCmp("check3").setValue(true)
                    Ext.getCmp("check4").setValue(true)
                }                   
            }
        ]
    })
})