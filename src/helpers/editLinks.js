// The function below assumes that the links follow the following structure
// where links is an array of objects
// and each object has only two key-value pairs
// one key-value pair has a key "link" with the value as a string
// the other key-value pair has a key "type" with the value as a string
// note: the order of key-value pairs does not matter (as shown below)
/*
[ 
    {
        "link": "www.github.com"
        "type": "GitHub"
    },
    {
        "type": "LinkedIn",
        "link": "www.linkedin.com",
    }
]
*/

const areArraysEqual = (arr1, arr2) => {
    return (
        arr1.length === arr2.length &&
        arr1.every((value, index) => value === arr2[index])
    );
};

// TODO: this can be updated to simply verify (no need for parameterPlaceholders or parameters)
const verifyNewLinks = (links, id, res) => {
    // gather attributes of links in a 1D array
    // (which can be passed as parameters into insert statement)
    const linksToFlatArray = links
        .map((linkAttributes) => {
            // gather attributes in alphabetical order
            const sortedKeys = Object.keys(linkAttributes).sort();
            if (!areArraysEqual(sortedKeys, ['link', 'type']))
                return res
                    .status(400)
                    .json({ msg: 'Improper format of links' });
            // returns each link attribute
            return sortedKeys.map((attribute) => linkAttributes[attribute]);
        })
        .flat();

    // gather placeholders written inside query/statement to avoid SQL injection
    // parameterPlaceholders becomes ["($1, $2, $3)", "($1, $4, $5)", ...]
    const parameterPlaceholders = links.map((link, i) => {
        return `($1, $${(i + 1) * 2}, $${(i + 1) * 2 + 1})`;
    });

    const parameters = [id].concat(linksToFlatArray);

    return {
        parameterPlaceholders: parameterPlaceholders,
        parameters: parameters,
    };
};

module.exports = verifyNewLinks;
