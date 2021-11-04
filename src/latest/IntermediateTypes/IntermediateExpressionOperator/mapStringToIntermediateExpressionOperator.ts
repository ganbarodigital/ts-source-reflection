//

const REVERSE_MAPPING: {
    [operator: string]: string,
} = {
    "&&=": "IntermediateExpressionOperator.AMPERSAND_AMPERSAND_EQUALS",
    "&&": "IntermediateExpressionOperator.AMPERSAND_AMPERSAND",
    "&=": "IntermediateExpressionOperator.AMPERSAND_EQUALS",
    "&": "IntermediateExpressionOperator.AMPERSAND",
    "**": "IntermediateExpressionOperator.ASTERISK_ASTERISK",
    "**=": "IntermediateExpressionOperator.ASTERISK_ASTERISK_EQUALS",
    "*=": "IntermediateExpressionOperator.ASTERISK_EQUALS",
    "*": "IntermediateExpressionOperator.ASTERISK",
    "||=": "IntermediateExpressionOperator.BAR_BAR_EQUALS",
    "||": "IntermediateExpressionOperator.BAR_BAR",
    "|=": "IntermediateExpressionOperator.BAR_EQUALS",
    "|": "IntermediateExpressionOperator.BAR",
    "^=": "IntermediateExpressionOperator.CARET_EQUALS",
    "^": "IntermediateExpressionOperator.CARET",
    ",": "IntermediateExpressionOperator.COMMA",
    "==": "IntermediateExpressionOperator.EQUALS_EQUALS",
    "===": "IntermediateExpressionOperator.EQUALS_EQUALS_EQUALS",
    "=": "IntermediateExpressionOperator.EQUALS",
    "!=": "IntermediateExpressionOperator.EXCLAMATION_EQUALS",
    "!==": "IntermediateExpressionOperator.EXCLAMATION_EQUALS_EQUALS",
    ">=": "IntermediateExpressionOperator.GREATER_THAN_EQUALS",
    ">>=": "IntermediateExpressionOperator.GREATER_THAN_GREATER_THAN_EQUALS",
    ">>>=": "IntermediateExpressionOperator.GREATER_THAN_GREATER_THAN_GREATHER_THAN_EQUALS",
    ">>": "IntermediateExpressionOperator.GREATER_THAN_GREATER_THAN",
    ">>>": "IntermediateExpressionOperator.GREATER_THAN_GREATER_THAN_GREATER_THAN",
    ">": "IntermediateExpressionOperator.GREATER_THAN",
    "in": "IntermediateExpressionOperator.IN",
    "instanceof": "IntermediateExpressionOperator.INSTANCEOF",
    "<<=": "IntermediateExpressionOperator.LESS_THAN_LESS_THAN_EQUALS",
    "<=": "IntermediateExpressionOperator.LESS_THAN_EQUALS",
    "<<": "IntermediateExpressionOperator.LESS_THAN_LESS_THAN",
    "<": "IntermediateExpressionOperator.LESS_THAN",
    "-=": "IntermediateExpressionOperator.MINUS_EQUALS",
    "-": "IntermediateExpressionOperator.MINUS",
    "%=": "IntermediateExpressionOperator.PERCENT_EQUALS",
    "%": "IntermediateExpressionOperator.PERCENT",
    "+=": "IntermediateExpressionOperator.PLUS_EQUALS",
    "+": "IntermediateExpressionOperator.PLUS",
    "??=": "IntermediateExpressionOperator.QUESTION_QUESTION_EQUALS",
    "??": "IntermediateExpressionOperator.QUESTION_QUESTION",
    "/=": "IntermediateExpressionOperator.SLASH_EQUALS",
    "/": "IntermediateExpressionOperator.SLASH",
}

export function mapStringToIntermediateExpressionOperator(
    input: string
): string
{
    if (REVERSE_MAPPING[input]) {
        return REVERSE_MAPPING[input];
    }

    return input;
}