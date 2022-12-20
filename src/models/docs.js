// Bring and return code from backend

const docsModel = {
    baseUrl: window.location.href.includes("localhost") ?
        "http://localhost:1337" :
        "https://jsramverk-editor-toss.azurewebsites.net",

    getAllDocs: async function getAllDocs() {
        const response = await fetch(`${docsModel.baseUrl}/texteditor`);
        const result = await response.json();
        
        return result.data;
    },

    updateDoc: async function updateDoc(doc) {
        const response = await fetch(`${docsModel.baseUrl}/update`, {
            body: JSON.stringify(doc),
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST'
        })
        const result = await response.json();

        console.log("Update Result", result);
    },

    saveDoc: async function saveDoc(doc) {
        const response = await fetch(`${docsModel.baseUrl}/add`, {
            body: JSON.stringify(doc),
            headers: {
                'content-type': 'application/json',
            },
            method: 'POST'
        })
        const result = await response.json();

        console.log("Save Result", result);

    }
};

export default docsModel;
