import { modalClose } from "./modal-control";
import { modalOpen } from "./modal-control";
import { renderProjectSb } from "./render";

// Get all elements in project creation form
const pName = document.querySelector("#pname");
const pDesc = document.querySelector("#pdesc");
const projectSubmitBtn = document.querySelector(".psubmit");

const projectMdlOpen = document.querySelector(".project-button");
// Get project modal element, and the form within it
const projectModal = document.querySelector(".pmodal");
const pForm = document.querySelector(".pmodal-content");

// Get project modal form elements, and put them into an array
const pFormArr = pForm.elements;
console.log(pFormArr);

// Example project object
const project = {
  name: "Example",
  desc: "Example",
  rendered: false,
  renderedOption: false,
};
export const projectArray = [project];

// Factory function to create project objects
const createProject = (pName, pDesc) => {
  return {
    name: pName.value,
    desc: pDesc.value,
    rendered: false,
    renderedOption: false,
  };
};

projectSubmitBtn.addEventListener("click", () => {
  const project = createProject(pName, pDesc);
  projectArray.push(project);
  console.log(project, projectArray);
  modalClose(projectModal, pFormArr);
  renderProjectSb(projectArray);
});

projectMdlOpen.addEventListener("click", (e) => {
  modalOpen(projectModal);
});

window.addEventListener("click", (e) => {
  if (e.target === projectModal && e.target !== pForm) {
    console.log(e);
    modalClose(projectModal, pFormArr);
  } else {
    return;
  }
});

renderProjectSb(projectArray);