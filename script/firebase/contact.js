document.querySelector("input[value='Send']").addEventListener("click", (e) => {
  e.preventDefault();
  let nameContact = document.querySelector("#name-contact").value;
  let emailContact = document.querySelector("#email-contact").value;
  let messengeContact = document.querySelector(
    "textarea[placeholder='Your Messenge']"
  ).value;
  if (nameContact == "" || emailContact == "" || messengeContact == "") {
    alert("Don't leave it blank !");
  } else {
    db.collection("Messenger").add({
      Fullname: nameContact,
      Email: emailContact,
      Message: messengeContact,
    });
    alert("Success !");
  }
});
