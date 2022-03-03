const UserInterestLower = 
    `CREATE OR REPLACE TRIGGER UserInterestLower 
    BEFORE INSERT OR UPDATE ON "UserInterest"
    FOR EACH ROW
    EXECUTE FUNCTION LowerInsert(interest)`;

module.exports = UserInterestLower;