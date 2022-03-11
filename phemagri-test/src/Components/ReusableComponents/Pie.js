import React from 'react';
import { Card } from 'antd';
import {ResponsivePie} from '@nivo/pie';
import '../../styles/components.css'

const Pie = ({data}) => {
    return ( 
        <div className='pie'>
            <ResponsivePie
             data={data}
             margin={{ top: 20, right: 70, bottom: 20, left: 20 }}
             innerRadius={0.6}
             padAngle={0.5}
             cornerRadius={3}
             colors={ { datum: 'data.color' }}
             borderWidth={1}
             borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
             enableArcLabels='false'
             arcLinkLabelsColor={'#ffffff' }
             arcLabelsTextColor={'#ffffff'}
             legends={[
                 {
                     anchor: 'bottom-right',
                     direction: 'column',
                     justify: false,
                     translateX: 70,
                     translateY: 0,
                     itemsSpacing: 0,
                     itemWidth: 80,
                     itemHeight: 20,
                     itemTextColor: '#999',
                     itemDirection: 'left-to-right',
                     itemOpacity: 1,
                     symbolSize: 12,
                     symbolShape: 'circle',
                     effects: [
                         {
                             on: 'hover',
                             style: {
                                 itemTextColor: '#000'
                             }
                         }
                     ]
                 }
             ]}
            />
            
        </div>
     );
}
 
export default Pie;