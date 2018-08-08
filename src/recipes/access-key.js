/* 
    RECIPE: accessKeyUsage
    -------------------------------------------------------------
    Author: John Every
    Description: Find sites that use the accesskey HTML property and have value that is either of length 1 or includes a non-ASCII char.
*/

void function () {
    window.CSSUsage.StyleWalker.recipesToRun.push(
        function accessKeyUsage(element, results) {
            if (element.attributes.length > 0) {
                for (var n = 0; n < element.attributes.length; n++) {
                    if (element.attributes[n].name == "accesskey") {
                        var val = element.getAttribute("accesskey");
                        // We only want to count those with length 1 or includes a non-ASCII char.
                        if ((val.length == 1) || !(/^[\x00-\x7F]*$/.test(val))) {
                            results["accesskey"] = results["accesskey"] || { count: 0, };
                            results["accesskey"].count++;

                            results["accesskey"][val] = results["accesskey"][val] || { count: 0, };
                            results["accesskey"][val].count++;
                        }
                    }
                }
            }
            return results;
        });
}();