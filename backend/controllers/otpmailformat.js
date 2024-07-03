import otpGenerator from "otp-generator";
let otp;

function generateOTP() {
  const OTP_CONFIG = {
    digits: true,
    upperCaseAlphabets: true,
    specialChars: false,
  };
  otp = otpGenerator.generate(6, OTP_CONFIG);
  return otp;
}

function mailFormat() {
  const format = `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Blog Application</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for choosing blog application. Use the following OTP to complete your Sign Up procedures.</p>
      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
      <p style="font-size:0.9em;">Regards,<br />Blog Application</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Your Brand Inc</p>
        <p>1600 Amphitheatre Parkway</p>
        <p>California</p>
      </div>
    </div>
  </div>`;
  return format;
}

export { mailFormat, generateOTP };
