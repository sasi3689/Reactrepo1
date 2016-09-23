var React=require('react')

var Display=React.createClass({

  render:function(){

    return(
      <div className="content">
       <div className="row" >
            <div className="col-sm-3">
              <div className="thumbnail">
              <img src={this.props.i} alt="image"/>

               </div>
            </div>
            <div className="col-sm-9">
              <div className="list-group">
                <h2 className="list-group-item-heading">Movie Title :<h3>{this.props.t}</h3></h2>
                <h3 className="list-group-item-text">Year:{this.props.y}</h3>
                <h1 className="list-group-item-text">{this.props.key}</h1>



              </div>
           </div>
        </div>
      </div>

    )

    }

})
module.exports=Display;
