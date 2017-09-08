/* 
    RECIPE: css-grid_child-tree
    -------------------------------------------------------------
    Author: joevery
    Description: Get count of how many times display CSS property with value grid is used on websites and classify by HTML tag.
*/
void function () {
    window.CSSUsage.StyleWalker.recipesToRun.push(
        function position_sticky_ancestry_tree(element, results) {
            // Need this to ensure no errors on html and head tags when running the code below.
            if (!element.CSSUsage) return;

            if (element.CSSUsage["display"] == "grid") {
                var nodeName = element.nodeName;

                var childrenString = nodeName;

                var currentChildren = element.childNodes;

                for (var child in currentChildren)
                {
                    var currentDescendant = child;
                    childrenString = nodeName + "["
                    var i = 0;
                    while (currentDescendant.childNodes.length != 0) {
                        
                        if (currentDescendant == currentDescendant.childNodes)
                        currentDescendant = currentParent.parentElement;
                    }

                var ancestryTree = ancestryTreeArray.join("-");

                results["sticky"] = results["sticky"] || { count: 0, };
                results["sticky"].count++;

                results["sticky"][nodeName] = results["sticky"][nodeName] || { count: 0, };
                results["sticky"][nodeName].count++;

                results["sticky"][nodeName][ancestryTree] = results["sticky"][nodeName][ancestryTree] || { count: 0, };
                results["sticky"][nodeName][ancestryTree].count++;
            }

            return results;
        });
}();
