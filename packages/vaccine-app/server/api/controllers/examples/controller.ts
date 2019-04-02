import { Request, Response } from 'express';
import { VaccineControllerClient } from '../../../smartContractControllers';
import { Models } from '../../../smartContractModels';

export class Controller {


  async vaccine_getFamilyById(req: Request, res: Response) {
    let cntrl = await VaccineControllerClient.init();
    let result = await cntrl.getFamilyById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async vaccine_getHospitalById(req: Request, res: Response) {
    let cntrl = await VaccineControllerClient.init();
    let result = await cntrl.getHospitalById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async vaccine_getInsuranceById(req: Request, res: Response) {
    let cntrl = await VaccineControllerClient.init();
    let result = await cntrl.getInsuranceById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async vaccine_getSchoolById(req: Request, res: Response) {
    let cntrl = await VaccineControllerClient.init();
    let result = await cntrl.getSchoolById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async vaccine_getDocById(req: Request, res: Response) {
    let cntrl = await VaccineControllerClient.init();
    let result = await cntrl.getDocById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async vaccine_getPhysicianById(req: Request, res: Response) {
    let cntrl = await VaccineControllerClient.init();
    let result = await cntrl.getPhysicianById(req.params.id);
    if (!result) {
      return res.status(404);
    }
    res.json(result);
  }

  async vaccine_createRecord(req: Request, res: Response) {
    try {
      let cntrl = await VaccineControllerClient.init();
      let modelRaw = req.body;
      let model = new Models.Vaccinerecord(modelRaw);
      let result = await cntrl.createRecord(model);
      res.json(result);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async vaccine_createDetail(req: Request, res: Response) {
    try {
      let cntrl = await VaccineControllerClient.init();
      let modelRaw = req.body;
      let model = new Models.Vaccinedetail(modelRaw);
      let result = await cntrl.createDetail(model);
      res.json(result);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }

  async vaccine_isAuthinticated(req: Request, res: Response) {
    try {
      let cntrl = await VaccineControllerClient.init();
      let params = req.body;
      
      let returnObject = await cntrl.isAuthinticated(params.username,params.userId,params.type);
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
      let cntrl = await VaccineControllerClient.init();
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
      let cntrl = await VaccineControllerClient.init();
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
      let cntrl = await VaccineControllerClient.init();
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
      let cntrl = await VaccineControllerClient.init();
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
      let cntrl = await VaccineControllerClient.init();
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
    try {
      let cntrl = await VaccineControllerClient.init();
      let params = req.body;
      
      let returnObject = await cntrl.register(params.id,params.type,params.username,params.fullname,params.participantId,params.hospital);
      if (returnObject === undefined) {
        return res.status(404);
      }
      res.json(returnObject);
    } catch (ex) {
      console.log(ex.message, ex.stack);
      res.status(500).send(ex.stack);
    }
  }


}
export default new Controller();
