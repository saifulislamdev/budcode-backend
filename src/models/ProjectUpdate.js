const ProjectUpdate =
    'CREATE TABLE IF NOT EXISTS "ProjectUpdate"( \
        id SERIAL, \
        project_id INT, \
        subject VARCHAR(255), \
        body TEXT, \
        author CITEXT, \
        time_posted TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP NOT NULL, \
        PRIMARY KEY (id), \
        FOREIGN KEY (project_id) REFERENCES "Project"(id), \
        FOREIGN KEY (project_id, author) REFERENCES "ProjectMember"(project_id, username) \
    );';

module.exports = ProjectUpdate;
