import { createAction, props } from "@ngrx/store";
import { StudentsRecords } from "./students-records";

export const actionList = {
    callStudentRecordsApi: "[ Students Table Component ] Call students records api",
    callStudentsRecordsApiSuccess: "[ Students Table Component ] Call students record api success"
};

export const callStudentRecordsApi = createAction(actionList.callStudentRecordsApi);
export const callStudentsRecordsApiSuccess = createAction(actionList.callStudentsRecordsApiSuccess, props<{payload: StudentsRecords}>)