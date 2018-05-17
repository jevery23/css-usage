/* 
    JSAPI RECIPE: WebGL Function Calls
    -------------------------------------------------------------
    Author: adyoun
    Description: Counting the number of times each WebGL function is called
*/

window.oneArgFunctionList =
    [
        [WebGLRenderingContext.prototype.createBuffer, "createBuffer", 0],
        [WebGLRenderingContext.prototype.deleteBuffer, "deleteBuffer", 0]
    ];

window.twoArgFunctionList =
    [
        [WebGLRenderingContext.prototype.bindBuffer, "bindBuffer", 0]
    ];

window.threeArgFunctionList =
    [

    ];

window.fourArgFunctionList =
    [

    ];

window.functionList =
    [
        [WebGLRenderingContext.prototype["activeTexture"], "activeTexture", 0],
        [WebGLRenderingContext.prototype.attachShader, "attachShader", 0],
        [WebGLRenderingContext.prototype.bindAttribLocation, "bindAttribLocation", 0],
        [WebGLRenderingContext.prototype.bindFramebuffer, "bindFramebuffer", 0],
        [WebGLRenderingContext.prototype.bindRenderbuffer, "bindRenderbuffer", 0],
        [WebGLRenderingContext.prototype.bindTexture, "bindTexture", 0],
        [WebGLRenderingContext.prototype.blendColor, "blendColor", 0],
        [WebGLRenderingContext.prototype.blendEquation, "blendEquation", 0],
        [WebGLRenderingContext.prototype.blendEquationSeparate, "blendEquationSeparate", 0],
        [WebGLRenderingContext.prototype.blendFunc, "blendFunc", 0],
        [WebGLRenderingContext.prototype.blendFuncSeparate, "blendFuncSeparate", 0],
        [WebGLRenderingContext.prototype.bufferData, "bufferData", 0],
        [WebGLRenderingContext.prototype.bufferSubData, "bufferSubData", 0],
        [WebGLRenderingContext.prototype.checkFramebufferStatus, "checkFramebufferStatus", 0],
        [WebGLRenderingContext.prototype.clear, "clear", 0],
        [WebGLRenderingContext.prototype.clearColor, "clearColor", 0],
        [WebGLRenderingContext.prototype.clearDepth, "clearDepth", 0],
        [WebGLRenderingContext.prototype.clearStencil, "clearStencil", 0],
        [WebGLRenderingContext.prototype.colorMask, "colorMask", 0],
        [WebGLRenderingContext.prototype.compileShader, "compileShader", 0],
        [WebGLRenderingContext.prototype.copyTexImage2D, "copyTexImage2D", 0],
        [WebGLRenderingContext.prototype.copyTexSubImage2D, "copyTexSubImage2D", 0],
        [WebGLRenderingContext.prototype.createByteArray, "createByteArray", 0],
        [WebGLRenderingContext.prototype.createFloatArray, "createFloatArray", 0],
        [WebGLRenderingContext.prototype.createFramebuffer, "createFramebuffer", 0],
        [WebGLRenderingContext.prototype.createIntArray, "createIntArray", 0],
        [WebGLRenderingContext.prototype.createProgram, "createProgram", 0],
        [WebGLRenderingContext.prototype.createRenderbuffer, "createRenderbuffer", 0],
        [WebGLRenderingContext.prototype.createShader, "createShader", 0],
        [WebGLRenderingContext.prototype.createShortArray, "createShortArray", 0],
        [WebGLRenderingContext.prototype.createTexture, "createTexture", 0],
        [WebGLRenderingContext.prototype.createUnsignedByteArray, "createUnsignedByteArray", 0],
        [WebGLRenderingContext.prototype.createUnsignedIntArray, "createUnsignedIntArray", 0],
        [WebGLRenderingContext.prototype.createUnsignedShortArray, "createUnsignedShortArray", 0],
        [WebGLRenderingContext.prototype.cullFace, "cullFace", 0],
        [WebGLRenderingContext.prototype.deleteFramebuffer, "deleteFramebuffer", 0],
        [WebGLRenderingContext.prototype.deleteProgram, "deleteProgram", 0],
        [WebGLRenderingContext.prototype.deleteRenderbuffer, "deleteRenderbuffer", 0],
        [WebGLRenderingContext.prototype.deleteShader, "deleteShader", 0],
        [WebGLRenderingContext.prototype.deleteTexture, "deleteTexture", 0],
        [WebGLRenderingContext.prototype.depthFunc, "depthFunc", 0],
        [WebGLRenderingContext.prototype.depthMask, "depthMask", 0],
        [WebGLRenderingContext.prototype.depthRange, "depthRange", 0],
        [WebGLRenderingContext.prototype.detachShader, "detachShader", 0],
        [WebGLRenderingContext.prototype.disable, "disable", 0],
        [WebGLRenderingContext.prototype.disableVertexAttribArray, "disableVertexAttribArray", 0],
        [WebGLRenderingContext.prototype.drawArrays, "drawArrays", 0],
        [WebGLRenderingContext.prototype.drawElements, "drawElements", 0],
        [WebGLRenderingContext.prototype.enable, "enable", 0],
        [WebGLRenderingContext.prototype.enableVertexAttribArray, "enableVertexAttribArray", 0],
        [WebGLRenderingContext.prototype.finish, "finish", 0],
        [WebGLRenderingContext.prototype.flush, "flush", 0],
        [WebGLRenderingContext.prototype.framebufferRenderbuffer, "framebufferRenderbuffer", 0],
        [WebGLRenderingContext.prototype.framebufferTexture2D, "framebufferTexture2D", 0],
        [WebGLRenderingContext.prototype.frontFace, "frontFace", 0],
        [WebGLRenderingContext.prototype.generateMipmap, "generateMipmap", 0],
        [WebGLRenderingContext.prototype.getActiveAttrib, "getActiveAttrib", 0],
        [WebGLRenderingContext.prototype.getActiveUniform, "getActiveUniform", 0],
        [WebGLRenderingContext.prototype.getAttachedShaders1, "getAttachedShaders1", 0],
        [WebGLRenderingContext.prototype.getAttribLocation, "getAttribLocation", 0],
        [WebGLRenderingContext.prototype.getBufferParameter, "getBufferParameter", 0],
        [WebGLRenderingContext.prototype.getError, "getError", 0],
        [WebGLRenderingContext.prototype.getFramebufferAttachmentParameter, "getFramebufferAttachmentParameter", 0],
        [WebGLRenderingContext.prototype.getParameter, "getParameter", 0],
        [WebGLRenderingContext.prototype.getProgramInfoLog, "getProgramInfoLog", 0],
        [WebGLRenderingContext.prototype.getProgramParameter, "getProgramParameter", 0],
        [WebGLRenderingContext.prototype.getRenderbufferParameter, "getRenderbufferParameter", 0],
        [WebGLRenderingContext.prototype.getShaderInfoLog, "getShaderInfoLog", 0],
        [WebGLRenderingContext.prototype.getShaderParameter, "getShaderParameter", 0],
        [WebGLRenderingContext.prototype.getShaderSource, "getShaderSource", 0],
        [WebGLRenderingContext.prototype.getTexParameter, "getTexParameter", 0],
        [WebGLRenderingContext.prototype.getUniform, "getUniform", 0],
        [WebGLRenderingContext.prototype.getUniformLocation, "getUniformLocation", 0],
        [WebGLRenderingContext.prototype.getVertexAttrib, "getVertexAttrib", 0],
        [WebGLRenderingContext.prototype.isBuffergetParameter, "isBuffergetParameter", 0],
        [WebGLRenderingContext.prototype.isFramebuffer, "isFramebuffer", 0],
        [WebGLRenderingContext.prototype.isProgram, "isProgram", 0],
        [WebGLRenderingContext.prototype.isRenderbuffer, "isRenderbuffer", 0],
        [WebGLRenderingContext.prototype.isShader, "isShader", 0],
        [WebGLRenderingContext.prototype.isTexture, "isTexture", 0],
        [WebGLRenderingContext.prototype.lineWidth, "lineWidth", 0],
        [WebGLRenderingContext.prototype.linkProgram, "linkProgram", 0],
        [WebGLRenderingContext.prototype.pixelStorei, "pixelStorei", 0],
        [WebGLRenderingContext.prototype.polygonOffset, "polygonOffset", 0],
        [WebGLRenderingContext.prototype.readPixels, "readPixels", 0],
        [WebGLRenderingContext.prototype.renderbufferStorage, "renderbufferStorage", 0],
        [WebGLRenderingContext.prototype.sampleCoverage, "sampleCoverage", 0],
        [WebGLRenderingContext.prototype.scissor, "scissor", 0],
        [WebGLRenderingContext.prototype.shaderSource, "shaderSource", 0],
        [WebGLRenderingContext.prototype.stencilFunc, "stencilFunc", 0],
        [WebGLRenderingContext.prototype.stencilFuncSeparate, "stencilFuncSeparate", 0],
        [WebGLRenderingContext.prototype.stencilMask, "stencilMask", 0],
        [WebGLRenderingContext.prototype.stencilMaskSeparate, "stencilMaskSeparate", 0],
        [WebGLRenderingContext.prototype.stencilOp, "stencilOp", 0],
        [WebGLRenderingContext.prototype.stencilOpSeparate, "stencilOpSeparate", 0],
        [WebGLRenderingContext.prototype.texImage2D, "texImage2D", 0],
        [WebGLRenderingContext.prototype.texParameterf, "texParameterf", 0],
        [WebGLRenderingContext.prototype.texParameteri, "texParameteri", 0],
        [WebGLRenderingContext.prototype.texSubImage2D, "texSubImage2D", 0],
        [WebGLRenderingContext.prototype.uniform1f, "uniform1f", 0],
        [WebGLRenderingContext.prototype.uniform1fv, "uniform1fv", 0],
        [WebGLRenderingContext.prototype.uniform1i, "uniform1i", 0],
        [WebGLRenderingContext.prototype.uniform1iv, "uniform1iv", 0],
        [WebGLRenderingContext.prototype.uniform2f, "uniform2f", 0],
        [WebGLRenderingContext.prototype.uniform2fv, "uniform2fv", 0],
        [WebGLRenderingContext.prototype.uniform2i, "uniform2i", 0],
        [WebGLRenderingContext.prototype.uniform2iv, "uniform2iv", 0],
        [WebGLRenderingContext.prototype.uniform3f, "uniform3f", 0],
        [WebGLRenderingContext.prototype.uniform3fv, "uniform3fv", 0],
        [WebGLRenderingContext.prototype.uniform3i, "uniform3i", 0],
        [WebGLRenderingContext.prototype.uniform3iv, "uniform3iv", 0],
        [WebGLRenderingContext.prototype.uniform4f, "uniform4f", 0],
        [WebGLRenderingContext.prototype.uniform4fv, "uniform4fv", 0],
        [WebGLRenderingContext.prototype.uniform4i, "uniform4i", 0],
        [WebGLRenderingContext.prototype.uniform4iv, "uniform4iv", 0],
        [WebGLRenderingContext.prototype.uniformMatrix2fv, "uniformMatrix2fv", 0],
        [WebGLRenderingContext.prototype.uniformMatrix3fv, "uniformMatrix3fv", 0],
        [WebGLRenderingContext.prototype.uniformMatrix4fv, "uniformMatrix4fv", 0],
        [WebGLRenderingContext.prototype.useProgram, "useProgram", 0],
        [WebGLRenderingContext.prototype.validateProgram, "validateProgram", 0],
        [WebGLRenderingContext.prototype.vertexAttrib1f, "vertexAttrib1f", 0],
        [WebGLRenderingContext.prototype.vertexAttrib1fv, "vertexAttrib1fv", 0],
        [WebGLRenderingContext.prototype.vertexAttrib2f, "vertexAttrib2f", 0],
        [WebGLRenderingContext.prototype.vertexAttrib2fv, "vertexAttrib2fv", 0],
        [WebGLRenderingContext.prototype.vertexAttrib3f, "vertexAttrib3f", 0],
        [WebGLRenderingContext.prototype.vertexAttrib3fv, "vertexAttrib3fv", 0],
        [WebGLRenderingContext.prototype.vertexAttrib4f, "vertexAttrib4f", 0],
        [WebGLRenderingContext.prototype.vertexAttrib4fv, "vertexAttrib4fv", 0],
        [WebGLRenderingContext.prototype.vertexAttribPointer, "vertexAttribPointer", 0],
        [WebGLRenderingContext.prototype.viewport, "viewport", 0]
    ];

var oneArgOldFuncs = new Array();
var twoArgOldFuncs = new Array();
var threeArgOldFuncs = new Array();
var fourArgOldFuncs = new Array();

var oldFuncs = new Array();

for (var i = 0; i < window.oneArgFunctionList.length; i++)
{
    oneArgOldFuncs[i] = window.oneArgFunctionList[i][0];
    WebGLRenderingContext.prototype[window.oneArgFunctionList[i][1]] = function(a) {
        console.log(window.oneArgFunctionList[i][1]);
        this.oneArgOldFuncs[i](a);
        window.oneArgFunctionList[i][2] = window.oneArgFunctionList[i][2] + 1;
    }
}
for (var i = 0; i < window.twoArgFunctionList.length; i++)
{
    twoArgOldFuncs[i] = window.twoArgFunctionList[i][0];
    window.twoArgFunctionList[i][0] = function(a, b) {
        console.log(window.twoArgFunctionList[i][1]);
        this.twoArgOldFuncs[i](a, b);
        window.twoArgFunctionList[i][2] = window.twoArgFunctionList[i][2] + 1;
    }
}
for (var i = 0; i < window.threeArgFunctionList.length; i++)
{
    threeArgOldFuncs[i] = window.threeArgFunctionList[i][0];
    window.threeArgFunctionList[i][0] = function(a, b, c) {
        console.log(window.threeArgFunctionList[i][1]);
        this.threeArgOldFuncs[i](a, b, c);
        window.threeArgFunctionList[i][2] = window.threeArgFunctionList[i][2] + 1;
    }
}
for (var i = 0; i < window.fourArgFunctionList.length; i++)
{
    fourArgOldFuncs[i] = window.fourArgFunctionList[i][0];
    window.fourArgFunctionList[i][0] = function(a, b, c, d) {
        console.log(window.fourArgFunctionList[i][1]);
        this.fourArgOldFuncs[i](a, b, c, d);
        window.fourArgFunctionList[i][2] = window.fourArgFunctionList[i][2] + 1;
    }
}




for (var i = 0; i < window.functionList.length; i++)
{
    oldFuncs[i] = window.functionList[i][0];
    window.functionList[i][0] = function() {
        console.log(window.functionList[i][1]);
        this.oldFuncs[i](arguments);
        window.functionList[i][2] = window.functionList[i][2] + 1;
    }
}

void function () {
    document.addEventListener('DOMContentLoaded', function () {
        console.log("Logging");
        var results = {};
        var recipeName = "WebGL_Function_Counter";

        results[recipeName] = {href: location.href, }
        for (var i = 0; i < window.oneArgFunctionList.length; i++)
        {
            results[recipeName][window.oneArgFunctionList[i][1]] = window.oneArgFunctionList[i][2];
        }
        for (var i = 0; i < window.twoArgFunctionList.length; i++)
        {
            results[recipeName][window.twoArgFunctionList[i][1]] = window.twoArgFunctionList[i][2];
        }
        for (var i = 0; i < window.threeArgFunctionList.length; i++)
        {
            results[recipeName][window.threeArgFunctionList[i][1]] = window.threeArgFunctionList[i][2];
        }
        for (var i = 0; i < window.fourArgFunctionList.length; i++)
        {
            results[recipeName][window.fourArgFunctionList[i][1]] = window.fourArgFunctionList[i][2];
        }



        for (var i = 0; i < window.functionList.length; i++)
        {
            results[recipeName][window.functionList[i][1]] = window.functionList[i][2];
        }

        appendResults(results);

        // Add it to the document dom
        function appendResults(results) {
            if (window.debugCSSUsage) console.log("Trying to append");
            var output = document.createElement('script');
            output.id = "css-usage-tsv-results";
            output.textContent = JSON.stringify(results);
            output.type = 'text/plain';
            document.querySelector('head').appendChild(output);
            var successfulAppend = checkAppend();
        }

        function checkAppend() {
            if (window.debugCSSUsage) console.log("Checking append");
            var elem = document.getElementById('css-usage-tsv-results');
            if (elem === null) {
                if (window.debugCSSUsage) console.log("Element not appended");
            }
            else {
                if (window.debugCSSUsage) console.log("Element successfully found");
            }
        }

    });
}();