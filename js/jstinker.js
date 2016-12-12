$("document").ready(function () {
    var libs = {};

    // List of Frameworks & Extensions
    var frameworks = {
        //d3
        "d3.js": "VIS/D3/d3.js"
    };

    var frameworks_css = {
        // "jQuery UI 1.10.3": "http://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.3/css/base/jquery-ui.css",
        // "Bootstrap 3.2.0": "http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css",
        // "Bootstrap 2.3.2": "http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css",
        // "jQuery UI 1.9.2": "http://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css"
    };

    var layouts = {
        "RadialLayout": "VIS/RadialChart/layout.js"
    };

    var frameworks_extras = {
        ///
        "d3.js": {
            "RadilChart": new $V.RadialChart(),
            "BarChart": new $V.BarChart(),
            "SimpleChart": new $V.SimpleChart()
        }
    };

    // Frameworks & Extensions Dropdown
    $("#dropdownMenu1 li a").click(function (event) {
        event.preventDefault();

        $(".extra").remove();

        var dropdown = $(this).parents('.btn-group');

        var selText = $(this).text();
        dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');

        var lib_extras = frameworks_extras[selText];

        for (extra in lib_extras)
            dropdown.append("<div class='extra checkbox'><label><input type='checkbox' name='extras' class='chkbox'></input><span class='chk_lbl'>" + extra + "</span></label></div>");

        //toggle between check boxs
        $(".chkbox").change(function () {
            $(".chkbox").prop('checked', false);
            $(this).prop('checked', true);

            //generate code when check

            var dropdownMenu1Sel = $("#dropdownMenu1").parents('.btn-group').find('.dropdown-toggle').text().trim();
            var extra_libs = []
            $("#dropdownMenu1").parents('.btn-group').find('input:checked').parent().each(
                function () {
                    extra_libs.push($(this).text().trim());
                }
            );
            if(extra_libs) {
                ace.edit("js-editor").getSession().setValue(frameworks_extras[dropdownMenu1Sel][extra_libs[0]].getText());
            }


        });
    });


    // Script Injection Dropdown
    $("#dropdownMenu2 li a").click(function (event) {
        event.preventDefault();

        var dropdown = $(this).parents('.btn-group');

        var selText = $(this).text();
        dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    // Doctype Dropdown
    $("#dropdownMenu3 li a").click(function (event) {
        event.preventDefault();

        var dropdown = $(this).parents('.btn-group');

        var selText = $(this).text();
        dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    // HTML Dropdown
    $("#dropdownMenu4 li a").click(function (event) {
        event.preventDefault();

        var dropdown = $(this).parents('.btn-group');

        var selText = $(this).text();
        dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    // CSS Dropdown
    $("#dropdownMenu5 li a").click(function (event) {
        event.preventDefault();

        var dropdown = $(this).parents('.btn-group');

        var selText = $(this).text();
        dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    // Javascript Dropdown
    $("#dropdownMenu6 li a").click(function (event) {
        event.preventDefault();

        var dropdown = $(this).parents('.btn-group');

        var selText = $(this).text();
        dropdown.find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    // RUN Button
    $("#btnRun").click(function (event) {

        event.preventDefault();

        var previewDoc = window.frames[0].document;
        previewDoc.src = "http://www.example.com/page/myframe.html?random=" + (new Date()).getTime() + Math.floor(Math.random() * 1000000);

        var css = ace.edit("css-editor").getSession().getValue();
        var script = ace.edit("js-editor").getSession().getValue();
        var html = ace.edit("html-editor").getSession().getValue();


        console.log(script);
        console.log("Ssss");


        var dropdownMenu1Sel = $("#dropdownMenu1").parents('.btn-group').find('.dropdown-toggle').text().trim();
        var lib = frameworks[dropdownMenu1Sel];
        var extra_libs = [];
        $("#dropdownMenu1").parents('.btn-group').find('input:checked').parent().each(
            function () {
                extra_libs.push($(this).text().trim());
            }
        );
        var dropdownMenu2Sel = $("#dropdownMenu2").parents('.btn-group').find('.dropdown-toggle').text().trim();
        previewDoc.write("<!DOCTYPE html>");
        previewDoc.write("<html>");
        previewDoc.write("<head>");
        previewDoc.write("<meta http-equiv='cache-control' content='max-age=0'>");
        previewDoc.write("<meta http-equiv='cache-control' content='no-cache'>");
        previewDoc.write("<meta http-equiv='expires' content='-1'>");
        previewDoc.write("<meta http-equiv='expires' content='Tue, 01 Jan 1980 11:00:00 GMT'>");
        previewDoc.write("<meta http-equiv='pragma' content='no-cache'>");

        previewDoc.write("<style type='text/css'>" + css + "</style>");
        if (lib) {
            previewDoc.write("<script src=" + lib + " type='text/javascript'></script>");
            //make refrence to layouts
            for (var i in layouts) {
                previewDoc.write("<script src=" + layouts[i] + " type='text/javascript'> </script>");
            }
        }
        for (var i in extra_libs) {
            if (extra_libs[i] in frameworks_css)
                previewDoc.write("<style type='text/css' src=" + frameworks_css[extra_libs[i]] + "></style>");

            if (dropdownMenu1Sel in frameworks_extras) {
                previewDoc.write("<script src=" + frameworks_extras[dropdownMenu1Sel][extra_libs[i]].getScript() + " type='text/javascript'></script>");
            }

        }
        if (dropdownMenu2Sel == "onLoad")
            previewDoc.write("<script type='text/javascript'>window.onload = function() {" + script + "}</script>");
        //else if (dropdownMenu2Sel == "onDomready")
        //
        else if (dropdownMenu2Sel == "No wrap - in head")
            previewDoc.write("<script type='text/javascript'>" + script + "</script>");


        previewDoc.write("</head>");
        previewDoc.write("<body>");
        previewDoc.write(html);
        if (dropdownMenu2Sel == "No wrap - in body")
            previewDoc.write("<script type='text/javascript'>" + script + "</script>");
        previewDoc.write("</body>");
        previewDoc.write("</html>");
        console.log(previewDoc);
        previewDoc.close();

        console.log("dddd" + html);
        console.log("dddd" + script);


    });

    // Preview code on page load
    //$("#btnRun").click();

});
