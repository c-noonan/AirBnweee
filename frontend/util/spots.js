export const fetchSpots = (search) => (
  $.ajax({
    method: 'GET',
    url: '/api/spots',
    data: { search } 
  })
);

export const fetchSpot = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/spots/${id}`
  })
);
