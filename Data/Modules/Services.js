'use strict';


class Services
{

    static add(name, text, comment = "")
    {
        let all = localStorage["all"];
        if(!all)
            all = JSON.stringify({all:[], newId: 0});
        all = JSON.parse(all);
        let add = {
            id: all.newId,
            name: name,
            text:text,
            comment: comment,
            completed: false
        };
        all.all.push(add);
        all.newId += 1;
        localStorage["all"] =JSON.stringify(all);
    }

    static delete(id)
    {
        let all = localStorage["all"];
        if(!all)
            all = JSON.stringify({all:[], newId: 0});
        all = JSON.parse(all);
        let all_tasks = all.all;
        let index = -1;
        for (let i = 0; i<all_tasks.length; i++) {
            if (all_tasks[i].id == id) {
                index = i;
                break;
            }
        }
        all_tasks.splice(index,1);
        all.all = all_tasks;
        localStorage["all"] =JSON.stringify(all);
    }

    static change(id, name, text, completed, comment = "")
    {
        let all = localStorage["all"];
        if(!all)
            all = JSON.stringify({all:[], newId: 0});
        all = JSON.parse(all);
        let all_tasks = all.all;
        let index = -1;
        for (let i = 0; i<all_tasks.length; i++) {
            if (all_tasks[i].id == id) {
                index = i;
                break;
            }
        }
        all_tasks[index] = {
            id: id,
            name: name,
            text:text,
            comment: comment,
            completed: completed
        };
        all.all = all_tasks;
        localStorage["all"] =JSON.stringify(all);
    }

    static get()
    {
        let all = localStorage["all"];
        if(!all)
            all = JSON.stringify({all:[], newId: 0});
        all = JSON.parse(all);
        return all.all;
    }

}

export default Services;
