const ProjectJoinRequest =
    'CREATE TABLE IF NOT EXISTS "ProjectJoinRequest"( \
        project_id SERIAL, \
        username VARCHAR(255), \
        message VARCHAR(255), \
        status JoinStatusType DEFAULT \'Requested\' NOT NULL, \
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL, \
        PRIMARY KEY (project_id, username), \
        FOREIGN KEY (project_id) REFERENCES "Project"(id), \
        FOREIGN KEY (username) REFERENCES "User"(username));';

module.exports = ProjectJoinRequest;
