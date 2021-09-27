$(() => {
    const aDict = {};
  
    $('input').change(() => {
      for (const idx of $('input')) {
        if (idx.checked) aDict[idx.dataset.name] = idx.dataset.id;
        else delete aDict[idx.dataset.name];
      }
      $('.amenities h4').html(Object.keys(aDict).join(', '));
    });
});
  
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, status) {
    console.log(data);
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
});
