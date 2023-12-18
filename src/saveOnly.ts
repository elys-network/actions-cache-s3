import * as core from "@actions/core";

import saveImpl from "./saveImpl";
import { NullStateProvider } from "./stateProvider";

async function run(): Promise<void> {
    const saved = await saveImpl(new NullStateProvider());
    if (!saved) {
        core.warning(`Cache save failed.`);
    }
}

run();

export default run;
