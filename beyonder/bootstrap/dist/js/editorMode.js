var mixedMode = {
  name: "htmlmixed",
  scriptTypes: [{matches: /\/x-handlebars-template|\/x-mustache/i,
                 mode: null},
                {matches: /(text|application)\/(x-)?vb(a|script)/i,
                 mode: "vbscript"}]
};

var myCodeMirror = CodeMirror.fromTextArea(myTextArea, {
  mode:  mixedMode,
  keyMap: "sublime",
  theme: "monokai"
});
