const axios = require("axios");

const API_BASE = 'https://capstonedbapi.azurewebsites.net/'

function getPrograms() {
    return axios({
        method: 'GET',
        url: API_BASE + '/department-management/departments',
        headers: {
            'content-type': 'application/json'
        }
    });
}

/*
function getCourses() {
    return axios({
        method: 'GET',
        url: API_BASE + '/department-management/classes',
        headers: {
            'content-type': 'application/json'
        }
    });
}

function getProfessors() {
    return axios({
        method: 'GET',
        url: API_BASE + '/department-management/professors',
        headers: {
            'content-type': 'application/json'
        }
    });
}

function getRooms() {
    return axios({
        method: 'GET',
        url: API_BASE + '/department-management/rooms',
        headers: {
            'content-type': 'application/json'
        }
    });
}

function getSchedules() {
    return axios({
        method: 'GET',
        url: API_BASE + '/department-management/schedules',
        headers: {
            'content-type': 'application/json'
        }
    });
}
*/

module.exports = { getPrograms }