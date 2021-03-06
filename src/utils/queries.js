/**
 * Constants that are used for making queries.
 */
module.exports = {
    FETCH_TABLE_INFO: "SELECT TABLE_NAME,TABLE_ROWS,TABLE_TYPE FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='classyschedule'",
    FETCH_ALL_PROGRAM_DATA: 'SELECT * FROM department',
    FETCH_ALL_COURSE_DATA: 'SELECT * FROM Class',
    FETCH_ALL_PROFESSOR_DATA: 'SELECT * FROM Professor',
    FETCH_ALL_ROOM_DATA: 'SELECT * FROM Room'
}