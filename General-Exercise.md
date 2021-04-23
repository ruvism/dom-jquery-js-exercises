1. Assess your knowledge level on the following languages (1 = none; 5 = expert):

   - Vanilla JS - 3
   - jQuery - 3
   - HTML/HTML5 - 4
   - CSS/CSS3 - 4
   - Ajax - 2
   - AngularJS - 1
   - Bootstrap - 4

2. What is the width of a container with `100px` of width and `5px` of padding?

   The width is still '100px' but only 90px will be available for use as we have 5px of padding-right and 5px of padding-left

3. How to apply a click event to all paragraphs except for the last?

   We can use the selector "last-child" combined with "not" on JQuery. Exemple:
   $("div:not(:first-child)").on('click', function(){
   //your code goes here
   })

4. Why does the alert show **"Jack"** first and then undefined?

   ```javascript
   function identity() {
     var name = "Jack";
     alert(name);
     return;
     name;
   }

   var who = identity();
   alert(who);
   ```

   It happens because of Automatic Semicolon Insertion after return on line 26.
   The code is read like that was a semicolon, so we have "retun ;". An empty return is "undefined".
