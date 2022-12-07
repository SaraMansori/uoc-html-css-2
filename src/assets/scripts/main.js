/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import * as bootstrap from "bootstrap";
// import 'some-node-module';
// import SomeModule from 'some-node-module';
import { initializeNavbar } from "./navbar";
/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
  initializeNavbar();
})();
