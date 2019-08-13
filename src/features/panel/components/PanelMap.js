import React from 'react'
import { ResponsiveHeatMap } from '@nivo/heatmap'

const PanelMap = props => {
    const { data, color} = props
    return (
        <div style={{ width: '100%', height: 200 }}>
            <ResponsiveHeatMap
                data={data}
                keys={[
                    'panel1', 'panel2', 'panel3', 'panel4',
                    'panel5', 'panel6', 'panel7', 'panel8',
                    'panel9', 'panel10', 'panel11', 'panel12',
                    'panel13', 'panel14', 'panel15', 'panel16',
                    'panel17', 'panel18', 'panel19', 'panel20'
                ]}
                indexBy="row"
                margin={{ top: 0, right: 10, bottom: 0, left: 10 }}
                forceSquare={true}
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                cellOpacity={1}
                minValue={30}
                padding={1}
                colors={color}
               // cellBorderColor={{ from: 'color', modifiers: [['darker', '1']] }}
                enableLabels={false}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
                defs={[
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(0, 0, 0, 0.1)',
                        rotation: -45,
                        lineWidth: 4,
                        spacing: 7
                    }
                ]}
                fill={[{ id: 'lines' }]}
                animate={true}
                motionStiffness={80}
                motionDamping={9}
                hoverTarget="cell"
                cellHoverOthersOpacity={0.7}
            />
        </div>
    )

}

export default PanelMap;

