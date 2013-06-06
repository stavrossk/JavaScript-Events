

// The onSelect event fires when a field’s text is highlighted (selected).




    addEvent
    (
    
        document.getElementById('myinput'),
        
        'select',
        
        
        function(event) 
        {


            var txtbox = event.target;


            var selectedText = txtbox.value.substr
            (
            
                txtbox.selectionStart,
                
                txtbox.selectionEnd - txtbox.selectionStart
            
            );

 
            alert('The user selected some text: ' + selectedText);

 
        }


    );


