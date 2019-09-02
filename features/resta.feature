Feature: resta

    Scenario Outline: resta de dos enteros
        Given El usuario quiere restar <operand1> y <operand2>
        When El usuario ejecuta restar
        Then El resultado de restar será <result>
        
        Examples: 
        | operand1 | operand2 | result |
        | 0        | 0        | 0      |
        | 1        | 1        | 0      |
        | 10       | 5        | 5      |
        | 100      | 10       | 90     |