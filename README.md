# Archival-Map
![Archival Map of Freeland bunker journey](https://github.com/isantoso24/Archival-Map/blob/main/Screenshot%202024-05-24%20at%2017.12.36.png)


"Atlantic Odyssey: Mapping the Winter Harbor Freeland Bunker's Journal (1871-1885)"
Delve into the pages of Freeland Bunker's journal, a detailed account of his life in Winter Harbor, Maine, from 1871 to 1885. Each entry offers a glimpse into Bunker's daily activities, cherished by our local historical society.

# Introduction
For 37 years, from 1871 to 1908, Freeland Bunker (1845-1909) diligently wrote daily entries in his diaries, offering a rare glimpse into the daily routines of Winter Harbor residents during the 19th century. Dr. Todd Little-Siebold, a member of the history faculty at the College of the Atlantic, and Dr. Laurie Baker, with the help of the Winter Harbor Historical Society, have led efforts to digitize these diaries with student assistance: Gwendolyn Elkin, Michael Feng, Hannah Frink, Camden Hunt, Olivia Jolley, Adele Wise, and Tristan Lewis. These digitized scans have become primary source materials in his classroom. Students have summarized the diaries from 1876 to 1889, highlighting Mr. Bunker’s extensive travels and diverse engagements in business, fraternal organizations, and community governance. From journeys spanning Italy to Gouldsboro, Bunker utilized every available mode of transportation. His activities ranged from managing a significant coal distribution enterprise to engaging in casual fishing.

My project aims to map Bunker's journey from 1871 to 1885, highlighting significant events such as his memorable Atlantic voyage. Through the use of coding tools like R and GIS, alongside HTML and Mapbox GL JavaScript, I'm creating an interactive platform. Users can seamlessly explore Bunker's experiences and Winter Harbor's rich history here.

This will allow me to explore and learn more about the extensive use of programming languages such as R, HTML, Javascript, and CSS in my field of interest in mapping or data spatial analysis. I am also incorporating Mapbox into the learning experience due to its flexibility in both design and analysis features.
# Features
Datasets:
- location-mention: it consists of data based on the year of the journals from 1871-1885
- location-year-layer: it consists of the data of significant activity and words mentioned from Freeland Bunker's journal

Geojson-data:
- loc_df_entry: geojson or geocoded file for each year entry
- loc_item_fin: geojson or geocoded file for each item mentioned in the journal
- routesFin: General route of Freeland Bunker trips

Final.JS: Javascript for the Mapbox and features to call the geojson-data to build the points layer while also a nest for the CSS interaction by Mapbox. (JS file)

Map.html: HTML script for the interface and CSS template to call the Javascript file

# Installation
installation to create a route, follow the guide on the npm website for [searoute.js](https://www.npmjs.com/package/searoute-js)

Otherwise, you don't need to install anything. Put your Mapbox token in the JS file, and you're good to go.
To acquire a Mapbox token, you must log in or sign up and deploy the token from your own dashboard. click [Mapbox](https://www.mapbox.com/) and signup or log in.

# Usage
intended for Muhammad Ilham Akbar Ramaditya Santoso [senior project](https://arcg.is/1HCGKf1) in collaboration with Winter Harbor Historical Society to obtain a degree in human ecology at the College of the Atlantic. Observe and feedback are very welcome. 

# Configuration
Adjust the theme and visuals following the guides in [Mapbox docs](https://docs.mapbox.com/).

# Contributing
I created this website for the Winter Harbor Historical Society to inspire others that maps could help historical preservation.

# Credits
- Todd Little Siebold and the Class: Gwendolyn Elkin, Michael Feng, Hannah Frink, Camden Hunt, Olivia Jolley, Adele Wise, and Tristan Lewis.
- Dr. Laurie Baker
- Winter Harbor Historical Society
- Gael Guadarrama
- Noelle Stringer
- Muhammad Ilham Akbar Ramaditya Santoso

# Troubleshooting
Follow guidance in [npm](https://www.npmjs.com/package/searoute-js) and [mapbox docs](https://docs.mapbox.com/). 

For specific questions, please feel free to contact me.

# FAQ
How do you convert CSV to Geojson? Upload CSV to Geojson with the type and features of ArcGIS online.

How to download the file from npm test.js? In terminal type node filename

Does the replay button not want to replay? Wait until the animation is finished, then click replay.

