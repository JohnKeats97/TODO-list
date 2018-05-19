"use strict";

import BaseView from "../BaseView/BaseView.js";

let generateTodoView = require("./ToDoView.pug");

const todoView = new BaseView(document.getElementsByClassName("page")[0], generateTodoView,
    {
        title: 0,
        menus: []
    });

export default todoView;
