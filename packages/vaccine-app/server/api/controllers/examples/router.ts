import express from 'express';
import controller from './controller'
export default express.Router()

    .post('/vaccinerecords/', controller.vaccine_createRecord)
    .post('/vaccinedetails/', controller.vaccine_createDetail)
    .get('/familys/:id', controller.vaccine_getFamilyById)
    .get('/hospitals/:id', controller.vaccine_getHospitalById)
    .get('/insurances/:id', controller.vaccine_getInsuranceById)
    .get('/schools/:id', controller.vaccine_getSchoolById)
    .get('/doctors/:id', controller.vaccine_getDocById)
    .get('/physicians/:id', controller.vaccine_getPhysicianById)
    .post('/isAuthinticated', controller.vaccine_isAuthinticated)
    .post('/getAllRecords', controller.vaccine_getAllRecords)
    .post('/getAllDetails', controller.vaccine_getAllDetails)
    .post('/getRecordById', controller.vaccine_getRecordById)
    .post('/getRecordHistory', controller.vaccine_getRecordHistory)
    .post('/getDetailHistory', controller.vaccine_getDetailHistory)
    .post('/register', controller.vaccine_register)

;
