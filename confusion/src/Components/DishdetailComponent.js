import React from 'react';
import {Card,CardImg,CardTitle,CardBody,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';

   function RenderDish({dish}) {
       if(dish!= null){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
       }
       else{
           return(
           <div></div>
           )}
           
    }

   function RenderComment({comments}){
       if(comments!=null){
       
        return(
            <Card>
                <CardTitle className="h4 text-center">Comments</CardTitle>
                {comments.map((comments)=>{
                        return(
                            <CardBody>
                            <CardText className="h6">{comments.comment}</CardText>
                            <CardText> --{comments.author},  
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}  
                             </CardText>
                            </CardBody>
                            
                        )
                })}
                
            </Card>
        )
       }else{
           return(
               <div></div>
           )
       }
        
        }

const DishDetails=(props)=>{
    console.log(props.comments)
    return (
        <div className="container">
            <div className="row">
            <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dishes.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{props.dishes.name}</h3>
              <hr/>
            </div>
          </div>
            <div className="row">
              <div className="col-12 col-md-5 m-1 ">
                  <RenderDish dish={props.dishes}/>
            </div>
            <div className="col-12 col-md-5 m-1 ">
                <RenderComment comments={props.comments} />
              </div>
            </div>
              
        </div>
       
       
    )
}
        
export default DishDetails;