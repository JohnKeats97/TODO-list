"use strict";
// JS
import AdminSelector from "./Modules/Controllers/AdminSelector.js";
// CSS
import "./CSS/body.css"
import "./CSS/page.css"
import "./Modules/Views/CSS/button.css"
import "./Modules/Views/CSS/wrapper.css"
import "./Modules/Views/CSS/header2.css"
import "./Modules/Views/LoaderView/Loader.css"
import "./Modules/Views/ToDoView/ToDoView.css"
import "./Modules/Views/ToDoView/Checkbox.css"
import "./Modules/Blocks/MessageBox/MessageBox.css";


let header = document.getElementsByClassName("page__header")[0];
header.innerHTML = "TODO LIST";

const admin = new AdminSelector();
admin.show();