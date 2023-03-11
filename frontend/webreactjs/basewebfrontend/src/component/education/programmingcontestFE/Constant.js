export const NORMAL_EVALUATION = "NORMAL_EVALUATION";
export const CUSTOM_EVALUATION = "CUSTOM_EVALUATION";

export const SUBMISSION_MODE_SOURCE_CODE = "SUBMISSION_MODE_SOURCE_CODE";
export const SUBMISSION_MODE_SOLUTION_OUTPUT = "SUBMISSION_MODE_SOLUTION_OUTPUT";

export const getSubmissionModeFromConstant = (mode) => {
  return mode === SUBMISSION_MODE_SOLUTION_OUTPUT ? "OUTPUT ONLY" : "NORMAL";
}