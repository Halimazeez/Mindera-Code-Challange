After testing:

*Scroller using rightpx wasn't the correct way as developed in the video.
Fixed by using justify-contents to center then setting a lower and higher bound pixel values for the scroller.

*Default props not set making website crash if api server isn't running
Fixed by setting a default prop if the api server wasn't running so that the application still runs but with a default card telling the user to start the website

*Mobile / Mid view and High view didn't share the same width pixel ratio.
Removed styling from cardContainer class and manipulated the exact pixel ratio for an upper and lower bound container width to show 1, 3, 5 components deppending on the size, similiarly shown in the slider video, but with the browser re-size keeping proper constructs. 
-> the width scale shown in the size calculations were kept as these were exact width figures per component that should be shown at the respective window size.

*Subheader showing the default prop due to no subheader prop being added
Re-added function in app.js to send a '\xa0' as a subheader instead as shown in the video when working with the card properties for empty headers.

*Pictures being static to every component
Added URL parameters by passing in the prop ID into the GET method using the "?random" to the image server, to request a different image request to elliminate browser caching of the same image, result was all components are random, and dynamic to every page refresh.



