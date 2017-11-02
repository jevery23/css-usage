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

            var eventsToCheckFor = ["pointerup", "pointerdown", "pointermove", "pointercancel", "pointerout", "pointerleave", "pointerenter", "pointerover",
                "touchstart", "touchend", "touchmove", "touchcancel"];

            var isExternalJSAndNotRecipeJS = (element.src !== undefined && element.src !== "" && !element.src.includes("Recipe.min.js"));
            var xhr;
            if (isExternalJSAndNotRecipeJS)
            {
                xhr = new XMLHttpRequest();
                xhr.open("GET", element.src, false);
                xhr.send();
            }

            for (const event of eventsToCheckFor) {

                // Attribute specified on element, although this does not work at present.
                if (element.getAttribute(".on" + event)) {
                    results[event] = results[event] || { count: 0, };
                    results[event].count++;
                }

                if (nodeName === "SCRIPT") {
                    // if inline script. ensure that it's not our recipe script and look for string of interest
                    if ((element.text !== undefined) && (element.text.indexOf(event) !== -1)) {
                        var regex = new RegExp(event, 'g');
                        var instances = element.text.match(regex);

                        results[event] = results[event] || { count: 0, };
                        results[event].count += instances.length;
                    }
                    // if external script, then we have to go and get it and ensure it is not our recipe script.
                    else if (isExternalJSAndNotRecipeJS)
                    {
                        if (xhr.status === 200 && xhr.responseText.indexOf(event) !== -1) {
                            var regex = new RegExp(event, 'g');
                            var instances = xhr.responseText.match(regex);

                            results[event] = results[event] || { count: 0, };
                            results[event].count += instances.length;
                        }
                    }
                }
            }
            return results;
    });
}();