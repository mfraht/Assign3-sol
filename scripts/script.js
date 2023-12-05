class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header> 
            <nav>
                <a href="../index.html"><img src="../images/logo.png" alt="Delilah's Doggy Daycare logo" /></a>
            </nav>
        <h1>Delilah's Doggy Daycare</h1>
        </header>
        `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <p>Dog icons created by Freepik - Flaticon</p>
        <p>Photo by Karsten Winegeart on unsplash</p>
    </footer>`;
  }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);

function addClickListener(buttonId) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.addEventListener("click", function () {
      if (buttonId == "full") {
        document.getElementById("full").style.backgroundColor = "GoldenRod";
        document.getElementById("half").style.backgroundColor = "white";
      } else if (buttonId == "half") {
        document.getElementById("half").style.backgroundColor = "GoldenRod";
        document.getElementById("full").style.backgroundColor = "white";
      } else {
        if (button.style.backgroundColor != "goldenrod") {
          button.style.backgroundColor = "GoldenRod";
        } else {
          button.style.backgroundColor = "white";
        }
      }
      calculateCost();
    });
    
  }
  
}

addClickListener("monDay");
addClickListener("tueDay");
addClickListener("wedDay");
addClickListener("thuDay");
addClickListener("friDay");
addClickListener("full");
addClickListener("half");

function clearDays() {
  allSelections = document.getElementsByTagName("h3");
  for (i = 0; i < allSelections.length - 1; i++) {
    allSelections[i].style.backgroundColor = "white";
  }
  document.getElementById("full").style.backgroundColor = "GoldenRod";
  document.getElementById("half").style.backgroundColor = "white"
  calculateCost();
}

function calculateCost() {
  daysSelected = document.querySelectorAll("#monDay, #tueDay, #wedDay, #thuDay, #friDay");
  let totalDays = 0;
  for (i = 0; i < daysSelected.length; i++) {
    if (daysSelected[i].style.backgroundColor == "goldenrod") {
      totalDays += 1;
    }
  }

  var durationCost = 40;
  durationSelected = document.getElementById("half");
  if (durationSelected.style.backgroundColor == "goldenrod") {
    durationCost = 20;
  }
  totalCost = totalDays * durationCost;

  totalWeeklyCost = document.getElementById("weekly-cost");
  totalWeeklyCost.innerHTML = totalCost;
}
