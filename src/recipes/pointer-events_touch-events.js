/* 
    RECIPE: Pointer events and touch events listening counter
    -------------------------------------------------------------
    Author: joevery
    Description: Find instances of listening for pointer and touch events.
*/

void function ()
{
    window.CSSUsage.StyleWalker.recipesToRun.push(
        function pointer_events_touch_events(/*HTML DOM Element*/ element, results)
        {
            var nodeName = element.nodeName;

            if (nodeName !== undefined) {
                // We want to catch all instances of listening for these events.
                var eventsToCheckFor = ["pointerup", "pointerdown", "pointermove", "pointercancel", "pointerout", "pointerleave", "pointerenter", "pointerover",
                    "touchstart", "touchend", "touchmove", "touchcancel"];

                var JsTypes =
                    {
                        ATTRIBUTE: 1,
                        INTERNAL: 2,
                        EXTERNAL: 3,
                    }

                var jsType;

                // Is element a script tag?
                if (nodeName === "SCRIPT") {
                    // If no text, then it cannot be an internal script.
                    if (element.text !== undefined && element.text !== "") {
                        jsType = JsTypes.INTERNAL;
                    }
                    // if no source, then it cannot be an external script. 
                    else if (element.src !== undefined) {
                        // if external script, then we have to go and get it, if it is not our recipe script or the src is not blank.
                        if (element.src.includes("Recipe.min.js") || element.src === "") {
                            return results;
                        }
                        else {
                            jsType = JsTypes.EXTERNAL;

                            var xhr = new XMLHttpRequest();
                            xhr.open("GET", element.src, false);
                            xhr.send();
                            if (xhr.status !== 200) {
                                // We no longer want to check this element if there was a problem in making request.
                                return results;
                            }
                        }
                    }
                }
                // If element is not a script tag, then we will assume that if listening for pointerevents is present that it will be in the form of an attribute.
                else {
                    jsType = JsTypes.ATTRIBUTE;
                }

                for (const event of eventsToCheckFor) {
                    switch (jsType) {
                        case JsTypes.ATTRIBUTE:
                            // Attribute specified on element does not seem to work at present, but checking anyway.
                            if (element.attributes["on" + event] !== undefined) {
                                results[event] = results[event] || { count: 0, };
                                results[event].count++;
                            }
                            break;

                        case JsTypes.INTERNAL:
                            // Check for one instance if none present then abandon.
                            if (element.text.indexOf(event) !== -1) {
                                results[event] = results[event] || { count: 0, };
                                results[event].count += findNumOfStringInstancesInText_CaseSensitive(event, element.text);
                            }
                            break;

                        case JsTypes.EXTERNAL:
                            // Check for one instance if none present then abandon.
                            if (xhr.responseText.indexOf(event) !== -1) {
                                results[event] = results[event] || { count: 0, };
                                results[event].count += findNumOfStringInstancesInText_CaseSensitive(event, xhr.responseText);
                            }
                            break;
                    }
                }

                return results;
            }
        });

    function findNumOfStringInstancesInText_CaseSensitive(string, text)
    {
        var regex = new RegExp(string, 'g');
        var instances = text.match(regex);

        return instances.length;
    }
}();