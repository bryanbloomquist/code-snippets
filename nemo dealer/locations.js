const locations = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-75.5270103, 40.043893],
    },
    properties: {
      name: "Chester County Outdoors",
      description:
        '<div class="street-block"><div class="thoroughfare">55 Lancaster Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Malvern</span>, <span class="state">PA</span> <span class="postal-code">19355</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "484-328-3354",
      gsl_props_web_rendered: "https://chestercountyoutdoors.com/",
      Nid: 506,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-84.1180329, 34.4211363],
    },
    properties: {
      name: "Appalachian Armory, Inc.",
      description:
        '<div class="street-block"><div class="thoroughfare">40 Hwy. 9 N</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Dawsonville</span>, <span class="state">GA</span> <span class="postal-code">30534</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "706-216-2113",
      gsl_props_web_rendered: "www.appalachianarmory.com",
      Nid: 485,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.5606374, 29.7798961],
    },
    properties: {
      name: "BOR Armory",
      description:
        '<div class="street-block"><div class="thoroughfare">905 Town and Country Blvd</div>\n<div class="premise">#525</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Houston</span>, <span class="state">TX</span> <span class="postal-code">77024</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "281-467-8092",
      gsl_props_web_rendered: null,
      Nid: 483,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-85.3435091, 38.2084027],
    },
    properties: {
      name: "OPS Supply",
      description:
        '<div class="street-block"><div class="thoroughfare">820 Buck Creek Road</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Simpsonville</span>, <span class="state">KY</span> <span class="postal-code">40067</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "502-321-7341",
      gsl_props_web_rendered: null,
      Nid: 482,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-85.0897051, 41.3791517],
    },
    properties: {
      name: "Signature Arms",
      description:
        '<div class="street-block"><div class="thoroughfare">2196 County Road 40</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Auburn</span>, <span class="state">IN</span> <span class="postal-code">46706</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "260-450-3007",
      gsl_props_web_rendered: null,
      Nid: 473,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-118.42552, 46.009037],
    },
    properties: {
      name: "Varmint Extreme",
      description:
        '<div class="street-block"><div class="thoroughfare">63 Starview Pl</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Walla Walla</span>, <span class="state">WA</span> <span class="postal-code">99362</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "541-420-2314",
      gsl_props_web_rendered:
        "http://www.varmintextreme.com/home.cfm?dir_cat=18148",
      Nid: 447,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-73.7146693, 42.2942465],
    },
    properties: {
      name: "Zero Tolerance Manufacturing",
      description:
        '<div class="street-block"><div class="thoroughfare">1131 NY-9H</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Ghent</span>, <span class="state">NY</span> <span class="postal-code">12075</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "518-653-1720",
      gsl_props_web_rendered: "http://zerotolmfg.com/",
      Nid: 416,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.7474581, 33.0200164],
    },
    properties: {
      name: "Mister Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">2751 West 15th St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Plano</span>, <span class="state">TX</span> <span class="postal-code">75075</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "214-901-7429",
      gsl_props_web_rendered: "http://misterguns.com",
      Nid: 413,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-92.9566786, 44.9508095],
    },
    properties: {
      name: "Evolution Arms",
      description:
        '<div class="street-block"><div class="thoroughfare">7300 Hudson Blvd</div>\n<div class="premise">#170</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Oakdale</span>, <span class="state">MN</span> <span class="postal-code">55128</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "651-493-4422",
      gsl_props_web_rendered: null,
      Nid: 387,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-120.5821605, 46.6276106],
    },
    properties: {
      name: "The Range",
      description:
        '<div class="street-block"><div class="thoroughfare">1701 Garretson Ln</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Yakima</span>, <span class="state">WA</span> <span class="postal-code">98908</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "509-571-1449",
      gsl_props_web_rendered: "http://www.therangellc.com",
      Nid: 386,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-75.448421, 43.2063031],
    },
    properties: {
      name: "Ron Sutphin &amp; Associates, LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">200 Railroad St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Rome</span>, <span class="state">NY</span> <span class="postal-code">13440</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "315-225-1813",
      gsl_props_web_rendered: null,
      Nid: 382,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.4891642, 29.8029471],
    },
    properties: {
      name: "HInterland Outfitters",
      description:
        '<div class="street-block"><div class="thoroughfare">PO Box 550804</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Houston</span>, <span class="state">TX</span> <span class="postal-code">77255</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "877-446-8370",
      gsl_props_web_rendered: "http://www.hinterlandoutfitters.com",
      Nid: 381,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.0879168, 35.0857243],
    },
    properties: {
      name: "Krause Arms America",
      description:
        '<div class="street-block"><div class="thoroughfare">2495 Ivy Creek Ford</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">York</span>, <span class="state">SC</span> <span class="postal-code">29745</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "803-487-7556",
      gsl_props_web_rendered: null,
      Nid: 379,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-98.1801828, 29.8471954],
    },
    properties: {
      name: "Hill Country Truck Store and Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">1950 FM 2673</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Canyon Lake</span>, <span class="state">TX</span> <span class="postal-code">78133</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "830-226-7339",
      gsl_props_web_rendered: "http://www.hillcountrytruckstore.com",
      Nid: 378,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-94.5781773, 39.1427937],
    },
    properties: {
      name: "Snapshots Gun Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">2001 Clay St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">North Kansas City</span>, <span class="state">MO</span> <span class="postal-code">64116</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "816-221-9117",
      gsl_props_web_rendered: null,
      Nid: 377,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-76.4884919, 40.408201],
    },
    properties: {
      name: "Andrews Arms",
      description:
        '<div class="street-block"><div class="thoroughfare">315 Shepherd St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Jonestown</span>, <span class="state">PA</span> <span class="postal-code">17038</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "717-222-1768",
      gsl_props_web_rendered: "http://www.andrewsarms.com",
      Nid: 376,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.8875937, 34.21632],
    },
    properties: {
      name: "Backwater Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">1024 S Kerr Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Wilmington</span>, <span class="state">NC</span> <span class="postal-code">28403</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "910-399-1451",
      gsl_props_web_rendered: "http://www.backwaterguns.com",
      Nid: 375,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.0399666, 47.5407922],
    },
    properties: {
      name: "West Coast Armory",
      description:
        '<div class="street-block"><div class="thoroughfare">240 NW Gilman Blvd</div>\n<div class="premise">Suite D</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Issaquah</span>, <span class="state">WA</span> <span class="postal-code">98027</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "425-391-4867",
      gsl_props_web_rendered: "http://www.westcoastarmory.com",
      Nid: 374,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.1635491, 47.5822894],
    },
    properties: {
      name: "West Coast Armory",
      description:
        '<div class="street-block"><div class="thoroughfare">13216 Southeast 32nd Street</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Bellevue</span>, <span class="state">WA</span> <span class="postal-code">98005</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "425-641-2877",
      gsl_props_web_rendered: "http://www.westcoastarmory.com",
      Nid: 373,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-91.419973, 44.906072],
    },
    properties: {
      name: "Marc-On Shooting",
      description:
        '<div class="street-block"><div class="thoroughfare">089 124th Street</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Lake Hallie</span>, <span class="state">WI</span> <span class="postal-code">54729</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "715-861-7651",
      gsl_props_web_rendered: "https://www.marc-onshooting.com",
      Nid: 372,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.6239056, 41.4051963],
    },
    properties: {
      name: "The Enthusiast of Ohio (Cleveland Armory)",
      description:
        '<div class="street-block"><div class="thoroughfare">9100 Bank St</div>\n<div class="premise">Suite A</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Valley View</span>, <span class="state">OH</span> <span class="postal-code">44125</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "216-264-1121",
      gsl_props_web_rendered: "https://www.clevelandarmory.com",
      Nid: 371,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.0118308, 41.0637328],
    },
    properties: {
      name: "Rockland Indoor Shooting &amp; Education",
      description:
        '<div class="street-block"><div class="thoroughfare">100 N Middletown Road</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Pearl River</span>, <span class="state">NY</span> <span class="postal-code">10965</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "845-735-7473",
      gsl_props_web_rendered: "http://www.rocklandindoorshooting.com",
      Nid: 370,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-84.2804798, 34.0535927],
    },
    properties: {
      name: "KF Armory",
      description:
        '<div class="street-block"><div class="thoroughfare">5755 N Point Pkwy</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Alpharetta</span>, <span class="state">GA</span> <span class="postal-code">30022</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "(678) 990-3038",
      gsl_props_web_rendered: "https://kfarmory.com/",
      Nid: 366,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-76.1448367, 36.8431259],
    },
    properties: {
      name: "Superior Pawn &amp; Gun",
      description:
        '<div class="street-block"><div class="thoroughfare">4859 Virginia Beach Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Virginia Beach</span>, <span class="state">VA</span> <span class="postal-code">32462</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "757-490-4760",
      gsl_props_web_rendered: "http://superiorpawn.com/",
      Nid: 365,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.532742, 38.373362],
    },
    properties: {
      name: "Every 2nd Matters LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">15 Peach Lawn Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Fredericksburg</span>, <span class="state">VA</span> <span class="postal-code">22406</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "408-687-8792",
      gsl_props_web_rendered: "http://every2ndmatters.us/",
      Nid: 364,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.5592898, 39.1078722],
    },
    properties: {
      name: "Loudon Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">302 Industrial Ct. SE #F</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Leesburg</span>, <span class="state">VA</span> <span class="postal-code">20175</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "703-771-7479",
      gsl_props_web_rendered: "http://www.loudoungunsinc.com/",
      Nid: 363,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.1757155, 38.9352838],
    },
    properties: {
      name: "Nova Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">1389 Chain Bridge Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Mclean</span>, <span class="state">VA</span> <span class="postal-code">22101</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "703-448-4826",
      gsl_props_web_rendered: "http://novafirearms.com/",
      Nid: 362,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-71.7870028, 42.7157326],
    },
    properties: {
      name: "Old Glory Guns &amp; Ammo",
      description:
        '<div class="street-block"><div class="thoroughfare">443 Fitchburg Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Mason</span>, <span class="state">NH</span> <span class="postal-code">03048</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "603-878-2854",
      gsl_props_web_rendered: "http://www.oldglorygunsandammo.com/",
      Nid: 361,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-88.5986341, 44.7822626],
    },
    properties: {
      name: "RKG Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">811 E Green Bay St.</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Shawano</span>, <span class="state">WI</span> <span class="postal-code">54166</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "715-526-2222",
      gsl_props_web_rendered: "http://rkgsportsllc.com/",
      Nid: 360,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-85.0897051, 41.3791517],
    },
    properties: {
      name: "Signature Arms",
      description:
        '<div class="street-block"><div class="thoroughfare">2196 County Rd 40</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Auburn</span>, <span class="state">IN</span> <span class="postal-code">46706</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "260-615-4228",
      gsl_props_web_rendered: null,
      Nid: 359,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.6775923, 39.5931161],
    },
    properties: {
      name: "Hendershot&#039;s Sporting Goods and Range",
      description:
        '<div class="street-block"><div class="thoroughfare">19828 National Pike</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Hagerstown</span>, <span class="state">MD</span> <span class="postal-code">21740</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "240-347-4883",
      gsl_props_web_rendered: null,
      Nid: 358,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-82.7227618, 39.9948648],
    },
    properties: {
      name: "The Bullet Ranceh",
      description:
        '<div class="street-block"><div class="thoroughfare">12425 Broad St SW</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Pataskala</span>, <span class="state">OH</span> <span class="postal-code">43062</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "740-964-1787",
      gsl_props_web_rendered: "http://www.thebulletranch.com/",
      Nid: 357,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.1533616, 41.606482],
    },
    properties: {
      name: "Condition One Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">13627 Woodin Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Chardon</span>, <span class="state">OH</span> <span class="postal-code">44024</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "440-321-9207",
      gsl_props_web_rendered: "http://conditiononefirearms.com/",
      Nid: 356,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.4791244, 41.1406009],
    },
    properties: {
      name: "Pro Armament",
      description:
        '<div class="street-block"><div class="thoroughfare">2427 Front St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Cuyahoga Falls</span>, <span class="state">OH</span> <span class="postal-code">44221</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "330-923-6337",
      gsl_props_web_rendered: "http://proarmament.com/",
      Nid: 355,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-84.2222441, 39.6308407],
    },
    properties: {
      name: "The Miami Armory",
      description:
        '<div class="street-block"><div class="thoroughfare">8945 Kingsridge Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Dayton</span>, <span class="state">OH</span> <span class="postal-code">45458</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "937-317-0787",
      gsl_props_web_rendered: "https://themiamiarmory.com/",
      Nid: 353,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-84.3240073, 39.3511524],
    },
    properties: {
      name: "Firepower Arms &amp; Supply",
      description:
        '<div class="street-block"><div class="thoroughfare">723 Reading Rd.</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Mason</span>, <span class="state">OH</span> <span class="postal-code">45040</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "513-505-7954",
      gsl_props_web_rendered: "firepowerllc.com",
      Nid: 352,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-113.5974835, 37.1164384],
    },
    properties: {
      name: "Modern Warriors",
      description:
        '<div class="street-block"><div class="thoroughfare">491 N Bluff St Ste 206</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">St George</span>, <span class="state">UT</span> <span class="postal-code">84770</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "(435) 656-4590",
      gsl_props_web_rendered: "http://www.modernwarriors.com/",
      Nid: 351,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-156.4885054, 20.9041432],
    },
    properties: {
      name: "Maui Ammo and Gun Supply",
      description:
        '<div class="street-block"><div class="thoroughfare">851 Eha St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Wailuku</span>, <span class="state">HI</span> <span class="postal-code">96793</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "(808) 244-1626",
      gsl_props_web_rendered: "http://mauigun.com/",
      Nid: 350,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.148877, 29.2697168],
    },
    properties: {
      name: "Carrolls Gun Shop Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">123 Carroll Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Wharton</span>, <span class="state">TX</span> <span class="postal-code">77488</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "979-532-3175",
      gsl_props_web_rendered: "http://carrollsgunshop.com",
      Nid: 341,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-106.596479, 35.104932],
    },
    properties: {
      name: "Calibers Shooters Sports Center *",
      description:
        '<div class="street-block"><div class="thoroughfare">4340 Cutler Ave NE</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Albuquerque</span>, <span class="state">NM</span> <span class="postal-code">87110</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "505-797-9715",
      gsl_props_web_rendered: "http://www.calibersusa.com",
      Nid: 340,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-106.6640603, 35.1838698],
    },
    properties: {
      name: "Calibers Shooters Sports Center *",
      description:
        '<div class="street-block"><div class="thoroughfare">9320 Coors Boulevard Northwest</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Albuquerque</span>, <span class="state">NM</span> <span class="postal-code">87114</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "505-797-9715",
      gsl_props_web_rendered: "http://www.calibersusa.com",
      Nid: 339,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-116.2457238, 43.6332513],
    },
    properties: {
      name: "Boise Gun Company, Inc. *",
      description:
        '<div class="street-block"><div class="thoroughfare">4105 N Adams St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Boise</span>, <span class="state">ID</span> <span class="postal-code">83714</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "208-376-4440",
      gsl_props_web_rendered: "http://www.boisegun.com",
      Nid: 338,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [174.7707223, -36.8903446],
    },
    properties: {
      name: "Tactical Imports Ltd",
      description:
        '<div class="street-block"><div class="thoroughfare">PO Box 24529</div></div>\n<div class="addressfield-container-inline locality-block country-NZ"><div class="dependent-locality">Royal Oak</div>\n<div class="clearfix"></div> <span class="locality">Auckland</span> <span class="postal-code">1023</span></div>\n<span class="country">New Zealand</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: " +64 27 434 1707",
      gsl_props_web_rendered: null,
      Nid: 334,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [34.8003772, 32.0734694],
    },
    properties: {
      name: "TAR Military and Police Equipment &amp; Training",
      description:
        '<div class="street-block"><div class="thoroughfare">5 Maavar Yabok</div></div>\n<div class="addressfield-container-inline locality-block country-IL"><span class="locality">Tel Aviv</span> <span class="postal-code">6744007</span></div>\n<span class="country">Israel</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: " +972 3 691 45 64",
      gsl_props_web_rendered: "http://tarideal.com",
      Nid: 333,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [10.0036433, 53.545249],
    },
    properties: {
      name: "Precision Technic Defence GmbH",
      description:
        '<div class="street-block"><div class="thoroughfare">Ericusspitze 4</div></div>\n<div class="addressfield-container-inline locality-block country-DE"><span class="postal-code">D-20457</span> <span class="locality">Hamburg</span></div>\n<span class="country">Germany</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: null,
      gsl_props_web_rendered: "http://ptdefence.com",
      Nid: 332,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [12.4366728, 55.7008904],
    },
    properties: {
      name: "Precision Technic Defence A/S",
      description:
        '<div class="street-block"><div class="thoroughfare">Bjerringbrovej 74-76</div></div>\n<div class="addressfield-container-inline locality-block country-DK"><span class="postal-code">DK-2610</span> <span class="locality">Roedovre</span></div>\n<span class="country">Denmark</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: null,
      gsl_props_web_rendered: "http://ptdefence.com",
      Nid: 331,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [145.083333, -37.633333],
    },
    properties: {
      name: "Delta Tactical",
      description:
        '<div class="street-block"><div class="thoroughfare">PO Box 421</div></div>\n<div class="addressfield-container-inline locality-block country-AU"><span class="locality">South Morang</span> <span class="state">VIC</span> <span class="postal-code">3752</span></div>\n<span class="country">Australia</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "0448 410 447",
      gsl_props_web_rendered: "http://deltatactical.com.au",
      Nid: 330,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.3355281, 37.5880874],
    },
    properties: {
      name: "Coyote Point Armory",
      description:
        '<div class="street-block"><div class="thoroughfare">341 Beach Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Burlingame</span>, <span class="state">CA</span> <span class="postal-code">94010</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "650-315-2210",
      gsl_props_web_rendered: null,
      Nid: 329,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-114.5966527, 33.6029353],
    },
    properties: {
      name: "Inland Builders Supply dba Ace Hardware 4353",
      description:
        '<div class="street-block"><div class="thoroughfare">1224 W Broadway</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Blythe</span>, <span class="state">CA</span> <span class="postal-code">92225</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "760-220-0361",
      gsl_props_web_rendered: null,
      Nid: 327,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-121.0310711, 37.6555566],
    },
    properties: {
      name: "Sierra Arms Corp",
      description:
        '<div class="street-block"><div class="thoroughfare">1408 N Carpenter Rd</div>\n<div class="premise">Ste 1</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Modesto</span>, <span class="state">CA</span> <span class="postal-code">95351</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "209-544-1911",
      gsl_props_web_rendered: null,
      Nid: 326,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-99.3162199, 30.1784723],
    },
    properties: {
      name: "Exotic Game Management",
      description:
        '<div class="street-block"><div class="thoroughfare">921 FM 479</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Mountain Home</span>, <span class="state">TX</span> <span class="postal-code">78058</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "830-459-1542",
      gsl_props_web_rendered: null,
      Nid: 325,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.7315051, 38.3542454],
    },
    properties: {
      name: "Spring Hill Rod and Gun Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">4901 MacCorkle Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">South Charleston</span>, <span class="state">WV</span> <span class="postal-code">25309</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "304-768-2090",
      gsl_props_web_rendered: null,
      Nid: 324,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.159707, 47.623669],
    },
    properties: {
      name: "Wades Eastside Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">13570 Bel-Red Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Bellvue</span>, <span class="state">WA</span> <span class="postal-code">98005</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "425-649-5005",
      gsl_props_web_rendered: null,
      Nid: 323,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.1704509, 47.7104659],
    },
    properties: {
      name: "Discount Gun Sales LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">12700 NE 124th St</div>\n<div class="premise">#210</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Kirkland</span>, <span class="state">WA</span> <span class="postal-code">98034</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "206-417-1625",
      gsl_props_web_rendered: "http://www.discountgunsales.com",
      Nid: 322,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-94.8023882, 32.5619316],
    },
    properties: {
      name: "Sportsmans Outfitters",
      description:
        '<div class="street-block"><div class="thoroughfare">4111 Gilmer Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Longview</span>, <span class="state">TX</span> <span class="postal-code">75604</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "903-759-0638",
      gsl_props_web_rendered: null,
      Nid: 321,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.3634581, 27.699197],
    },
    properties: {
      name: "Modern Pawn and Jewlery",
      description:
        '<div class="street-block"><div class="thoroughfare">1701 Airline Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Corpus Christi</span>, <span class="state">TX</span> <span class="postal-code">78412</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "361-993-9390",
      gsl_props_web_rendered: "http://modernpawnandguns.com",
      Nid: 320,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.4589241, 32.9392128],
    },
    properties: {
      name: "ML Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">210 Cody Place</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Rockwall</span>, <span class="state">TX</span> <span class="postal-code">75087</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "214-743-8275",
      gsl_props_web_rendered: null,
      Nid: 319,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.2089601, 31.485324],
    },
    properties: {
      name: "Keiths Ace Hardware",
      description:
        '<div class="street-block"><div class="thoroughfare">1424 Hewitt Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Waco</span>, <span class="state">TX</span> <span class="postal-code">76712</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "254-857-8667",
      gsl_props_web_rendered: null,
      Nid: 318,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.3374491, 30.049568],
    },
    properties: {
      name: "Carters Country",
      description:
        '<div class="street-block"><div class="thoroughfare">6310 Treaschwig Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Spring</span>, <span class="state">TX</span> <span class="postal-code">77373</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "281-821-0070",
      gsl_props_web_rendered: null,
      Nid: 317,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.75158, 43.51469],
    },
    properties: {
      name: "Sious Calls Scheels",
      description:
        '<div class="street-block"><div class="thoroughfare">2101 W 41st St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Sioux Falls</span>, <span class="state">SD</span> <span class="postal-code">57105</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "605-334-7767",
      gsl_props_web_rendered: null,
      Nid: 316,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-103.1900837, 44.098745],
    },
    properties: {
      name: "Rapid City Scheels",
      description:
        '<div class="street-block"><div class="thoroughfare">1225 Elgin St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Rapid City</span>, <span class="state">SD</span> <span class="postal-code">57701</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "605-342-9033",
      gsl_props_web_rendered: null,
      Nid: 315,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.1398714, 44.9184091],
    },
    properties: {
      name: "Brotherhood Arms",
      description:
        '<div class="street-block"><div class="thoroughfare">1550 N HWY 20</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Watertown</span>, <span class="state">SD</span> <span class="postal-code">57201</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "605-878-4867",
      gsl_props_web_rendered: null,
      Nid: 314,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-71.5146801, 41.9918907],
    },
    properties: {
      name: "Bullseye Shooting Supplies Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">837 Park Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Woonsocket</span>, <span class="state">RI</span> <span class="postal-code">02895</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "041-766-4409",
      gsl_props_web_rendered: null,
      Nid: 313,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-76.37029, 41.045586],
    },
    properties: {
      name: "Maple Ridge Sports Center",
      description:
        '<div class="street-block"><div class="thoroughfare">3650 Ridge Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Bloomsburg</span>, <span class="state">PA</span> <span class="postal-code">17815</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "570-387-5099",
      gsl_props_web_rendered: null,
      Nid: 312,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.4485755, 45.4970731],
    },
    properties: {
      name: "Keiths Sporting Goods",
      description:
        '<div class="street-block"><div class="thoroughfare">1595 W Powell Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Gresham</span>, <span class="state">OR</span> <span class="postal-code">97030</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "503-492-6999",
      gsl_props_web_rendered: null,
      Nid: 310,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-119.7719707, 38.9573923],
    },
    properties: {
      name: "High Desert Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">1581 US Hwy 395 N</div>\n<div class="premise">Unit A</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Minden</span>, <span class="state">NV</span> <span class="postal-code">89423</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "775-392-2192",
      gsl_props_web_rendered: null,
      Nid: 309,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.6762015, 40.8132826],
    },
    properties: {
      name: "Discount Enterprises LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">3101 O St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Lincoln</span>, <span class="state">NE</span> <span class="postal-code">68510</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "402-875-6500",
      gsl_props_web_rendered: "http://deguns.net",
      Nid: 308,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-114.3289148, 48.234608],
    },
    properties: {
      name: "Sportsman and Ski Haus",
      description:
        '<div class="street-block"><div class="thoroughfare">145 Hutton Ranch Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Kalispell</span>, <span class="state">MT</span> <span class="postal-code">59901</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-55-6484",
      gsl_props_web_rendered: null,
      Nid: 307,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-111.286856, 47.4941307],
    },
    properties: {
      name: "Scheels All Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">1200 10th Ave S</div>\n<div class="premise">Ste 92</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Great Falls</span>, <span class="state">MT</span> <span class="postal-code">59405</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-453-7666",
      gsl_props_web_rendered: null,
      Nid: 306,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-111.3039989, 47.4957158],
    },
    properties: {
      name: "Highwood Creek Outfitters",
      description:
        '<div class="street-block"><div class="thoroughfare">205 9th Ave S</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Great Falls</span>, <span class="state">MT</span> <span class="postal-code">59405</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-799-8181",
      gsl_props_web_rendered: null,
      Nid: 305,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-104.1550766, 47.7186086],
    },
    properties: {
      name: "High Caliber Sports Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">440 N Central Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Sidney</span>, <span class="state">MT</span> <span class="postal-code">59270</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-433-1800",
      gsl_props_web_rendered: null,
      Nid: 304,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-94.3620745, 39.3731631],
    },
    properties: {
      name: "Kurt Johnsen Shotguns",
      description:
        '<div class="street-block"><div class="thoroughfare">city center</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Kearney</span>, <span class="state">MO</span> <span class="postal-code">64060</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: null,
      gsl_props_web_rendered: null,
      Nid: 303,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-94.4415263, 39.2694291],
    },
    properties: {
      name: "Great Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">1780 N Church Rd</div>\n<div class="premise">#A</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Liberty</span>, <span class="state">MO</span> <span class="postal-code">64068</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "816-781-2323",
      gsl_props_web_rendered: null,
      Nid: 302,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-93.2967155, 37.0628861],
    },
    properties: {
      name: "EDI Plus",
      description:
        '<div class="street-block"><div class="thoroughfare">1250 Kinder</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Nixon</span>, <span class="state">MO</span> <span class="postal-code">65714</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "417-724-0181",
      gsl_props_web_rendered: null,
      Nid: 301,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-92.4819147, 44.0035388],
    },
    properties: {
      name: "Scheels All Sports Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">1001 Apache Mall</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Rochester</span>, <span class="state">MN</span> <span class="postal-code">55902</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "507-529-7280",
      gsl_props_web_rendered: null,
      Nid: 300,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-87.0833604, 45.7812131],
    },
    properties: {
      name: "Lake Michigan Armory Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">2713 N Lincoln Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Escanaba</span>, <span class="state">MI</span> <span class="postal-code">49829</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "906-786-7468",
      gsl_props_web_rendered: null,
      Nid: 299,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-86.5197319, 42.0134799],
    },
    properties: {
      name: "Black Arsenal",
      description:
        '<div class="street-block"><div class="thoroughfare">5711 Saint Joseph Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Stevensville</span>, <span class="state">MI</span> <span class="postal-code">49127</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "269-235-9305",
      gsl_props_web_rendered: null,
      Nid: 298,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-92.0858407, 32.5244509],
    },
    properties: {
      name: "TP Outdoors",
      description:
        '<div class="street-block"><div class="thoroughfare">3000 Breard St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Monroe</span>, <span class="state">LA</span> <span class="postal-code">71201</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "318-388-3788",
      gsl_props_web_rendered: null,
      Nid: 297,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-93.718998, 32.562555],
    },
    properties: {
      name: "Darkside Firearms LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">215 Evangeline Walk</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Bossier City</span>, <span class="state">LA</span> <span class="postal-code">71111</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "318-564-9279",
      gsl_props_web_rendered: null,
      Nid: 296,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-82.7280366, 37.6114003],
    },
    properties: {
      name: "Blaine&#039;s Guns and Bows",
      description:
        '<div class="street-block"><div class="thoroughfare">6436 KY HWY 1428</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Allen</span>, <span class="state">KY</span> <span class="postal-code">41601</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "606-874-9997",
      gsl_props_web_rendered: null,
      Nid: 295,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-94.6608059, 38.880516],
    },
    properties: {
      name: "Overland Park Scheels",
      description:
        '<div class="street-block"><div class="thoroughfare">6503 W 135th St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Overland Park</span>, <span class="state">KS</span> <span class="postal-code">66223</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "913-897-3030",
      gsl_props_web_rendered: null,
      Nid: 294,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-94.704455, 37.4244446],
    },
    properties: {
      name: "Johns Sport Center Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">1806 N Broadway</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Pittsburg</span>, <span class="state">KS</span> <span class="postal-code">66762</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "620-231-7740",
      gsl_props_web_rendered: null,
      Nid: 293,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-116.785527, 47.709453],
    },
    properties: {
      name: "Black Sheep Sporting Goods",
      description:
        '<div class="street-block"><div class="thoroughfare">3534 N government Way</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Coeur d&#039;Alene</span>, <span class="state">ID</span> <span class="postal-code">83815</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "208-667-7831",
      gsl_props_web_rendered: null,
      Nid: 292,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-85.1668313, 40.7515312],
    },
    properties: {
      name: "Prepper 4 Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">827 N Main St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Bluffton</span>, <span class="state">IN</span> <span class="postal-code">46714</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "260-824-5530",
      gsl_props_web_rendered: null,
      Nid: 291,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-85.6754259, 30.2016706],
    },
    properties: {
      name: "Mor-Guns LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">3022 Stanford Rd</div>\n<div class="premise">Bldg E</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Panama City</span>, <span class="state">FL</span> <span class="postal-code">32405</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "850-785-6250",
      gsl_props_web_rendered: null,
      Nid: 290,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.3052878, 28.8963011],
    },
    properties: {
      name: "SWUB Tactical",
      description:
        '<div class="street-block"><div class="thoroughfare">89B S Hwy 17-92</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Debary</span>, <span class="state">FL</span> <span class="postal-code">32713</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "386-243-4486",
      gsl_props_web_rendered: null,
      Nid: 289,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.335118, 29.853604],
    },
    properties: {
      name: "First Coast Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">2435 Dobbs Rd</div>\n<div class="premise">Ste N</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">St Augustine</span>, <span class="state">FL</span> <span class="postal-code">33953</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "904-217-3623",
      gsl_props_web_rendered: null,
      Nid: 288,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-104.8230662, 39.0247686],
    },
    properties: {
      name: "Magnum Shooting Center of Colorado Springs",
      description:
        '<div class="street-block"><div class="thoroughfare">13372 Meadowgrass Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Colorado Springs</span>, <span class="state">CO</span> <span class="postal-code">80921</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "719-487-3193",
      gsl_props_web_rendered: null,
      Nid: 287,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-105.0734965, 40.4228077],
    },
    properties: {
      name: "Jensen Arms",
      description:
        '<div class="street-block"><div class="thoroughfare">285E E 29th St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Loveland</span>, <span class="state">CO</span> <span class="postal-code">80538</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "970-663-5994",
      gsl_props_web_rendered: null,
      Nid: 286,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-105.0838344, 39.6550035],
    },
    properties: {
      name: "Green Mountain Guns Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">3355 S Yarrow E-113</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Lakewood</span>, <span class="state">CO</span> <span class="postal-code">80227</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "303-985-7240",
      gsl_props_web_rendered: null,
      Nid: 285,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-104.6123609, 38.2726483],
    },
    properties: {
      name: "Arctic Shooting Supply",
      description:
        '<div class="street-block"><div class="thoroughfare">411 W 6th St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Pueblo</span>, <span class="state">CO</span> <span class="postal-code">81003</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "719-545-1800",
      gsl_props_web_rendered: null,
      Nid: 284,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-106.8264729, 39.657566],
    },
    properties: {
      name: "Alpine Arms",
      description:
        '<div class="street-block"><div class="thoroughfare">50 Chambers Ave</div>\n<div class="premise">Unit G</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Eagle</span>, <span class="state">CO</span> <span class="postal-code">81631</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "970-328-1776",
      gsl_props_web_rendered: null,
      Nid: 283,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-121.3594727, 38.3791063],
    },
    properties: {
      name: "Wild Bills Old West Trading Co",
      description:
        '<div class="street-block"><div class="thoroughfare">10490 E Stockton Blvd</div>\n<div class="premise">Ste 150</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Elk Grove</span>, <span class="state">CA</span> <span class="postal-code">95624</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "916-686-7699",
      gsl_props_web_rendered: null,
      Nid: 282,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-117.5482984, 34.0832557],
    },
    properties: {
      name: "Turners Operations Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">11738 San Marino St</div>\n<div class="premise">Suite A</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Rancho Cucamonga</span>, <span class="state">CA</span> <span class="postal-code">91730</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "909-923-3009",
      gsl_props_web_rendered: null,
      Nid: 281,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.2231733, 38.1061918],
    },
    properties: {
      name: "Triples A&#039;s Sporting Goods",
      description:
        '<div class="street-block"><div class="thoroughfare">1724 Springs Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Vallejo</span>, <span class="state">CA</span> <span class="postal-code">94591</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "707-647-1997",
      gsl_props_web_rendered: null,
      Nid: 280,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-118.1635346, 34.8602475],
    },
    properties: {
      name: "Karl&#039;s Hardware Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">2700 Diamond St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Rosamond</span>, <span class="state">CA</span> <span class="postal-code">93560</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "661-256-3985",
      gsl_props_web_rendered: null,
      Nid: 279,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-117.8365649, 33.7832782],
    },
    properties: {
      name: "Fowler Gun Room",
      description:
        '<div class="street-block"><div class="thoroughfare">358 S Tustin Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Orange</span>, <span class="state">CA</span> <span class="postal-code">92866</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "714-771-3730",
      gsl_props_web_rendered: null,
      Nid: 278,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-117.2055671, 32.7743424],
    },
    properties: {
      name: "Discount Gun Mart",
      description:
        '<div class="street-block"><div class="thoroughfare">1510 Morena Blvd</div>\n<div class="premise">Ste F</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">San Diego</span>, <span class="state">CA</span> <span class="postal-code">92110</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "619-308-5030",
      gsl_props_web_rendered: null,
      Nid: 277,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-120.8475349, 37.0611388],
    },
    properties: {
      name: "Central Valley Arms",
      description:
        '<div class="street-block"><div class="thoroughfare">840 6th St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Los Banos</span>, <span class="state">CA</span> <span class="postal-code">93635</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "209-826-6282",
      gsl_props_web_rendered: null,
      Nid: 276,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.1101062, 38.0036917],
    },
    properties: {
      name: "Canyon Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">887 Howe Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Martinez</span>, <span class="state">CA</span> <span class="postal-code">94553</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "925-229-4867",
      gsl_props_web_rendered: null,
      Nid: 275,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-117.3097839, 34.0510796],
    },
    properties: {
      name: "Blue Collar Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">1075 S Mount Vernon Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Colton</span>, <span class="state">CA</span> <span class="postal-code">92324</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "909-777-0073",
      gsl_props_web_rendered: null,
      Nid: 274,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.0795842, 37.3832229],
    },
    properties: {
      name: "Bay Area Gun Vault",
      description:
        '<div class="street-block"><div class="thoroughfare">363 West El Camino Real</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Mountain View</span>, <span class="state">CA</span> <span class="postal-code">94040</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "650-960-3006",
      gsl_props_web_rendered: null,
      Nid: 273,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-117.1273834, 32.8363596],
    },
    properties: {
      name: "American Shooting Center",
      description:
        '<div class="street-block"><div class="thoroughfare">5590 Ruffin Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">San Diego</span>, <span class="state">CA</span> <span class="postal-code">92123</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "909-457-6700",
      gsl_props_web_rendered: null,
      Nid: 272,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-114.323717, 34.4753463],
    },
    properties: {
      name: "Sams Shooters Emporium-Aims Indoor Range",
      description:
        '<div class="street-block"><div class="thoroughfare">2183 McCullough Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Lake Havasu City</span>, <span class="state">AZ</span> <span class="postal-code">86404</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "928-680-7000",
      gsl_props_web_rendered: null,
      Nid: 271,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-149.319477, 61.619403],
    },
    properties: {
      name: "DARK Systems Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">3501 N Sams Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Wasilla</span>, <span class="state">AK</span> <span class="postal-code">99654</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "907-212-3275",
      gsl_props_web_rendered: null,
      Nid: 270,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-93.2750538, 37.2271744],
    },
    properties: {
      name: "Cherokee Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">1544 N National</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Springfield</span>, <span class="state">MO</span> <span class="postal-code">65803</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "417-868-8083",
      gsl_props_web_rendered: "http://cherokeefirearms.com",
      Nid: 269,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-78.9605053, 35.080861],
    },
    properties: {
      name: "Jims Pawn Shop Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">4632 Yadkin Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Fayetteville</span>, <span class="state">NC</span> <span class="postal-code">28303</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "910-864-2270",
      gsl_props_web_rendered: "http://jimspawnshop.com",
      Nid: 268,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-124.1946826, 41.7551255],
    },
    properties: {
      name: "Full Armor Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">425 L Street</div>\n<div class="premise">Suite G</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Crescent City</span>, <span class="state">CA</span> <span class="postal-code">95531</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "707-464-0071",
      gsl_props_web_rendered: null,
      Nid: 267,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-85.138422, 39.6546201],
    },
    properties: {
      name: "Wulffs Gun Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">1800 Western Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Connersville</span>, <span class="state">IN</span> <span class="postal-code">47331</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "765-825-8455",
      gsl_props_web_rendered: null,
      Nid: 266,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-107.7838537, 39.530933],
    },
    properties: {
      name: "Timberline Sporting Goods",
      description:
        '<div class="street-block"><div class="thoroughfare">124 W 2nd St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Rifle</span>, <span class="state">CO</span> <span class="postal-code">81650</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "970-625-4868",
      gsl_props_web_rendered: "http://timberlinesports.com",
      Nid: 265,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-112.0113666, 33.6275895],
    },
    properties: {
      name: "Shooters Vault",
      description:
        '<div class="street-block"><div class="thoroughfare">3202 W Greenway Rd # 1273</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Phoenix</span>, <span class="state">AZ</span> <span class="postal-code">85032</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "480-226-2532",
      gsl_props_web_rendered: "http://shootersvault.net",
      Nid: 264,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-111.899038, 33.620513],
    },
    properties: {
      name: "Scottsdale Gun Club",
      description:
        '<div class="street-block"><div class="thoroughfare">14860 N Northsight Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Scottsdale</span>, <span class="state">AZ</span> <span class="postal-code">85260</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "480-398-1111",
      gsl_props_web_rendered: "http://scottsdalegunclub.com",
      Nid: 263,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-76.443076, 41.7648054],
    },
    properties: {
      name: "RGM Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">516 Main St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Towanda</span>, <span class="state">PA</span> <span class="postal-code">18848</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "607-742-9327",
      gsl_props_web_rendered: null,
      Nid: 262,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.2607087, 45.3970581],
    },
    properties: {
      name: "Rapid Fire Arms LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">39110 Proctor Blvd</div>\n<div class="premise">Ste B</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Sandy</span>, <span class="state">OR</span> <span class="postal-code">97055</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "503-482-6881",
      gsl_props_web_rendered: "http://rapidfirearms.us",
      Nid: 261,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-100.9519962, 35.5334495],
    },
    properties: {
      name: "Pampa Reloading and Gun Supply",
      description:
        '<div class="street-block"><div class="thoroughfare">701 E Frederic St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Pampa</span>, <span class="state">TX</span> <span class="postal-code">79065</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "806-665-6943",
      gsl_props_web_rendered: null,
      Nid: 260,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-94.9397507, 45.2330145],
    },
    properties: {
      name: "Mels Sport Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">Hwy 23</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Spicer</span>, <span class="state">MN</span> <span class="postal-code">56288</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "320-796-2000",
      gsl_props_web_rendered: null,
      Nid: 259,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-94.2178834, 30.2578311],
    },
    properties: {
      name: "Lone Star Gun Range",
      description:
        '<div class="street-block"><div class="thoroughfare">4940 HWY 69 S</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Lumberton</span>, <span class="state">TX</span> <span class="postal-code">77657</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "409-658-1254",
      gsl_props_web_rendered: "http://lonestargunrange.com",
      Nid: 258,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-102.1476322, 32.0469015],
    },
    properties: {
      name: "JST Outfitters LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">4109 Fairwood Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Midland</span>, <span class="state">TX</span> <span class="postal-code">79707</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "830-336-4867",
      gsl_props_web_rendered: "http://jstoutfittersllc.com",
      Nid: 257,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.4164862, 33.3588588],
    },
    properties: {
      name: "Hageman Reserve LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">147 Dunham Ranch Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Sulphur Bluff</span>, <span class="state">TX</span> <span class="postal-code">75481</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "903-945-2222",
      gsl_props_web_rendered: "http://hagemanreserve.com",
      Nid: 256,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-76.6946265, 39.8233437],
    },
    properties: {
      name: "Freedom Armory",
      description:
        '<div class="street-block"><div class="thoroughfare">10598 2nd Amendment Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Glen Rock</span>, <span class="state">PA</span> <span class="postal-code">17327</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "717-227-9060",
      gsl_props_web_rendered: "http://freedomarmory.com",
      Nid: 255,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-88.430506, 42.344306],
    },
    properties: {
      name: "Corp Quality Firearm Finishing",
      description:
        '<div class="street-block"><div class="thoroughfare">821 Bach Ct</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Woodstock</span>, <span class="state">IL</span> <span class="postal-code">60098</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "815-953-9668",
      gsl_props_web_rendered: null,
      Nid: 254,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-82.7875464, 27.9903225],
    },
    properties: {
      name: "Coles Gun Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">1901-1903 Douglas Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Clearwater</span>, <span class="state">FL</span> <span class="postal-code">33755</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "727-447-0507",
      gsl_props_web_rendered: "http://colesgunshop.com",
      Nid: 253,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-85.885987, 40.771989],
    },
    properties: {
      name: "Bass and Bucks Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">5000 Lot 1 Mill Creek Pike</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Wabach</span>, <span class="state">IN</span> <span class="postal-code">46992</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "260-569-1853",
      gsl_props_web_rendered: "http://bassandbucks.com",
      Nid: 252,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-79.9485687, 40.1397057],
    },
    properties: {
      name: "Back Country Long Range Rifles",
      description:
        '<div class="street-block"><div class="thoroughfare">49 Wertz Way</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Charleroi</span>, <span class="state">PA</span> <span class="postal-code">15022</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "412-298-5645",
      gsl_props_web_rendered: "http://backcountryrifles.com",
      Nid: 251,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-101.1708429, 35.4340353],
    },
    properties: {
      name: "Ballards Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">805 S Benedict</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">White Deer</span>, <span class="state">TX</span> <span class="postal-code">79097</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "806-570-4722",
      gsl_props_web_rendered: "http://ballardsguns.com",
      Nid: 250,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-85.0728634, 33.0272407],
    },
    properties: {
      name: "FMJ Armory",
      description:
        '<div class="street-block"><div class="thoroughfare">18 New Airport Rd Ste A</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">LaGrange</span>, <span class="state">GA</span> <span class="postal-code">30240</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "706-756-1000",
      gsl_props_web_rendered: "http://fmjarmory.com",
      Nid: 249,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-104.9853269, 40.1594349],
    },
    properties: {
      name: "Trigger Time Gun Club LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">3575 Stage Coach Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Longmont</span>, <span class="state">CO</span> <span class="postal-code">80504</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "303-651-0816",
      gsl_props_web_rendered: "http://T3Main.com",
      Nid: 248,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-117.2121988, 33.5523599],
    },
    properties: {
      name: "The Shootist",
      description:
        '<div class="street-block"><div class="thoroughfare">24910 Washington Avenue</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Murrieta</span>, <span class="state">CA</span> <span class="postal-code">92562</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "951-698-7543",
      gsl_props_web_rendered: "http://theshootistguns.com",
      Nid: 247,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-102.9566013, 41.1154544],
    },
    properties: {
      name: "Cabelas Wholesale Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">One Cabela Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Sidney</span>, <span class="state">NE</span> <span class="postal-code">69160</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "308-254-5505",
      gsl_props_web_rendered: "http://cabelas.com",
      Nid: 246,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-157.8831244, 21.3215187],
    },
    properties: {
      name: "OGC Tactical",
      description:
        '<div class="street-block"><div class="thoroughfare">1625 Kahai St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Honolulu</span>, <span class="state">HI</span> <span class="postal-code">96819</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "808-946-4642",
      gsl_props_web_rendered: "http://ogctactical.3dcartstores.com",
      Nid: 245,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-117.547772, 34.0555821],
    },
    properties: {
      name: "Ammo Brothers",
      description:
        '<div class="street-block"><div class="thoroughfare">780 S Rochester Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Ontario</span>, <span class="state">CA</span> <span class="postal-code">91761</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "909-937-6700",
      gsl_props_web_rendered: "http://ammobros.com",
      Nid: 244,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-80.2748428, 27.2488159],
    },
    properties: {
      name: "Lotus Gunworks",
      description:
        '<div class="street-block"><div class="thoroughfare">3558 NW Federal Hwy</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Jenson Beach</span>, <span class="state">FL</span> <span class="postal-code">34957</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "772-232-6470",
      gsl_props_web_rendered: "http://lotusgunworks.com",
      Nid: 243,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-114.3332949, 48.2391076],
    },
    properties: {
      name: "Cabelas Kalispell",
      description:
        '<div class="street-block"><div class="thoroughfare">125 Treeline Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Kalispell</span>, <span class="state">MT</span> <span class="postal-code">59901</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-755-2371",
      gsl_props_web_rendered: "http://cabelas.com",
      Nid: 242,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-70.9786776, 43.2746406],
    },
    properties: {
      name: "Renaissance Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">19 Main St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Gonic</span>, <span class="state">NH</span> <span class="postal-code">03839</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "603-335-4116",
      gsl_props_web_rendered: "http://renarms.com",
      Nid: 241,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-82.6094266, 29.6466311],
    },
    properties: {
      name: "Pickett Weaponry",
      description:
        '<div class="street-block"><div class="thoroughfare">25220 W Newberry Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Newberry</span>, <span class="state">FL</span> <span class="postal-code">32669</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "352-472-4508",
      gsl_props_web_rendered: "http://pickettweaponry.com",
      Nid: 240,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.3372766, 28.6747103],
    },
    properties: {
      name: "Shoot Straight II Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">4700 S Hwy 17-92</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Casselbury</span>, <span class="state">FL</span> <span class="postal-code">32707</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "561-721-7171",
      gsl_props_web_rendered: "http://shoot-straight.com",
      Nid: 239,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-103.6033495, 48.1470237],
    },
    properties: {
      name: "Scenic Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">1201 E Broadway</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Williston</span>, <span class="state">ND</span> <span class="postal-code">56802</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "701-572-8696",
      gsl_props_web_rendered: "http://scenicsports.com",
      Nid: 238,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-149.8561839, 61.1560597],
    },
    properties: {
      name: "Wild West Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">7100 Homer Drive</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Anchorage</span>, <span class="state">AK</span> <span class="postal-code">34236</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "907-344-4500",
      gsl_props_web_rendered: "http://wildwestguns.com",
      Nid: 237,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-82.5388035, 27.3335005],
    },
    properties: {
      name: "The Bullet Hole",
      description:
        '<div class="street-block"><div class="thoroughfare">330 South Orange Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Sarasota</span>, <span class="state">FL</span> <span class="postal-code">34236</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "941-957-1996",
      gsl_props_web_rendered: "http://bulletholeonline.com",
      Nid: 236,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-109.0986026, 44.5148884],
    },
    properties: {
      name: "Best of the West",
      description:
        '<div class="street-block"><div class="thoroughfare">115 W Yellowstone Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Cody</span>, <span class="state">WY</span> <span class="postal-code">92414</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "307-587-2787",
      gsl_props_web_rendered: "http://thebestofthewest.net",
      Nid: 234,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-112.0371508, 43.4918279],
    },
    properties: {
      name: "Ross Coin and Gun",
      description:
        '<div class="street-block"><div class="thoroughfare">390 N Eastern Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Idaho Falls</span>, <span class="state">ID</span> <span class="postal-code">83402</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "208-522-0847",
      gsl_props_web_rendered: "http://rosscoinandgun.com/",
      Nid: 233,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-114.472046, 42.552276],
    },
    properties: {
      name: "Reds Trading Post",
      description:
        '<div class="street-block"><div class="thoroughfare">203 5th Ave South</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Twin Falls</span>, <span class="state">ID</span> <span class="postal-code">83301</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "208-733-3546",
      gsl_props_web_rendered: "http://redstradingpost.com/",
      Nid: 232,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-100.4650024, 31.450834],
    },
    properties: {
      name: "The Outdoorsman",
      description:
        '<div class="street-block"><div class="thoroughfare">2231 W. Beuregard</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">San Angelo</span>, <span class="state">TX</span> <span class="postal-code">76901</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "325-947-8859",
      gsl_props_web_rendered: "http://shopoutdoorsman.com",
      Nid: 231,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-111.9882358, 40.66662],
    },
    properties: {
      name: "Impact Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">4075 W 4715 S</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Salt Lake City</span>, <span class="state">UT</span> <span class="postal-code">84118</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "801-967-8005",
      gsl_props_web_rendered: "http://impactguns.com",
      Nid: 230,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-116.3277551, 43.6087145],
    },
    properties: {
      name: "Impact Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">11655 W. Executive Dr.</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Boise</span>, <span class="state">ID</span> <span class="postal-code">83713</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "208-321-1288",
      gsl_props_web_rendered: "http://impactguns.com",
      Nid: 229,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-124.1714947, 40.8006479],
    },
    properties: {
      name: "Redwood Marine",
      description:
        '<div class="street-block"><div class="thoroughfare">8 West 6th Street</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Eureka</span>, <span class="state">CA</span> <span class="postal-code">95501</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "707-443-7029",
      gsl_props_web_rendered: "http://redwoodmarine.com",
      Nid: 228,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-112.0502286, 43.4867904],
    },
    properties: {
      name: "Guns N Gear Sports LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">1315 S Utah Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Idaho Falls</span>, <span class="state">ID</span> <span class="postal-code">83402</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "208-227-8400",
      gsl_props_web_rendered: "http://gngsports.com",
      Nid: 227,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-84.1291265, 36.0366228],
    },
    properties: {
      name: "Fighting Sheep Dog",
      description:
        '<div class="street-block"><div class="thoroughfare">530 Edgemoor Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Powell</span>, <span class="state">TN</span> <span class="postal-code">37849</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "865-730-0585",
      gsl_props_web_rendered: "http://fightingsheepdog.com",
      Nid: 226,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-119.2246353, 46.2173049],
    },
    properties: {
      name: "Kennewick Ranch and Home",
      description:
        '<div class="street-block"><div class="thoroughfare">805 N Columbia Center Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Kennewick</span>, <span class="state">WA</span> <span class="postal-code">99336</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "509-737-1996",
      gsl_props_web_rendered: "http://ranch-home.com",
      Nid: 225,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-121.6532935, 36.6814786],
    },
    properties: {
      name: "Hunters Supply",
      description:
        '<div class="street-block"><div class="thoroughfare">220 N. Main Street</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Salinas</span>, <span class="state">CA</span> <span class="postal-code">93901</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "831-758-4868",
      gsl_props_web_rendered: "http://hunterssupply.net",
      Nid: 224,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-104.749226, 38.8119854],
    },
    properties: {
      name: "Specialty Sport Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">4285 E Fountain Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Colorado Springs</span>, <span class="state">CO</span> <span class="postal-code">80916</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "719-391-2556",
      gsl_props_web_rendered: "http://specialtysportsandsupply.com",
      Nid: 223,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-80.0503516, 40.6273915],
    },
    properties: {
      name: "Big Buck Sport Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">108 V.I.P. Drive</div>\n<div class="premise">Ste 101</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Wexford</span>, <span class="state">PA</span> <span class="postal-code">15090</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "724-935-5331",
      gsl_props_web_rendered: "http://bigbucksportshop.net",
      Nid: 222,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-121.7731929, 37.6806815],
    },
    properties: {
      name: "Dom&#039;s Outdoor",
      description:
        '<div class="street-block"><div class="thoroughfare">1870 First St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Livermore</span>, <span class="state">CA</span> <span class="postal-code">94550</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "800-447-9629",
      gsl_props_web_rendered: "http://domsoutdoor.com",
      Nid: 221,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-108.3796272, 43.0307787],
    },
    properties: {
      name: "Rocky Mountain Discount Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">709 North Federal Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Riverton</span>, <span class="state">WY</span> <span class="postal-code">82501</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "307-856-7687",
      gsl_props_web_rendered: "http://rocky-mountain-sports.com",
      Nid: 220,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.772578, 28.0235365],
    },
    properties: {
      name: "Tims Guns and Range",
      description:
        '<div class="street-block"><div class="thoroughfare">3761 Recker Hwy.</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Winter Haven</span>, <span class="state">FL</span> <span class="postal-code">33880</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "863-295-9463",
      gsl_props_web_rendered: "http://timsgunsandrange.com",
      Nid: 218,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-106.3393818, 42.8328647],
    },
    properties: {
      name: "Rocky Mountain Discount Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">1351 Cy Avenue</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Casper</span>, <span class="state">WY</span> <span class="postal-code">82604</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "307-265-6974",
      gsl_props_web_rendered: "http://rocky-mountain-sports.com",
      Nid: 217,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-90.2082207, 29.9783371],
    },
    properties: {
      name: "Jefferson Gun Outlet",
      description:
        '<div class="street-block"><div class="thoroughfare">6719 Airline Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Metairie</span>, <span class="state">LA</span> <span class="postal-code">70003</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "504-733-7695",
      gsl_props_web_rendered: "http://jeffersongun.com",
      Nid: 216,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-70.2840606, 41.6576052],
    },
    properties: {
      name: "Downrange Inc.",
      description:
        '<div class="street-block"><div class="thoroughfare">145 Barnstable Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Hyannis</span>, <span class="state">MA</span> <span class="postal-code">02601</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "774-836-5571",
      gsl_props_web_rendered: "http://capegunworks.com",
      Nid: 215,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.8855635, 39.627223],
    },
    properties: {
      name: "Bangers Sport Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">840 Piney Hollow Road</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Winslow</span>, <span class="state">NJ</span> <span class="postal-code">08095</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "609-561-1717",
      gsl_props_web_rendered: "http://bangerssports.com",
      Nid: 214,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.5568866, 35.6850993],
    },
    properties: {
      name: "M3",
      description:
        '<div class="street-block"><div class="thoroughfare">20986 Highlander Ridge Drive</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Edmond</span>, <span class="state">OK</span> <span class="postal-code">73003</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "918-808-3661",
      gsl_props_web_rendered: "http://m3wholesale.com",
      Nid: 213,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-105.4833248, 44.249414],
    },
    properties: {
      name: "Rocky Mountain Discount Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">4706 South Douglas HWY</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Gillette</span>, <span class="state">WY</span> <span class="postal-code">82718</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "307-686-0221",
      gsl_props_web_rendered: "http://rocky-mountain-sports.com",
      Nid: 212,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-117.999442, 33.7441901],
    },
    properties: {
      name: "Bolsa Gunsmithing",
      description:
        '<div class="street-block"><div class="thoroughfare">7404 Bolsa Avenue</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Westminster</span>, <span class="state">CA</span> <span class="postal-code">92683</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "714-894-9100",
      gsl_props_web_rendered: "http://bolsagunsmithing.com",
      Nid: 211,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.2713042, 32.4058411],
    },
    properties: {
      name: "Crazy Gun Dealer",
      description:
        '<div class="street-block"><div class="thoroughfare">5301 E Hwy 67</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Alvarado</span>, <span class="state">TX</span> <span class="postal-code">76009</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "817-790-0235",
      gsl_props_web_rendered: "http://crazygundealer.com",
      Nid: 210,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-120.8493559, 37.4914862],
    },
    properties: {
      name: "Bilson&#039;s Sport Shop Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">201 Lander Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Turlock</span>, <span class="state">CA</span> <span class="postal-code">95380</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "209-634-4543",
      gsl_props_web_rendered: null,
      Nid: 209,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.4958764, 40.5932618],
    },
    properties: {
      name: "Middlebrook Firearms LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">288 Hwy 22 W</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Green Brook</span>, <span class="state">NJ</span> <span class="postal-code">08812</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "732-529-6897",
      gsl_props_web_rendered: "http://middlebrookfirearms.com",
      Nid: 208,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.2713042, 32.4058411],
    },
    properties: {
      name: "Crazy Gun Dealer",
      description:
        '<div class="street-block"><div class="thoroughfare">5301 E Hwy 67</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Alvarado</span>, <span class="state">TX</span> <span class="postal-code">76009</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "817-790-0235",
      gsl_props_web_rendered: "http://crazygundealer.com",
      Nid: 207,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-112.0117156, 33.5821122],
    },
    properties: {
      name: "Elite Ordnance MFG/Vantage Point Tactical Gear",
      description:
        '<div class="street-block"><div class="thoroughfare">3217 E Shea Blvd</div>\n<div class="premise">Ste 3</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Phoenix</span>, <span class="state">AZ</span> <span class="postal-code">85028</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "602-466-1278",
      gsl_props_web_rendered: null,
      Nid: 206,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-74.4958764, 40.5932618],
    },
    properties: {
      name: "Middlebrook Firearms LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">288 Hwy 22 W</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Green Brook</span>, <span class="state">NJ</span> <span class="postal-code">08812</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "732-529-6897",
      gsl_props_web_rendered: "http://middlebrookfirearms.com",
      Nid: 205,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.8651799, 42.3883585],
    },
    properties: {
      name: "The Shooting Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">106 N 3rd Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Anthon</span>, <span class="state">IA</span> <span class="postal-code">51004</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "712-251-1510",
      gsl_props_web_rendered: "http://theshootingshopllc.com",
      Nid: 204,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-134.4185868, 58.2881157],
    },
    properties: {
      name: "CBA Enterprises",
      description:
        '<div class="street-block"><div class="thoroughfare">2631 Douglas Hwy</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Juneau</span>, <span class="state">AK</span> <span class="postal-code">99801</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "907-523-5655",
      gsl_props_web_rendered: "http://cbaent.com",
      Nid: 203,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-110.9826508, 42.6826737],
    },
    properties: {
      name: "OJs Gun Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">5122 Bitter Creek Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Afton</span>, <span class="state">WY</span> <span class="postal-code">83110</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "307-248-0282",
      gsl_props_web_rendered: null,
      Nid: 202,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-94.2011832, 30.2479787],
    },
    properties: {
      name: "SFK",
      description:
        '<div class="street-block"><div class="thoroughfare">7614 Sir Kevin</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Lumberton</span>, <span class="state">TX</span> <span class="postal-code">77657</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "409-227-0677",
      gsl_props_web_rendered: "http://shop.sfguncorp.com",
      Nid: 201,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-111.8892967, 40.6292691],
    },
    properties: {
      name: "Get Some LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">6651 S State St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Murray</span>, <span class="state">UT</span> <span class="postal-code">84107</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "801-562-1222",
      gsl_props_web_rendered: "http://getsomeguns.com",
      Nid: 200,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-121.9987, 36.992167],
    },
    properties: {
      name: "Pacific Military Arms and Service",
      description:
        '<div class="street-block"><div class="thoroughfare">10 Bella Rose Terrace</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Santa Cruz</span>, <span class="state">CA</span> <span class="postal-code">95065</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "831-869-6613",
      gsl_props_web_rendered: "http://pmaas.net",
      Nid: 199,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-82.1522918, 27.0146251],
    },
    properties: {
      name: "Fire Control Group Manufacturing LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">1109 Tamiami Trl</div>\n<div class="premise">Unit 4</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Port Charlotte</span>, <span class="state">FL</span> <span class="postal-code">33953</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "941-347-7702",
      gsl_props_web_rendered: null,
      Nid: 198,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-88.1267322, 30.7046156],
    },
    properties: {
      name: "McCoy Outdoor Co",
      description:
        '<div class="street-block"><div class="thoroughfare">3498 Springhill Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Mobile</span>, <span class="state">AL</span> <span class="postal-code">36608</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "251-473-1080",
      gsl_props_web_rendered: "http://mccoyoutdoorco.com",
      Nid: 197,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-115.5560497, 48.3883584],
    },
    properties: {
      name: "Libby Sports Center",
      description:
        '<div class="street-block"><div class="thoroughfare">204 W 9th St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Libby</span>, <span class="state">MT</span> <span class="postal-code">59923</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-293-4641",
      gsl_props_web_rendered: null,
      Nid: 196,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.5103828, 29.429573],
    },
    properties: {
      name: "Good Guys Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">16 N Summit St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Crescent City</span>, <span class="state">FL</span> <span class="postal-code">32112</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "855-822-1911",
      gsl_props_web_rendered: null,
      Nid: 195,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-105.135754, 39.712573],
    },
    properties: {
      name: "Bristlecone Shooting, Training and Retail Center",
      description:
        '<div class="street-block"><div class="thoroughfare">12105 W Cedar Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Lakewood</span>, <span class="state">CO</span> <span class="postal-code">80228</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "303-985-0989",
      gsl_props_web_rendered: "http://bristleconeshooting.com",
      Nid: 194,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-100.5832021, 31.3083424],
    },
    properties: {
      name: "Shootin&#039; To The Max LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">11948 Knickerbocker Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">San Angelo</span>, <span class="state">TX</span> <span class="postal-code">76904</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "254-434-1062",
      gsl_props_web_rendered: null,
      Nid: 193,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-102.1431902, 32.0286192],
    },
    properties: {
      name: "S and K Arms Company LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">4400 N Midland Dr Ste 640</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Midland</span>, <span class="state">TX</span> <span class="postal-code">79707</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "432-704-5127",
      gsl_props_web_rendered: "http://skarms.com",
      Nid: 184,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-108.541762, 45.7692369],
    },
    properties: {
      name: "Three Sights Indoor Shooting Range",
      description:
        '<div class="street-block"><div class="thoroughfare">1020 Central Ave #4</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Billings</span>, <span class="state">MT</span> <span class="postal-code">59102</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-294-5711",
      gsl_props_web_rendered: "http://threesightsshootingrange.com",
      Nid: 183,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.631302, 32.855759],
    },
    properties: {
      name: "Prestige Defense LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">632 Reinosa Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Garland</span>, <span class="state">TX</span> <span class="postal-code">75043</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "469-358-3811",
      gsl_props_web_rendered: "http://prestigedefense.com",
      Nid: 182,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.2519024, 37.4998267],
    },
    properties: {
      name: "Imbert and Smithers",
      description:
        '<div class="street-block"><div class="thoroughfare">1144 El Camino Real</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">San Carlos</span>, <span class="state">CA</span> <span class="postal-code">94070</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "650-593-4207",
      gsl_props_web_rendered: "http://imbertandsmithersinc.com",
      Nid: 181,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-119.066004, 35.3826139],
    },
    properties: {
      name: "Second Amendment Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">2523 Mohawk St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Bakersfield</span>, <span class="state">CA</span> <span class="postal-code">93308</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "661-323-4512",
      gsl_props_web_rendered: "http://2ndamendmentsports.com",
      Nid: 180,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-118.105233, 33.8854655],
    },
    properties: {
      name: "Ammo Brothers",
      description:
        '<div class="street-block"><div class="thoroughfare">15979 Piuma Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Cerritos</span>, <span class="state">CA</span> <span class="postal-code">90703</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "562-865-3980",
      gsl_props_web_rendered: "http://ammobros.com",
      Nid: 179,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-102.369626, 31.870905],
    },
    properties: {
      name: "Gun Sport LTD",
      description:
        '<div class="street-block"><div class="thoroughfare">2701 N Dixie Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Odessa</span>, <span class="state">TX</span> <span class="postal-code">79762</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "432-362-8696",
      gsl_props_web_rendered: "http://gunsport.com",
      Nid: 178,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.3374491, 30.049568],
    },
    properties: {
      name: "CSC Distributors",
      description:
        '<div class="street-block"><div class="thoroughfare">6310 Treaschwig Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Spring</span>, <span class="state">TX</span> <span class="postal-code">77373</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "281-821-0070",
      gsl_props_web_rendered: "http://carterscountry.net",
      Nid: 177,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-80.291337, 25.893373],
    },
    properties: {
      name: "Lous Police Distributors Inc.",
      description:
        '<div class="street-block"><div class="thoroughfare">7815 West 4 Avenue</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Hialeah</span>, <span class="state">FL</span> <span class="postal-code">33014</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "305-416-0000",
      gsl_props_web_rendered: "http://louspolice.com",
      Nid: 176,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-102.073769, 31.9717393],
    },
    properties: {
      name: "TMP/Hunters Equipment",
      description:
        '<div class="street-block"><div class="thoroughfare">2700 South Rankin HWY</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Midland</span>, <span class="state">TX</span> <span class="postal-code">79706</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "432-686-2500",
      gsl_props_web_rendered: "http://gotmp.com",
      Nid: 175,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-121.4840006, 38.5242965],
    },
    properties: {
      name: "River City Gun Exchange",
      description:
        '<div class="street-block"><div class="thoroughfare">2370 Fruitridge Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Sacramento</span>, <span class="state">CA</span> <span class="postal-code">95822</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "916-428-0377",
      gsl_props_web_rendered: "http://rcgunex.com",
      Nid: 174,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.148877, 29.2697168],
    },
    properties: {
      name: "Carrolls Gun Shop Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">123 Carroll Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Wharton</span>, <span class="state">TX</span> <span class="postal-code">77488</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "979-532-3175",
      gsl_props_web_rendered: "http://carrollsgunshop.com",
      Nid: 173,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.2605206, 44.2073777],
    },
    properties: {
      name: "Kjergaard Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">1951 200th Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Lake Benton</span>, <span class="state">MN</span> <span class="postal-code">56149</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "507-368-4696",
      gsl_props_web_rendered: "http://kjergaardsports.com",
      Nid: 172,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.270686, 37.6786617],
    },
    properties: {
      name: "The Wichita Gun Club",
      description:
        '<div class="street-block"><div class="thoroughfare">504 S. Edgemoor</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Wichita</span>, <span class="state">KS</span> <span class="postal-code">67218</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "316-835-0887",
      gsl_props_web_rendered: "http://thewichitagunclub.com",
      Nid: 171,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-92.4734573, 34.862975],
    },
    properties: {
      name: "Armoury Guns &amp; Armtac",
      description:
        '<div class="street-block"><div class="thoroughfare">18515 Apex Ln</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Roland</span>, <span class="state">AR</span> <span class="postal-code">72135</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "501-626-2796",
      gsl_props_web_rendered: null,
      Nid: 170,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-82.7875679, 27.851613],
    },
    properties: {
      name: "Wide Open Armory",
      description:
        '<div class="street-block"><div class="thoroughfare">8666 Seminole Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Seminole</span>, <span class="state">FL</span> <span class="postal-code">33772</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "727-202-5980",
      gsl_props_web_rendered: "http://wideopenarmory.com",
      Nid: 168,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-104.285248, 32.428138],
    },
    properties: {
      name: "Clicks Gun Supply",
      description:
        '<div class="street-block"><div class="thoroughfare">4919 West Church Street</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Carlsbad</span>, <span class="state">NM</span> <span class="postal-code">88220</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "575-706-0402",
      gsl_props_web_rendered: null,
      Nid: 167,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-92.4950108, 34.6196245],
    },
    properties: {
      name: "Worldwide Weapons",
      description:
        '<div class="street-block"><div class="thoroughfare">23201 I-30</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Bryant</span>, <span class="state">AR</span> <span class="postal-code">72022</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "501-847-4999",
      gsl_props_web_rendered: "http://worlwideweapons.net",
      Nid: 166,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-115.1903937, 36.0858168],
    },
    properties: {
      name: "Ventura Distribution",
      description:
        '<div class="street-block"><div class="thoroughfare">5725 S Valley View Blvd Suite 8</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Las Vegas</span>, <span class="state">NV</span> <span class="postal-code">89118</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "702-217-1798",
      gsl_props_web_rendered: "http://venturamunitions.com",
      Nid: 165,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-98.5165685, 45.4567755],
    },
    properties: {
      name: "SoDak Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">850 S HWY 281</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Aberdeen</span>, <span class="state">SD</span> <span class="postal-code">57401</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "605-225-2737",
      gsl_props_web_rendered: "http://sodaksports.com",
      Nid: 164,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.2430225, 32.6092226],
    },
    properties: {
      name: "Alpine Range Supply Co",
      description:
        '<div class="street-block"><div class="thoroughfare">5482 Shelby Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Forth Worth</span>, <span class="state">TX</span> <span class="postal-code">76140</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "817-478-6613",
      gsl_props_web_rendered: "http://alpinerange.com",
      Nid: 163,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-76.6092867, 40.16427],
    },
    properties: {
      name: "Trop Gun Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">910 N Hanover Street</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Elizabethtown</span>, <span class="state">PA</span> <span class="postal-code">17022</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "717-367-5585",
      gsl_props_web_rendered: "http://tropgun.com",
      Nid: 162,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-92.3803991, 36.3419556],
    },
    properties: {
      name: "North Arkansas Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">203 N. College Street</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Mountain Home</span>, <span class="state">AZ</span> <span class="postal-code">72653</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "870-424-5155",
      gsl_props_web_rendered: "http://narkguns.com",
      Nid: 161,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-98.4507351, 29.3691074],
    },
    properties: {
      name: "Durys Gun Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">819 Hot Wells Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">San Antonio</span>, <span class="state">TX</span> <span class="postal-code">78223</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "210-533-5431",
      gsl_props_web_rendered: "http://durysguns.com",
      Nid: 160,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.7707561, 26.2430531],
    },
    properties: {
      name: "Lotus Gunworks Naples LLC.",
      description:
        '<div class="street-block"><div class="thoroughfare">2390 Vanderbilt Beach Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Naples</span>, <span class="state">FL</span> <span class="postal-code">34109</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "239-593-0232",
      gsl_props_web_rendered: "http://lotusgunworks.com",
      Nid: 159,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.374671, 27.700901],
    },
    properties: {
      name: "The Sharp Shooter",
      description:
        '<div class="street-block"><div class="thoroughfare">5515 South Staples</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Corpus Christi</span>, <span class="state">TX</span> <span class="postal-code">78411</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "361-980-1190",
      gsl_props_web_rendered: "http://thesharpshooter.com",
      Nid: 158,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-105.8210983, 46.4014347],
    },
    properties: {
      name: "Red Rock Sporting Goods",
      description:
        '<div class="street-block"><div class="thoroughfare">700 S Haynes Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Miles City</span>, <span class="state">MT</span> <span class="postal-code">59301</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-232-2716",
      gsl_props_web_rendered: "http://redrocksportinggoods.com",
      Nid: 157,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-82.318472, 36.535362],
    },
    properties: {
      name: "NDS Firearms and Advanced Weaponry",
      description:
        '<div class="street-block"><div class="thoroughfare">3209 Hwy 126</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Blountville</span>, <span class="state">TN</span> <span class="postal-code">37617</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "423-782-8788",
      gsl_props_web_rendered: "http://newfrontierarmory.com",
      Nid: 156,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-92.3939115, 34.7550777],
    },
    properties: {
      name: "Bullseye Guns and Ammo",
      description:
        '<div class="street-block"><div class="thoroughfare">205 N Shackleford</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Little Rock</span>, <span class="state">AR</span> <span class="postal-code">72211</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "501-224-4867",
      gsl_props_web_rendered: "http://bullseyear.com",
      Nid: 155,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.7468652, 30.298554],
    },
    properties: {
      name: "McBrides Guns Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">2915 San Gabriel</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Austin</span>, <span class="state">TX</span> <span class="postal-code">78705</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "512-472-3532",
      gsl_props_web_rendered: "http://mcbridesguns.com",
      Nid: 154,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-69.9827208, 41.7953709],
    },
    properties: {
      name: "Goose Hummock Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">15 Rt 6A</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Orleans</span>, <span class="state">MA</span> <span class="postal-code">02653</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "508-255-0455",
      gsl_props_web_rendered: "http://goose.com",
      Nid: 153,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-92.2093506, 34.8076098],
    },
    properties: {
      name: "Thompson Sporting Goods",
      description:
        '<div class="street-block"><div class="thoroughfare">5802 Warden Road</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Sherwood</span>, <span class="state">AZ</span> <span class="postal-code">72120</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "501-835-3006",
      gsl_props_web_rendered: "http://ftsg.us",
      Nid: 152,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.549746, 35.412236],
    },
    properties: {
      name: "Carolinas First Defense",
      description:
        '<div class="street-block"><div class="thoroughfare">106 Old Stagecoach Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Lawndale</span>, <span class="state">NC</span> <span class="postal-code">28090</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "704-692-4176",
      gsl_props_web_rendered: "http://carolinasfirstdefense.com",
      Nid: 151,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-79.1646608, 40.5570451],
    },
    properties: {
      name: "Bullseye Firearms Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">2356 RT 119 South</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Homer City</span>, <span class="state">PA</span> <span class="postal-code">15748</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "724-479-3722",
      gsl_props_web_rendered: "http://bullseye-firearms.com",
      Nid: 149,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-90.4821539, 30.4834912],
    },
    properties: {
      name: "Interstate Guns, LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">1715 S Morrison Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Hammond</span>, <span class="state">LA</span> <span class="postal-code">70403-5737</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "985-340-1980",
      gsl_props_web_rendered: "http://interstateguns.com",
      Nid: 148,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-90.6886239, 35.8060228],
    },
    properties: {
      name: "DNW Outdoors",
      description:
        '<div class="street-block"><div class="thoroughfare">1711 E Parker Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Jonesboro</span>, <span class="state">AR</span> <span class="postal-code">72404</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "870-972-5827",
      gsl_props_web_rendered: "http://dnwoutdoors.com",
      Nid: 147,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-71.6815381, 42.4287496],
    },
    properties: {
      name: "IDC Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">627 High Street</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Clinton</span>, <span class="state">MA</span> <span class="postal-code">01510</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "978-365-9353",
      gsl_props_web_rendered: "http://idcfirearms.com",
      Nid: 146,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.797905, 44.493128],
    },
    properties: {
      name: "Barrels and Arrows",
      description:
        '<div class="street-block"><div class="thoroughfare">3041 US Hwy 59</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Marshall</span>, <span class="state">MN</span> <span class="postal-code">56258</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "507-530-5877",
      gsl_props_web_rendered: "http://barrelsandarrows.com",
      Nid: 144,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-80.6952069, 28.3566894],
    },
    properties: {
      name: "B and H Police Supply",
      description:
        '<div class="street-block"><div class="thoroughfare">235 E Merritt Island Cswy</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Merritt Island</span>, <span class="state">FL</span> <span class="postal-code">32952</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "321-452-1105",
      gsl_props_web_rendered: "http://bhgunrack.com",
      Nid: 143,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.5955599, 35.4608084],
    },
    properties: {
      name: "H and H Gun Range Shooting Sports Outlet",
      description:
        '<div class="street-block"><div class="thoroughfare">400 S Vermont #110</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Oklahoma City</span>, <span class="state">OK</span> <span class="postal-code">73108-1034</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "405-947-3888",
      gsl_props_web_rendered: "http://hhshootingsports.com",
      Nid: 142,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.0728679, 29.2543701],
    },
    properties: {
      name: "Florida Gun Exchange",
      description:
        '<div class="street-block"><div class="thoroughfare">1050 South Nova Road</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Ormond Beach</span>, <span class="state">FL</span> <span class="postal-code">32174</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "386-304-9499",
      gsl_props_web_rendered: "http://floridagunexchange.com",
      Nid: 141,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.2699113, 29.1967495],
    },
    properties: {
      name: "Mr Money Pawn Gun and Jewelry",
      description:
        '<div class="street-block"><div class="thoroughfare">301 N Mechanic</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">El Campo</span>, <span class="state">TX</span> <span class="postal-code">77437</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "979-543-7296",
      gsl_props_web_rendered: "http://fullautofirearms.com",
      Nid: 140,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.1672896, 32.8343522],
    },
    properties: {
      name: "DFW Shooting Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">105 Bedford Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Bedford</span>, <span class="state">TX</span> <span class="postal-code">76022</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "817-285-0664",
      gsl_props_web_rendered: "http://dfwshootingsports.com",
      Nid: 139,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-119.7896708, 36.8277038],
    },
    properties: {
      name: "Herb Bauer",
      description:
        '<div class="street-block"><div class="thoroughfare">6264 North Blackstone</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Fresno</span>, <span class="state">CA</span> <span class="postal-code">93710</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "559-435-8600",
      gsl_props_web_rendered: "http://herbbauersportinggoods.com",
      Nid: 138,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.9954146, 30.9147976],
    },
    properties: {
      name: "Cottonwood Armory",
      description:
        '<div class="street-block"><div class="thoroughfare">5908 Hwy 21 W</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Madisonville</span>, <span class="state">TX</span> <span class="postal-code">77864</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "936-348-7493",
      gsl_props_web_rendered: "http://cottonwoodarmory.com",
      Nid: 137,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-80.88272, 35.5961611],
    },
    properties: {
      name: "Point Blank Range",
      description:
        '<div class="street-block"><div class="thoroughfare">743 River Hwy</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Mooresville</span>, <span class="state">NC</span> <span class="postal-code">28117</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "704-230-0262",
      gsl_props_web_rendered: "http://pointblankrange.com",
      Nid: 135,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-92.6708459, 42.3771429],
    },
    properties: {
      name: "Peacekeeper Defense",
      description:
        '<div class="street-block"><div class="thoroughfare">22900 S Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Reinbeck</span>, <span class="state">IA</span> <span class="postal-code">50669</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "319-415-6630",
      gsl_props_web_rendered: "http://peacekeeperdefense.com",
      Nid: 134,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.4105736, 37.6205332],
    },
    properties: {
      name: "Peninsula Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">360 El Camino Real</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">San Bruno</span>, <span class="state">CA</span> <span class="postal-code">94066</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "650-588-8886",
      gsl_props_web_rendered: "http://peninsulaguns.com",
      Nid: 133,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-121.2906204, 38.0000454],
    },
    properties: {
      name: "Outdoor Sportsman",
      description:
        '<div class="street-block"><div class="thoroughfare">4969 West Lane</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Stockton</span>, <span class="state">CA</span> <span class="postal-code">95210</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "209-957-4867",
      gsl_props_web_rendered: "http://outdoorsportsman.biz",
      Nid: 132,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-118.5350347, 34.3450483],
    },
    properties: {
      name: "Oaktree Gun Club",
      description:
        '<div class="street-block"><div class="thoroughfare">23121 North Coltrane Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Newhall</span>, <span class="state">CA</span> <span class="postal-code">91321</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: null,
      gsl_props_web_rendered: "http://oaktreegunclub.com",
      Nid: 131,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-86.1585005, 39.621065],
    },
    properties: {
      name: "Elmores Firearms and Accessories Inc.",
      description:
        '<div class="street-block"><div class="thoroughfare">520 N State Rd 135 Suite I</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Greenwood</span>, <span class="state">IN</span> <span class="postal-code">46142</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "317-888-5400",
      gsl_props_web_rendered: "http://elmoresfirearms.com",
      Nid: 130,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-87.4280073, 41.5242862],
    },
    properties: {
      name: "Blythes Sport Shop Inc (Griffith)",
      description:
        '<div class="street-block"><div class="thoroughfare">138 N Broad St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Griffith</span>, <span class="state">IN</span> <span class="postal-code">46319</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: null,
      gsl_props_web_rendered: "http://blythesgungear.com",
      Nid: 129,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-87.0611412, 41.4730948],
    },
    properties: {
      name: "Blythes Sport Shop Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">city center</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Valparaiso</span>, <span class="state">IN</span> <span class="postal-code">46383</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "219-476-0026",
      gsl_props_web_rendered: "http://blythesgungear.com",
      Nid: 128,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-93.2971672, 37.1799712],
    },
    properties: {
      name: "Bass Pro",
      description:
        '<div class="street-block"><div class="thoroughfare">1935 S Campbell</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Springfield</span>, <span class="state">MO</span> <span class="postal-code">65807</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "417-887-7334",
      gsl_props_web_rendered: "http://basspro.com",
      Nid: 127,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.5905244, 32.8408694],
    },
    properties: {
      name: "B and S Wholesale Inc.",
      description:
        '<div class="street-block"><div class="thoroughfare">online only</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Garland</span>, <span class="state">TX</span> <span class="postal-code">75043</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "972-226-1816",
      gsl_props_web_rendered: "http://bsgunstore.com",
      Nid: 126,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-122.4343315, 47.1989916],
    },
    properties: {
      name: "Welchers Gun Shop Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">6400 Pacific Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Tacoma</span>, <span class="state">WA</span> <span class="postal-code">98408</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "253-472-1113",
      gsl_props_web_rendered: "http://northwestfirearms.com",
      Nid: 125,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-119.72165, 39.530671],
    },
    properties: {
      name: "Reno Sparks Scheels",
      description:
        '<div class="street-block"><div class="thoroughfare">1200 Scheels Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Sparks</span>, <span class="state">NV</span> <span class="postal-code">89434</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "775-331-2700",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 124,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.353217, 42.4463702],
    },
    properties: {
      name: "Sioux City Scheels",
      description:
        '<div class="street-block"><div class="thoroughfare">4400 Sergeant Rd #54</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Sioux City</span>, <span class="state">IA</span> <span class="postal-code">51106</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "712-252-1551",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 123,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-111.893439, 40.5465915],
    },
    properties: {
      name: "Scheels",
      description:
        '<div class="street-block"><div class="thoroughfare">11282 S State St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Sandy</span>, <span class="state">UT</span> <span class="postal-code">84070</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "801-948-7080",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 122,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.1837835, 41.2616914],
    },
    properties: {
      name: "Omaha Scheels All Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">17202 Davenport St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Omaha</span>, <span class="state">NE</span> <span class="postal-code">68118</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "402-289-5666",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 121,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-93.9535766, 44.1729626],
    },
    properties: {
      name: "Scheels All Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">1850 Adams St., Ste 6</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Mankato</span>, <span class="state">MN</span> <span class="postal-code">56001</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "507-386-7767",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 119,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.6771178, 40.7423617],
    },
    properties: {
      name: "Lincoln Scheels",
      description:
        '<div class="street-block"><div class="thoroughfare">2960 Pine Lake Rd #B</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Lincoln</span>, <span class="state">NE</span> <span class="postal-code">68516</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "402-420-9000",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 118,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.0711533, 47.8929865],
    },
    properties: {
      name: "Grand Forks Scheels",
      description:
        '<div class="street-block"><div class="thoroughfare">2800 S Columbia Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Grand Forks</span>, <span class="state">ND</span> <span class="postal-code">58201</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "701-780-9424",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 117,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.8639018, 46.8574696],
    },
    properties: {
      name: "Scheels All Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">1551 45th St S</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Fargo</span>, <span class="state">ND</span> <span class="postal-code">58103</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "701-298-2918",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 116,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-91.4376893, 44.7740311],
    },
    properties: {
      name: "Scheels All Sports, Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">4710 Golf Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Eau Claire</span>, <span class="state">WI</span> <span class="postal-code">54701</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "715-833-1886",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 115,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-91.6083756, 41.6936788],
    },
    properties: {
      name: "Iowa City Scheels",
      description:
        '<div class="street-block"><div class="thoroughfare">1461 Coral Ridge Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Coralville</span>, <span class="state">IA</span> <span class="postal-code">52241</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "319-625-9959",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 114,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-100.7866101, 46.7969471],
    },
    properties: {
      name: "Kirkwood Scheels Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">800 Kirkwood Mall</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Bismarck</span>, <span class="state">ND</span> <span class="postal-code">58504</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "701-255-7255",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 113,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-89.6691076, 39.7497171],
    },
    properties: {
      name: "Scheels",
      description:
        '<div class="street-block"><div class="thoroughfare">3801 S MacArthur Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Springfield</span>, <span class="state">IL</span> <span class="postal-code">62711</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "217-726-6330",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 112,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-108.6134274, 45.7487698],
    },
    properties: {
      name: "Scheels All Sports, Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">1121 Shiloh Crossing Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Billings</span>, <span class="state">MT</span> <span class="postal-code">59102</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-656-9220",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 111,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.524931, 35.55185],
    },
    properties: {
      name: "Wilshire Gun",
      description:
        '<div class="street-block"><div class="thoroughfare">615 W Wilshire Blvd Ste 1400</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Oklahoma City</span>, <span class="state">OK</span> <span class="postal-code">73116</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "405-608-4999",
      gsl_props_web_rendered: "http://wilshiregun.com",
      Nid: 110,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-102.0791305, 32.0147332],
    },
    properties: {
      name: "Between The Walls",
      description:
        '<div class="street-block"><div class="thoroughfare">1707 N Big Spring St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Midland</span>, <span class="state">TX</span> <span class="postal-code">79701</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "432-687-4867",
      gsl_props_web_rendered: null,
      Nid: 109,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.3588878, 32.7611172],
    },
    properties: {
      name: "Defender Outdoors Shooting Center",
      description:
        '<div class="street-block"><div class="thoroughfare">2900 Shotts Street</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Fort Worth</span>, <span class="state">TX</span> <span class="postal-code">76107</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "817-935-8377",
      gsl_props_web_rendered:
        "http://defenderoutdoorsshootingcenter.com",
      Nid: 108,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.0713553, 33.9974917],
    },
    properties: {
      name: "Shooters Choice",
      description:
        '<div class="street-block"><div class="thoroughfare">944 Sunset Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">West Columbia</span>, <span class="state">SC</span> <span class="postal-code">29169</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "803-791-5498",
      gsl_props_web_rendered: null,
      Nid: 107,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.8350165, 32.7782101],
    },
    properties: {
      name: "Rays Hardware and Sporting Goods",
      description:
        '<div class="street-block"><div class="thoroughfare">730 Singleton Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Dallas</span>, <span class="state">TX</span> <span class="postal-code">75212</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "214-747-7916",
      gsl_props_web_rendered: "http://rayssportinggoods.com",
      Nid: 106,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-75.98808, 37.231143],
    },
    properties: {
      name: "Historic Arms Corporation",
      description:
        '<div class="street-block"><div class="thoroughfare">2464 Plantation Creek Lane</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Cape Charles</span>, <span class="state">VA</span> <span class="postal-code">23310</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "757-331-1439",
      gsl_props_web_rendered: "http://historicarmscorp.com",
      Nid: 105,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-79.9333288, 35.88943],
    },
    properties: {
      name: "Gun Doctor Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">9826 US 311 South Ste 1</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Archdale</span>, <span class="state">NC</span> <span class="postal-code">27263</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "336-431-0005",
      gsl_props_web_rendered: null,
      Nid: 104,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.6022931, 30.7238136],
    },
    properties: {
      name: "Ables Sporting Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">357 FM 1791 North</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Huntsville</span>, <span class="state">TX</span> <span class="postal-code">77320</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "800-720-3275",
      gsl_props_web_rendered: "http://ableammo.com",
      Nid: 103,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-91.9114464, 30.0183418],
    },
    properties: {
      name: "Acadiana Outfitters",
      description:
        '<div class="street-block"><div class="thoroughfare">4519 W Hwy 90</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">New Iberia</span>, <span class="state">LA</span> <span class="postal-code">70560</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "337-365-7874",
      gsl_props_web_rendered: "http://acadianoutfitters.com",
      Nid: 102,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.5200682, 29.7285554],
    },
    properties: {
      name: "Collectors Firearms Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">3301 Fondren #O</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Houston</span>, <span class="state">TX</span> <span class="postal-code">77063</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "713-781-1960",
      gsl_props_web_rendered: "http://collectorsfirearms.com",
      Nid: 100,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.7960851, 32.7538937],
    },
    properties: {
      name: "Gibsons Sporting Goods Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">411 S Main</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Weatherford</span>, <span class="state">TX</span> <span class="postal-code">76086</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "817-594-8711",
      gsl_props_web_rendered: "http://gibsonsace.com",
      Nid: 99,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.966984, 34.5283683],
    },
    properties: {
      name: "Murfs Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">1720 N HWY 81</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Duncan</span>, <span class="state">OK</span> <span class="postal-code">73533</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "580-255-6776",
      gsl_props_web_rendered: "http://murfsguns.com",
      Nid: 98,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.9841593, 33.2694408],
    },
    properties: {
      name: "Defender Outdoors Shooting Center",
      description:
        '<div class="street-block"><div class="thoroughfare">14535 Industrial Park</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Aubrey</span>, <span class="state">TX</span> <span class="postal-code">76227</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "877-300-5417",
      gsl_props_web_rendered: "http://defenderoutdoors.com",
      Nid: 97,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.8996343, 36.1048862],
    },
    properties: {
      name: "Sports World Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">6841 E 41st Street</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Tulsa</span>, <span class="state">OK</span> <span class="postal-code">74145-1501</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "918-742-4027",
      gsl_props_web_rendered: "http://sportsworldtulsa.com",
      Nid: 96,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-121.7193963, 37.7083383],
    },
    properties: {
      name: "Solar Tactical LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">6252 Preston Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Livermore</span>, <span class="state">CA</span> <span class="postal-code">94551</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "925-447-4743",
      gsl_props_web_rendered: "http://solartactical.com",
      Nid: 95,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.4755336, 28.6593839],
    },
    properties: {
      name: "Shoot Straight Warehouse",
      description:
        '<div class="street-block"><div class="thoroughfare">1349 S Orange Blossom Trail</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Apopka</span>, <span class="state">FL</span> <span class="postal-code">32703</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "407-889-0842",
      gsl_props_web_rendered: "http://shoot-straight.com",
      Nid: 94,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-91.9128467, 32.7860637],
    },
    properties: {
      name: "Simmons Sporting Goods &amp; Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">918 N Washington St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Bastrop</span>, <span class="state">LA</span> <span class="postal-code">71220</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "318-283-2688",
      gsl_props_web_rendered: "http://simmonsportinggoods.com",
      Nid: 93,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-80.1136088, 26.2751037],
    },
    properties: {
      name: "Only the Best Firearms and Accessories",
      description:
        '<div class="street-block"><div class="thoroughfare">750 East Sample Rd Bldg.1</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Pampano Beach</span>, <span class="state">FL</span> <span class="postal-code">33064</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "954-545-1321",
      gsl_props_web_rendered: "http://onlythebestfirearms.com",
      Nid: 92,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-84.6735735, 42.6633588],
    },
    properties: {
      name: "Michigan Police Equipment Co.",
      description:
        '<div class="street-block"><div class="thoroughfare">6521 Lansing Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Charlotte</span>, <span class="state">MI</span> <span class="postal-code">48813</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "517-322-0443",
      gsl_props_web_rendered: null,
      Nid: 91,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-83.8046449, 35.326395],
    },
    properties: {
      name: "Liberty Lane Arms",
      description:
        '<div class="street-block"><div class="thoroughfare">427 Rodney Orr Bypass</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Robbinsville</span>, <span class="state">NC</span> <span class="postal-code">28771</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "828-479-8330",
      gsl_props_web_rendered: null,
      Nid: 90,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.785722, 36.00674],
    },
    properties: {
      name: "Kings Guns LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">2714 N Kings HWY</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Cushing</span>, <span class="state">OK</span> <span class="postal-code">74023</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "918-306-4511",
      gsl_props_web_rendered: "http://usacarry.com",
      Nid: 89,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-104.5667454, 48.7767619],
    },
    properties: {
      name: "Hi-Line Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">558 West First Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Plentywood</span>, <span class="state">MT</span> <span class="postal-code">59254</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-765-1522",
      gsl_props_web_rendered: "http://hilinesports.com",
      Nid: 88,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-78.985553, 35.1898456],
    },
    properties: {
      name: "Guns Plus",
      description:
        '<div class="street-block"><div class="thoroughfare">1503 N Bragg Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Spring Lake</span>, <span class="state">NC</span> <span class="postal-code">28390</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "910-497-2440",
      gsl_props_web_rendered: "http://gunsplus.com",
      Nid: 87,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.6915, 33.0526871],
    },
    properties: {
      name: "Gunmaster Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">5001 K Avenue #102</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Plano</span>, <span class="state">TX</span> <span class="postal-code">75074</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "972-423-0121",
      gsl_props_web_rendered: "http://planogun.com",
      Nid: 86,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.6915, 33.0526871],
    },
    properties: {
      name: "Gunmaster Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">5001 K Avenue #102</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Plano</span>, <span class="state">TX</span> <span class="postal-code">75074</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "972-423-0121",
      gsl_props_web_rendered: "http://planogun.com",
      Nid: 85,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-96.4612188, 32.7528639],
    },
    properties: {
      name: "CYA LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">206 East US HWY 80 #B</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Forney</span>, <span class="state">TX</span> <span class="postal-code">75126</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "972-279-4292",
      gsl_props_web_rendered: "http://cyallc.om",
      Nid: 82,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-80.0886791, 26.4445708],
    },
    properties: {
      name: "CWJC Enterprises",
      description:
        '<div class="street-block"><div class="thoroughfare">1505 Poinsettia Dr. H-6</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Delray Beach</span>, <span class="state">FL</span> <span class="postal-code">33444</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "561-265-0700",
      gsl_props_web_rendered: null,
      Nid: 81,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-94.7947319, 38.8909802],
    },
    properties: {
      name: "Centerfire Shooting Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">875 N Jan-Mar Ct</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Olathe</span>, <span class="state">KS</span> <span class="postal-code">66061</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "913-782-4900",
      gsl_props_web_rendered: "http://centerfiress.com",
      Nid: 80,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-80.6264465, 40.7916878],
    },
    properties: {
      name: "Buckeye Firearms Distribution Center LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">7438 Depot St.</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Rogers</span>, <span class="state">OH</span> <span class="postal-code">44455</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "330-227-6433",
      gsl_props_web_rendered: null,
      Nid: 79,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.7648087, 34.9295772],
    },
    properties: {
      name: "All Pawn and Surplus Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">404 E Chickasaw Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Mcalester</span>, <span class="state">OK</span> <span class="postal-code">74501</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "918-423-5959",
      gsl_props_web_rendered: null,
      Nid: 78,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-110.8826099, 32.2430358],
    },
    properties: {
      name: "Second Amendment Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">5146 E Pima St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Tucson</span>, <span class="state">AZ</span> <span class="postal-code">85712</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "520-325-3346",
      gsl_props_web_rendered: "http://2ndamendmentsports.com",
      Nid: 77,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-116.3095856, 33.7674653],
    },
    properties: {
      name: "Second Amendment Sports",
      description:
        '<div class="street-block"><div class="thoroughfare">38-698B El Viento Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Palm Desert</span>, <span class="state">CA</span> <span class="postal-code">92211</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "760-200-4867",
      gsl_props_web_rendered: "http://2ndamendmentsports.com",
      Nid: 76,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-118.7625589, 45.6730772],
    },
    properties: {
      name: "Garners Grocery and Sporting Goods",
      description:
        '<div class="street-block"><div class="thoroughfare">2214 SE Court Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Pendleton</span>, <span class="state">OR</span> <span class="postal-code">97801</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "541-276-7552",
      gsl_props_web_rendered: "http://garnerssg.com",
      Nid: 75,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-98.4412646, 29.4895823],
    },
    properties: {
      name: "Ranger Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">1308 Austin Hwy</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">San Antonio</span>, <span class="state">TX</span> <span class="postal-code">78209</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "210-822-GUNS (4867)",
      gsl_props_web_rendered: "http://rangerfirearmsoftexas.com",
      Nid: 74,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-108.626408, 45.728552],
    },
    properties: {
      name: "Montana Ordnance Company",
      description:
        '<div class="street-block"><div class="thoroughfare">4335 Jackrabbit Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Billings</span>, <span class="state">MT</span> <span class="postal-code">59106</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-697-7091",
      gsl_props_web_rendered: null,
      Nid: 73,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-80.2879357, 40.9777866],
    },
    properties: {
      name: "Dukes Sport Shop Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">2801 New Butler Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">New Castle</span>, <span class="state">PA</span> <span class="postal-code">16101</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "724-652-6019",
      gsl_props_web_rendered: "http://dukessportshop.com",
      Nid: 72,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-89.6224394, 44.9584418],
    },
    properties: {
      name: "CWFirearms",
      description:
        '<div class="street-block"><div class="thoroughfare">619 Washington St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Wausau</span>, <span class="state">WI</span> <span class="postal-code">54403</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "715-845-8476",
      gsl_props_web_rendered: "http://cwfirearms.com",
      Nid: 71,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.4538402, 37.6845919],
    },
    properties: {
      name: "Green Top Sporting Goods Corp",
      description:
        '<div class="street-block"><div class="thoroughfare">10150 Lakeridge Parkway</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Ashland</span>, <span class="state">VA</span> <span class="postal-code">23005</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "804-550-2188",
      gsl_props_web_rendered: "http://greentophuntfish.com",
      Nid: 70,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-91.5586886, 34.5339431],
    },
    properties: {
      name: "Macks Sport Shop",
      description:
        '<div class="street-block"><div class="thoroughfare">2335 Hwy 63 N</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Stuttgart</span>, <span class="state">AZ</span> <span class="postal-code">72160</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "870-673-6960",
      gsl_props_web_rendered: "http://mackspw.com",
      Nid: 69,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-114.1567505, 46.2596582],
    },
    properties: {
      name: "Bob Ward and Sons",
      description:
        '<div class="street-block"><div class="thoroughfare">1120 North 1st St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Hamilton</span>, <span class="state">MT</span> <span class="postal-code">59840</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-363-6204",
      gsl_props_web_rendered: "http://bobwards.com",
      Nid: 68,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-112.5107549, 45.9839253],
    },
    properties: {
      name: "Bob Ward and Sons",
      description:
        '<div class="street-block"><div class="thoroughfare">1925 Dewey Blvd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Butte</span>, <span class="state">MT</span> <span class="postal-code">59701</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-494-4452",
      gsl_props_web_rendered: "http://bobwards.com",
      Nid: 67,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-112.0217505, 46.6208582],
    },
    properties: {
      name: "Bob Ward and Sons",
      description:
        '<div class="street-block"><div class="thoroughfare">3323 Dredge Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Helena</span>, <span class="state">MT</span> <span class="postal-code">59602</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-443-2138",
      gsl_props_web_rendered: "http://bobwards.com",
      Nid: 66,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-111.0690418, 45.7099132],
    },
    properties: {
      name: "Bob Ward and Sons",
      description:
        '<div class="street-block"><div class="thoroughfare">3011 Max Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Bozeman</span>, <span class="state">MT</span> <span class="postal-code">59715</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "406-585-1266",
      gsl_props_web_rendered: "http://bobwards.com",
      Nid: 65,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-119.7886337, 39.5242422],
    },
    properties: {
      name: "Mark Fore and Strike Sporting Goods",
      description:
        '<div class="street-block"><div class="thoroughfare">490 Kietzke Ln</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Reno</span>, <span class="state">NV</span> <span class="postal-code">89502</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "775-322-9559",
      gsl_props_web_rendered: "http://markforeandstrike.net",
      Nid: 64,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-99.3899942, 35.3929201],
    },
    properties: {
      name: "Gardner Guns and Mfg",
      description:
        '<div class="street-block"><div class="thoroughfare">1901 E 20th</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Elk City</span>, <span class="state">OK</span> <span class="postal-code">73648</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "580-225-8884",
      gsl_props_web_rendered: null,
      Nid: 63,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.8875937, 34.21632],
    },
    properties: {
      name: "Backwater Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">1024 S Kerr Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Wilmington</span>, <span class="state">NC</span> <span class="postal-code">28403</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "910-399-1451",
      gsl_props_web_rendered: "http://backwaterguns.com",
      Nid: 62,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-80.992423, 35.523815],
    },
    properties: {
      name: "Motown Firearms",
      description:
        '<div class="street-block"><div class="thoroughfare">3934 Blue Dory Ln</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Denver</span>, <span class="state">NC</span> <span class="postal-code">28037</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "704-617-1206",
      gsl_props_web_rendered: null,
      Nid: 61,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-92.1027948, 32.0569399],
    },
    properties: {
      name: "Spotted Dog Sporting Goods",
      description:
        '<div class="street-block"><div class="thoroughfare">6441 US HWY 165</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Columbia</span>, <span class="state">LA</span> <span class="postal-code">71418</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "318-331-3610",
      gsl_props_web_rendered: null,
      Nid: 60,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.731604, 30.424115],
    },
    properties: {
      name: "August M Crocker Fine Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">4903 Black Angus Cove Ste B</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Austin</span>, <span class="state">TX</span> <span class="postal-code">78727</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "512-567-7855",
      gsl_props_web_rendered: "http://augustguns.com",
      Nid: 59,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.552265, 34.43607],
    },
    properties: {
      name: "Surf City Guns and Ammo LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">103 Atkinson Point Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Surf City</span>, <span class="state">NC</span> <span class="postal-code">28445</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "910-328-4499",
      gsl_props_web_rendered: "http://surfcityguns.com",
      Nid: 58,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.4853113, 30.0540491],
    },
    properties: {
      name: "Spring Guns and Ammo",
      description:
        '<div class="street-block"><div class="thoroughfare">4401 Spring Cypress Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Spring</span>, <span class="state">TX</span> <span class="postal-code">77388</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "281-288-7000",
      gsl_props_web_rendered: "http://springgunsandammo.com",
      Nid: 57,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-75.4723415, 40.9065276],
    },
    properties: {
      name: "Armory",
      description:
        '<div class="street-block"><div class="thoroughfare">818 Interchange Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Kresgeville</span>, <span class="state">PA</span> <span class="postal-code">18333</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "610-681-4867",
      gsl_props_web_rendered: "http://armory818.com",
      Nid: 56,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-119.142011, 35.392859],
    },
    properties: {
      name: "Second Amendment Sports Inc.",
      description:
        '<div class="street-block"><div class="thoroughfare">12556 Jomani Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Bakersfield</span>, <span class="state">CA</span> <span class="postal-code">93312</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "661-323-4512",
      gsl_props_web_rendered: "http://2ndamendmentsports.com",
      Nid: 55,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-98.4827685, 26.7186077],
    },
    properties: {
      name: "Rio Grande Outfitters",
      description:
        '<div class="street-block"><div class="thoroughfare">4985 FM 1017</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">San Isidro</span>, <span class="state">TX</span> <span class="postal-code">78588</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "956-340-4250",
      gsl_props_web_rendered: "http://rgoutfitters.com",
      Nid: 54,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-83.341925, 42.607135],
    },
    properties: {
      name: "Motor City Gun Works Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">2140 Beechmont St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Keego Harbor</span>, <span class="state">MI</span> <span class="postal-code">48320</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "248-481-6154",
      gsl_props_web_rendered: "http://motorcitygunworks.net",
      Nid: 53,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-104.7919982, 41.1381775],
    },
    properties: {
      name: "Rocky Mountain Gun Trader",
      description:
        '<div class="street-block"><div class="thoroughfare">2115 E Lincolnway</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Cheyenne</span>, <span class="state">WY</span> <span class="postal-code">82001</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "307-632-5133",
      gsl_props_web_rendered: "http://rockymountainguntrader.com",
      Nid: 52,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.3983513, 28.3372278],
    },
    properties: {
      name: "L and R Armory LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">564 E Osceola Pkwy</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Kissimmee</span>, <span class="state">FL</span> <span class="postal-code">34744</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "407-201-6133",
      gsl_props_web_rendered: "http://thearmories.com",
      Nid: 51,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-81.6172252, 30.2674387],
    },
    properties: {
      name: "Shooters of Jacksonville Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">5085 University Blvd W</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Jacksonville</span>, <span class="state">FL</span> <span class="postal-code">32216</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "904-737-4495",
      gsl_props_web_rendered: "http://shootersjax.com",
      Nid: 50,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-83.0038986, 35.4779398],
    },
    properties: {
      name: "Hazelwood Gun and Tactical",
      description:
        '<div class="street-block"><div class="thoroughfare">495 Hazelwood Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Waynesville</span>, <span class="state">NC</span> <span class="postal-code">28786</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "828-452-7562",
      gsl_props_web_rendered: null,
      Nid: 45,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-118.1635346, 34.8602475],
    },
    properties: {
      name: "Karl&#039;s Hardware Incorporated",
      description:
        '<div class="street-block"><div class="thoroughfare">2700 Diamond St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Rosamond</span>, <span class="state">CA</span> <span class="postal-code">93560</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "661-256-3985",
      gsl_props_web_rendered: "http://karls.doitbest.com",
      Nid: 44,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-95.7462319, 29.5907826],
    },
    properties: {
      name: "Xtreme Guns &amp; Ammo LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">1110 HWY 90 E Ste C</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Richmond</span>, <span class="state">TX</span> <span class="postal-code">77406</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "832-363-3783",
      gsl_props_web_rendered: "http://xtremegunsandammo.com",
      Nid: 42,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-92.442182, 42.4813382],
    },
    properties: {
      name: "Cedar Falls Scheels",
      description:
        '<div class="street-block"><div class="thoroughfare">402 Viking Plaza Dr</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Cedar Falls</span>, <span class="state">IA</span> <span class="postal-code">50613</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "319-277-3033",
      gsl_props_web_rendered: null,
      Nid: 41,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-93.8070392, 41.5702624],
    },
    properties: {
      name: "Scheels All Sport",
      description:
        '<div class="street-block"><div class="thoroughfare">101 Jordan Creek Pkwy, Bldg 4000</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">West Des Moines</span>, <span class="state">IA</span> <span class="postal-code">50266</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "515-727-4065",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 40,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-94.2137572, 45.5538129],
    },
    properties: {
      name: "Scheels All Sports Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">40 N Waite Ave</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Waite Park</span>, <span class="state">MN</span> <span class="postal-code">56387</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "320-252-9494",
      gsl_props_web_rendered: "http://scheels.com",
      Nid: 39,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-82.423255, 29.658179],
    },
    properties: {
      name: "Big Daddy Guns",
      description:
        '<div class="street-block"><div class="thoroughfare">602 NW 75th St.</div>\n<div class="premise">Suite C</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Gainesville</span>, <span class="state">FL</span> <span class="postal-code">32607</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "855-682-4872",
      gsl_props_web_rendered: "http://bigdaddyguns.com",
      Nid: 38,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-84.1915489, 34.453575],
    },
    properties: {
      name: "Appalachian Armory Inc",
      description:
        '<div class="street-block"><div class="thoroughfare">1720 Goldmine Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Dawsonville</span>, <span class="state">GA</span> <span class="postal-code">30534</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "770-364-1215",
      gsl_props_web_rendered: "http://appalachianarmory.com",
      Nid: 36,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-104.1890729, 42.0647466],
    },
    properties: {
      name: "Garys Gun Shop LLC",
      description:
        '<div class="street-block"><div class="thoroughfare">420 W Valley Rd</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Torrington</span>, <span class="state">WY</span> <span class="postal-code">82240</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "307-534-1911",
      gsl_props_web_rendered: "http://www.garysgunshopllc.com",
      Nid: 35,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-97.3361475, 36.1157893],
    },
    properties: {
      name: "Camo Corner",
      description:
        '<div class="street-block"><div class="thoroughfare">15711 W 6th St</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Orlando</span>, <span class="state">OK</span> <span class="postal-code">73073</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "580-455-2259",
      gsl_props_web_rendered: "http://camocornersurplus.com",
      Nid: 33,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-118.4455829, 34.2875245],
    },
    properties: {
      name: "Addax Tactical",
      description:
        '<div class="street-block"><div class="thoroughfare">1431 Truman St</div>\n<div class="premise">Unit E</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">San Fernando</span>, <span class="state">CA</span> <span class="postal-code">91340</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "818-361-5008",
      gsl_props_web_rendered: "http://addaxtactical.com",
      Nid: 31,
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-99.7396496, 32.3944594],
    },
    properties: {
      name: "Abilene Indoor Gun Range",
      description:
        '<div class="street-block"><div class="thoroughfare">1309 Ben Richie Drive</div></div>\n<div class="addressfield-container-inline locality-block country-US"><span class="locality">Abilene</span>, <span class="state">TX</span> <span class="postal-code">79602</span></div>\n<span class="country">United States</span>',
      gsl_props_misc_rendered: null,
      gsl_props_phone_rendered: "325-698-4224",
      gsl_props_web_rendered: "http://abileneguns.com",
      Nid: 27,
    },
  },
];
