


// The onKeydown event fires when a key is pushed down while the target field has focus.

// Keydown fires as soon as the key is pressed down and only happens once (in other words,
// it does not continually fire like keypress).

// The distiction between keydown and keyup is that keydown
// fires before the value of the key is added to a field.

// You can also set the target to be the entire window to catch the keydown event globally.




   addEvent
   (
   
        document.getElementById('mytext'),
        
        'keydown',
        
        function(event) 
        {

            display_short('keydown: ' + event.keyCode);
 
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


