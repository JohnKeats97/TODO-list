"use strict";

import AdminController from "./AdminController.js";
import todoView from "../Views/ToDoView/ToDoView.js";
import Services from "../Services.js";
import Loader from "../Views/LoaderView/LoaderView.js";


class AdminSelector
{
    constructor()
    {
        this.adminController = new AdminController(todoView);
    }

    show()
    {
        let loader = new Loader();
        loader.show();
        Services.getUser()
            .then(response =>
                {
                        if(true) {
                            loader.hide();
                            this.adminController.show();
                        }
                        else {

                        }

                })
            .catch(() =>
                {

                });
    }

    hide()
    {
        this.adminController.hide();
    }

}

export default AdminSelector;
