// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }
    // Create a burger
    const createBurgerBtn = document.getElementById('createBurgerBtn');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('click', (e) => {
            e.preventDefault();

            //create a newBurger object by getting the value of burger-type
            const newBurger = {
                burger_name: document.getElementById('burger-type').value.trim(),
                devoured: 0
            };
            // Send POST request to create a new burger
            fetch('/api/newburger', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },

                // make sure to serialize the JSON body
                body: JSON.stringify(newBurger),
            }).then(() => {
                // Empty the form
                document.getElementById('burger-type').value = '';

                // Reload the page so the user can see the new quote
                console.log('Created a new burger!');
                location.reload();
            });
        });
    }

    //Devour a burger
    //Create an array of devour burger buttons
    const devourBurgerBtns = document.querySelectorAll('.devour-burger-btn');
    devourBurgerBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
            //For each devour burger, get the id associated with that burger
            const id = e.target.getAttribute('data-id');
            //Use the put method to send the id through the api
            fetch(`/api/eat/${id}`, { method: 'PUT' }).then((res) => {
                console.log(res.status);
                location.reload();
            })
        })
    });
});