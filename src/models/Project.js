const Project =
    'CREATE TABLE IF NOT EXISTS "Project" (\
        id SERIAL,\
        name CITEXT NOT NULL, \
        description TEXT, \
        creator CITEXT, \
        status ProjectStatusType DEFAULT \'In Progress\',\
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL, \
        PRIMARY KEY (id), \
        FOREIGN KEY (creator) REFERENCES "User"(username) \
    );';

module.exports = Project;
