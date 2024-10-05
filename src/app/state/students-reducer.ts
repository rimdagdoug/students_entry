import { createReducer } from "@ngrx/store";
import { StudentsRecords } from "./students-records";

export const initState: ReadonlyArray<StudentsRecords> = [{
    name: "rim",
    city: "Monastir",
    country: "tunisie",
    subject: "cici",
    passportDeclaration: "Yes",
    fitnessDeclaration: "Yes",
    courseName: "dev",
    date: "14-11-1999",
    state: "monastir",
    street: "rue de vienne",
    email: "rim@gmail.com",
    phone: "9944251",
    postalCode: 5000,
}];

export const studentsReducer = createReducer(
    initState
);