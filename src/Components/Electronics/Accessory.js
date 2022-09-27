import { Fragment } from "react";
import AccessoryElectronics from "./AccessoryElectronics";
import News from "./News";


const Accessory = () => {
    return (
        <Fragment>
            <News />
            <AccessoryElectronics/>
        </Fragment>
    );
}

export default Accessory;
