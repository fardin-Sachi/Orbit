fetch('/api/admin/books')
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch('/api/admin/books', {
    method: 'POST',
    body: JSON.stringify({
        title: 'targetValue',
        author: 'targetValue',
        genre: 'targetValue',
        price: 'targetValue',
        quantity: 'targetValue',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));



fetch('/api/admin/books/:_id', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'targetValue',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));



fetch('/api/admin/books/:_id', {
    method: 'DELETE',
});