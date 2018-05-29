
// hide all div options
function hideOnLoad() {
    $('#ethereum').hide();
    $('#hyperledger').hide();
    $('#corda').hide();
}

function handlePlatformSelection() {
    $('#platforms').change(function () {
        var selectedIndex = $(this).val();

        switch (selectedIndex) {
            case '0':
                $('#ethereum').show();
                $('#hyperledger').hide();
                $('#corda').hide();
                break;
            case '1':
                $('#ethereum').hide();
                $('#hyperledger').show();
                $('#corda').hide();
                break;
            case '2':
                $('#ethereum').hide();
                $('#hyperledger').hide();
                $('#corda').show();
                break;
            default:
                hideOnLoad();
                break;
        }
    });
}

$(document).ready(function () {
    hideOnLoad();
    handlePlatformSelection();
    

    //Select item action
    $("select").select2({ dropdownCssClass: 'dropdown-inverse' });
});