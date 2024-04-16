Feature: Cookiecutter

Scenario: Print out 3 when given banknote is 500
	When the user is withdrawing 1500 with banknotes of 500
    Then the result is 3

Scenario: Print out -1 when given banknote is 2000
	When the user is withdrawing 1500 with banknotes of 2000
    Then the result is -1