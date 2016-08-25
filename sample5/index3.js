class List {
    constructor(data) {
        this._data = data;
    }

    sortData() {
        this._data = this._data.sort((a, b)=> {
            return a - b;
        });
    }

    createList(obj) {
        this._createListHeaders();

        this._createChildren();

        this._addToObject(obj);
    }

    _createListHeaders() {
        this._list = document.createElement('ul');
    }

    _createChildren() {
        for (let i = 0, len = this._data.length; i < len; i++) {
            let li = document.createElement('li');
            li.innerHTML = "Step" + this._data[i];
            li.style.color = "#cc" + (i * 1000);

            this._list.appendChild(li);
        }
    }

    _addToObject(obj) {
        obj.innerHTML = "";
        obj.appendChild(this._list);
    }
}