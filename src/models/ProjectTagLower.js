const ProjectTagLower = 
    `CREATE OR REPLACE TRIGGER ProjectTagLower 
    BEFORE INSERT OR UPDATE ON "ProjectTag"
    FOR EACH ROW
    EXECUTE FUNCTION LowerInsert(tag)`;

module.exports = ProjectTagLower;