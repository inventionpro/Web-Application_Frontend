import * as Blockly from 'blockly/core';
import Swal from 'sweetalert2';

const isMobile = function () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

Blockly.dialog.setPrompt((msg, defaultValue, callback) => {
  if (isMobile()) {
    callback(prompt(msg, defaultValue));
    return;
  }
  Swal.fire({
    theme: 'auto',
    title: msg,
    input: 'text',
    inputValue: defaultValue,
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Confirm',
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.value) {
      callback(result.value);
    }
  });
});
