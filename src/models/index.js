const JoinStatusType = require('./JoinStatusType');
const NotificationType = require('./NotificationType');
const Project = require('./Project');
const ProjectFollower = require('./ProjectFollower');
const ProjectJoinRequest = require('./ProjectJoinRequest');
const ProjectMember = require('./ProjectMember');
const ProjectSkill = require('./ProjectSkill');
const ProjectStatusType = require('./ProjectStatusType');
const ProjectTag = require('./ProjectTag');
const ProjectUpdate = require('./ProjectUpdate');
const User = require('./User');
const UserNotification = require('./UserNotification');

// order matters when exporting
// this is the order that tables are created
// referenced tables must exist first before creating the referencing table
module.exports = {
    ProjectStatusType,
    JoinStatusType,
    NotificationType,
    User,
    UserNotification,
    Project,
    ProjectFollower,
    ProjectJoinRequest,
    ProjectMember,
    ProjectSkill,
    ProjectTag,
    ProjectUpdate,
};
