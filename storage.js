let db = {
    get: (key) => {
        let data = window.localStorage.getItem(key);
        if (!data) return null;

        return JSON.parse(data);
    },
    set: (key, data) => {
        window.localStorage.setItem(key, JSON.stringify(data));
            return data;
    },
    getById: (key, id) => {
        let data = window.localStorage.getItem(key);
        if (!data) return null;

        return JSON.parse(data || "[]").find(el => el.id == id);
    },
    create: (key, obj) => {
        let data = window.localStorage.getItem(key);
        if (!data) data = [];

        data.push(obj);
        window.localStorage.setItem(key, JSON.stringify(data));
        return obj;
    },
    update: (key, obj) => {
        let data = window.localStorage.getItem(key);
        data = (data || []).map(it => {
            if (it.id == obj.id) return obj;
            return it;
        })
        window.localStorage.setItem(key, JSON.stringify(data));
        return obj;
    },
    remove: (key, obj) => {
        let data = window.localStorage.getItem(key);
        data = (data || []).filter(it => it.id != obj.id);
        window.localStorage.setItem(key, JSON.stringify(data));
        return obj;
    }
}
