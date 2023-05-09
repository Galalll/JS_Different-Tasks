//data
function Budget() {
  var totalIncome = 0;
  var totalExp = 0;
  var budget = 0;
  var idInc = 0;
  var idExp = 0;
  var IPercent = [];
  var EPercent = [];
  var inc = [];
  var exp = [];
  function UserInput(type, desc, value) {
    this.type = type;
    this.desc = desc;
    this.value = value;
  }

  //UI
  var addBtn = document.querySelector(".add__btn");
  var avalBudg = document.querySelector(".budget__value");
  var Income = document.querySelector(".budget__income--value");
  var Expense = document.querySelector(".budget__expenses--value");
  var d = document.querySelector(".add__type");
  var descrip = document.querySelector(".add__description");
  var ivalue = document.querySelector(".add__value");
  var TotalIncomePer = document.querySelector(".budget__income--percentage");
  var TotalExpPer = document.querySelector(".budget__expenses--percentage");
  var removebtn;
  function Clear() {
    avalBudg.textContent = 0;
    Income.textContent = 0;
    Expense.textContent = 0;
  }

  descrip.focus();

  function U() {
    if (descrip.value == "" || ivalue.value <= 0 || ivalue.value == "") {
      alert("Please enter Valid values!");
    } else {
      if (d.value == "inc") {
        inc[idInc] = ivalue.value;
        totalIncome += Number(inc[idInc]);
        budget += Number(inc[idInc]);
        IPercent[idInc] = Math.ceil((Number(inc[idInc]) / budget) * 100);
        TotalIncomePer.textContent =
          " " + Math.ceil((totalIncome / budget) * 100) + "%";
        avalBudg.textContent = budget;
        Income.textContent = totalIncome;
        document
          .querySelector(".income__list")
          .insertAdjacentHTML(
            "beforeend",
            '<div class="item clearfix" id="income-' +
              idInc +
              '">' +
              '<div class="item__description">' +
              descrip.value +
              "</div>" +
              '<div class="right clearfix">' +
              '<div class="item__value">' +
              ivalue.value +
              "</div>" +
              '<div class="item__percentage">' +
              IPercent[idInc] +
              "%</div>" +
              '<div class="item__delete">' +
              '<button class="item__delete--btn">' +
              '<i class="ion-ios-close-outline"></i>' +
              "</button>" +
              "</div>" +
              "</div>" +
              "</div>"
          );

        idInc++;
        descrip.value = "";
        ivalue.value = "";
        descrip.focus();
      } else if (d.value == "exp") {
        exp[idExp] = ivalue.value;
        totalExp += Number(exp[idExp]);
        budget -= Number(exp[idExp]);
        EPercent[idExp] = Math.floor((Number(exp[idExp]) / budget) * 100);
        TotalExpPer.textContent =
          " " + Math.ceil((totalExp / budget) * 100) + "%";
        avalBudg.textContent = budget;
        Expense.textContent = totalExp;
        document
          .querySelector(".expenses__list")
          .insertAdjacentHTML(
            "beforeend",
            '<div class="item clearfix" id="expense-' +
              idExp +
              '">' +
              '<div class="item__description">' +
              descrip.value +
              "</div>" +
              '<div class="right clearfix">' +
              '<div class="item__value">- ' +
              ivalue.value +
              "</div>" +
              '<div class="item__percentage">' +
              EPercent[idExp] +
              "%</div>" +
              '<div class="item__delete">' +
              '<button class="item__delete--btn">' +
              '<i class="ion-ios-close-outline"></i>' +
              "</button>" +
              "</div>" +
              "</div>" +
              "</div>"
          );
        descrip.value = "";
        ivalue.value = "";
        descrip.focus();
        idExp++;
      }
    }
  }

  function HandelEnter(event) {
    if (event.key === "Enter") {
      U();
    }
  }

  Clear();

  addBtn.addEventListener("click", U);

  document.addEventListener("keypress", HandelEnter);
  document.querySelector("body").addEventListener("click", function (e) {
    if (e.target.classList.value === "ion-ios-close-outline") {
      var containerElement =
        e.target.parentElement.parentElement.parentElement.parentElement;
      e.target.parentElement.parentElement.parentElement.parentElement.replaceWith(
        ""
      );
      var type = containerElement.id.split("-")[0];
      var id = containerElement.id.split("-")[1];
      if (type == "income") {
        totalIncome -= Number(inc[id]);
        budget -= Number(inc[id]);
      }
      if (type == "expense") {
        totalExp -= Number(exp[id]);
        budget += Number(exp[id]);
      }
      avalBudg.textContent = budget;
      Expense.textContent = totalExp;
      Income.textContent = totalIncome;
    }
  });
}
Budget();
