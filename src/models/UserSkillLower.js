const UserSkillLower = 
    `CREATE OR REPLACE TRIGGER UserSkillLower 
    BEFORE INSERT OR UPDATE ON "UserSkill"
    FOR EACH ROW
    EXECUTE FUNCTION LowerInsert(skill)`;

module.exports = UserSkillLower;