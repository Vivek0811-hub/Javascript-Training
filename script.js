
document.getElementById('btnSubmit').addEventListener('click',submit);
document.getElementById('btnReset').addEventListener('click',reset);

function submit() {

  var textAge,Name,Age,textName;
  Name = (document.getElementById('firstName').value);
  Age = (document.getElementById('age').value);
  var namePattern=/[a-z]/;
  var nameValidation=namePattern.test(Name);
  if(nameValidation)
  {
    if(Name.length > 5)
    {
      textName="Name Limit is 5 Letter Only";
    }
    else
    {
      textName="Valid";
    }
  }
  else
  {
    textName="Please enter correct input";
  }
  var agePattern=/[0-9]/;
  var ageValidation=agePattern.test(Age);
  if(ageValidation)
  {
    if(Age > 12)
    {
      textAge="valid";
    }
    else
    {
      textAge="Age should be above 18";
    }
  }
  else
  {
    textAge="Please enter correct input";
  }
    document.getElementById('firstPara').innerHTML = textName;
    document.getElementById('para').innerHTML = textAge;
}
function reset(){
  document.location.reload();
}