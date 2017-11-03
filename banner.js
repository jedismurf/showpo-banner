jQuery(function($){

//    alert("loaded");
    /* JSON Datasource */
    var bannerJSON = `[
        {
          "Title" : "Shop Tees",
          "Start" : "2017-10-14 10:00:00",
          "End"   : "2017-10-15 10:00:00",
          "URL"   : "https://www.showpo.com/collection/graphics.html",
          "Image" : "https://executiveponies.com/media/wysiwyg/home/tees.jpg"
        },
        {
          "Title" : "Shop What's New",
          "Start" : "2017-10-16 10:00:00",
          "End"   : "2017-10-17 23:00:00",
          "URL"   : "https://www.showpo.com/whats-new.html",
          "Image" : "https://executiveponies.com/media/wysiwyg/home/whatsnew_1.jpg"
        }
      ]`;

    setInterval(function(){
        var currentTime = new Date();
        // console.log(currentTime);

        var bannerObject = JSON.parse(bannerJSON);

        bannerObject.forEach(function(banner) {
            var title = banner["Title"];
            var startDate = banner["Start"];
            var endDate = banner["End"];
            var url = banner["URL"];
            var image = banner["Image"];

            // console.log("Title: " + title);
            // console.log("Start Date: " + startDate);
            // console.log("End Date: " + endDate);
            // console.log("URL: " + url);
            // console.log("Image: " + image);
        }, this);

        var bannerStartTime = new Date('2017-10-14 10:00:00');
        // console.log(bannerStartTime);

        var bannerEndTime = new Date('2017-10-14 10:00:00');
        // console.log(bannerEndTime);

        if(currentTime > bannerStartTime) {
            // Display Current Banner
        }
        // var banner = JSON.parse(bannerJSON);
        // console.log(banner);
    }, 1000);
});