import { List, Card, Statistic } from 'antd';
// import {DollarSign, Users, UserPlus} from 'react-feather'

//const {Meta}= Card
const GridCards = ({data}) => {
    return (  
         <List
        grid={{ gutter: 16, xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,}}
        dataSource={data}
        renderItem={total=> (
          <List.Item key={total.id}>
            <Card >
            <Statistic
        title= {total.title}
        value= {total.number}
        
      //  valueStyle={{  }}
        prefix={total.icon}
       // suffix={total.percent? `${total.percent} %`:''}
             />
            </Card>
          </List.Item>
        )}
      /> );
}
 
export default GridCards;
