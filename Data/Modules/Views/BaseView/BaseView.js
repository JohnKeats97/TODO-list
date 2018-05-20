"use strict";
import Widget from "../../Blocks/Widget.js";

class BaseView extends Widget
{
    constructor(parent = document.body, templateFunc = undefined, data = {}, viewContainerClass = "baseView")
    {
        super(parent, "div", viewContainerClass);
        if(templateFunc !== undefined)
            this.templateFunc = templateFunc;
        else
            throw {message: "Invalid templateFunc"};

        this.element.innerHTML = templateFunc(data);

        this.hide();
    }

    changeData(newData)
    {
        this.element.innerHTML = this.templateFunc(newData);
    }
}

export default BaseView;
