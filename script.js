// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const username = document.querySelector('#username');
const successMessage = document.querySelector(".success-message");
const failureMessage = document.querySelector(".failure-message");
const password = document.querySelector("#password");
const passwordRetype = document.querySelector("#password-retype");
const mismatchMessage = document.querySelector(".mismatch-message");
const validatorMessage = document.querySelector(".validator-message");
const signup = document.querySelector(".signup");
const signMessage = document.querySelector(".sign-message");

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >=4;
}
username.onkeyup = function(){
  if(onlyNumberAndEnglish(username.value)){
    validatorMessage.classList.add('hide');
    successMessage.classList.remove('hide')
  }
  else{
    successMessage.classList.add('hide');
    validatorMessage.classList.remove('hide')
  }

}
passwordRetype.onkeyup = function passwordMatch(){
  if(isMatch(password.value,passwordRetype.value)){
    mismatchMessage.classList.add('hide');
  }else{
    mismatchMessage.classList.remove('hide');
  }
}
function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  if(password1 === password2)
    return true;
  else if(password1 !== password2){
    return false;
  }
}

signup.onclick = function passwordCheck(){
  if(!username.value || !password.value || !passwordRetype.value){
    signMessage.classList.remove('hide');
  }else if(username.value && password.value && passwordRetype.value){
    signMessage.classList.add('hide');

    if(!strongPassword(password.value) && !strongPassword(passwordRetype.value)){
      alert("비밀번호는 최소 8자 이상하면서, 알파벳과 숫자 및 특수문자(@$!%*#?&)는 하나 이상 포함해야 합니다.");
      password.value = '';
      passwordRetype.value = '';
    }else{
      alert("회원가입 완료");
      username.value = '';
      password.value = '';
      passwordRetype.value = '';
    }
  }

}