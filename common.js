
const STORAGE_KEY="business_documents";
const empNo = "210";

function getDocId() {
    const params = new URLSearchParams(location.search);
    return params.get("docId");
}

function getDocuments(){
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

function saveDocuments(data){
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}

function onlyNumber(el) {
    el.value = el.value.replace(/\D/g, '');
}
