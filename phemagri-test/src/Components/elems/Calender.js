import { List, Card } from 'antd';
import {Calendar} from 'react-feather'

const data = [
    {
      date: ' 12/4',
      type: 'basic'
    },
    {
      date:' 13/4',
      type: '-'
    },
    {
      date: ' 14/4',
      type: 'premium'
    },
    {
      date:' 15/4',
      type: 'premium'
    },
    {
      date: ' 16/4',
      type: '-'
    },
   
  ];

  const {Meta}= Card
const CalenderCards = () => {
    return ( <List
      header='Upcoming events'
        grid={{
          gutter: 5,  xs: 1,
          sm: 2,
          md: 3,
          lg: 5,
          xl: 5,
          xxl: 5,
      }} style={{width:'100%',}}
        dataSource={data}
        renderItem={item => (
          <List.Item >
            <Card  >
            <Meta 
            avatar={<Calendar/>}
            title= {item.date}
            description= {item.type}/>
            </Card>
          </List.Item>
        )}
        /> );
}
 
export default CalenderCards;
