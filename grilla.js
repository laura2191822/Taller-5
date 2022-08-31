$(document).ready(function () {
    $('#table').DataTable({
        ajax: {
            url: 'https://jsonplaceholder.typicode.com/users', 
            dataSrc: ''
        },
        columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'username' },
            { data: 'email' },
            { data: 'direcciones',
                render: function (data, type, row, meta) {
                return row.address.street + ', ' + row.address.suite + ', ' + row.address.city
            }},
            { data: 'phone' },
            { data: 'website' },
            { data: 'company.name' },
        ],
    });
});