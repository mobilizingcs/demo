$(function(){
	var demodata = [
		{
		    "urn" : "urn:public:snack",
		    "name" : "Snack",
		    "count" : 1709,
		    "csv" : "data/snack/snackdemo.csv",
		    "xml" : "data/snack/snackdemo.xml"
		},      
		{
		    "urn" : "urn:public:media",
		    "name" : "Media",
		    "count" : 1025,
		    "csv" : "data/media/mediademo.csv",
		    "xml" : "data/media/mediademo.xml"
		},
		{
		    "urn" : "urn:public:nutrition",
		    "name" : "Nutrition",
		    "count" : 1443,
		    "csv" : "data/nutrition/nutritiondemo.csv",
		    "xml" : "data/nutrition/nutritiondemo.xml"
		},
		{
		    "urn" : "urn:public:trash",
		    "name" : "Trash",
		    "count" : 2631,
		    "csv" : "data/trash/trashdemo.csv",
		    "xml" : "data/trash/trashdemo.xml"
		}
	];

	$.each(demodata, function(i, val){
		var campaign = val.name;
		var urn = val.urn;
		var count = val.count;
		var csvlink = val.csv;
		var xmllink = val.xml;

		var tr = $("<tr>").appendTo("tbody");
		$("<td />").text(campaign).appendTo(tr);
		$("<td />").text(urn).appendTo(tr);
		$("<td />").text(count).appendTo(tr);
		$("<td />").text(count).appendTo(tr);

		var td5 = $("<td>").addClass("buttontd").appendTo(tr);
        var btn = $("<div />").addClass("dropdown").append('\
            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"><span class="glyphicon glyphicon-align-justify"></span> Action <span class="caret"></span></button>').appendTo(td5);

        var ul = $("<ul />").addClass("dropdown-menu").appendTo(btn);

        var dashboardlink = $("<a />").appendTo($("<li />").appendTo(ul)).append('<span class="glyphicon glyphicon-picture"></span> Dashboard').attr("href", '/navbar/dashboard/#' + urn)
        var plotapplink = $("<a />").appendTo($("<li />").appendTo(ul)).append('<span class="glyphicon glyphicon-blackboard"></span> PlotApp').attr("href", '/navbar/plotapp/#' + urn)   
 
        ul.append($("<li >").addClass('divider')) 

        var csvlink = $("<a />").appendTo($("<li />").appendTo(ul)).append('<span class="glyphicon glyphicon-file"></span> Export Data').attr("href", csvlink).attr("target", "_blank");
        var xmllink = $("<a />").appendTo($("<li />").appendTo(ul)).append('<span class="glyphicon glyphicon-floppy-save"></span> Download XML').attr("href", xmllink).attr("target", "_blank");
	});

	var table = $('#demotable').DataTable( {
        "dom" : '<"pull-left"f>tip',
        "order": [[ 1, "desc" ]],
        "aoColumnDefs": [
           { 'bSortable': false, 'aTargets': [ 4 ] },
           { 'bSearchable': false, 'aTargets': [ 4 ] }
        ]            
    })
})
