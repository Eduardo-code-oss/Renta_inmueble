
function ObtenerDatos() {
    let url = `https://sh-javascript.herokuapp.com/api/user/findbyID/601db9c4c6e06400154c17b4`;

    const api = new XMLHttpRequest ();
    api.open('GET',url,TRUE);
    api.send();

    api.onreadystatechange = function(){
        if (this.status == 200 && this.readyState == 4) {
            console.log();
        };
    } ;
    

};