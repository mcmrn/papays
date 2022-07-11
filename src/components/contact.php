<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require("../../rest/PHPMailer/Exception.php");
require("../../rest/PHPMailer/SMTP.php");
require("../../rest/PHPMailer/PHPMailer.php");

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $mail = new PHPMailer(true);

  try {
    $mail->isSMTP();
    $mail->Host       = 'smtp-relay.sendinblue.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'notbaked10@gmail.com';
    $mail->Password   = '092400Ryan';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 587;

    $mail->setFrom('info@papaysgrill.com', 'Email from Papays');
    $mail->addAddress('notbaked10@gmail.com',);


    $mail->isHTML(true);
    $mail->Subject = 'Email from Papays';
    $mail->Body    = '
    <div
  style="
    position: relative;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 100%;
  "
>
  <div
    style="
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      /* text-align: center; */
      /* margin: 0 auto; */
    "
  >
    <div style="border-bottom: 2px solid #d6d6d6; padding: 30px 50px">
      <div>
        <div style="position: relative; text-align: center">
          Papays
        </div>
        <div>
          <h3
            style="
              text-align: center;
              margin-bottom: 45px;
              font-size: 25px;
              color: #3b3b3b;
            "
          >
            Email from Papays
          </h3>
          <p style="font-size: 14px">
            Hi from
            <strong>' . $name . '</strong>,
          </p>
          <p style="font-size: 14px">Contact Number: ' . $phone . '</p>
          <p style="font-size: 14px; margin-bottom: 50px">
            Email: ' . $email . '
          </p>
          <p style="font-size: 14px">' . $message . '</p>
        </div>
      </div>
    </div>
    <div style="text-align: center; color: #707070; padding: 15px">
      <div style="font-size: 11px">
        <p>&copy; 2022 Papays, ALL RIGHTS RESERVED</p>
        <p>
        Unit 7 Purok 4 Masapang, Victoria, Laguna
        </p>
      </div>
      
    </div>
  </div>
</div>

';

    $mail->send();
    echo "<script>alert('Message has been sent')</script>";
  } catch (Exception $e) {
    echo "<script>alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}'</script>";
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Papay's Smoke Grill and Cafe</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
  <link rel="stylesheet" href="../css/style.css" />
</head>

<body>
  <section class="container">
    <div class="">
      <div class="banner__header">
        <div class="banner__logo">
          <h1>PAPAY'S</h1>
        </div>
        <div class="banner__nav">
          <nav>
            <ul>
              <li>
                <a class="" href="index.html">Home</a>
              </li>
              <li>
                <div class="banner__dropdown">
                  <a href="#">Menu <i class="fa-solid fa-angle-down"></i></a>
                  <div class="dropdown--content">
                    <a href="appetizer.html">Papay's Appetizer</a>
                    <a href="alacarte.html">Papay's Ala Carte</a>
                    <a href="burger.html">Papay's Burger</a>
                  </div>
                </div>
              </li>
              <li>
                <a class="active--nav" href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="banner__cart">
          <a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
      </div>
      <div class="banner__img">
        <img src="../../public/img/burgirs 1.png" alt="" />
      </div>
    </div>
    <div class="contact">
      <div class="rating__heading">
        <h2>Contact Us</h2>
        <p>Have any question? We'd love to hear from you.</p>
      </div>
      <div class="rating__rate">
        <div class="rating__form">
          <form action="">
            <div class="rating__label"></div>
            <div class="rating__inputs">
              <div class="inputs__wrapper">
                <input name="name" type="text" placeholder="Name " />
              </div>
              <div class="inputs__wrapper">
                <input name="email" type="text" placeholder="Email " />
              </div>
              <div class="inputs__wrapper">
                <input name="phone" type="text" placeholder="Contact " />
              </div>
              <div class="inputs__wrapper">
                <textarea name="message" id="" placeholder="Your concern"></textarea>
              </div>
            </div>
            <div class="rating__btn">
              <button type="submit" name="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="info__contact">
        <div class="info__name">
          <h3>Papay's Smoke Grill and Cafe</h3>
        </div>
        <div class="info__number">
          <i class="fa-solid fa-phone"></i>
          <p>0906-950-0124</p>
        </div>
        <div class="info__email">
          <i class="fa-solid fa-envelope"></i>
          <p>iqbalabdur07@gmail.com</p>
        </div>
        <div class="info__address">
          <i class="fa-solid fa-location-dot"></i>
          <p>Unit 7 Purok 4 Masapang, Victoria, Laguna</p>
        </div>
        <div class="info__social">
          <div class="social__icon">
            <a href="https://www.facebook.com/PapaysSmokeGrillandCafe"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.messenger.com/t/102000845465861"><i class="fa-brands fa-facebook-messenger"></i></a>
            <a href=" https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D639069500124%26app%3Dfacebook%26entry_point%3Dpage_cta%26fbclid%3DIwAR2pR0_n9sbLmW7UjKxvX9cw-SL_qBzvO0ZfPkBQGHhafbvOKVt6zUDlWD4&h=AT3m-d7uIop7pUdKWqtSrL70e07tmMrb3Q0NVbtavBWg6UNWoRStJP0gOjJ7uMnNW6B4mewDNpgAHq7M9k9BvONMmg4CpL7qCNHLuyAmpP5GVNkIM8WEK5j0I8CMXwy88Pd75tuOi_TfH5NVbWvR9Q"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        <div class="banner__nav">
          <nav>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="appetizer.html">Menu</a>
              </li>
              <li>
                <a href="contact.php">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <p>&copy 2022 Papay's Smoke Grill and Cafe</p>
    </footer>
  </section>
  <script src="../js/main.js"></script>

</body>

</html>