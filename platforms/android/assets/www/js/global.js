Storage.prototype.setObject = function(key, value) { this.setItem(key, JSON.stringify(value)); }
Storage.prototype.getObject = function(key) { var value = this.getItem(key);return value && JSON.parse(value); }

function getItem(item, item_id){
    var result;
    $.getJSON(
        "http://secret-ocean-2820.herokuapp.com/api/"+item+"/"+item_id
    )
    .done(function(data){
        result = data;
        localStorage.setObject(item, result);
    });
    return result;
};

function setData(item, data){
    localStorage.setObject(item, data);
}