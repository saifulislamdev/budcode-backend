const { CITEXT } = require('./Extensions');
const { HSTORE } = require('./Extensions');
const LowerInsert = require('./LowerInsert');
const JoinStatusType = require('./JoinStatusType');
const NotificationType = require('./NotificationType');
const Project = require('./Project');
const ProjectFollower = require('./ProjectFollower');
const ProjectJoinRequest = require('./ProjectJoinRequest');
const ProjectLink = require('./ProjectLink');
const ProjectMember = require('./ProjectMember');
const ProjectSkill = require('./ProjectSkill');
const ProjectSkillLower = require('./ProjectSkillLower');
const ProjectStatusType = require('./ProjectStatusType');
const ProjectTag = require('./ProjectTag');
const ProjectTagLower = require('./ProjectTagLower');
const ProjectUpdate = require('./ProjectUpdate');
const User = require('./User');
const UserInterest = require('./UserInterest');
const UserInterestLower = require('./UserInterestLower');
const UserLink = require('./UserLink');
const UserNotification = require('./UserNotification');
const UserReview = require('./UserReview');
const UserSkill = require('./UserSkill');
const UserSkillLower = require('./UserSkillLower');

// order matters when exporting
// this is the order that tables are created
// referenced tables must exist first before creating the referencing table
module.exports = {
    CITEXT,
    HSTORE,
    LowerInsert,
    ProjectStatusType,
    JoinStatusType,
    NotificationType,
    User,
    UserInterest,
    UserInterestLower,
    UserLink,
    UserNotification,
    UserReview,
    UserSkill,
    UserSkillLower,
    Project,
    ProjectFollower,
    ProjectJoinRequest,
    ProjectLink,
    ProjectMember,
    ProjectSkill,
    ProjectSkillLower,
    ProjectTag,
    ProjectTagLower,
    ProjectUpdate,
};
