


// The onClick event fires whenever a mouse button is clicked.
// If attached to a specific object (such as the div in the example below),
// the event only fires if the mouse is clicked within the bounds of that object.




    addEvent
    (
    
          document.getElementById('mydiv'),
          
          'click',
          
          
          function(event) 
          {

              display_short('clicked');

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



