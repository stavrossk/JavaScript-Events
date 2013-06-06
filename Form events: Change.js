
// The onChange event fires whenever the value of a form field
// (including select lists) changes.
// Big caveat: the event is only recognized once a field loses focus,
// so the change event will not fire as soon as text is edited, for example.



 addEvent
 (
 
 
    document.getElementById('myinput'),
    
    'change',
    
    function(event)
    {

      alert('The text has changed');

    }
    
    
 );
