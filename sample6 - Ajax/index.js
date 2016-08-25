document.addEventListener("DOMContentLoaded", function () {

    $('#getDataBtn').on('click', ()=>{
        console.log('clicked');
        renderTable();
    });

    var renderTable = ()=> {
        let data = $.get(
            "http://www.filltext.com/",
            {
                rows: 10,
                fname: "{firstName}",
                lname: "{lastName}",
                pretty: true
            },
            function (data) {

                if (data && Array.isArray(data)) {
                    let html = '<ul>';

                    data.forEach((person)=> {
                        html += '<li>' + person.fname + ' ' + person.lname + '</li>';

                    });

                    html += '</ul>';


                    $('#container').html(html);
                }

            }
        );
    }

});