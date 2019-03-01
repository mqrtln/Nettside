function myFunction() {

    if (typeof (Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        var resultatLink = document.getElementById("linkValue").value;
        var resultatTekst = document.getElementById("textValue").value;

        resultatLink += " ";

 
        var x = document.createElement("a"); 
        x.setAttribute("href", resultatLink);
        x.innerHTML = resultatLink;
        //var node = document.createTextNode(resultatLink);
        document.body.appendChild(x);

        console.log(x.href);    

        var textnode = document.createTextNode(resultatTekst);
        document.body.appendChild(textnode);

        var br = document.createElement("br");
        document.body.appendChild(br);

    } else {
        // Sorry! No Web Storage support..
    }

}