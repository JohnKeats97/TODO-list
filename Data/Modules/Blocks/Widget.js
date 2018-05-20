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
        for(let i = 0; i < this.element.childNodes.length; i++) {
            if(this.element.childNodes[i].nodeType === Node.ELEMENT_NODE) {
                this.element.childNodes[i].style.visibility = "visible";
            }
        }
        this.element.style.visibility = "visible";

        this.onShow();
    }

    hide()
    {
        for(let i = 0; i < this.element.childNodes.length; i++) {
            if(this.element.childNodes[i].nodeType === Node.ELEMENT_NODE) {
                this.element.childNodes[i].style.visibility = "hidden";
            }
        }
        this.element.style.visibility = "hidden";

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
