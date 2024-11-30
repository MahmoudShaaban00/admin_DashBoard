import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Box, useTheme } from '@mui/material'
import Header from '../../components/Header'


const data = [
  {
    "id": "japan",
    "color": "hsl(24, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 2
      },
      {
        "x": "helicopter",
        "y": 140
      },
      {
        "x": "boat",
        "y": 229
      },
      {
        "x": "train",
        "y": 250
      },
      {
        "x": "subway",
        "y": 91
      },
      {
        "x": "bus",
        "y": 250
      },
      {
        "x": "car",
        "y": 273
      },
      {
        "x": "moto",
        "y": 70
      },
      {
        "x": "bicycle",
        "y": 47
      },
      {
        "x": "horse",
        "y": 238
      },
      {
        "x": "skateboard",
        "y": 107
      },
      {
        "x": "others",
        "y": 93
      }
    ]
  },

  {
    "id": "us",
    "color": "hsl(119, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 258
      },
      {
        "x": "helicopter",
        "y": 272
      },
      {
        "x": "boat",
        "y": 156
      },
      {
        "x": "train",
        "y": 112
      },
      {
        "x": "subway",
        "y": 30
      },
      {
        "x": "bus",
        "y": 156
      },
      {
        "x": "car",
        "y": 7
      },
      {
        "x": "moto",
        "y": 183
      },
      {
        "x": "bicycle",
        "y": 144
      },
      {
        "x": "horse",
        "y": 103
      },
      {
        "x": "skateboard",
        "y": 106
      },
      {
        "x": "others",
        "y": 96
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(249, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 300
      },
      {
        "x": "helicopter",
        "y": 208
      },
      {
        "x": "boat",
        "y": 52
      },
      {
        "x": "train",
        "y": 236
      },
      {
        "x": "subway",
        "y": 125
      },
      {
        "x": "bus",
        "y": 222
      },
      {
        "x": "car",
        "y": 296
      },
      {
        "x": "moto",
        "y": 161
      },
      {
        "x": "bicycle",
        "y": 105
      },
      {
        "x": "horse",
        "y": 92
      },
      {
        "x": "skateboard",
        "y": 269
      },
      {
        "x": "others",
        "y": 124
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(88, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 106
      },
      {
        "x": "helicopter",
        "y": 217
      },
      {
        "x": "boat",
        "y": 144
      },
      {
        "x": "train",
        "y": 49
      },
      {
        "x": "subway",
        "y": 24
      },
      {
        "x": "bus",
        "y": 254
      },
      {
        "x": "car",
        "y": 182
      },
      {
        "x": "moto",
        "y": 132
      },
      {
        "x": "bicycle",
        "y": 80
      },
      {
        "x": "horse",
        "y": 42
      },
      {
        "x": "skateboard",
        "y": 162
      },
      {
        "x": "others",
        "y": 155
      }
    ]
  }
]

export default function Line({  }) {
  const theme = useTheme()

  return (

    <Box sx={{ height:'220px' }}>

      <ResponsiveLine
        theme={{
          "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "transparent"
          },
          "axis": {
            "domain": {
              "line": {
                "stroke": "#777777",
                "strokeWidth": 1
              }
            },
            "legend": {
              "text": {
                "fontSize": 12,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            },
            "ticks": {
              "line": {
                "stroke": "#777777",
                "strokeWidth": 1
              },
              "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            }
          },
          "grid": {
            "line": {
              "stroke": "#dddddd",
              "strokeWidth": 1
            }
          },
          "legends": {
            "title": {
              "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            },
            "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
            },
            "ticks": {
              "line": {},
              "text": {
                "fontSize": 10,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "transparent"
              }
            }
          },
          "annotations": {
            "text": {
              "fontSize": 13,
              "fill": theme.palette.text.primary,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            },
            "link": {
              "stroke": "#000000",
              "strokeWidth": 1,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            },
            "outline": {
              "stroke": "#000000",
              "strokeWidth": 2,
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            },
            "symbol": {
              "fill": "#000000",
              "outlineWidth": 2,
              "outlineColor": "#ffffff",
              "outlineOpacity": 1
            }
          },
          "tooltip": {
            "wrapper": {},
            "container": {
              "background": theme.palette.background.paper,
              "color": theme.palette.text.primary,
              "fontSize": 12
            },
            "basic": {},
            "chip": {},
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
          }
        }}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendOffset: -50,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </Box>)
}
