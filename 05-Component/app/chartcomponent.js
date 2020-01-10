Ext.onReady(function(){
    Ext.create('Ext.chart.CartesianChart',{
        renderTo: 'chartcomponent',
        width:800,
        height: 600,
        store:{
            fields:['name', 'point1', 'point2'],
            data:[
                { "name":'Plot1', "point1":45, "point2":50 },
                { "name":'Plot1', "point1":40, "point2":55 },
                { "name":'Plot1', "point1":55, "point2":30 },
                { "name":'Plot1', "point1":70, "point2":30 },
                { "name":'Plot1', "point1":66, "point2":55 },
                { "name":'Plot1', "point1":85, "point2":50 },
                { "name":'Plot1', "point1":25, "point2":30 }
            ]
        },
        legend:{
            docked:'bottom'
        },
        //x and y axis
        axes:[
            {
                type:'numeric',
                position:'left'
            },
            {
                type:'category',
                position:'bottom',
                visibleRange:[0,1]
            }
        ],
        //do the plotting
        series:[
            {
                type:'line',
                xField:'name',
                yField:'point1'
            },
            {
                type:'line',
                xField:'name',
                yField:'point2'
            }
        ]
    })
})