


// The onKeypress event fires when a key is pressed and at an interval determined
// by the operating system as long as the key is still held down.
// The continual firing seperates it from the keydown and keyup events, which fire only once.


// The event only fires if the target field has focus,
// though the target can be the entire window
// to catch the keypress event globally.




   addEvent
   (
   
        document.getElementById('mytext'),
        
        'keypress',
        
        
        function(event) 
        {

            display_short('keypress: ' + event.charCode);

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
