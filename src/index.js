import "./styles.css";
import "playerx";

document.getElementById("app").innerHTML = `
<h1>Hello Player X!</h1>
<div>
  It's as simple as that, find out more info at <a href="https://dev.playerx.io">dev.playerx.io</a>
</div>
<br> 
<player-x src="https://vimeo.com/357274789" controls></player-x>
`;
