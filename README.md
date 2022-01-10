# R&M Cafe

## Netlify link - https://rmcafeapp-ui-vaishnavisubramaniam.netlify.app/

## Features
1. Register
2. Login
3. Add review
4. List review
5. Add menu
6. List menu
7. Add to cart


### Register
* All input fields are required.
* User name must contain 3 characters and must not be empty.
* Email id entered must not exist in local storage already.
* Field should have abc@domain.com.
* Password should contain atleast 8 characters.
* Mobile number should contain only 10 digits.
* If everything is validated, redirect to login page.

### Login
* All input fields are required.
* Email id and password should match with the local storage content.
* Field should have abc@domain.com.
* Password should be entered correctly.
* If everything is validated, redirect to menu page.

### Add review
* Name and comment should be entered.
* All input fields are required.
* Name should not start with space.
* Only alphabets are allowed. No other characters and numbers are allowed.
* After submitting, redirect to review page.

### List review
* The feedback submitted in the add review page, is dislayed here.

### Add menu
* Only admins can access this page.
* Admin's email id - "vaishnavi@gmail.com"(register using this mail id and then login to access this page for now).
* Four input fields are required (Coffee Name, coffee description, coffee image url,and coffee price).
* After submitting, redirect to menu page.

### List menu
* The menu added by the admin in the add menu page, is displayed here.
* Menu page is empty until the admin adds something to it.

### Add to cart
* Users can add a coffee to cart by clicking the respective "add to cart" button.
* After clicking the button, the number of quantities should be entered in the given prompt.
* After entering the quantities, redirects to the cart page.




