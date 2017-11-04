# Showpo Banner

Showpo FAQ page with a timed banner that displays just beneath the menu which reads from a local JSON file and displays banner based on scheduled time.

## Instructions

Current banner.js file is in testing mode. When live, comment / remove the JSON testing object section

```
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
```

Uncomment the live version section when taking live

```
// FOR LIVE VERSION (Uncomment when live)

// var bannerModelObject;

// $.getJSON('banner.json', function(data) {
//     bannerModelObject = data;
// });

// END - FOR LIVE VERSION
```

## Author

* Frank Altamirano