import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export const VoteType = {
    SUPPORT: "SUPPORT",
    OPPOSE: "OPPOSE",
    NEUTRAL: "NEUTRAL"
} as const;
export type VoteType = (typeof VoteType)[keyof typeof VoteType];
export const ClusteringErrorTypeEnum = {
    SUMMARY_JSON_FORMATTING: "SUMMARY_JSON_FORMATTING",
    ATTACHMENT_FAILURE: "ATTACHMENT_FAILURE",
    OTHERS: "OTHERS"
} as const;
export type ClusteringErrorTypeEnum = (typeof ClusteringErrorTypeEnum)[keyof typeof ClusteringErrorTypeEnum];
export const PlaceSourceEnum = {
    ENTITIES: "ENTITIES",
    MEDIA_NAME: "MEDIA_NAME",
    DEFAULT_TAIWAN_IF_LOCAL: "DEFAULT_TAIWAN_IF_LOCAL"
} as const;
export type PlaceSourceEnum = (typeof PlaceSourceEnum)[keyof typeof PlaceSourceEnum];
export const NotificationType = {
    RECOMMENDATION: "RECOMMENDATION",
    COMMENT_REPLY: "COMMENT_REPLY",
    MISINFORMATION_ALERT: "MISINFORMATION_ALERT",
    COMMENT_LIKED: "COMMENT_LIKED",
    COMMENT_DISLIKED: "COMMENT_DISLIKED",
    CROSS_ARTICLES_ANALYSIS: "CROSS_ARTICLES_ANALYSIS",
    OTHER: "OTHER"
} as const;
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export const CommentType = {
    COMMENT: "COMMENT",
    REPLY_TO_COMMENT: "REPLY_TO_COMMENT",
    REPLY_TO_REPLY: "REPLY_TO_REPLY"
} as const;
export type CommentType = (typeof CommentType)[keyof typeof CommentType];
export const QuestionType = {
    TRUE_FALSE_NOT_GIVEN_QUESTION: "TRUE_FALSE_NOT_GIVEN_QUESTION",
    MISGUIDING_TECHNIQUES_QUESTION: "MISGUIDING_TECHNIQUES_QUESTION"
} as const;
export type QuestionType = (typeof QuestionType)[keyof typeof QuestionType];
export const TitleType = {
    LOGIN_TOTAL: "LOGIN_TOTAL",
    LOGIN_STREAK: "LOGIN_STREAK",
    SUBSCRIPTION: "SUBSCRIPTION",
    CLICK_ARTICLE_TOTAL: "CLICK_ARTICLE_TOTAL",
    COMMENT_TOTAL: "COMMENT_TOTAL",
    COMMENT_REPLY_TOTAL: "COMMENT_REPLY_TOTAL",
    COMMENT_LIKE_TOTAL: "COMMENT_LIKE_TOTAL",
    COMMENT_DISLIKE_TOTAL: "COMMENT_DISLIKE_TOTAL",
    PROFILE_CHANGE_TOTAL: "PROFILE_CHANGE_TOTAL",
    CLICKBAIT_CLICK_TOTAL: "CLICKBAIT_CLICK_TOTAL",
    AI_ANALYSIS_TOTAL: "AI_ANALYSIS_TOTAL",
    NIGHT_LOGIN_TOTAL: "NIGHT_LOGIN_TOTAL",
    AVATAR_CHANGE_TOTAL: "AVATAR_CHANGE_TOTAL",
    NEWS_LIKE_TOTAL: "NEWS_LIKE_TOTAL",
    NEWS_DISLIKE_TOTAL: "NEWS_DISLIKE_TOTAL",
    NEWS_SHARE_TOTAL: "NEWS_SHARE_TOTAL",
    NEWS_VOTE_TOTAL: "NEWS_VOTE_TOTAL",
    JOURNALIST_FOLLOW_TOTAL: "JOURNALIST_FOLLOW_TOTAL",
    SEARCH_TOTAL: "SEARCH_TOTAL",
    DRAFT_ABANDON: "DRAFT_ABANDON",
    REAPPEARANCE: "REAPPEARANCE",
    QUICK_EXIT: "QUICK_EXIT",
    REWARD_CLAIM_TOTAL: "REWARD_CLAIM_TOTAL"
} as const;
export type TitleType = (typeof TitleType)[keyof typeof TitleType];
export const ActivityType = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    ONLINE: "ONLINE",
    OFFLINE: "OFFLINE",
    SUBSCRIBE: "SUBSCRIBE",
    CHANGE_PROFILE_PIC: "CHANGE_PROFILE_PIC",
    CHANGE_PROFILE_NAME: "CHANGE_PROFILE_NAME",
    CHANGE_TOPICS_INTERESTED_IN: "CHANGE_TOPICS_INTERESTED_IN",
    CHANGE_REGIONS_INTERESTED_IN: "CHANGE_REGIONS_INTERESTED_IN",
    CHANGE_IDENTITY: "CHANGE_IDENTITY",
    CHANGE_POLITICAL_STANCE: "CHANGE_POLITICAL_STANCE",
    COMMENT: "COMMENT",
    REPLY: "REPLY",
    LIKE_NEWS: "LIKE_NEWS",
    LIKE_COMMENT: "LIKE_COMMENT",
    DISLIKE_NEWS: "DISLIKE_NEWS",
    DISLIKE_COMMENT: "DISLIKE_COMMENT",
    COMMUNITY_VOTE: "COMMUNITY_VOTE",
    ANSWER_TRUTH_QUESTIONS_CORRECTLY: "ANSWER_TRUTH_QUESTIONS_CORRECTLY",
    ANSWER_TRUTH_QUESTIONS_WRONG: "ANSWER_TRUTH_QUESTIONS_WRONG",
    ANSWER_NEWS_MISGUIDANCE_QUESTIONS_CORRECTLY: "ANSWER_NEWS_MISGUIDANCE_QUESTIONS_CORRECTLY",
    ANSWER_NEWS_MISGUIDANCE_QUESTIONS_WRONG: "ANSWER_NEWS_MISGUIDANCE_QUESTIONS_WRONG",
    USE_CROSS_NEWS_ARTICLE_ANALYSIS_FUNCTION: "USE_CROSS_NEWS_ARTICLE_ANALYSIS_FUNCTION",
    REEXAMINE_MISINFORMATION: "REEXAMINE_MISINFORMATION",
    FOLLOW_JOURNALIST: "FOLLOW_JOURNALIST",
    UNFOLLOW_JOURNALIST: "UNFOLLOW_JOURNALIST",
    CLAIM_REWARD: "CLAIM_REWARD",
    READ_AI_LABEL_REPORT: "READ_AI_LABEL_REPORT",
    USE_BRAINS: "USE_BRAINS"
} as const;
export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType];
export const ReactionType = {
    LIKE: "LIKE",
    DISLIKE: "DISLIKE"
} as const;
export type ReactionType = (typeof ReactionType)[keyof typeof ReactionType];
export const AuthProvider = {
    EMAIL: "EMAIL",
    GOOGLE: "GOOGLE",
    APPLE: "APPLE"
} as const;
export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider];
export const Role = {
    OWNER: "OWNER",
    FREE_USER: "FREE_USER",
    PAID_USER: "PAID_USER",
    BETA_TESTER: "BETA_TESTER"
} as const;
export type Role = (typeof Role)[keyof typeof Role];
export const ErrorTypeEnum = {
    LLM_ERROR: "LLM_ERROR",
    UNMAPPED_MEDIA: "UNMAPPED_MEDIA",
    PARSING_FAILURE: "PARSING_FAILURE",
    PARSING_ERROR: "PARSING_ERROR",
    ZERO_URLS_FETCHED: "ZERO_URLS_FETCHED",
    DATABASE_TIMEOUT: "DATABASE_TIMEOUT",
    OTHERS: "OTHERS"
} as const;
export type ErrorTypeEnum = (typeof ErrorTypeEnum)[keyof typeof ErrorTypeEnum];
export const InterestingTopic = {
    "\u653F\u6CBB": "\u653F\u6CBB",
    "\u570B\u969B": "\u570B\u969B",
    "\u8CA1\u7D93": "\u8CA1\u7D93",
    "\u79D1\u6280": "\u79D1\u6280",
    "\u6559\u80B2": "\u6559\u80B2",
    "\u793E\u6703": "\u793E\u6703",
    "\u6587\u5316": "\u6587\u5316",
    "\u74B0\u5883": "\u74B0\u5883",
    "\u5A1B\u6A02": "\u5A1B\u6A02",
    "\u5065\u5EB7": "\u5065\u5EB7",
    "\u8ECD\u968A": "\u8ECD\u968A",
    "\u904B\u52D5": "\u904B\u52D5",
    "\u89C0\u9EDE": "\u89C0\u9EDE",
    "\u5929\u6C23": "\u5929\u6C23",
    "\u4EA4\u901A": "\u4EA4\u901A",
    "\u516C\u5171\u885E\u751F": "\u516C\u5171\u885E\u751F",
    "\u707D\u5BB3": "\u707D\u5BB3"
} as const;
export type InterestingTopic = (typeof InterestingTopic)[keyof typeof InterestingTopic];
export const InterestingRegionOrCountry = {
    "\u53F0\u5317\u5E02": "\u53F0\u5317\u5E02",
    "\u65B0\u5317\u5E02": "\u65B0\u5317\u5E02",
    "\u6843\u5712\u5E02": "\u6843\u5712\u5E02",
    "\u53F0\u4E2D\u5E02": "\u53F0\u4E2D\u5E02",
    "\u53F0\u5357\u5E02": "\u53F0\u5357\u5E02",
    "\u9AD8\u96C4\u5E02": "\u9AD8\u96C4\u5E02",
    "\u57FA\u9686\u5E02": "\u57FA\u9686\u5E02",
    "\u65B0\u7AF9\u5E02": "\u65B0\u7AF9\u5E02",
    "\u5609\u7FA9\u5E02": "\u5609\u7FA9\u5E02",
    "\u5B9C\u862D\u7E23": "\u5B9C\u862D\u7E23",
    "\u82B1\u84EE\u7E23": "\u82B1\u84EE\u7E23",
    "\u53F0\u6771\u7E23": "\u53F0\u6771\u7E23",
    "\u5357\u6295\u7E23": "\u5357\u6295\u7E23",
    "\u5F70\u5316\u7E23": "\u5F70\u5316\u7E23",
    "\u96F2\u6797\u7E23": "\u96F2\u6797\u7E23",
    "\u5C4F\u6771\u7E23": "\u5C4F\u6771\u7E23",
    "\u82D7\u6817\u7E23": "\u82D7\u6817\u7E23",
    "\u65B0\u7AF9\u7E23": "\u65B0\u7AF9\u7E23",
    "\u5609\u7FA9\u7E23": "\u5609\u7FA9\u7E23",
    "\u6F8E\u6E56\u7E23": "\u6F8E\u6E56\u7E23",
    "\u91D1\u9580\u7E23": "\u91D1\u9580\u7E23",
    "\u9023\u6C5F\u7E23": "\u9023\u6C5F\u7E23",
    "\u9999\u6E2F": "\u9999\u6E2F",
    "\u4E2D\u570B": "\u4E2D\u570B",
    "\u7F8E\u570B": "\u7F8E\u570B",
    "\u52A0\u6C99": "\u52A0\u6C99",
    "\u4EE5\u8272\u5217": "\u4EE5\u8272\u5217",
    "\u70CF\u514B\u862D": "\u70CF\u514B\u862D",
    "\u6B50\u76DF": "\u6B50\u76DF",
    "\u65E5\u672C": "\u65E5\u672C",
    "\u97D3\u570B": "\u97D3\u570B",
    "\u53F0\u7063": "\u53F0\u7063",
    "\u6FB3\u9580": "\u6FB3\u9580",
    "\u82F1\u570B": "\u82F1\u570B",
    "\u6CD5\u570B": "\u6CD5\u570B",
    "\u5FB7\u570B": "\u5FB7\u570B",
    "\u7FA9\u5927\u5229": "\u7FA9\u5927\u5229",
    "\u897F\u73ED\u7259": "\u897F\u73ED\u7259",
    "\u8461\u8404\u7259": "\u8461\u8404\u7259",
    "\u8377\u862D": "\u8377\u862D",
    "\u6BD4\u5229\u6642": "\u6BD4\u5229\u6642",
    "\u76E7\u68EE\u5821": "\u76E7\u68EE\u5821",
    "\u745E\u58EB": "\u745E\u58EB",
    "\u5967\u5730\u5229": "\u5967\u5730\u5229",
    "\u611B\u723E\u862D": "\u611B\u723E\u862D",
    "\u4E39\u9EA5": "\u4E39\u9EA5",
    "\u745E\u5178": "\u745E\u5178",
    "\u632A\u5A01": "\u632A\u5A01",
    "\u82AC\u862D": "\u82AC\u862D",
    "\u51B0\u5CF6": "\u51B0\u5CF6",
    "\u6CE2\u862D": "\u6CE2\u862D",
    "\u6377\u514B": "\u6377\u514B",
    "\u5308\u7259\u5229": "\u5308\u7259\u5229",
    "\u65AF\u6D1B\u4F10\u514B": "\u65AF\u6D1B\u4F10\u514B",
    "\u65AF\u6D1B\u7DAD\u5C3C\u4E9E": "\u65AF\u6D1B\u7DAD\u5C3C\u4E9E",
    "\u514B\u7F85\u57C3\u897F\u4E9E": "\u514B\u7F85\u57C3\u897F\u4E9E",
    "\u7F85\u99AC\u5C3C\u4E9E": "\u7F85\u99AC\u5C3C\u4E9E",
    "\u4FDD\u52A0\u5229\u4E9E": "\u4FDD\u52A0\u5229\u4E9E",
    "\u5E0C\u81D8": "\u5E0C\u81D8",
    "\u611B\u6C99\u5C3C\u4E9E": "\u611B\u6C99\u5C3C\u4E9E",
    "\u62C9\u812B\u7DAD\u4E9E": "\u62C9\u812B\u7DAD\u4E9E",
    "\u7ACB\u9676\u5B9B": "\u7ACB\u9676\u5B9B",
    "\u767D\u4FC4\u7F85\u65AF": "\u767D\u4FC4\u7F85\u65AF",
    "\u6469\u723E\u591A\u74E6": "\u6469\u723E\u591A\u74E6",
    "\u99AC\u723E\u4ED6": "\u99AC\u723E\u4ED6",
    "\u8CFD\u666E\u52D2\u65AF": "\u8CFD\u666E\u52D2\u65AF",
    "\u585E\u723E\u7DAD\u4E9E": "\u585E\u723E\u7DAD\u4E9E",
    "\u6CE2\u58EB\u5C3C\u4E9E\u8207\u8D6B\u585E\u54E5\u7DAD\u7D0D": "\u6CE2\u58EB\u5C3C\u4E9E\u8207\u8D6B\u585E\u54E5\u7DAD\u7D0D",
    "\u8499\u7279\u5167\u54E5\u7F85": "\u8499\u7279\u5167\u54E5\u7F85",
    "\u5317\u99AC\u5176\u9813": "\u5317\u99AC\u5176\u9813",
    "\u963F\u723E\u5DF4\u5C3C\u4E9E": "\u963F\u723E\u5DF4\u5C3C\u4E9E",
    "\u79D1\u7D22\u6C83": "\u79D1\u7D22\u6C83",
    "\u4FC4\u7F85\u65AF": "\u4FC4\u7F85\u65AF",
    "\u52A0\u62FF\u5927": "\u52A0\u62FF\u5927",
    "\u6FB3\u5927\u5229\u4E9E": "\u6FB3\u5927\u5229\u4E9E",
    "\u7D10\u897F\u862D": "\u7D10\u897F\u862D",
    "\u5317\u97D3": "\u5317\u97D3",
    "\u8499\u53E4": "\u8499\u53E4",
    "\u65B0\u52A0\u5761": "\u65B0\u52A0\u5761",
    "\u99AC\u4F86\u897F\u4E9E": "\u99AC\u4F86\u897F\u4E9E",
    "\u5370\u5C3C": "\u5370\u5C3C",
    "\u6CF0\u570B": "\u6CF0\u570B",
    "\u8D8A\u5357": "\u8D8A\u5357",
    "\u83F2\u5F8B\u8CD3": "\u83F2\u5F8B\u8CD3",
    "\u67EC\u57D4\u5BE8": "\u67EC\u57D4\u5BE8",
    "\u5BEE\u570B": "\u5BEE\u570B",
    "\u6C76\u840A": "\u6C76\u840A",
    "\u6771\u5E1D\u6C76": "\u6771\u5E1D\u6C76",
    "\u5370\u5EA6": "\u5370\u5EA6",
    "\u5DF4\u57FA\u65AF\u5766": "\u5DF4\u57FA\u65AF\u5766",
    "\u5B5F\u52A0\u62C9": "\u5B5F\u52A0\u62C9",
    "\u65AF\u91CC\u862D\u5361": "\u65AF\u91CC\u862D\u5361",
    "\u5C3C\u6CCA\u723E": "\u5C3C\u6CCA\u723E",
    "\u4E0D\u4E39": "\u4E0D\u4E39",
    "\u99AC\u723E\u5730\u592B": "\u99AC\u723E\u5730\u592B",
    "\u54C8\u85A9\u514B": "\u54C8\u85A9\u514B",
    "\u70CF\u8332\u5225\u514B": "\u70CF\u8332\u5225\u514B",
    "\u5409\u723E\u5409\u65AF": "\u5409\u723E\u5409\u65AF",
    "\u571F\u5EAB\u66FC": "\u571F\u5EAB\u66FC",
    "\u5854\u5409\u514B": "\u5854\u5409\u514B",
    "\u571F\u8033\u5176": "\u571F\u8033\u5176",
    "\u4F0A\u6717": "\u4F0A\u6717",
    "\u4F0A\u62C9\u514B": "\u4F0A\u62C9\u514B",
    "\u6558\u5229\u4E9E": "\u6558\u5229\u4E9E",
    "\u9ECE\u5DF4\u5AE9": "\u9ECE\u5DF4\u5AE9",
    "\u7D04\u65E6": "\u7D04\u65E6",
    "\u57C3\u53CA": "\u57C3\u53CA",
    "\u6C99\u70CF\u5730\u963F\u62C9\u4F2F": "\u6C99\u70CF\u5730\u963F\u62C9\u4F2F",
    "\u963F\u62C9\u4F2F\u806F\u5408\u5927\u516C\u570B": "\u963F\u62C9\u4F2F\u806F\u5408\u5927\u516C\u570B",
    "\u5361\u9054": "\u5361\u9054",
    "\u79D1\u5A01\u7279": "\u79D1\u5A01\u7279",
    "\u5DF4\u6797": "\u5DF4\u6797",
    "\u963F\u66FC": "\u963F\u66FC",
    "\u4E5F\u9580": "\u4E5F\u9580",
    "\u5DF4\u52D2\u65AF\u5766": "\u5DF4\u52D2\u65AF\u5766",
    "\u7D04\u65E6\u6CB3\u897F\u5CB8": "\u7D04\u65E6\u6CB3\u897F\u5CB8",
    "\u58A8\u897F\u54E5": "\u58A8\u897F\u54E5",
    "\u5DF4\u897F": "\u5DF4\u897F",
    "\u963F\u6839\u5EF7": "\u963F\u6839\u5EF7",
    "\u667A\u5229": "\u667A\u5229",
    "\u79D8\u9B6F": "\u79D8\u9B6F",
    "\u54E5\u502B\u6BD4\u4E9E": "\u54E5\u502B\u6BD4\u4E9E",
    "\u59D4\u5167\u745E\u62C9": "\u59D4\u5167\u745E\u62C9",
    "\u5384\u74DC\u591A": "\u5384\u74DC\u591A",
    "\u73BB\u5229\u7DAD\u4E9E": "\u73BB\u5229\u7DAD\u4E9E",
    "\u70CF\u62C9\u572D": "\u70CF\u62C9\u572D",
    "\u5DF4\u62C9\u572D": "\u5DF4\u62C9\u572D",
    "\u53E4\u5DF4": "\u53E4\u5DF4",
    "\u591A\u660E\u5C3C\u52A0": "\u591A\u660E\u5C3C\u52A0",
    "\u6D77\u5730": "\u6D77\u5730",
    "\u74DC\u5730\u99AC\u62C9": "\u74DC\u5730\u99AC\u62C9",
    "\u85A9\u723E\u74E6\u591A": "\u85A9\u723E\u74E6\u591A",
    "\u5B8F\u90FD\u62C9\u65AF": "\u5B8F\u90FD\u62C9\u65AF",
    "\u5C3C\u52A0\u62C9\u74DC": "\u5C3C\u52A0\u62C9\u74DC",
    "\u54E5\u65AF\u5927\u9ECE\u52A0": "\u54E5\u65AF\u5927\u9ECE\u52A0",
    "\u5DF4\u62FF\u99AC": "\u5DF4\u62FF\u99AC",
    "\u7259\u8CB7\u52A0": "\u7259\u8CB7\u52A0",
    "\u5DF4\u8C9D\u591A": "\u5DF4\u8C9D\u591A",
    "\u5343\u91CC\u9054\u53CA\u6258\u5DF4\u54E5": "\u5343\u91CC\u9054\u53CA\u6258\u5DF4\u54E5",
    "\u5DF4\u54C8\u99AC": "\u5DF4\u54C8\u99AC",
    "\u5357\u975E": "\u5357\u975E",
    "\u5948\u53CA\u5229\u4E9E": "\u5948\u53CA\u5229\u4E9E",
    "\u8863\u7D22\u6BD4\u4E9E": "\u8863\u7D22\u6BD4\u4E9E",
    "\u80AF\u4E9E": "\u80AF\u4E9E",
    "\u5766\u5C1A\u5C3C\u4E9E": "\u5766\u5C1A\u5C3C\u4E9E",
    "\u70CF\u5E72\u9054": "\u70CF\u5E72\u9054",
    "\u76E7\u5B89\u9054": "\u76E7\u5B89\u9054",
    "\u8FE6\u7D0D": "\u8FE6\u7D0D",
    "\u8C61\u7259\u6D77\u5CB8": "\u8C61\u7259\u6D77\u5CB8",
    "\u585E\u5167\u52A0\u723E": "\u585E\u5167\u52A0\u723E",
    "\u5580\u9EA5\u9686": "\u5580\u9EA5\u9686",
    "\u6469\u6D1B\u54E5": "\u6469\u6D1B\u54E5",
    "\u963F\u723E\u53CA\u5229\u4E9E": "\u963F\u723E\u53CA\u5229\u4E9E",
    "\u7A81\u5C3C\u897F\u4E9E": "\u7A81\u5C3C\u897F\u4E9E",
    "\u5229\u6BD4\u4E9E": "\u5229\u6BD4\u4E9E",
    "\u8607\u4E39": "\u8607\u4E39",
    "\u5357\u8607\u4E39": "\u5357\u8607\u4E39",
    "\u7D22\u99AC\u5229\u4E9E": "\u7D22\u99AC\u5229\u4E9E",
    "\u5B89\u54E5\u62C9": "\u5B89\u54E5\u62C9",
    "\u7D0D\u7C73\u6BD4\u4E9E": "\u7D0D\u7C73\u6BD4\u4E9E",
    "\u6CE2\u672D\u90A3": "\u6CE2\u672D\u90A3",
    "\u5C1A\u6BD4\u4E9E": "\u5C1A\u6BD4\u4E9E",
    "\u8F9B\u5DF4\u5A01": "\u8F9B\u5DF4\u5A01",
    "\u525B\u679C\u6C11\u4E3B\u5171\u548C\u570B": "\u525B\u679C\u6C11\u4E3B\u5171\u548C\u570B",
    "\u525B\u679C\u5171\u548C\u570B": "\u525B\u679C\u5171\u548C\u570B",
    "\u99AC\u9054\u52A0\u65AF\u52A0": "\u99AC\u9054\u52A0\u65AF\u52A0",
    "\u6A21\u91CC\u897F\u65AF": "\u6A21\u91CC\u897F\u65AF",
    "\u5E1B\u7409": "\u5E1B\u7409",
    "\u6240\u7F85\u9580\u7FA4\u5CF6": "\u6240\u7F85\u9580\u7FA4\u5CF6",
    "\u99AC\u7D39\u723E\u7FA4\u5CF6": "\u99AC\u7D39\u723E\u7FA4\u5CF6",
    "\u5410\u74E6\u9B6F": "\u5410\u74E6\u9B6F",
    "\u8AFE\u9B6F": "\u8AFE\u9B6F",
    "\u5409\u91CC\u5DF4\u65AF": "\u5409\u91CC\u5DF4\u65AF",
    "\u5BC6\u514B\u7F85\u5C3C\u897F\u4E9E\u806F\u90A6": "\u5BC6\u514B\u7F85\u5C3C\u897F\u4E9E\u806F\u90A6",
    "\u5DF4\u5E03\u4E9E\u7D10\u5E7E\u5167\u4E9E": "\u5DF4\u5E03\u4E9E\u7D10\u5E7E\u5167\u4E9E",
    "\u6590\u6FDF": "\u6590\u6FDF",
    "\u85A9\u6469\u4E9E": "\u85A9\u6469\u4E9E",
    "\u6771\u52A0": "\u6771\u52A0",
    "\u842C\u90A3\u675C": "\u842C\u90A3\u675C",
    "\u570B\u969B": "\u570B\u969B"
} as const;
export type InterestingRegionOrCountry = (typeof InterestingRegionOrCountry)[keyof typeof InterestingRegionOrCountry];
export const Identity = {
    "\u53F0\u5317\u4EBA": "\u53F0\u5317\u4EBA",
    "\u65B0\u5317\u4EBA": "\u65B0\u5317\u4EBA",
    "\u6843\u5712\u4EBA": "\u6843\u5712\u4EBA",
    "\u53F0\u4E2D\u4EBA": "\u53F0\u4E2D\u4EBA",
    "\u53F0\u5357\u4EBA": "\u53F0\u5357\u4EBA",
    "\u9AD8\u96C4\u4EBA": "\u9AD8\u96C4\u4EBA",
    "\u57FA\u9686\u4EBA": "\u57FA\u9686\u4EBA",
    "\u65B0\u7AF9\u4EBA": "\u65B0\u7AF9\u4EBA",
    "\u5609\u7FA9\u4EBA": "\u5609\u7FA9\u4EBA",
    "\u5B9C\u862D\u4EBA": "\u5B9C\u862D\u4EBA",
    "\u82B1\u84EE\u4EBA": "\u82B1\u84EE\u4EBA",
    "\u53F0\u6771\u4EBA": "\u53F0\u6771\u4EBA",
    "\u5357\u6295\u4EBA": "\u5357\u6295\u4EBA",
    "\u5F70\u5316\u4EBA": "\u5F70\u5316\u4EBA",
    "\u96F2\u6797\u4EBA": "\u96F2\u6797\u4EBA",
    "\u5C4F\u6771\u4EBA": "\u5C4F\u6771\u4EBA",
    "\u82D7\u6817\u4EBA": "\u82D7\u6817\u4EBA",
    "\u6F8E\u6E56\u4EBA": "\u6F8E\u6E56\u4EBA",
    "\u91D1\u9580\u4EBA": "\u91D1\u9580\u4EBA",
    "\u9023\u6C5F\u4EBA": "\u9023\u6C5F\u4EBA",
    "\u5176\u4ED6": "\u5176\u4ED6"
} as const;
export type Identity = (typeof Identity)[keyof typeof Identity];
export const PoliticalStance = {
    "\u6DF1\u7DA0": "\u6DF1\u7DA0",
    "\u6DFA\u7DA0": "\u6DFA\u7DA0",
    "\u4E2D\u7ACB": "\u4E2D\u7ACB",
    "\u6DFA\u85CD": "\u6DFA\u85CD",
    "\u6DF1\u85CD": "\u6DF1\u85CD"
} as const;
export type PoliticalStance = (typeof PoliticalStance)[keyof typeof PoliticalStance];
export const MediaNameEnum = {
    CTS: "CTS",
    TSSDNews: "TSSDNews",
    CTWant: "CTWant",
    TaiwanNews: "TaiwanNews",
    TTV: "TTV",
    CTINews: "CTINews",
    HongKongFreePress: "HongKongFreePress",
    MingPaoNews: "MingPaoNews",
    SingTaoDaily: "SingTaoDaily",
    SCMP: "SCMP",
    ChineseNewYorkTimes: "ChineseNewYorkTimes",
    DeutscheWelle: "DeutscheWelle",
    HKFreePress: "HKFreePress",
    WenWeiPo: "WenWeiPo",
    OrientalDailyNews: "OrientalDailyNews",
    TaKungPao: "TaKungPao",
    HK01: "HK01",
    InitiumMedia: "InitiumMedia",
    YahooNews: "YahooNews",
    HKCD: "HKCD",
    TheEpochTimes: "TheEpochTimes",
    NowTV: "NowTV",
    ChineseBBC: "ChineseBBC",
    VOC: "VOC",
    HKCourtNews: "HKCourtNews",
    ICable: "ICable",
    HKGovernmentNews: "HKGovernmentNews",
    OrangeNews: "OrangeNews",
    TheStandard: "TheStandard",
    HKEJ: "HKEJ",
    HKET: "HKET",
    RTHK: "RTHK",
    TheWitness: "TheWitness",
    InMediaHK: "InMediaHK",
    PeopleDaily: "PeopleDaily",
    XinhuaNewsAgency: "XinhuaNewsAgency",
    GlobalTimes: "GlobalTimes",
    CCTV: "CCTV",
    UnitedDailyNews: "UnitedDailyNews",
    LibertyTimesNet: "LibertyTimesNet",
    ChinaTimes: "ChinaTimes",
    CNA: "CNA",
    PTSNews: "PTSNews",
    CTEE: "CTEE",
    MyPeopleVol: "MyPeopleVol",
    TaiwanTimes: "TaiwanTimes",
    ChinaDailyNews: "ChinaDailyNews",
    SETN: "SETN",
    NextAppleNews: "NextAppleNews",
    MirrorMedia: "MirrorMedia",
    NowNews: "NowNews",
    StormMedia: "StormMedia",
    TVBS: "TVBS",
    EBCNews: "EBCNews",
    ETtoday: "ETtoday",
    NewTalk: "NewTalk",
    FTV: "FTV",
    MyGoPenNews: "MyGoPenNews",
    TFCNews: "TFCNews",
    FactcheckLab: "FactcheckLab",
    TaroNews: "TaroNews"
} as const;
export type MediaNameEnum = (typeof MediaNameEnum)[keyof typeof MediaNameEnum];
export const OriginEnum = {
    native: "native",
    CTS: "CTS",
    TSSDNews: "TSSDNews",
    CTWant: "CTWant",
    TaiwanNews: "TaiwanNews",
    TTV: "TTV",
    CTINews: "CTINews",
    HongKongFreePress: "HongKongFreePress",
    MingPaoNews: "MingPaoNews",
    SingTaoDaily: "SingTaoDaily",
    SCMP: "SCMP",
    ChineseNewYorkTimes: "ChineseNewYorkTimes",
    DeutscheWelle: "DeutscheWelle",
    HKFreePress: "HKFreePress",
    WenWeiPo: "WenWeiPo",
    OrientalDailyNews: "OrientalDailyNews",
    TaKungPao: "TaKungPao",
    HK01: "HK01",
    InitiumMedia: "InitiumMedia",
    YahooNews: "YahooNews",
    HKCD: "HKCD",
    TheEpochTimes: "TheEpochTimes",
    NowTV: "NowTV",
    ChineseBBC: "ChineseBBC",
    VOC: "VOC",
    HKCourtNews: "HKCourtNews",
    ICable: "ICable",
    HKGovernmentNews: "HKGovernmentNews",
    OrangeNews: "OrangeNews",
    TheStandard: "TheStandard",
    HKEJ: "HKEJ",
    HKET: "HKET",
    RTHK: "RTHK",
    TheWitness: "TheWitness",
    InMediaHK: "InMediaHK",
    PeopleDaily: "PeopleDaily",
    XinhuaNewsAgency: "XinhuaNewsAgency",
    GlobalTimes: "GlobalTimes",
    CCTV: "CCTV",
    UnitedDailyNews: "UnitedDailyNews",
    LibertyTimesNet: "LibertyTimesNet",
    ChinaTimes: "ChinaTimes",
    CNA: "CNA",
    PTSNews: "PTSNews",
    CTEE: "CTEE",
    MyPeopleVol: "MyPeopleVol",
    TaiwanTimes: "TaiwanTimes",
    ChinaDailyNews: "ChinaDailyNews",
    SETN: "SETN",
    NextAppleNews: "NextAppleNews",
    MirrorMedia: "MirrorMedia",
    NowNews: "NowNews",
    StormMedia: "StormMedia",
    TVBS: "TVBS",
    EBCNews: "EBCNews",
    ETtoday: "ETtoday",
    NewTalk: "NewTalk",
    FTV: "FTV",
    MyGoPenNews: "MyGoPenNews",
    TFCNews: "TFCNews",
    FactcheckLab: "FactcheckLab",
    TaroNews: "TaroNews"
} as const;
export type OriginEnum = (typeof OriginEnum)[keyof typeof OriginEnum];
export const MissionType = {
    DAILY: "DAILY",
    ONE_TIME: "ONE_TIME",
    INFINITE: "INFINITE"
} as const;
export type MissionType = (typeof MissionType)[keyof typeof MissionType];
export const EntityLabelEnum = {
    PERSON: "PERSON",
    ORG: "ORG",
    GPE: "GPE",
    LOC: "LOC"
} as const;
export type EntityLabelEnum = (typeof EntityLabelEnum)[keyof typeof EntityLabelEnum];
export type Achievement = {
    id: Generated<number>;
    name: string;
    unknown: Generated<number>;
    bronze: Generated<number>;
    silver: number;
    gold: number;
    platinum: number;
    diamond: number;
};
export type Author = {
    id: Generated<string>;
    name: string;
};
export type AuthorToNewsMedia = {
    id: Generated<string>;
    authorId: string;
    newsMediaId: string;
};
export type Cluster = {
    id: string;
    cluster_name: string | null;
    cluster_summary: string | null;
    cluster_question: string | null;
    top_entities: unknown | null;
    processed_at: number | null;
    latest_published: number | null;
    article_count: number | null;
    main_topic: string | null;
    main_topic_score: number | null;
    secondary_topic: string | null;
    secondary_topic_score: number | null;
    ambiguous: Generated<boolean>;
    topic_candidates: unknown | null;
    places_in_concern: InterestingRegionOrCountry[];
    places_in_detail: unknown | null;
    clustering_job_id: number;
};
export type ClusteringFailure = {
    id: Generated<number>;
    failure_type: ClusteringErrorTypeEnum;
    detail: string | null;
    timestamp: number;
    resolved: Generated<boolean>;
    jobId: number | null;
};
export type ClusteringJob = {
    id: Generated<number>;
    visualisation_url: string | null;
    start_time: number;
    end_time: number | null;
};
export type ClusterVote = {
    id: Generated<string>;
    userId: string;
    clusterId: string;
    vote: VoteType;
    votedAt: number;
};
export type ClusterVoteSummary = {
    clusterId: string;
    support: Generated<number>;
    oppose: Generated<number>;
    neutral: Generated<number>;
    updatedAt: number;
};
export type Comment = {
    id: Generated<string>;
    userId: string;
    clusterId: string;
    text: string;
    likeNum: Generated<number>;
    dislikeNum: Generated<number>;
    createdAt: number;
    taggedNewsMediaId: string | null;
    replyCount: Generated<number>;
    parentId: string | null;
    replyTo: string | null;
    type: Generated<CommentType>;
};
export type CommentReaction = {
    id: Generated<string>;
    userId: string;
    commentId: string;
    type: ReactionType;
    createdAt: number;
};
export type CrossAnalysis = {
    id: Generated<string>;
    articleAId: string;
    articleBId: string;
    analysisResult: string;
    requestedAt: number;
    url: string;
    requestedById: string | null;
};
export type FreeUserToUnlockedCluster = {
    id: Generated<string>;
    clusterId: string;
    userId: string;
};
export type Mission = {
    id: Generated<number>;
    title: string;
    type: MissionType;
    reward: Generated<number>;
    requirement: Generated<number>;
};
export type News = {
    media_name: MediaNameEnum | null;
    url: string | null;
    title: string | null;
    origin: OriginEnum | null;
    content: string | null;
    published_at: number | null;
    authors: string[];
    images: string[];
    id: Generated<string>;
    clusterId: string | null;
    num_of_likes: Generated<number>;
    num_of_dislikes: Generated<number>;
    misread_shared: Generated<boolean>;
    places_in_concern: InterestingRegionOrCountry[];
    places_in_detail: unknown | null;
    copypaste_flag: Generated<boolean>;
    clickbait: unknown | null;
    journalistic_merits: unknown | null;
    journalistic_demerits: unknown | null;
    reporting_style: Generated<string[]>;
    reporting_intention: Generated<string[]>;
    refined_title: string | null;
};
export type NewsAuthor = {
    newsId: string;
    authorId: string;
    id: Generated<string>;
};
export type NewsMedia = {
    id: Generated<string>;
    name: string;
    chinese_name: string | null;
    imageUrl: string;
    political_standing: number | null;
};
export type NewsQuestion = {
    id: Generated<string>;
    question: string;
    options: unknown;
    answer: string;
    explanation: string | null;
    newsId: string;
    type: Generated<QuestionType>;
};
export type NewsReaction = {
    id: Generated<string>;
    userId: string;
    newsId: string;
    type: ReactionType;
    createdAt: number;
};
export type Notification = {
    id: Generated<string>;
    userId: string;
    senderId: string | null;
    type: NotificationType;
    createdAt: number;
    isRead: Generated<boolean>;
    title: string | null;
    content: string | null;
    imageUrl: string | null;
    newsId: string | null;
    commentId: string | null;
    clusterId: string | null;
    crossAnalysisId: string | null;
};
export type ScrapeFailure = {
    id: Generated<number>;
    failure_type: ErrorTypeEnum;
    media_name: string | null;
    timestamp: number;
    resolved: Generated<boolean>;
    url: string[];
    detail: string | null;
    jobId: number | null;
};
export type ScrapeJob = {
    id: Generated<number>;
    machine_id: string;
    start_time: number;
    end_time: number | null;
    media_name: MediaNameEnum;
};
export type Title = {
    id: Generated<number>;
    name: string;
    explanation: string;
    emoji: string;
    condition: number;
    condition_description: string;
    type: TitleType;
};
export type User = {
    id: Generated<string>;
    displayName: string | null;
    chosenTitle: string | null;
    avatarUrl: string | null;
    isBlocked: Generated<boolean>;
    onboardingNeeded: Generated<boolean>;
    role: Generated<Role>;
    createdAt: number;
    updatedAt: number;
    num_of_brains: Generated<number>;
    num_of_hearts: Generated<number>;
    topicsInterestedIn: InterestingTopic[];
    regionsInterestedIn: InterestingRegionOrCountry[];
    politicalStance: PoliticalStance | null;
    identity: Identity | null;
};
export type UserAchievement = {
    id: Generated<string>;
    userId: string;
    achievementId: number;
    cumulative_num: Generated<number>;
    max_num: Generated<number>;
    updatedAt: number | null;
};
export type UserActivity = {
    id: Generated<string>;
    userId: string;
    type: ActivityType;
    createdAt: number;
};
export type UserActivityCounter = {
    id: Generated<string>;
    userId: string;
    type: ActivityType;
    count: Generated<number>;
    updatedAt: number;
    createdAt: number;
};
export type UserAnswer = {
    id: Generated<string>;
    userId: string;
    questionId: string;
    clusterId: string;
    selectedOption: string;
    answeredAt: number;
};
export type UserAppSession = {
    id: Generated<string>;
    userId: string;
    startTime: number;
    endTime: number | null;
};
export type UserAppSettingPreference = {
    id: Generated<string>;
    userId: string;
    gameMode: Generated<boolean>;
    canSendNotification: Generated<boolean>;
    seeReportingMerits: Generated<boolean>;
    seeMisguidingTechniques: Generated<boolean>;
    seeReportingStyle: Generated<boolean>;
    seeReportingIntention: Generated<boolean>;
    removeSensationalHeadlines: Generated<boolean>;
    removeCopyPasteArticles: Generated<boolean>;
    pushNotificationToken: string | null;
};
export type UserArticleRead = {
    id: Generated<string>;
    userId: string;
    newsId: string;
};
export type UserAuth = {
    id: Generated<string>;
    userId: string;
    authProvider: Generated<AuthProvider>;
    email: string | null;
    password: string | null;
    providerId: string | null;
    refreshToken: string | null;
    verificationToken: string | null;
    emailVerified: Generated<boolean>;
};
export type UserMission = {
    id: Generated<string>;
    userId: string;
    missionId: number;
    progress: Generated<number>;
    completed: Generated<boolean>;
    updatedAt: number;
    createdAt: number;
};
export type UserTitle = {
    id: Generated<number>;
    userId: string;
    titleId: number;
    createdAt: number;
    type: TitleType;
};
export type UserTitleProgress = {
    id: Generated<number>;
    userId: string;
    titleId: number;
    progress: Generated<number>;
    updatedAt: number;
    createdAt: number;
    completed: Generated<boolean>;
    type: TitleType;
};
export type UserToAuthor = {
    id: Generated<string>;
    userId: string;
    authorId: string;
    followedAt: number | null;
};
export type DB = {
    achievement: Achievement;
    author: Author;
    author_to_news_media: AuthorToNewsMedia;
    cluster: Cluster;
    cluster_vote: ClusterVote;
    cluster_vote_summary: ClusterVoteSummary;
    clustering_failures: ClusteringFailure;
    clustering_jobs: ClusteringJob;
    comment: Comment;
    comment_reaction: CommentReaction;
    cross_analysis: CrossAnalysis;
    free_user_to_unlocked_cluster: FreeUserToUnlockedCluster;
    mission: Mission;
    news: News;
    news_author: NewsAuthor;
    news_media: NewsMedia;
    news_questions: NewsQuestion;
    news_reaction: NewsReaction;
    notification: Notification;
    scrape_failures: ScrapeFailure;
    scrape_jobs: ScrapeJob;
    title: Title;
    user: User;
    user_achievement: UserAchievement;
    user_activity: UserActivity;
    user_activity_counter: UserActivityCounter;
    user_answer: UserAnswer;
    user_app_session: UserAppSession;
    user_app_setting_preference: UserAppSettingPreference;
    user_article_read: UserArticleRead;
    user_auth: UserAuth;
    user_mission: UserMission;
    user_title: UserTitle;
    user_title_progress: UserTitleProgress;
    user_to_author: UserToAuthor;
};
