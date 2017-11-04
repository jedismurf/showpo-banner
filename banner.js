jQuery(function($){
    
    //    alert("loaded");
    
    // FOR LIVE VERSION (Uncomment when live)

    // var bannerModelObject;

    // $.getJSON('banner.json', function(data) {
    //     bannerModelObject = data;
    // });

    // END - FOR LIVE VERSION

    // JSON Datasource - Testing Purposes (Comment or remove when live)
    
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

    var bannerModelObject = JSON.parse(bannerJSON);
    
    // END - JSON Datasource - Testing Purposes

    var bannerActive = false;
    var currentBanner;

    setInterval(function(){
        if(bannerModelObject){
            var currentTime = new Date();

            // Check if a banner is active and if its time has expired
            if(currentBanner){
                var currentBannerStartTime = new Date(currentBanner["Start"]);
                var currentBannerEndTime = new Date(currentBanner["End"]);

                if(bannerActive){
                    if((currentTime < currentBannerStartTime) || (currentTime > currentBannerEndTime)) {
                        // No longer display banner
                        $('#banner-top').hide();
                        bannerActive = false;
                    } 
                }
            } 

            // Search through banners to see if there is a banner that needs to be displayed
            if(!bannerActive){
                bannerModelObject.forEach(function(bannerData) {

                    var bannerStartTime = new Date(bannerData["Start"]);
                    var bannerEndTime = new Date(bannerData["End"]);
        
                    if((currentTime > bannerStartTime) && (currentTime < bannerEndTime)) {
                        currentBanner = bannerData;
                        bannerActive = true;

                        // Display Current Banner
                        $('#banner-top').show();
                        $('#banner-top').attr('href', currentBanner["URL"]);
                        $('#banner-top .banner-container').css({"background": "url(" + currentBanner["Image"] + ") #eec9d2", "background-size": "contain", "background-repeat": "no-repeat"});
                        $('#banner-top .banner-title').text(currentBanner["Title"]);

                        return;
                    }
                }, this);
            }
        }
    }, 1000);
});