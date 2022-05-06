// Verifies each property has a value that is not undefined

const validatingBodyContent = (content) => {
    for (let key of Object.keys(content)) {
        const value = content[key];
        if (typeof value === 'undefined') {
            return {isValid : false, msg: `${key} not indicated`};
        }
    }

    return {isValid : true};
};

module.exports = validatingBodyContent;
