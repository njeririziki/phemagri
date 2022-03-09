import { ResponsiveRadialBar } from '@nivo/radial-bar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data =[
    {
      "id": "Market",
      "data": [
        {
          "x": "Vegetables",
          "y": 236
        },
        {
          "x": "Fruits",
          "y": 180
        },
        {
          "x": "Cereals",
          "y": 28
        }
      ]
    },
    {
      "id": "Stores",
      "data": [
        {
          "x": "Vegetables",
          "y": 66
        },
        {
          "x": "Fruits",
          "y": 40
        },
        {
          "x": "Cereals",
          "y": 202
        }
      ]
    },
    {
      "id": "Online",
      "data": [
        {
          "x": "Vegetables",
          "y": 290
        },
        {
          "x": "Fruits",
          "y": 25
        },
        {
          "x": "Cereals",
          "y": 138
        }
      ]
    },
    {
      "id": "Marché",
      "data": [
        {
          "x": "Vegetables",
          "y": 226
        },
        {
          "x": "Fruits",
          "y": 227
        },
        {
          "x": "Cereals",
          "y": 25
        }
      ]
    }
  ]

const MyResponsiveRadialBar = () => {
    return ( 
    <div style={{height:'370px', width:'450px', backgroundColor:'#ffffff'}}>
    <ResponsiveRadialBar
        data={data}
        valueFormat=">-.2f"
        padding={0.4}
        cornerRadius={2}
        margin={{ top: 40, right: 120, bottom: 40, left: 40 }}
        radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
        circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
        colors= {{"scheme":"purpleRed_green"}}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 80,
                translateY: 0,
                itemsSpacing: 6,
                itemDirection: 'left-to-right',
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                symbolSize: 18,
                symbolShape: 'square',
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
)
  }

export default MyResponsiveRadialBar;