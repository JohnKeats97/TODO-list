class Widget
{
    constructor(parent = document.body, tag = "div", className = "", existingElem = null)
    {
        if(existingElem)
            this.element = existingElem;
        else
        {
            this.element = document.createElement(tag);
            this.element.className = className;
            parent.appendChild(this.element);
        }
    }

    show()
    {
        this.onShow();
    }

    hide()
    {
        this.onHide();
    }

    onShow()
    {
    }

    onHide()
    {
    }

}

export default Widget;
