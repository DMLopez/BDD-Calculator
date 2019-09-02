Feature: raiz

    Scenario Outline: raiz de un numero
        Given El usuario quiere obtener la raiz de <operand1>
        When El usuario ejecuta raiz
        Then El resultado de raiz será <result>

        # Obviamos los errores por dividir entre cero y devolveremos cero en dicho caso
        Examples: 
        | operand1 | result |
        | 3        | 1.73   |
        | 9        | 3      |