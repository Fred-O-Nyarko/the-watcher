enum CandidateType {
  PRESIDENTIAL = "PRESIDENTIAL",
  PARLIAMENTARY = "PARLIAMENTARY",
  ASSEMBLY = "ASSEMBLY",
  COMMITTEE = "COMMITTEE",
}

enum UserRole {
  SUPER_ADMIN = "SUPER_ADMIN",
  ADMIN = "ADMIN",
  SUPERVISOR = "SUPERVISOR",
  MERCHANT = "MERCHANT",
  AGENT = "AGENT",
}

enum UserAccessLevel {
  CONSTITUENCY = "CONSTITUENCY",
  REGION = "REGION",
  NATION = "NATION",
  ZONE = "ZONE",
  TOWN = "TOWN",
  POLLING_STATION = "POLLING_STATION",
}

enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

enum ResultStatus {
  PENDING_CONFIRMATION = "PENDING_CONFIRMATION",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

enum UserKeyType {
  AUTH_TOKEN = "AUTH_TOKEN",
}

enum ErrorCodes {
  UNVERIFIED_ACCOUNT_ERROR = 224100,
  BLOCKED_ACCOUNT_ERROR = 224101,
  INVALID_OTP = 224102,
  JWT_EXPIRED = 224103,
}

enum ResultUploadMethod {
  MANUAL = "MANUAL",
  USSD = "USSD",
  AI = "AI",
}

enum SessionStatus {
  PENDING = "PENDING",
  REJECTED = "REJECTED",
  CONFIRMED = "CONFIRMED",
}

enum SessionSteps {
  STEP_1 = 1,
  STEP_2 = 2,
  STEP_3 = 3,
  STEP_4 = 4,
  STEP_5 = 5,
}

export {
  CandidateType,
  UserRole,
  UserAccessLevel,
  Sex,
  ResultStatus,
  UserKeyType,
  ErrorCodes,
  ResultUploadMethod,
  SessionStatus,
  SessionSteps,
};
