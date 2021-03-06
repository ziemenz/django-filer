'use strict';

var FilerDialogue = {
  init : function () {
    // remove tinymce stylesheet.
    var allLinks = document.getElementsByTagName('link');
    allLinks[allLinks.length-1].parentNode.removeChild(
      allLinks[allLinks.length-1]);
  },
  fileSubmit : function (FileURL) {
    var URL = FileURL;
    var args = top.tinymce.activeEditor.windowManager.getParams();
    var win = args.window;

    // Insert information now
    win.document.getElementById(args.input).value = URL;

    // Close popup window
    top.tinymce.activeEditor.windowManager.close();
  }
};
