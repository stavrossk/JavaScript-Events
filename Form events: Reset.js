

// The onReset event fires when a form’s reset button is pushed (if it exists).
// Note that the event is tied to the form and not the button itself.



  addEvent
         (
         
              document.getElementById('myform'),
              
              
              'reset',
              
              
              function(event)
              {

                  alert('Form is resetting');

 
              }
          
          
          );
