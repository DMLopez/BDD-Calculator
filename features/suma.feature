Feature: suma

    Scenario Outline: suma de dos enteros
        Given El usuario quiere sumar <operand1> y <operand2>
        When El usuario ejecuta sumar
        Then El resultado de sumar será <result>

        Examples: 
        | operand1 | operand2 | result |
        | 0        | 0        | 0      |
        | 1        | 1        | 2      |
        | 10       | 10       | 20     |
        | 100      | 10       | 110    |