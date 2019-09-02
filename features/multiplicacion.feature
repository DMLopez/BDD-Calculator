Feature: multiplicacion

    Scenario Outline: multiplicacion de dos enteros
        Given El usuario quiere multiplicar <operand1> y <operand2>
        When El usuario ejecuta multiplicar
        Then El resultado de multiplicar será <result>

        Examples: 
        | operand1 | operand2 | result |
        | 0        | 0        | 0      |
        | 1        | 1        | 1      |
        | 10       | 10       | 100    |
        | 5        | 8        | 40     |