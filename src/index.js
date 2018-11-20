import { spy } from "sinon";

const fn = spy();

fn(1);

console.log(fn.firstCall);
