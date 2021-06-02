// insertion of a html file using javascript
// without templates
var name="saivivek";
var school="oxford high school";
var team="basket";
var html;
html='<ul><li>firstname:  name </li><li>schoolname:  school  </li><li>teamname:  team </li></ul>';
document.body.innerHTML=html;
// with templates
html=<ul>
    <li>name:${2+2}</li>
    <li></li>
    <li></li>
    <li></li>
</ul>;