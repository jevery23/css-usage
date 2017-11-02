/* 
    RECIPE: Pointer events and touch events listening counter
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

            var doneXhr = false;

            for (const event of eventsToCheckFor)
            {
                // Attribute specified on element, although this does not seem to work at present.
                if (element.getAttribute(".on" + event))
                {
                    results[event] = results[event] || { count: 0, };
                    results[event].count++;
                }

                // Is element a script tag?
                if (nodeName === "SCRIPT") {
                    // if in-line script.
                    if ((element.text !== undefined) && (element.text.indexOf(event) !== -1))
                    {
                        results[event] = results[event] || { count: 0, };
                        results[event].count += findNumOfStringInstancesInText_CaseSensitive(event, element.text);
                    }
                    // if external script, then we have to go and get it if it is not our recipe script.
                    else if ((element.src !== undefined && element.src !== "" && !element.src.includes("Recipe.min.js")))
                    {
                        if (!doneXhr)
                        {
                            var xhr = new XMLHttpRequest();
                            xhr.open("GET", element.src, false);
                            xhr.send();

                            if (xhr.status !== 200)
                            {
                                // We no longer want to check this element if there was a problem in making request.
                                break;
                            }

                            doneXhr = true;
                        }
                        if (xhr.responseText.indexOf(event) !== -1) {
                            results[event] = results[event] || { count: 0, };
                            results[event].count += findNumOfStringInstancesInText_CaseSensitive(event, xhr.responseText);
                        }
                    }
                }
            }
            return results;
        });

    function findNumOfStringInstancesInText_CaseSensitive(string, text)
    {
        var regex = new RegExp(string, 'g');
        var instances = text.match(regex);

        return instances.length;
    }
}();