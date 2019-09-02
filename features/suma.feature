Feature: suma

    Scenario Outline: suma de dos enteros
        Given I have number <operand1> in calculator
        When I entered number <operand2>
        Then I should see result <result>
        
        Examples: 
        | operand1 | operand2 | result |
        | 0        | 0        | 0      |
        | 0        | 1        | 1      |
        | 10       | 5        | 15     |
        | 320      | 45       | 365    |