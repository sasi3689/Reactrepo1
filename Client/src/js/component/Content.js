var React=require("react");
var ReactDOM=require("react-dom")
var Display=require("./Display.js")

var Content=React.createClass({

     render:function(){
      console.log(this.props.data);
          var result = this.props.data.map(function(search) {
        return (

          <Display  key={search.imdbID} i={search.Poster} t={search.Title} y={search.Year}>

          </Display>
        );
      });
       return(
           <div>
           <h2>Content to</h2>
           {result}
           </div>

       );
   }

})
module.exports=Content;
