"use strict";

import Services from "../Services.js";
import MessageBox from "../Blocks/MessageBox/MessageBox.js";
import Loader from "../Views/LoaderView/LoaderView.js";

class AdminController
{
    constructor(view)
    {
        this.view = view;
        this.active = 3;
        this.complited = 4;
    }

    showAdd()
    {
        this.view.changeData({title: 1, menus: []});
        this.buttonListener();
        let addButton = document.querySelectorAll(".button-AddTest")[0];
        addButton.addEventListener('click', function ()
        {
            let name = document.querySelectorAll(".name-AddTest")[0];
            let text = document.querySelectorAll(".text-AddTest")[0];
            let comment = document.querySelectorAll(".answer-AddTest")[0];
            name = name.value.toString().trim();
            text = text.value.toString().trim();
            comment = comment.value.toString().trim();
            if (name && text) {
                let loader = new Loader();
                loader.show();
                Services.add(name, text, comment);
                loader.hide();
                new MessageBox("Действие добавлено");
            }
        });
    }

    showToDo(mode = 2) {
        let loader = new Loader();
        loader.show();
        let result = Services.get();
        result = result.reverse();
        this.view.changeData({title: mode, menus: result});
        this.buttonListener();
        loader.hide();

        let deleteButtons = document.querySelectorAll(".adminForm__button-delete");
        deleteButtons.forEach((item) => {
            item.addEventListener('click', () => {
                let id = item.dataset.id;
                let task = document.getElementById(id);
                if (task) {
                    let loader = new Loader();
                    loader.show();
                    Services.delete(id);
                    task.remove();
                    loader.hide();
                    new MessageBox("Действие удалено");
                }
            });
        });

        let changeButtons = document.querySelectorAll(".adminForm__button-change");
        changeButtons.forEach((item) => {
            item.addEventListener('click', () => {
                let id = item.dataset.id;
                let task = document.getElementById(id);
                if (task) {
                    let name = task.childNodes[0].value;
                    let text = task.childNodes[1].value;
                    let comment = task.childNodes[2].value;
                    let completed = task.childNodes[3].childNodes[2].childNodes[1].checked;
                    name = name.toString().trim();
                    text = text.toString().trim();
                    comment = comment.toString().trim();
                    if (name && text) {
                        let loader = new Loader();
                        loader.show();
                        Services.change(id, name, text, completed, comment);
                        loader.hide();
                        this.showToDo(mode);
                        new MessageBox("Действие изменено");
                    }
                }
            });
        });

    }




    onShow()
    {
        this.view.changeData({title: 0, menus: []});
        this.buttonListener();
    }

    buttonListener() {
        let _add = document.querySelectorAll(".button-add")[0];
        _add.addEventListener('click', function () {
            this.showAdd();
        }.bind(this));
        let _all = document.querySelectorAll(".button-all")[0];
        _all.addEventListener('click', function () {this.showToDo()}.bind(this));
        let _active = document.querySelectorAll(".button-active")[0];
        _active.addEventListener('click', function () {this.showToDo(this.active)}.bind(this));
        let _completed = document.querySelectorAll(".button-completed")[0];
        _completed.addEventListener('click', function () {this.showToDo(this.complited)}.bind(this));
    }

    hide()
    {
        this.view.hide();
        this.onHide();
        let loader = new Loader();
        loader.hide();
    }

    onHide(){
        this.view.changeData({title: 0, menus: []});
    }

    show()
    {
        let loader = new Loader();
        loader.show();
        this.onShow();
        loader.hide();
        this.view.show();
        this.showToDo()
    }

    goBackHandler()
    {

    }
}

export default AdminController;
