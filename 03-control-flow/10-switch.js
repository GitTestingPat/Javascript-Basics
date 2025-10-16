let action = 'update'; // Declares a variable "action" with the string value "update".

switch (action) { // Starts a switch statement, evaluating the value of "action".
    case 'list':
        console.log('List action');
        break;
        // Checks if "action" is strictly equal to 'list'.
        // If so, logs the message and exits the switch with 'break'.

    case 'save':
        console.log('Save action');
        break;
        // Checks if "action" matches 'save',
        // logs the corresponding message, and breaks out.

    default:
        console.log('Unrecognized action');
}
/* Since "action" was set to 'update', it doesn't match 'list' or 'save',
so the default case executes and prints "Unrecognized action".

The switch statement evaluates an expression and runs the block that matches its value.
It uses strict equality (===) and is ideal for handling multiple discrete cases.

Key features:
- Compares using ===
- Executes only the matched case (if 'break' is used)
- 'break' prevents fall-through to subsequent cases
- 'default' handles any unmatched values

Common uses:
- Menu selections
- CRUD operation types (create, read, update, delete)
- State/status handling
- Command routing

Switch improves readability over long if/else chains when checking one variable
against several constant values.
*/