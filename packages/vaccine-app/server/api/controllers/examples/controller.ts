import { Request, Response } from 'express';
import { VaccineControllerClient } from '../../../smartContractControllers';
import { Models } from '../../../smartContractModels';
const x509 = require('x509');

export enum Participants {
  Doc = "Doc",
  Family = "Family",
  Hospital = "Hospital",
  Insurance = "Insurance",
  School = "School",
  Physician = "Physician",
  Healthadmin = "Healthadmin"
}
let USERCERT = "";
export class Controller {


  async vaccine_getFamilyById(req: Request, res: Response) {
    let cntrl = await VaccineControllerClient.init(USERCERT);
    let result = await cntrl.getFamilyById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async vaccine_getHospitalById(req: Request, res: Response) {
    let cntrl = await VaccineControllerClient.init(USERCERT);
    let result = await cntrl.getHospitalById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async vaccine_getInsuranceById(req: Request, res: Response) {
    let cntrl = await VaccineControllerClient.init(USERCERT);
    let result = await cntrl.getInsuranceById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async vaccine_getSchoolById(req: Request, res: Response) {
    let cntrl = await VaccineControllerClient.init(USERCERT);
    let result = await cntrl.getSchoolById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async vaccine_getDocById(req: Request, res: Response) {
    let cntrl = await VaccineControllerClient.init(USERCERT);
    let result = await cntrl.getDocById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async vaccine_getPhysicianById(req: Request, res: Response) {
    let cntrl = await VaccineControllerClient.init(USERCERT);
    let result = await cntrl.getPhysicianById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async vaccine_createRecord(req: Request, res: Response) {
    try {
      let cntrl = await VaccineControllerClient.init(USERCERT);
      let modelRaw = req.body;
      let model = new Models.Vaccinerecord(modelRaw);
      let result = await cntrl.createRecord(model);
      res.json(result);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async vaccine_isAuthinticated(req: Request, res: Response) {
    console.log(req.body);
    USERCERT = req.body.username;
    let password = req.body.password;
    let cntrl = await VaccineControllerClient.init("admin");
    if (USERCERT == "admin")
      if (password == "123") {
        try {
          await cntrl.isAuthinticated(USERCERT, password, req.body.type);
          res.sendStatus(200);
        } catch (ex) {
          console.log(ex.message, ex.stack);
          res.status(500).send(ex);
        }
      }
      else res.sendStatus(401);
    else {

      try {
        await cntrl.isAuthinticated(USERCERT, password, req.body.type);
        res.sendStatus(200);
      } catch (ex) {
        console.log(ex.message, ex.stack);
        res.status(500).send(ex);
      }
    }
  }

  async vaccine_createDetail(req: Request, res: Response) {
    try {
      let cntrl = await VaccineControllerClient.init(USERCERT);
      let params = req.body;
      
      let returnObject = await cntrl.createDetail(params.vaccinedetail,params.vaccinerecord);
      if (returnObject === undefined) {
        return res.status(404);
      }
      res.json(returnObject);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async vaccine_getAllRecords(req: Request, res: Response) {
    try {
      let cntrl = await VaccineControllerClient.init(USERCERT);
      let params = req.body;
      
      let returnObject = await cntrl.getAllRecords(params.type);
      if (returnObject === undefined) {
        return res.status(404);
      }
      res.json(returnObject);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async vaccine_getAllDetails(req: Request, res: Response) {
    try {
      let cntrl = await VaccineControllerClient.init(USERCERT);
      let params = req.body;
      
      let returnObject = await cntrl.getAllDetails(params.recordId);
      if (returnObject === undefined) {
        return res.status(404);
      }
      res.json(returnObject);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async vaccine_getRecordById(req: Request, res: Response) {
    try {
      let cntrl = await VaccineControllerClient.init(USERCERT);
      let params = req.body;
      
      let returnObject = await cntrl.getRecordById(params.recordId,params.type);
      if (returnObject === undefined) {
        return res.status(404);
      }
      res.json(returnObject);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async vaccine_getRecordHistory(req: Request, res: Response) {
    try {
      let cntrl = await VaccineControllerClient.init(USERCERT);
      let params = req.body;
      
      let returnObject = await cntrl.getRecordHistory(params.id);
      if (returnObject === undefined) {
        return res.status(404);
      }
      res.json(returnObject);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async vaccine_getDetailHistory(req: Request, res: Response) {
    try {
      let cntrl = await VaccineControllerClient.init(USERCERT);
      let params = req.body;
      
      let returnObject = await cntrl.getDetailHistory(params.id);
      if (returnObject === undefined) {
        return res.status(404);
      }
      res.json(returnObject);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async vaccine_register(req: Request, res: Response) {
    console.log(USERCERT);

    if (USERCERT != 'admin') {
      console.log("USERCERT != 'admin'");
      return res.sendStatus(401);
    }
    try {
      let cntrl = await VaccineControllerClient.init(USERCERT);
      let adapter = await VaccineControllerClient.getAdapter(USERCERT);

      const client: any = adapter['client'];

      // Name of the new user
      const enrollmentID = req.body.username;

      // Admin with permissions to create an user in the CA
      const adminUsername = USERCERT;
      const mspid = 'org1MSP';

      const admin =
        await client.getUserContext(adminUsername, true);

      if (!admin || !admin.isEnrolled()) {
        throw new Error(`Admin ${adminUsername} user is not enrolled ` +
          `when trying to register user ${enrollmentID}`);
      }

      const ca = client.getCertificateAuthority();

      const enrollmentSecret = await ca.register({
        enrollmentID,
        affiliation: 'org1'
      }, admin);

      const { key, certificate } = await ca.enroll({
        enrollmentSecret,
        enrollmentID: enrollmentID
      });

      let newUser = await client.createUser({
        mspid,
        skipPersistence: false,
        username: enrollmentID,
        cryptoContent: {
          privateKeyPEM: key.toBytes(),
          signedCertPEM: certificate
        }
      });
      var fingerprint = x509.parseCert(certificate).fingerPrint;
      console.log(fingerprint);

      let ctrl = await VaccineControllerClient.init(USERCERT);
      await ctrl.register(fingerprint, req.body.type, req.body.username, req.body.fullname, req.body.participantId, req.body.hospital);
      
      res.sendStatus(201);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }


}
export default new Controller();
