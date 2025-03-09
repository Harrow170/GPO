document.getElementById('back_to_main').addEventListener('click', function()
{
    window.location.href = 'main_page.html'
})

function validateForm()
{
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    const submitButton = document.getElementById('submit_btn');
    if (name && lastName && age)
    {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = 'green';
    }
    else
    {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = 'red';
    }
}

document.getElementById('user_form').addEventListener('submit', function(event)
{
    event.preventDefault();

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;
    
    document.getElementById('display_name').textContent = name;
    document.getElementById('display_lastname').textContent = lastname;
    document.getElementById('display_age').textContent = age;

    document.getElementById('submitted_data').classList.remove('hidden');
});