An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!

Sample test cases:
- 500 --> 1
- 1500 --> 3
- 1 --> 💣
- 750 --> 3 (500/200/50)

# POMODORO 1
✅ - Test if numbers are positive values
  ✅ - Write unit test. Input: 10. Output: true
  ✅ - Write unit test. Input: 0. Output: false
  ✅ - Write unit test. Input: -20. Output: false
✅ - Write function to implement the logic

# POMODORO 2
✅ - Test if the right number of nominal values will be withdrawned that equals or are below 1500. Example: 500 dollars. return 3 because it is exactly 1500
  ✅ - Write unit test. Input: 500. Output: 3
  ✅ - Write unit test. Input: 200. Output: 7
  ✅ - Write unit test. Input: 100. Output: 15
✅ - Write function to implement the logic

# POMODORO 3
✅ Validate if banknote does not exceed the limit of 1500
 ✅ - Write unit test. Input: 1700. Output: -1
✅ - Adjust solve function that the false flow returns -1 as well
✅ - Improve code coverage back to 100%

# POMODORO 4
✅ - Improve text description
✅ - Move solve function to component test level

# POMODORO 5
✅ - Modify solve function 
  ✅ - Adjust component test. 
    ✅ - 500 --> 1
    ✅ - 1500 --> 3
    ✅ - 750 --> 3 (500/200/50)
    ✅ - 1 --> 0
    ✅ - -10 --> -1
✅ - Modify test description in component test

# POMODORO 6
✅ - Improve test description at unit level. 
✅ - Adjust validation logic
✅ - Adjust e2e test and test description 
  

# REFACTOR
✅ - Improve text description
✅ - Add extra validation to check that limit is not exceeded
✅ - Move solve function to component test level
