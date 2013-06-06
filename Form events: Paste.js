

// The onPaste event fires whenever a form field’s contents
// are pasted with the user’s local paste function
// (ctrl-v, edit menu, or contextual menu).
// The event can also be attached to the window object
// to catch pasting anywhere on the page.





  addEvent
  (


      document.getElementById('myinput'),
      
      'paste',
      
      function(event) 
      {
      
          alert('You pasted some text');

      }


  );
