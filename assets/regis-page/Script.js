
  function onlyNumber(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
          if (ASCIICode === 43)
              return true;
          else if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
              return false;
          else
              return true;
  }

  function clearForms()
{
    $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
    $(':checkbox, :radio').prop('checked', false);
    $('select').prop('selectedIndex', 0);
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
