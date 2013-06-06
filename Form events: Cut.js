// The onCut event fires whenever a form field’s contents
// are cut with the user’s local cut function
// (ctrl-x, edit menu, or contextual menu.)
// The event can also be attached to the window object
// to catch cutting anywhere on the page.



  addEvent
         (
         
              document.getElementById('myinput'),
              
              'cut',
              
              function(event) 
                            {
                            
                            
                                var txtbox = event.target;
                                
                                var selectedText = txtbox.value.substr
                                                                     (
                                                                     
                                                                        txtbox.selectionStart,
                                                                        
                                                                        txtbox.selectionEnd - txtbox.selectionStart
                                                                        
                                                                      );

  
                                alert('You cut some text: ' + selectedText);

  
                            }
                            
                            
        );




