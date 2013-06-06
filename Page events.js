addEvent(window, 'load',
          function(event) 
          {

             alert('The page has loaded');

          }

        );





addEvent(window, 'resize',
           function(event) 
           {

              alert('The page has been resized');

           }

         );




1
addEvent(window, 'scroll', 
           function(event) 
           {
 
              alert('The page is being scrolled');
 
           }
          
         );






addEvent(window, 'unload',
           function(event) 
           {
                    
              alert('The user left the page');
    

           }
      
        );





