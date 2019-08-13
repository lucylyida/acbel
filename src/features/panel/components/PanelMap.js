import React from 'react'
import { ResponsiveHeatMap } from '@nivo/heatmap'

const PanelMap = props => {

    const { data, color} = props
    return (
        <div className="" style={{ width: "100%", height: 165 }} >
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
                enableLabels={false}
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

