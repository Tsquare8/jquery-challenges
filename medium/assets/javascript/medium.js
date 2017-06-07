/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function() {

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function() {

    let reset = $("#reset");
    let num_reset = $("#num-resets");
    let shoot1 = $("#teamone-shoot");
    let numshots1 = $("#teamone-numshots");
    let numhits1 = $("#teamone-numhits");
    let shoot2 = $("#teamtwo-shoot");
    let numshots2 = $("#teamtwo-numshots");
    let numhits2 = $("#teamtwo-numhits");
    let shoot = $("#shoot");
    let miss = $("#miss");
    let color = $("#color");

    color.css({
      background: "black",
      color: "white"
    });

    shoot1.click(function() {
      console.log("shoot button clicked");

      let shot = parseInt(numshots1.html()) + 1;
      numshots1.html(shot);

      let attempt = Math.random();

      if (attempt <= 0.5) {
        let hits = parseInt(numhits1.html()) + 1;
        numhits1.html(hits);
        color.css({
          background: "green"
        });
      }

    });

    shoot2.click(function() {
      console.log("shoot button clicked");

      let shot = parseInt(numshots2.html()) + 1;
      numshots2.html(shot);

      let attempt = Math.random();

      if (attempt <= 0.5) {
        let hits = parseInt(numhits2.html()) + 1
        numhits2.html(hits);
        color.css({
          background: "darkblue"
        });
      }
    });

    reset.click(function() {
      console.log("reset button clicked");

      let num_resets = parseInt(num_reset.html()) + 1;

      num_reset.html(num_resets);
      color.css({
        background: "black"
      });

      numshots1.html(0);
      numhits1.html(0);
      numshots2.html(0);
      numhits2.html(0);

    });

  });

})();
