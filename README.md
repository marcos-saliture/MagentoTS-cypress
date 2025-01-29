The automation project uses the URL website:
https://magento.softwaretestingboard.com/

Automated testing using Cypress v13.15.2

The test scenarios are varied, from the basic to more elaborate cases, considering the different browsing routes on the website and scenarios that represent the e-commerce proposed by the website. To better highlight the test case addressed, most of them are found in independent files.

The division into many files happens mainly because the direction after test case execution is to a blank page, making it ineffective to create a before or beforeEach hook when the test case needs to occur with a logged in user. The division also favors highlighting the test case in question.

TC1: basic test to verify mandatory fields in the new account creation form.  It is a scenario that would suffice for manual testing

TC2: basic test to check error messages when a field is filled out incorrectly. scenario that can only be validated with manual testing

TC3: scenario in which a password is chosen and reproduced in the automation, simulating typing and immediate verification of its strength.  In this automation, each string length check was previously recorded from manual testing. It is another example of a test case that can be reduced to manual execution to check the strength of the password

TC4: scenario in which an account is successfully created

TC5: basic test to see that the mandatory fields of the password recovery form are recognized.  

TC6: basic test in which an invalid email, without a standard format, is entered to see the error message printed

TC7: valid data information to recover the password

TC8: basic test to verify the mandatory fields required for login

TC9: test with invalid email attempt, to see printed error message

TC10: test with non-matching email and/or password
to the data of an active account

TC11: Test to verify that the create account button leads to the account creation form page

TC12: test with email and password already registered, to verify account access

TC13: test to check if the logout happens correctly


TC14, TC15, TC16 and TC17 are examples of tests with basic navigation through some website links, without the need to be actively logged in. All buttons, links and logos must pass targeting tests.

TC14: testing redirection to the main page when clicking on the logo 

TC15: test of clicking on the empty cart icon and checking the response

TC16: testing the targeting of the sales page by clicking on the "Sale" link

TC17: test the targeting of the news page by clicking on the "What\'s New" link

TC18: Add a new address to the registered account using a link on the user's account information page

TC19: test to update the new address registered in the account

TC20: delete an address shown in the new address list

TC21: update payment address information registered in the account

TC22: update information on the delivery address registered in the account

TC23: update account registration information. name, email and password

TC24: test of placing products on the Compare list.

TC25: test of placing different products on the Wish List.

TC26: test of sending products to the shopping cart. The cart receives product from the comparison list. The comparison list assembly process includes 3 products. one product is added to the cart and the list is deleted after this inclusion.

TC27: reorder one purchase and do checkout. 

TC28: purchase of product. Testing involves everything, from starting the process to completing payment.

TC29: test in which the record of all purchases already made by the accessed account is verified

TC30: test in which the history of payment methods made is checked

TC31: test in which the history of product evaluations carried out is checked.

TC32: buyt products from Wish List