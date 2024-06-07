const name = document.getElementById('name');
const email = document.getElementById('email');
const Password = document.getElementById('Password');
const form = document.getElementById('form');



const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const Password_error = document.getElementById('Password_error');




form.addEventListener('submit',(e)=>
{
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
if(name.value === '' || name.value == null)
    {
        e.preventDefault();
        name_error.innerHTML = "Name is required";
    }
     
    if(!email.value.match(email_check))
        {
            e.preventDefault();
        email_error.innerHTML = " Valid Email is required";
        }
    

        if(Password.value.length <= 5)
            {
                e.preventDefault();
                Password_error.innerHTML = "Password must be more then 6 characters";
            }

})



