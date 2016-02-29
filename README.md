# psio-tools
Tools for PS-IO

## PS-IO CU3 Generator for redump.org
This tool inline modify the track table of Sony Playstation games page on redump.org.Which
makes it possible to be directly copied and saved as a CU3 file for further conversion.

Save the time of manually remove "Data/",add total track count and move the Total row to
the top row.

### Prerequisites
Firefox(Tested with 44.0.2 on Mac OS X 10.10.5)

### Install
-Install Firefox.
-Install Greasemonkey extention from Tools->Add-ons.
-Load "ps-io_cu3gen_redump.user.js"

### How to use
-Visit a Plastation 1 game page on redump.org.(e.g. http://redump.org/disc/9501/)
-Scroll down and check the tracks table.If the "Total" line appears above the first data
 track then the script is working.
-Select all content lines of this table,from the line contains "Total" to the line of last
 track.Copy and paste into a new file and set the file extension to .cu3.
-Launch PS-IO System Console Application to convert the cu3 file to cu2 file.

### Warning
-If the number before "Total" shows "1", then there is no need to create cu3 file for this
 game.

