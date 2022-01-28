import commonServices from "./common/common.js";
import coursesServises from "./modules/courses.js";

const html = {
  name: "html_css",
};

const js = {
  name: "Java Script",
};
const group = {
  name: "FE_46",
  studentsCount: 20,
};

commonServices.addItem("groups", group);
console.log(commonServices.getFieldItem("groups"));
commonServices.addItem("courses", html);
console.log(commonServices.getFieldItem("courses"));
