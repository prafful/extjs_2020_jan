//
//    1. create a model
//    2. store/map a data in model
//    3. map data and model with grid
//    4. create the grid

Ext.onReady(function(){

        //define a model
        Ext.define("FriendsModel", {
            extend: 'Ext.data.Model',
            fields:[
                { name:'friendname', mapping:'friendname'},
                { name:'location', mapping:'location'    },
                { name:'score', mapping:'score'    }
            ]
        })

        //create a data. This comes from REST api
        var friends = [
            { friendname:'Oma', location:'Chennai', score:25},
            { friendname:'Peru', location:'Japan', score: 40},
            { friendname:'Tika', location:'Srilanka', score:10},
            { friendname:'Mina', location:'Chennai', score: 50},
            { friendname:'Luka', location:'Japan', score: 80},
            { friendname:'Uma', location:'Srilanka', score: 100}
        ]        

        //map friends variable with FriendsModel. Assign data to model. It will act as data source for grid.
        var dataStore = Ext.create("Ext.data.Store", {
            model:'FriendsModel',
            data:friends
        })

        //create grid
        Ext.create("Ext.grid.Panel", {
            store: dataStore,
            title: 'Friends Collection',
            renderTo: 'gridcomponent',
            width: 600,
            columns:[
                {
                    header:'Friend Name',
                    dataIndex:'friendname',
                    hideable: false,
                    flex: 1

                },
                {
                    header:'Friend Location',
                    dataIndex:'location',
                    hideable: false,
                    flex: 1
                },
                {
                    header:'Score',
                    dataIndex:'score',
                    sortable: false,
                    flex: 2,
                    renderer: function(value){
                        if(value > 20 && value <=40 ){
                            return "Ok OK friend"
                        }
                        if(value > 40 && value <=50 ){
                            return "Good friend"
                        }
                        if(value > 50 && value <=100 ){
                            return "Best friend"
                        }else
                        {
                            return "Find someone else!"
                        }
                    }
                }

            ]
        })
})