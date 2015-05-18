Meteor.methods({
  highlight : function(){
    return setC();
  }
});
var setC = function(){
  var hLight = Meteor.npmRequire('highlight.js');
  var code = Assets.getText('code.txt');
  code = hLight.highlight('javascript',code,true);
  return code.value;
};
