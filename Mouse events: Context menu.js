


// The onContextmenu event fires whenever the right mouse button is clicked
// (or the contextual menu is opened by any means,
//such as ctrl-click on a Mac).

// If attached to a specific object (such as the div in the example below),
// the event only fires if the mouse is right-clicked within the bounds of that object.





      addEvent
      (
      
            document.getElementById('mydiv'),
            
            'contextmenu',
            
            
            function(event) 
            {

                display_short('right-clicked (contextmenu)');
 

            }

      );
      

 

      function display_short(str)
      {

 
         clearTimeout();

         document.getElementById('mydiv').innerHTML = str;

 
         if (str != '')
         {
         
            setTimeout("display_short('')", 1000);

         }
 

      }



