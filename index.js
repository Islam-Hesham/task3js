var link_name = document.getElementById("LinkName");
var link_url = document.getElementById("LinkURL");
var tablerow = document.getElementById("tableRow");

 var linkarr=[]
function addlink() {
var linkobj={
    link_nameObj: link_name.value,
    link_urlObj: link_url.value

}
    
linkarr.push(linkobj);
display()
}
function display() {
    var box = "";
    for (var index = 0; index < linkarr.length; index++) {
        box += `
        
        <tr>
           
            <td>${linkarr[index].link_nameObj}</td>
            
           
            <td> <button class="btn btn-outline-danger"> delet</button> </td>
            <td>  <a class="btn btn-outline-info" href="${linkarr[index].link_urlObj}"> Visit</a></td>
          </tr>
       
       `

    }

    tablerow.innerHTML = box;
}