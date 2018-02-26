 var panelsList = {
     "panels": [{
             "panelName": "episode 1 - cover ",
             "panelLink": "/res/panels/volume1/v1-e1-cover.html"
                },
         {
             "panelName": "episode 1 - panel 1",
             "panelLink": "/res/panels/volume1/v1-e1-p1.html"
                },
         {
             "panelName": "episode 1 - panel 2",
             "panelLink": "/res/panels/volume1/v1-e1-p2.html"
                }
         ]
 };

 $(document).ready(function () {
     var listItems = '<option selected="selected" value="0">- Select -</option>';
     for (var i = 0; i < panelsList.panels.length; i++) {
         listItems += "<option value='" + panelsList.panels[i].panelLink + "'>" + panelsList.panels[i].panelName + "</option>";
     }


     $("#dropdown").html(listItems);

     $(function () {
         $('#dropdown').on('change', function () {
             var url = $(this).val(); // get selected value
             if (url) { // require a URL
                 window.location = url; // redirect
             }
             return false;
         });
     });

     $(".nav-btn").click(function (event) {
         $("#nav").animate({
             "right": "0px"
         }, "slow").addClass('visible');

     });

     $(".nav-close").click(function (event) {
         $("#nav").animate({
             "right": "-9999px"
         }, "slow").removeClass('visible');

     });

     $(".panel").click(function (event) {
         $(this).toggleClass('fullsize');
         $(this).toggleClass('modal');
         $("body").toggleClass('modal-open');
     });

 });
