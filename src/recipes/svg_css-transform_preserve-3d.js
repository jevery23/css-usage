/* 
    RECIPE: svg_css-transform_preserve-3d
    -------------------------------------------------------------
    Author: joevery
    Description: Get count of svg elements on page along with how many contain the transform CSS property and the transform-style CSS property with value preserve-3d in their namespace.
    In addition, we want to classify the number of elements that have either of these CSS properties applied by the HTML tags they are applied to.
*/
void function() {
    window.CSSUsage.StyleWalker.recipesToRun.push(
        function svg_css_transform_preserve_3d(element, results) 
        {
            var nodeName = element.nodeName;

            if (nodeName == "svg")
            {
                results["svg"] = results["svg"] || { count: 0, };
                results["svg"].count++;

                var elementsToCheck = [element];
                var level = 0;

                while (elementsToCheck.length > 0)
                {
                    var children = [];

                    for (var i = 0; i < elementsToCheck.length; ++i)
                    {
                        var e = elementsToCheck[i];

                        // We want to skip nested svg elements and do them later, but of course do the one we just found.
                        if (e.nodeName != "svg" || level == 0)
                        {
                            // If no CSS on element, then don't do what is inside if statement, otherwise it will hit error.
                            if (e.CSSUsage)
                            {
                                if (e.CSSUsage["transform"])
                                {
                                    var tNodeName = e.nodeName;
                                    var tValues = e.CSSUsage["transform"];

                                    results["svg"]["transform"] = results["svg"]["transform"] || { count: 0, };
                                    results["svg"]["transform"].count++;

                                    for (i = 0; i < tValues.length; ++i)
                                    {
                                        results["svg"]["transform"][tValues[i]] = results["svg"]["transform"][tValues[i]] || { count: 0, };
                                        results["svg"]["transform"][tValues[i]].count++;

                                        results["svg"]["transform"][tValues[i]][tNodeName] = results["svg"]["transform"][tValues[i]][tNodeName] || { count: 0, };
                                        results["svg"]["transform"][tValues[i]][tNodeName].count++;
                                    }
                                }

                                // We have to check for the transform-style property first before checking its values, otherwise it will hit error.
                                var transformStyle = e.CSSUsage["transform-style"];
                                if (transformStyle)
                                {
                                    if (transformStyle.valuesArray.includes("preserve-3d"))
                                    {
                                        var tsNodeName = e.nodeName;

                                        results["svg"]["transform-style_preserve-3d"] = results["svg"]["transform-style_preserve-3d"] || { count: 0, };
                                        results["svg"]["transform-style_preserve-3d"].count++;

                                        results["svg"]["transform-style_preserve-3d"][tsNodeName] = results["svg"]["transform-style_preserve-3d"][tsNodeName] || { count: 0, };
                                        results["svg"]["transform-style_preserve-3d"][tsNodeName].count++;
                                    }
                                }
                            }

                            // Need to convert children HTML collection to array to combine with other children found.
                            children = children.concat(Array.from(e.children));
                        }
                    }
                    ++level;
                    elementsToCheck = children;
                }
            }

            return results;
        });
}();
