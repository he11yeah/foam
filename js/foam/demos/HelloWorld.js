CLASS({
  package: 'foam.demos',
  name: 'HelloWorld',
  extendsModel: 'foam.ui.View',
  methods: {
    initHTML: function() {
      var end = performance.now();
      console.log("Bootup time: ", end - start);
    }
  },
  templates: [
    {
      model_: 'Template',
      name: 'toHTML',
      template: 'hello world'
    }
  ]
});
