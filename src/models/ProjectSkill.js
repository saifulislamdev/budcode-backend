const ProjectSkill =
    'CREATE TABLE IF NOT EXISTS "ProjectSkill"(\
        project_id INT, \
        skill VARCHAR(255), \
        PRIMARY KEY(project_id, skill), \
        FOREIGN KEY (project_id) REFERENCES "Project"(id));';

module.exports = ProjectSkill;
