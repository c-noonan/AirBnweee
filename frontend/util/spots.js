export const fetchSpots = () => (
  $.ajax({
    method: 'GET',
    url: '/api/spots'
  })
);

export const fetchSpot = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/spots/${id}`
  })
);
