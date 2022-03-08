import { Space, Card,Progress,Badge,Typography,Grid} from 'antd'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const Summary = ({percent,color,number,title})=> {
  const screens = Grid.useBreakpoint()
  return (
    <div style={ screens.xs? {display:'flex', flexDirection:'column', padding:'1em 1em 1em 1em' }
    :{display:'flex', flexDirection:'row', justifyContent:'space-around' }}>

<Typography.Title level={5} >
<Badge color={color}/> 
  {title}   - {number}
  </Typography.Title>

  <div style={screens.xs?{width:'250px'}: {width:'350px'}}>
   <Progress  percent={percent} strokeColor={color} />
    </div>
</div>
)
}
 


const Retainership = ({totals,retainershipPercent}) => {
  const screens = Grid.useBreakpoint()
    return ( 
        <div 
        style={ screens.xs? {backgroundColor:'white' ,display:'flex', flexDirection:"column", width:'330px'}
        :{backgroundColor:'white' ,display:'flex', flexDirection:"column",
        padding:'1em 1em 1em 1em'}} >
          <Typography.Title level={4}
          style={{padding:'1em 0em 0em 2em'}}> Retention Rate</Typography.Title> 
         <div style={ screens.xs? {width:'150px',height:'150px', alignSelf:'center', marginBottom:'0px'}
          :{width:'250px',height:'250px', alignSelf:'center', marginBottom:'0px'}}>
             
              <CircularProgressbar
       circleRatio= {0.6}
       value = { 70}
       text={retainershipPercent}
       strokeWidth={5}
       styles ={ buildStyles({
           
           rotation: 1/2 + 1/5,
           textSize:'15px',
           strokeLinecap:'butt',
           pathTransitionDuration: 0.5,
           pathColor: '#00c853',
           trailColor: '#efebe9',
           textColor: '#000000',
       })
       }/>  
           </div> 
         
     {/* <Progress 
    
     percent={60} success={{ percent: 30 }} type="dashboard"
     strokeColor={{
        0: '#108ee9',
      100: '#87d068',
    }}/> */}
    <div >
    { totals.map(total=>(
    <Summary percent={total.percent} number={total.number} color={total.color}
           title={total.title}/>
  )
  )}
    </div>

 
        </div>
     );
}
 
export default Retainership;