document.getElementById('v65-onepage-shipaddr1')
  .addEventListener('input', function killPObox(e) {
    if (e.target.id === 'v65-onepage-shipaddr1') {
      var targetValue = e.target.value;
      if (targetValue.substr(0, 4).toUpperCase() === "PO B" || targetValue.substr(0, 6) === "P.O. B" || targetValue.substr(0, 6) === "p.o. b" || targetValue.substr(0, 6) === "po-box" || targetValue.substr(0, 11) === "P.O. Box " + (/[0-9]+/) || targetValue.substr(0, 12) === "P.O. Box " + (/[0-9]+/)) {
        alert("USA Light cannot ship to P.O. Boxes. Please enter a street address.");
        e.target.value = "";
      }
    }
  }, true);