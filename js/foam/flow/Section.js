CLASS({
  package: 'foam.flow',
  name: 'Section',
  extendsModel: 'View',

  imports: [ 'sections' ],
  exports: [ 'subSections as sections' ],

  properties: [
    {
      name: 'title'
    },
    {
      model_: 'ViewFactoryProperty',
      name: 'inner'
    },
    {
      model_: 'DAOProperty',
      name: 'subSections',
      view: 'foam.ui.DAOListView',
      factory: function() { return []; }
    }
  ],

  methods: {
    init: function() {
      this.SUPER();
      this.sections && this.sections.put(this);
    },

    /** Allow inner to be optional when defined using HTML. **/
    fromElement: function(e) {
      var children = e.children;
      if ( children.length == 1 && children[0].nodeName === 'inner' ) {
        return this.SUPER(e);
      }

      this.inner = e.innerHTML;
      return this;
    }
  },

  templates: [
    function CSS() {/*
      .flow-section-header {
        font-size: 16px;
        margin-top: 18px;
      }
      .flow-section-header a {
        text-decoration-line: none;
       }
      .flow-section-body {
        margin: 18px;
      }
    */},
    function toHTML() {/*
      <div class="flow-section">
        <div class="flow-section-header">
          <a name="section-%%title"></a><a href="#toc">%%title</a>
        </div>
        <div class="flow-section-body">
          <%= this.inner() %>
        </div>
      </div>
    */},
    function toDetailHTML() {/*
      <a href="#section-{{this.data.title}}">{{this.data.title}}</a><br>
      <blockquote>
        $$subSections{mode: 'read-only'}
      </blockquote>
    */}
  ]
});
