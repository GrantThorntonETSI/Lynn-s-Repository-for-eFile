////////////////////////////////////////////////////////////////////////////////
        // ajax form submit
        // we will need one for each file upload form
        // but for now, just get one working
        ////////////////////////////////////////////////////////////////////////////////

        // this is the classname of the submit button
        $(".submitCCSpecimen").click(function() {



            var formID = $(this).attr("form");
            var classNumber = $(this).attr("cat-num");

            var fileInputId = $(this).attr("file-id");

            var imageId = $(this).attr("class-img-id");

            var spinnerID = $(this).attr("spinner-id");
            $('#'+spinnerID).show();
            var fileInput = document.getElementById(fileInputId);
            var file = fileInput.files[0];
            var formData = new FormData();
            formData.append('file', file);
            formData.append('appID', appInternalID);
            formData.append('catNum',classNumber);

            var url = $("#"+formID).attr("action");
            // Get the selected files from the input.
            // get form url
            $.ajax({
                type: "POST",
                url: url,
                data: formData, // serializes the form's elements.
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                success: function(data)
                {
                    // we will return the the file url
                    // call jquery and set it in the img div
                    var imgPath = parsePathFromResponse(data);
                    $('#'+imageId).attr("src", imgPath);
                    $("#"+spinnerID).hide();
                    //$("#cat-spec-img").fadeIn(500);
                }
            });


            return false; // avoid to execute the actual submit of the form.
        });


        // this is the id of the submit button
        $(".submitGSSpecimen").click(function() {



            var formID = $(this).attr("form");
            var gsID = $(this).attr("gs-id");

            var fileInputId = $(this).attr("file-id");

            var imageId = $(this).attr("gs-img-id");

            var spinnerID = $(this).attr("spinner-id");
            $('#'+spinnerID).show();
            var fileInput = document.getElementById(fileInputId);
            var file = fileInput.files[0];
            var formData = new FormData();
            formData.append('file', file);
            formData.append('appID', appInternalID);
            formData.append('gsID',gsID);

            var url = $("#"+formID).attr("action");
            // Get the selected files from the input.
            // get form url
            $.ajax({
                type: "POST",
                url: url,
                data: formData, // serializes the form's elements.
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                success: function(data)
                {
                    // we will return the the file url
                    // call jquery and set it in the img div
                    var imgPath = parsePathFromResponse(data);


                    $('#'+imageId).attr("src", imgPath);
                    $("#"+spinnerID).hide();
                    //$("#cat-spec-img").fadeIn(500);
                }
            });


            return false; // avoid to execute the actual submit of the form.
        });