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
