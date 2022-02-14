const Interest = require('./Interest');
const JoinStatusType = require('./JoinStatusType');
const NotificationType = require('./NotificationType');
const Project = require('./Project');
const ProjectFollower = require('./ProjectFollower');
const ProjectJoinRequest = require('./ProjectJoinRequest');
const ProjectLink = require('./ProjectLink');
const ProjectMember = require('./ProjectMember');
const ProjectSkill = require('./ProjectSkill');
const ProjectStatusType = require('./ProjectStatusType');
const ProjectTag = require('./ProjectTag');
const ProjectUpdate = require('./ProjectUpdate');
const Skill = require('./Skill');
const User = require('./User');
const UserInterest = require('./UserInterest');
const UserLink = require('./UserLink');
const UserNotification = require('./UserNotification');
const UserReview = require('./UserReview');
const UserSkill = require('./UserSkill');

// order matters when exporting
// this is the order that tables are created
// referenced tables must exist first before creating the referencing table
module.exports = {
    ProjectStatusType,
    JoinStatusType,
    NotificationType,
    Interest,
    Skill,
    User,
    UserInterest,
    UserLink,
    UserNotification,
    UserReview,
    UserSkill,
    Project,
    ProjectFollower,
    ProjectJoinRequest,
    ProjectLink,
    ProjectMember,
    ProjectSkill,
    ProjectTag,
    ProjectUpdate,
};
