const ProjectJoinRequest =
    'CREATE TABLE IF NOT EXISTS "ProjectJoinRequest"( \
        id SERIAL, \
        project_id SERIAL NOT NULL, \
        username VARCHAR(255) NOT NULL, \
        message VARCHAR(255), \
        status JoinStatusType DEFAULT \'Requested\' NOT NULL, \
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL, \
        PRIMARY KEY (id), \
        UNIQUE (project_id, username), \
        FOREIGN KEY (project_id) REFERENCES "Project"(id), \
        FOREIGN KEY (username) REFERENCES "User"(username));';

module.exports = ProjectJoinRequest;
