"use strict";

import Services from "../Services.js";
import MessageBox from "../Blocks/MessageBox/MessageBox.js";
import Loader from "../Views/LoaderView/LoaderView.js";

class AdminController
{
    constructor(view)
    {
        this.view = view;
    }

    showAddSetting()
    {
        this.view.changeData({title: 1, menus: []});
        this.buttonListener();
        let addButton = document.querySelectorAll(".button-AddTest")[0];
        addButton.addEventListener('click', function ()
        {
            let name = document.querySelectorAll(".name-AddTest")[0];
            let text = document.querySelectorAll(".text-AddTest")[0];
            let answer = document.querySelectorAll(".answer-AddTest")[0];
            name = name.value.toString().trim();
            text = text.value.toString().trim();
            answer = answer.value.toString().trim();
            if (name && text && answer) {
                let loader = new Loader();
                loader.show();
                Services.addTestAdmin(name, text, answer)
                    .then(() => {
                        loader.hide();
                        new MessageBox("Задание добавлено");
                    })
                    .catch(error => {
                        loader.hide();
                        new MessageBox("Невозможно добавить задание");
                    });
            }
        });
    }

    showChangeDeleteSettings() {
        let loader = new Loader();
        loader.show();
        Services.getTestAdmin()
            .then(function(result)
            {
                loader.hide();
                result = result.reverse();
                this.view.changeData({title: 2, menus: result});
                this.buttonListener();

                let deleteButtons = document.querySelectorAll(".adminForm__button-delete");
                deleteButtons.forEach((item) =>
                {
                    item.addEventListener('click', ()=>{
                        let id = item.dataset.id;
                        let test = document.getElementById(id);
                        if (test) {
                            let loader = new Loader();
                            loader.show();
                            Services.deleteTestAdmin(id)
                                .then((result) => {
                                    loader.hide();
                                    test.remove();
                                })
                                .catch(error => {
                                    loader.hide();
                                    new MessageBox("Невозможно удалить задание");
                                });
                        }

                    });
                });

                let changeButtons = document.querySelectorAll(".adminForm__button-change");
                changeButtons.forEach((item) =>
                {
                    item.addEventListener('click', ()=>{
                        let id = item.dataset.id;
                        let test = document.getElementById(id);
                        if (test) {
                            let name = test.childNodes[0].value;
                            let text = test.childNodes[1].value;
                            let answer = test.childNodes[2].value;
                            name = name.toString().trim();
                            text = text.toString().trim();
                            answer = answer.toString().trim();
                            if (name && text && answer) {
                                let loader = new Loader();
                                loader.show();
                                Services.changeTestAdmin(id, name, text, answer)
                                    .then((result) => {
                                        loader.hide();
                                        new MessageBox("Изменения сохранены");
                                    })
                                    .catch(error => {
                                        loader.hide();
                                        new MessageBox("Невозможно изменить задание");
                                    });
                            }
                        }
                    });
                });
            }.bind(this))
            .catch(() =>
            {
                loader.hide();
                new MessageBox("Ошибка соединения");
            });
    }


    showTimeSettings() {
        let loader = new Loader();
        loader.show();
        Services.getTestAdmin()
            .then(function(result)
            {
                loader.hide();
                result = result.reverse();
                this.view.changeData({title: 2, menus: result});
                this.buttonListener();

                let deleteButtons = document.querySelectorAll(".adminForm__button-delete");
                deleteButtons.forEach((item) =>
                {
                    item.addEventListener('click', ()=>{
                        let id = item.dataset.id;
                        let test = document.getElementById(id);
                        if (test) {
                            let loader = new Loader();
                            loader.show();
                            Services.deleteTestAdmin(id)
                                .then((result) => {
                                    loader.hide();
                                    test.remove();
                                })
                                .catch(error => {
                                    loader.hide();
                                    new MessageBox("Невозможно удалить задание");
                                });
                        }

                    });
                });

                let changeButtons = document.querySelectorAll(".adminForm__button-change");
                changeButtons.forEach((item) =>
                {
                    item.addEventListener('click', ()=>{
                        let id = item.dataset.id;
                        let test = document.getElementById(id);
                        if (test) {
                            let name = test.childNodes[0].value;
                            let text = test.childNodes[1].value;
                            let answer = test.childNodes[2].value;
                            name = name.toString().trim();
                            text = text.toString().trim();
                            answer = answer.toString().trim();
                            if (name && text && answer) {
                                let loader = new Loader();
                                loader.show();
                                Services.changeTestAdmin(id, name, text, answer)
                                    .then((result) => {
                                        loader.hide();
                                        new MessageBox("Изменения сохранены");
                                    })
                                    .catch(error => {
                                        loader.hide();
                                        new MessageBox("Невозможно изменить задание");
                                    });
                            }
                        }
                    });
                });
            }.bind(this))
            .catch(() =>
            {
                loader.hide();
                new MessageBox("Ошибка соединения");
            });
    }

    onShow()
    {
        this.view.changeData({title: 0, menus: []});
        this.buttonListener();
    }

    buttonListener() {
        let addTest = document.querySelectorAll(".button-add")[0];
        addTest.addEventListener('click', function () {
            this.showAddSetting();
        }.bind(this));
        let changeDeleteTest = document.querySelectorAll(".button-all")[0];
        changeDeleteTest.addEventListener('click', function () {this.showChangeDeleteSettings()}.bind(this));
        let changeTimeTest = document.querySelectorAll(".button-active")[0];
        changeTimeTest.addEventListener('click', function () {this.showTimeSettings()}.bind(this));
        let changeTimeTest2 = document.querySelectorAll(".button-completed")[0];
        changeTimeTest2.addEventListener('click', function () {this.showTimeSettings()}.bind(this));
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
        this.showChangeDeleteSettings()
    }

    goBackHandler()
    {

    }
}

export default AdminController;
