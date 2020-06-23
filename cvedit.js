$(document).ready(function () {

    $('.black-circle, .white-circle').click(function () {
        var $class = $(this).attr('class').split(' ');
        var parentClass = $(this).parent().attr('class').split(' ');
        var oldRating = parseInt(parentClass[3]);
        var newRating = parseInt($class[1]);
        if ($class[0] == 'white-circle') {
            var newRating = parseInt($class[1]) + oldRating;
        } else {
            var newRating = parseInt($class[1]);
        }
        newParentClass = parentClass[0] + ' ' + parentClass[1] + ' ' + parentClass[2] + ' ' + newRating;
        $(this).parent().attr('class', newParentClass);
        var nb = 1;
        $(this).parent().children('div').each(function (index) {
            if ($(this).attr('class') != "col-md-3") {
                if (newRating > index) {
                    $(this).attr('class', 'black-circle ' + (index + 1));
                } else {
                    $(this).attr('class', 'white-circle ' + (nb));
                    nb++;
                }
            }
        });
    })


    $(document).on("click", '.hobContent, .hobTitle, .qualtype, .qualcontent, .jobtitle, .jobdescription, .thisElseThat, .projectDescription, .project', function (e) {
        $(e.target).remove();
    });

    addPrintButton();
});

function addPrintButton() {
    var c = document.getElementById('container');

    var b = document.createElement('button');
    b.setAttribute('id', 'printbutton');
    b.setAttribute('class', 'btn btn-primary');
    b.appendChild(document.createTextNode('print'));
    b.onclick = function () {
        window.print();
    };
    b.style.position = 'fixed';
    b.style.right = '5px';
    b.style.top = '50%';

    c.parentNode.appendChild(b);
}