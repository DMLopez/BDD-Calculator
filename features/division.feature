Feature: division

    Scenario Outline: division de dos enteros
        Given El usuario quiere dividir <operand1> y <operand2>
        When El usuario ejecuta dividir
        Then El resultado de dividir será <result>

        Examples: 
        | operand1 | operand2 | result |
        | 0        | 1        | 0      |
        | 1        | 1        | 1      |
        | 10       | 2        | 5      |
        | 50       | 10       | 5      |