"use strict";

module.exports = Object.freeze({

    // App-ID. DONE: set to your own Skill App ID from the developer portal.
    appId : 'amzn1.ask.skill.6d49cc8d-99cf-4f4d-ab8a-b138765d6ac5',
    
    //  DynamoDB Table name
    dynamoDBTableName : 'LongFormAudioSample',
    
    /*
     *  States:
     *  START_MODE : Welcome state when the audio list has not begun.
     *  PLAY_MODE :  When a playlist is being played. Does not imply only active play.
     *               It remains in the state as long as the playlist is not finished.
     *  RESUME_DECISION_MODE : When a user invokes the skill in PLAY_MODE with a LaunchRequest,
     *                         the skill provides an option to resume from last position, or to start over the playlist.
     */
    states : {
        START_MODE : '',
        PLAY_MODE : '_PLAY_MODE',
        RESUME_DECISION_MODE : '_RESUME_DECISION_MODE'
    }
});
