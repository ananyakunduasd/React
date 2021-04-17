import react,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Card,Button} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import { subcatagory } from '../action/product.action';


export default function Subcatagory1(){
    
    const {sub} = useParams();
    console.log(sub)
    
    const dispatch= useDispatch();
 useEffect(()=>{
   dispatch(subcatagory(sub));
 },[dispatch,sub])

 const subcatagoryData = useSelector(state => state.product)
 
    return(
        
        <Card style={{ width: '18rem' }}>
            {subcatagoryData.subcatagory.map((value,id) => (
                <>
  <Card.Img variant="top" src={value.image} />
  <Card.Body>
    <Card.Title>{value.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button  style={{backgroundColor:"#A4148E ",borderColor:"black"}}>SHOPE NOW</Button>
  </Card.Body>
  </>
  ))}
</Card>
       
    )
}