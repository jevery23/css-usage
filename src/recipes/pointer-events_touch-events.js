/* 
    RECIPE: Pointer events and touch events
    -------------------------------------------------------------
    Author: joevery
    Description: Find instances of listening for pointer and touch events.
*/

void function() {
    window.CSSUsage.StyleWalker.recipesToRun.push(
        function pointer_events_touch_events(/*HTML DOM Element*/ element, results) {
            var nodeName = element.nodeName;
            // We want to catch all instances of listening for these events.
            var script = "pointerup";

            // Attribute specified on element.
            if (element.getAttribute(script))
            {
                results[script] = results[script] || { count: 0, };
                results[script].count++;
            }

            if (nodeName === "SCRIPT")
            {
                // if inline script. ensure that it's not our recipe script and look for string of interest
                if (element.text !== undefined && element.text.indexOf(script) !== -1)
                {
                    results[script] = results[script] || { count: 0, };
                    results[script].count++;
                }
                // if external script, then we have to go and get it.
                else if (element.src !== undefined && element.src !== "")
                {
                    var xhr = new XMLHttpRequest();
                    xhr.open("GET", element.src, false);
                    //xhr.setRequestHeader("Content-type", "text/javascript");
                    xhr.send();
                    if (xhr.status === 200 && xhr.responseText.indexOf(script) !== -1)
                    {
                        results[script] = results[script] || { count: 0, };
                        results[script].count++;
                    }
                }
            }
            return results;
    });
}();