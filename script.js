/*change teh welcome to different languages*/
const welcomeText = document.getElementById('welcome-text');
const messages = ['¡Hola!', 'Olá!', 'Xin chào!', 'Bonjou!','Hello!'];
let index = 0;

/*setInterval(() => {
  welcomeText.textContent = messages[index];
  index = (index + 1) % messages.length;
}, 3000);*/
/*******************************************/

/*****************menu control*****************/
var navLinks = document.getElementById("navLinks");

function showMenu()
{
    navLinks.style.right = "0";
}

function hideMenu()
{
    navLinks.style.right = "-200px";
}


/*get language and redirect to the proper sign up document*/
// Get a reference to the button element
const btn = document.querySelector('.eng-btn');

// Add a click event listener to the button
btn.addEventListener('click', function() {
  // Call your function here
  getLanguage();
});

function readCookie(name) {
    var c = document.cookie.split('; '),
    cookies = {}, i, C;
    for (i = c.length - 1; i >= 0; i--) {
        C = c[i].split('=');
        cookies[C[0]] = C[1];
    }

    return cookies[name];
}

function getLanguage() {

    var languageCode = readCookie('googtrans');
    var formLink;

    console.log("this is " + languageCode)
    if (languageCode === undefined) {
        console.log("hi")
        formLink = 'https://youtube.com'
    } else if (languageCode.endsWith('pt')) {
        console.log("hey");
    } else if (languageCode.endsWith('vi')) {
        console.log("ho");
    } else if (languageCode.endsWith('ht')) {
        console.log("he");
    } else if (languageCode.endsWith('es')) {
        console.log("hi")
        formLink = 'https://twitch.com'
    }
    window.open(formLink, '_blank');

}

/*scroll page down home page button*/
function scrollToSection() {
    const section = document.getElementById("section-service");
        const offset = 50; // subtract 50 pixels from the final position
        let position = section.getBoundingClientRect().top + window.pageYOffset - offset;
        
        // Adjust position for smaller screens
        if (window.innerWidth < 720) {
          position -= 150; // subtract an additional 100 pixels from the final position
        }
        
        window.scrollTo({top: position, behavior: "smooth"});
}


/*Contact US*/
function sendEmail()
        {

            var department = document.getElementById("department").value;

            // Assign the recipient email based on the selected department
            var recipientEmail;
            if (department === "ESL Classes") {
                recipientEmail = 'tonyiilawrence@gmail.com';
            } else if (department === "Immigration Assistance") {
                recipientEmail = 'brilexw@gmail.com';
            } else if (department === "Child Care Services") {
                recipientEmail = 'brilexw6@gmail.com';
            }

             // Define the HTML and CSS styles for the email body
             var emailButton = '<p style="text-align: center; margin-top: 20px;"><button style="font-size: 18px; font-weight: 600; padding: 12px 24px; background-color: #fff; color: #41644A; border-radius: 5px; border: none;">Reply to ' + document.getElementById("email").value + '</button></p>';

             var emailBody = '<table style="font-family: Arial, Helvetica, sans-serif; background: #41644A; padding: 2vw 4vw; border-radius: 10px;" cellpadding="0" cellspacing="0">';
             emailBody += '<tr><td style="text-align: center; color: #fff; font-size: 22px; font-weight: 800; margin-bottom: 20px;"><h2>Contact Us Request Form</h2></td></tr>';
             emailBody += '<tr><td style="text-align: center; color: #fff; font-size: 18px; font-weight: 800; margin-bottom: 20px;"><strong>Department:</strong> ' + department + '</td></tr>';
             emailBody += '<tr><td style="text-align: center; color: #fff; font-size: 18px; font-weight: 800; margin-bottom: 30px;"><strong>Name:</strong> ' + document.getElementById("name").value + '</td></tr>';
             emailBody += '<tr><td style="text-align: center; color: #fff; font-size: 18px; font-weight: 800; margin-bottom: 30px; padding-bottom: 20px;"><strong>Phone:</strong> ' + document.getElementById("phone").value + '</td></tr>';
             emailBody += '<tr><td style="text-align: center; color: #fff; font-size: 18px; font-weight: 800; margin-bottom: 10px;"><strong>Message:</strong></td></tr>';
             emailBody += '<tr><td style="text-align: center; color: #fff; font-size: 18px; font-weight: 800; margin-bottom: 30px; padding-top: 20px; padding-bottom: 20px;">' + document.getElementById("message").value + '</td></tr>';
             emailBody += '<tr><td style="text-align: center; color: #fff; font-size: 18px; font-weight: 800; margin-bottom: 10px;"><strong>Please Reply Directly To This Email:</strong></td></tr>';
             emailBody += '<tr><td style="text-align: center; padding-top: 10px; padding-bottom: 20px;">' + emailButton + '</td></tr>';
             emailBody += '</table>';
             
             
             
             

             


            Email.send({
                SecureToken : "7186048f-83c3-45bf-a485-1652687df746",
                To : recipientEmail,
                ReplyTo : document.getElementById("email").value,
                From : 'brilexw6@gmail.com',
                Subject : "New Test Email Contact Us",
                Body : emailBody
                        /*
                        "Name: " + document.getElementById("name").value
                        + "<br> Phone Number: " + document.getElementById("phone").value
                        + "<br> Message: " + document.getElementById("message").value
                        + "<br> Please reply directly to: " + document.getElementById("email").value
                        */
            }).then(
            message => alert("Thank you for your message")
            );

        }