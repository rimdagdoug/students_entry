import { createSelector } from "@ngrx/store";
import { StudentsRecords } from "./students-records";

export interface AppState {
    StudentsRecords: StudentsRecords[];  
  }

  export const selectFeature = (state: AppState) => state.StudentsRecords;

  export const selectAll = createSelector(
    selectFeature,
    (state: StudentsRecords[]) => state
  );
  