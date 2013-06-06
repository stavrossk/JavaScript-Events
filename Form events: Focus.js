

// The onFocus event fires whenever a form field gains focus,
// such as with a mouse click inside it or tabbing from another field.





// Script for example event goes here

 
  addEvent
         (
         
              document.getElementById('myinput'),
            
              'focus',
            
            
              function(event) 
              {

                alert('The element has focus');

              }
            
            
          );
