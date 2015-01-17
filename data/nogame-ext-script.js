(function () {
    self.port.on("modifyNogamePage", function (worker) {
        removeNotAvailableRows(getMainProductsTableBody());
    });

    function removeNotAvailableRows(mainProductsTableBody) {
        var notAvailableText = 'brak towaru';
        $('tr.oneperrow', mainProductsTableBody).each(function (_i, row) {
            $('dd.availability', row).each(function (_, availability) {
                if ($(availability).text().trim() == notAvailableText) {
                    $(row).remove();
                }
            });
        });
    }

    function getMainProductsTableBody() {
        var mainProductsTableBodySelector = 'div#box_mainproducts table.products tbody';
        return $(mainProductsTableBodySelector);
    }
})();