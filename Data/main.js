"use strict";
// JS
import AdminController from "./Modules/Controllers/ToDoController.js";
import ToDo from "./Modules/Views/ToDoView/ToDoView.js";
// CSS
import "./CSS/body.css"
import "./CSS/page.css"
import "./Modules/Views/CSS/button.css"
import "./Modules/Views/CSS/wrapper.css"
import "./Modules/Views/CSS/header2.css"
import "./Modules/Views/ToDoView/ToDoView.css"
import "./Modules/Views/ToDoView/Checkbox.css"
import "./Modules/Blocks/MessageBox/MessageBox.css";


let header = document.getElementsByClassName("page__header")[0];
header.innerHTML = "TODO LIST";

const toDo = new AdminController(ToDo);
toDo.show();