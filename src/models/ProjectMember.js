const ProjectMember =
    'CREATE TABLE IF NOT EXISTS "ProjectMember"( \
        project_id INT, \
        username VARCHAR(255), \
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL, \
        PRIMARY KEY (project_id, username), \
        FOREIGN KEY (project_id) REFERENCES "Project"(id), \
        FOREIGN KEY (username) REFERENCES "User"(username) \
    );';

module.exports = ProjectMember;
