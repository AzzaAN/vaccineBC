import { resolve } from "path";
import { ClientFactory, ControllerAdapter } from "@worldsibu/convector-core-adapter";
import { SelfGenContext } from "./selfgenfabriccontext";
import { VaccineController } from "vaccine-cc/dist/src"; 
import { FabricControllerAdapter } from '@worldsibu/convector-adapter-fabric';

export namespace VaccineControllerClient  {
    export async function init(USERCERT): Promise<VaccineController> {
        await SelfGenContext.getClient(USERCERT);
        const adapter = fabricAdapter(USERCERT);
        await adapter.init();
        return ClientFactory(VaccineController, adapter);
    }

    export async function getAdapter(USERCERT): Promise<ControllerAdapter> {
        const adapter = fabricAdapter(USERCERT);
        await adapter.init();
        return ClientFactory(VaccineController, adapter).adapter;
    }

    function fabricAdapter(USERCERT) {
        return new FabricControllerAdapter({
            txTimeout: 300000,
            user: USERCERT,
            channel: process.env.CHANNEL,
            chaincode: process.env.CHAINCODE,
            keyStore: resolve(__dirname, process.env.KEYSTORE),
            networkProfile: resolve(__dirname, process.env.NETWORKPROFILE),
            userMspPath: resolve(__dirname, process.env.KEYSTORE),
        });
    }
}

