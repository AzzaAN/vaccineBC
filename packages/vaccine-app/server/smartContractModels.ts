import { BaseStorage } from '@worldsibu/convector-core-storage';
import { CouchDBStorage } from '@worldsibu/convector-storage-couchdb';

import { Doctor as DoctorModel } from 'vaccine-cc/dist/src';
import { Family as FamilyModel } from 'vaccine-cc/dist/src';
import { Healthadmin as HealthadminModel } from 'vaccine-cc/dist/src';
import { Hospital as HospitalModel } from 'vaccine-cc/dist/src';
import { Insurance as InsuranceModel } from 'vaccine-cc/dist/src';
import { Physician as PhysicianModel } from 'vaccine-cc/dist/src';
import { School as SchoolModel } from 'vaccine-cc/dist/src';
import { Vaccinedetail as VaccinedetailModel } from 'vaccine-cc/dist/src';
import { Vaccinerecord as VaccinerecordModel } from 'vaccine-cc/dist/src';

export namespace Models {
  export const Doctor = DoctorModel;
  export const Family = FamilyModel;
  export const Healthadmin = HealthadminModel;
  export const Hospital = HospitalModel;
  export const Insurance = InsuranceModel;
  export const Physician = PhysicianModel;
  export const School = SchoolModel;
  export const Vaccinedetail = VaccinedetailModel;
  export const Vaccinerecord = VaccinerecordModel;
}
