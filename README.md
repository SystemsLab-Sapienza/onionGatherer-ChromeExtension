**Authors:** *[Simone Raponi](https://github.com/SimoneRaponi), [Massimo La Morgia](https://github.com/Ansijax)*

**Date:**   *February 20, 2017*

# Onion Gatherer Client

Front-end of https://github.com/rfidlabsapienza/onionGatherer-Server

Onion Gatherer is a Google Chrome extension that allows Tor users to know the hidden service status without copying and pasting its address from time to time.
The user, surfing between websites containing the Hidden service addresses, will appear alongside each one a mark that reveals its status according to its color.

 - <img src="greenCircle.png" width="10" height="10">: The hidden service is up
 - <img src="redCircle.png" width="10" height="10">: The hidden service is down
 - <img src="orangeCircle.png" width="10" height="10">: The server is evaluating the Hidden service status

### Requirements
 - Google Chrome

### Installation

Insert into the variable HOST_URL in the file named OnionGatherer.js the url of your own Host.

It is possible to use our server by setting the HOST_URL variable to "https://lamorgiam.redi.uniroma1.it/onionGatherer".

Open the Google Chrome extensions page by typing in the address bar
```sh
chrome://extensions
```

Click on the button "Load unpacked extension..." and load the project folder
