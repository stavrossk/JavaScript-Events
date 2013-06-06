// The onSubmit event fires when a form’s submit button is pushed,
// or if the form is otherwise submitted
// (such as when the user presses the enter key).
// It is important to note that if you force form submission
// with formname.submit() that the submit event is not called.
// Also note that the event is tied to the form and not the button itself.




   addEvent
   (
   
        document.getElementById('myform'),
        
        'submit',
        
        function(event) 
        {
 
             alert('Form is submitting');
 
        }


   );


