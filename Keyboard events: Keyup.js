



// The onKeyup event fires when a key is release while the target field has focus.
// The distiction between keyup and keydown is that keyup fires
// after the value of the key is added to a field.






   addEvent
   (
   
        document.getElementById('mytext'),
        
        'keyup',
        
        
        function(event) 
        {

            display_short('keyup: ' + event.keyCode);

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



