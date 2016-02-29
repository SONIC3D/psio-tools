// ==UserScript==
// @name        PS-IO CU3 Generator for redump.org
// @namespace   http://github.com/SONIC3D
// @description PS-IO CU3 Generator for redump.org
// @include     http://redump.org/disc/*
// @version     1
// @grant       none
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.2.6/jquery.js
// ==/UserScript==

/* References:
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
  http://stackoverflow.com/questions/33716712/how-to-grab-html-table-content-with-javascript
  http://stackoverflow.com/questions/30331719/greasemonkey-waitforkeyelements-is-undefined
  http://stackoverflow.com/questions/14460421/jquery-get-the-contents-of-a-table-row-with-a-button-click
  https://api.jquery.com
  http://stackoverflow.com/questions/3577860/jquery-insert-new-row-into-table-at-a-certain-index
  http://www.tuxradar.com/content/greasemonkey-beginners
  http://commons.oreilly.com/wiki/index.php/Greasemonkey_Hacks/Getting_Started
  http://stackoverflow.com/questions/9579721/convert-html-table-to-array-in-javascript
*/

/**
  Return true if the game of current page is released on Plastation 1 platform.
*/
function getIsPS1Platform() {
  var trackTableNode = $(".gameinfo");
  strPlatform = trackTableNode.find("tr:contains('System') td:eq(0)").text();
  if (strPlatform == "Sony PlayStation") {
    return true;
  }
  console.log('PS-IO CU3 Generator:This game is not suitable for PS-IO!');
  return false;
}

function parseTable_Tracks() {
  var jNode_TrackTable = $(".tracks");
//  console.log("Debug Html:'+jNode_TrackTable.html());
  
  addTotalTrack(jNode_TrackTable);
  removeDataSlashPrefix(jNode_TrackTable);
  leverageTotolTrackRow(jNode_TrackTable);
}

function addTotalTrack(jNode) {
  nCntRow = jNode.find('tr').length;
  nCntTracks = nCntRow - 3;          // Exclude the 3 rows of Track(s)/CUE Sheet,Table Column Title,and Total //
  
  jNode.find ("tr:contains('Total') td:eq(0)").text(nCntTracks.toString());
}

function removeDataSlashPrefix(jNode) {
  jNode.find ("tr:contains('Data/Mode 2') td:eq(1)").text("Mode 2");
}

function leverageTotolTrackRow(jNode) {
  rowTotalTrack = jNode.find ("tr:contains('Total')");
  htmlTotalTrackRow = rowTotalTrack.html();
  jNode.find ("tr:eq(1)").after(htmlTotalTrackRow);
  rowTotalTrack.remove();
}

console.log('PS-IO CU3 Generator for redump.org started');

if (getIsPS1Platform()) {
  parseTable_Tracks();
}

console.log('PS-IO CU3 Generator for redump.org finished');

