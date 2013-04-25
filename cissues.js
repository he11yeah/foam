// https://www-googleapis-test.sandbox.google.com/discovery/v1/apis/projecthosting/v2/rest

/*
ID	Pri	M	Iteration	ReleaseBlock	Cr	Status	Owner	Summary	AllLabels	OS	Modified	ModifiedTimestamp
225563	1	27		Beta	Internals-Media-Video	Assigned	s...@chromium.org	Daisy - HTML5 and Flash video playback has out of order frames	Arch-ARM, Cr-Internals-Media-Video, M-27, Mstone-27, OS-Chrome, Pri-1, ReleaseBlock-Beta, Type-Bug-Regression	Chrome	Apr 09, 2013 20:24:39	1365539079
*/
var CIssue = FOAM.create({
    model_: 'Model',
    label: 'CIssue',
    name: 'CIssue',

   tableProperties:
   [
      'id',
      'priority',
      'milestone',
      'iteration',
      'releaseBlock',
      'category',
      'status',
      'owner',
      'summary',
      'OS',
      'modified'
   ],

    properties: [
        {
            name: 'id',
            label: 'ID',
            type: 'Integer',
            required: true
        },
        {
            name: 'priority',
            label: 'Priority',
            type: 'Integer',
            required: true
        },
        {
            name: 'milestone',
            label: 'Milestone',
            type: 'Integer',
            defaultValue: ''
        },
        {
            name: 'iteration',
            label: 'Iteration',
            type: 'String',
            defaultValue: ''
        },
        {
            name: 'releaseBlock',
            label: 'Release Block',
            type: 'String',
            defaultValue: ''
        },
        {
            name: 'category',
            label: 'Category',
            type: 'String',
            defaultValue: ''
        },
        {
            name: 'status',
            label: 'Status',
            type: 'String',
            defaultValue: ''
        },
        {
            name: 'owner',
            type: 'String'
        },
        {
            name: 'summary',
            type: 'String'
        },
        {
            name: 'labels',
            type: 'String'
        },
        {
            name: 'OS',
            type: 'String'
        },
      {
         model_: 'Property',
         name: 'modified',
         label: 'Modified',
         type: 'String',
         mode: 'read-write',
         required: true,
         displayWidth: 50,
         displayHeight: 1,
         view: 'TextFieldView',
         tableWidth: '100',
         preSet: function (d) {
           return typeof d === 'string' ? new Date(d) : d;
	 },
         tableFormatter: function(d) {
           return d.toDateString();
         },
         valueFactory: function() { return new Date(); }
      },
    ],

    methods: {
    }
});

/*
// Generate a Spreadsheet formula to convert exported CSV issues to JSON.

var ss = '=concatenate("{model_: \'CIssue\', \", ';

for ( var i = 0 ; i < CIssue.properties.length ; i++ ) {
  var p = CIssue.properties[i];
  if ( p.type === 'String' || p.type === 'Date' ) {
    ss = ss + '"' + p.name + ': ", "\'", ' + String.fromCharCode(65+i) + '2' + ', "\'"';
  } else {
    ss = ss + '"' + p.name + ': ", ' + String.fromCharCode(65+i) + '2';
  } 

  ss = ss + ', ", ", ';
}

ss = ss + '"}")';

console.log(ss);
*/

