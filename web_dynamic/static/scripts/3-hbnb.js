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
  
  const dObj = {};
  
  $.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    contentType: 'application/json',
    data: JSON.stringify(dObj),
    success: function (data) {
      let foo = '';
  
      for (const place of data) {
        foo += `<article>
        <div class="title">
          <h2>${place.name}</h2>
          <div class="price_by_night">
      ${place.price_by_night}
          </div>
        </div>
        <div class="information">
          <div class="max_guest">
      <i class="fa fa-users fa-3x" aria-hidden="true"></i>
      <br />
      ${place.max_guest} Guests
          </div>
          <div class="number_rooms">
      <i class="fa fa-bed fa-3x" aria-hidden="true"></i>
      <br />
      ${place.number_rooms} Bedrooms
          </div>
          <div class="number_bathrooms">
      <i class="fa fa-bath fa-3x" aria-hidden="true"></i>
      <br />
      ${place.number_bathrooms} Bathroom
          </div>
        </div>
        <!-- **********************
       USER
       **********************  -->
        <div class="user">
        </div>
        <div class="description">
          ${place.description}
        </div>
      </article>`;
      }
      $('.places h1').after(foo);
    }
});
