

// The onCopy event fires whenever a form field’s contents
// are copied with the user’s local copy function
// (ctrl-c, edit menu, or contextual menu.)
// The event can also be attached to the window object
// to catch copying anywhere on the page.



  addEvent
  (
  
      document.getElementById('myinput'),
      
      'copy',
      
      function(event) 
      {
      
          var txtbox = event.target;

          var selectedText = txtbox.value.substr
                                               (
                                               
                                                  txtbox.selectionStart,
                                                  txtbox.selectionEnd - txtbox.selectionStart
                                                  
                                               );


          alert('You copied some text: ' + selectedText);

 
      }
      
      
  );




