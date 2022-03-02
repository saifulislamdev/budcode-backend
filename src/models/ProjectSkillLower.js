const ProjectSkillLower = 
    `CREATE OR REPLACE TRIGGER ProjectSkillLower 
    BEFORE INSERT OR UPDATE ON "ProjectSkill"
    FOR EACH ROW
    EXECUTE FUNCTION LowerInsert(skill)`;

module.exports = ProjectSkillLower;