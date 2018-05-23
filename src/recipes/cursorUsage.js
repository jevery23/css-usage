/* 
    RECIPE: cursorUsage
    -------------------------------------------------------------
    Author: John Every
    Description: Find sites that use the CSS Cursor property and take URL values given and coords.
*/

void function () {
    window.CSSUsage.StyleWalker.recipesToRun.push(
        function cursorUsage(element, results)
        {
            // Need this to ensure no errors on html and head tags when running the code below.
            if (!element.CSSUsage) return;

            var cursorCSSUsage = element.CSSUsage["cursor"];
            
            if (cursorCSSUsage)
            {
                results["cursor"] = results["cursor"] || { count: 0, };
                results["cursor"].count++;

                var urlExtension;
                var isHotSpotFound = false;

                // Even if the values for url or hotspots are invalid, it suggests their still trying to use it, so I error check as best I can.
                // Hard to check for valid url for example, how would you know?!
                for (var i = 0; i < cursorCSSUsage.valuesArray.length; ++i)
                {
                    // I assumed that the array would be split on commas, but it seems to be split on forward slashes and spaces.
                    // This has now been changed to what I would expect in CssUsage.js file.
                    var partsOfValue = cursorCSSUsage.valuesArray[i].split(" ", 3);
                    if (partsOfValue[0].includes("url("))
                    {
                        results["cursor"]["urls"] = results["cursor"]["urls"] || { count: 0, };
                        results["cursor"]["urls"].count++;

                        var urlValue = partsOfValue[0].substring(4, partsOfValue[0].indexOf(')'));
                        extensionStartIndex = urlValue.lastIndexOf('.');

                        if (extensionStartIndex !== -1)
                        {
                            // We only want to record the extensions of the links to the file given.
                            urlExtension = urlValue.substring(extensionStartIndex, urlValue.length - 2);
                            results["cursor"]["urls"][urlExtension] = results["cursor"]["urls"][urlExtension] || { count: 0, };
                            results["cursor"]["urls"][urlExtension].count++;
                        }

                        if (partsOfValue.length === 3 && !isHotSpotFound)
                        {
                            if (parseInt(partsOfValue[1], 10) && parseInt(partsOfValue[2], 10))
                            {
                                // As long as they provide an integer of some degree, then we count it, parseInt provided is quite a soft check.
                                isHotSpotFound = true;
                                results["cursor"]["with hotspot"] = results["cursor"]["with hotspot"] || { count: 0, };
                                results["cursor"]["with hotspot"].count++;
                            }
                        }
                    }
                }
            }
            return results;
        });
}();