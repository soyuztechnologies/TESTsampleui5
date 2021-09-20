sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(NumberFormat) {
    'use strict';
    return {
        convertName: function(inp){
            if(inp){
                return inp.toUpperCase();
            }
        },
        formatMyAmount: function(amt, curr){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance({
                currencyCode: false
            });
            return oCurrencyFormat.format(amt, curr);
        }
    };
});