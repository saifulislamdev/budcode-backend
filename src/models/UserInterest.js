const UserInterest =
    'CREATE TABLE IF NOT EXISTS "UserInterest"( \
        username VARCHAR(255), \
        interest VARCHAR(255), \
        PRIMARY KEY (username, interest), \
        FOREIGN KEY (username) REFERENCES "User"(username) \
    );';

module.exports = UserInterest;
