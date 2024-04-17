Feature: Cookiecutter

Scenario: Print out 1 when given banknote is 500
	When the user is withdrawing 500 
	Then the ATM should print one banknote of 500

Scenario: Print out -1 when given banknote is 2000
	When the user is withdrawing 2000
    Then the ATM should print out -1