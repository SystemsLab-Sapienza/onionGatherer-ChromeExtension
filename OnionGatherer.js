  var HOST_URL = 'XXXXX'

  var body = document.body;
  var textContent = body.innerText;

  var split = textContent.split(/[\r\n\t\"\'();,#@\\|<>\s]+/g);
  var onions = []

  substring = "..."

  for(var i = 0; i < split.length; i++) {
    // Insert in onions every string that matches with the RegEx
    if(split[i].match(/(http(s)?:\/\/)?(www.)?.{16}\.onion(\/[\S]*|)/g)) {
      if(split[i].indexOf(substring) == -1) {
        onions.push(split[i]);
      }
    }
  }

  var onionsJson = JSON.stringify({onions:onions, website: window.location.href});

  var greenImgURL = chrome.extension.getURL("greenCircle.png");
  var redImgURL = chrome.extension.getURL("redCircle.png");
  var orangeImgURL = chrome.extension.getURL("orangeCircle.png");

  $.ajax({
    type: 'POST',
    url: HOST_URL,
    crossDomain: true,
    data: onionsJson,

    success: function(responseData, textStatus, jqXHR) {

      var list = document.getElementsByTagName('body');

      for(var i = 0; i < list.length; i++) {

        container = list[i];

        // Insert the green, red or orange marker, according to the hidden service's status
        findAndReplaceDOMText(container, {
          find: /(http(s)?:\/\/)?(www.)?.{16}\.onion(\/[\S]*|)/g,
          replace: function(portion) {

            var element = document.createElement('span');

            var status = responseData['onions'][portion.text];

            switch(status) {
              
              case 1:
                element.innerHTML = portion.text + "&nbsp;<img src='" + greenImgURL + "' width=\"10\" height=\"10\" />";
                break;

              case -1:
                element.innerHTML = portion.text + "&nbsp;<img src='" + redImgURL + "' width=\"10\" height=\"10\" />";
                break;

              case 0:
                element.innerHTML = portion.text + "&nbsp;<img src='" + orangeImgURL + "' width=\"10\" height=\"10\" />";
                break;

              default:
                element.innerHTML = portion.text;
                break;
            }

            return element;
          }
        });
      }
    },

    error: function (responseData, textStatus, errorThrown) {
     console.warn(responseData, textStatus, errorThrown);
    }
  });
