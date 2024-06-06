

exports.attachmentKeyMap = {
    ID: "Id",
    BODY: "Body",
    BODYLENGTH: {
        name: "BodyLength",
        type: "int"
    },
    CONTENTTYPE: "ContentType",
    DESCRIPTION: "Description",
    LASTMODIFIEDBYID: "LastModifiedById",
    LASTMODIFIEDDATE: "LastModifiedDate",
    NAME: "Name",
    PARENTID: "ParentId"
}

exports.interventionPlanLineItemKeyMap = {
    ID: 'Id',
    RECORDTYPEID: 'RecordTypeId',
    INTERVENTION_PLAN__C: 'Intervention_Plan__c',
    ACTIVE__C: {
        name: 'Active__c',
        type: 'bool'
    },
    AI_PROGRESSION__C: {
        name: 'AI_Progression__c',
        type: 'bool'
    },
    AI_PROGRESSION_MONTH_MATCH_COUNT__C: {
        name: 'AI_Progression_Month_Match_Count__c',
        type: 'bool'
    },
    AI_PROGRESSION_MONTHLY_CHECK__C: {
        name: 'AI_Progression_Monthly_Check__c',
        type: 'bool'
    },
    AI_PROGRESSION_MONTHLY_COUNT__C: {
        name: 'AI_Progression_Monthly_Count__c',
        type: 'bool'
    },
    AI_PROGRESSION_MONTHLY_DATE__C: 'AI_Progression_Monthly_Date__c',
    AI_PROGRESSION_PROCESS_DATE__C: 'AI_Progression_Process_Date__c',
    AI_PROGRESSION_WEEK_MATCH_COUNT__C: {
        name: 'AI_Progression_Week_Match_Count__c',
        type: 'bool'
    },
    AI_PROGRESSION_WEEKLY_CHECK__C: {
        name: 'AI_Progression_Weekly_Check__c',
        type: 'bool'
    },
    AI_PROGRESSION_WEEKLY_COUNT__C: {
        name: 'AI_Progression_Weekly_Count__c',
        type: 'int'
    },
    AI_PROGRESSION_WEEKLY_DATE__C: 'AI_Progression_Weekly_Date__c',
    BEHAVIOR_OCCURS__C: 'Behavior_Occurs__c',
    BEHAVIOR_OCCURS_COUNT__C: {
        name: 'Behavior_Occurs_Count__c',
        type: 'int'
    },
    CLIENT__C: 'Client__c',
    CLIENT_DOMAIN__C: 'Client_Domain__c',
    CLIENT_PROMPT__C: 'Client_Prompt__c',
    CLIENT_SKILL__C: 'Client_Skill__c',
    CLIENT_TARGET__C: 'Client_Target__c',
    COLD_PROBE__C: {
        name: 'Cold_Probe__c',
        type: 'bool'
    },
    DOMAIN__C: 'Domain__c',
    DURATION_EQUALS_OR_LESS_THAN__C: 'Duration_equals_or_less_than__c',
    GOAL_BANK_ID__C: 'Goal_Bank_Id__c',
    INSTRUCTION__C: 'Instruction__c',
    INTERVAL__C: {
        name: 'Interval__c',
        type: 'int'
    },
    INTERVENTION_PLAN_LINE_ITEM_NAME__C: 'Intervention_Plan_Line_Item_Name__c',
    IS_SKILL_BEHAVIOR_REDUCTION__C: {
        name: 'is_Skill_Behavior_Reduction__c',
        type: 'bool'
    },
    ISPHASELINE__C: {
        name: 'isPhaseLine__c',
        type: 'bool'
    },
    ISPINNED__C: {
        name: 'IsPinned__c',
        type: 'bool'
    },
    KEY__C: 'Key__c',
    LABEL__C: 'Label__c',
    LASTACTIVITYDATE: 'LastActivityDate',
    LEVEL__C: 'Level__c',
    MASTERY_CRITERIA__C: {
        name: 'Mastery_Criteria__c',
        type: 'int'
    },
    MASTERY_IN_DAYS__C: {
        name: 'Mastery_In_Days__c',
        type: 'int'
    },
    MAXIMUM__C: {
        name: 'Maximum__c',
        type: 'int'
    },
    MINIMUM__C: {
        name: 'Minimum__c',
        type: 'int'
    },
    MOSTLY_USED__C: {
        name: 'Mostly_Used__c',
        type: 'bool'
    },
    NAME: 'Name',
    OBSERVATION_SESSION_INTERVAL_TIME__C: 'Observation_Session_Interval_Time__c',
    ORDER__C: 'Order__c',
    PARENT_LINE_ITEM__C: 'Parent_Line_Item__c',
    PRACTICE__C: 'Practice__c',
    PROMPT__C: 'Prompt__c',
    RELATED_DOMAIN__C: 'Related_Domain__c',
    RELATED_SKILL__C: 'Related_Skill__c',
    RELATED_TARGET__C: 'Related_Target__c',
    RESPONSE_TYPE__C: 'Response_Type__c',
    SELECTED_DOMAIN__C: 'Selected_Domain__c',
    SELECTED_DOS__C: 'Selected_DOS__c',
    SELECTED_SKILL__C: 'Selected_Skill__c',
    SELECTED_TARGET__C: 'Selected_Target__c',
    SEQUENCE__C: {
        name: 'Sequence__c',
        type: 'int'
    },
    SKILL__C: 'Skill__c',
    TARGET__C: 'Target__c',
    TARGET_COUNT_IN_PROBE__C: 'Target_Count_in_Probe__c',
    TARGET_MASTERED_Y_N__C: {
        name: 'Target_Mastered_Y_N__c',
        type: 'bool'
    },
    TARGET_STATUS__C: 'Target_Status__c',
    TOTAL_DURATION_OF_INTERVAL__C: {
        name: 'Total_Duration_of_Interval__c',
        type: 'int'
    },
    TOTAL_OBSERVATION_SESSION_TIME__C: 'Total_Observation_Session_Time__c',
    TYPE__C: 'Type__c',
    X_AXIS__C: 'X_Axis__c',
    Y_AXIS__C: 'Y_Axis__c',
};

exports.interventionPlanResponseHistoryKeyMap = {
    ID: 'Id',
    CLIENT_NEEDS__C: 'Client_Needs__c',
    COLD_PROBE__C: {
        name: 'Cold_Probe__c',
        type: 'bool'
    },
    DELETED__C: {
        name: 'Deleted__c',
        type: 'bool'
    },
    EVENTID__C: 'EventId__c',
    INTERVENTION_PLAN__C: 'Intervention_Plan__c',
    INTERVENTION_PLAN_LINE_ITEMS__C: 'Intervention_Plan_Line_Items__c',
    PRACTICE__C: 'Practice__c',
    RESPONSE__C: 'Response__c',
    NAME: 'Name',
    RESPONSE_IN_TIME__C: {
        name: 'Response_In_Time__c',
        type: "int"
    },
    SKILL_NAME__C: 'Skill_Name__c',
    TARGET__C: 'Target__c',
    TARGET_NAME__C: 'Target_Name__c',
    TARGET_PLAN_LINE_ITEM__C: 'Target_Plan_Line_Item__c',
    TARGET_PLAN_LINE_ITEM_FORMULA__C: 'Target_Plan_Line_Item_Formula__c',
    TARGET_STATUS__C: 'Target_Status__c',
    LASTMODIFIEDDATE: 'LastModifiedDate',
};
