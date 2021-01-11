// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded');
    }
    // Creating a burger
    const createBurgerBtn = document.getElementById('createBurgerBtn');

    if (createBurgerBtn) {
        createBurgerBtn.addEventListener('click', (e) => {
            e.preventDefault();

            // Grabs the value of the textarea that goes by the name, "quote"
            const newBurger = {
                burger_name: document.getElementById('burger-type').value.trim(),
                devoured: 0
            };
            console.log(newBurger)
            // Send POST request to create a new quote
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
});