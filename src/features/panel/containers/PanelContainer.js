import React from "react"
import PanelStatusView from "../components/PanelStatusView";
import PanelMapSelectView from "../components/PanelMapSelectView";
import PanelMap from '../components/PanelMap'
import PanelInfo from '../components/PanelInfo'

import { withMedia } from 'react-media-query-hoc'
import { fsc } from '../../../helper/fontColorHelper'


const PanelContainer = props => {
    const { media } = props
    return (
        <div className="container-fluid p-0">
            <div className="bg-white p-4" style={{ borderRadius: 4 }}>
                <div className="pl-2" style={{ color: '#FF8902', fontSize: fsc(media, 14) }}>{"ALL PANELS"}</div>
                <PanelStatusView />
                <PanelMapSelectView />

                <div className="row pl-2">
                    <div className="col-md-6 pb-4">
                        <div style={{ }}>
                            <PanelMap data={data} color={['#FFC200', '#D7F0D2']} />
                        </div>
                        <div style={{ }}>
                            <PanelMap data={data1} color={['#FFD6D2', '#D7F0D2']} />
                        </div>
                        <div style={{ }}>
                            <PanelMap data={data2} color={['#D5E2D2', '#D7F0D2']} />
                        </div>
                        <div style={{ }}>
                            <PanelMap data={data3} color={['#FFF4D2', '#D7F0D2']} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <PanelInfo />
                    </div>
                </div>
            </div>
        </div>
    )
}


const data = [
    {
        "row": "1",
        "panel1": 100,
        "panel2": 98,
        "panel3": 83,
        "panel4": 85,
        "panel5": 70,
        "panel6": 70,
        "panel7": 75,
        "panel8": 88,
        "panel9": 86,
        "panel10": 98,
        "panel11": 79,
        "panel12": 88,
        "panel13": 86,
        "panel14": 98,
        "panel15": 99,
        "panel16": 78,
        "panel17": 86,
        "panel18": 98,
        "panel19": 89,
        "panel20": 58,
    },
    {
        "row": "2",
        "panel1": 86,
        "panel2": 98,
        "panel3": 79,
        "panel4": 88,
        "panel5": 76,
        "panel6": 98,
        "panel7": 79,
        "panel8": 88,
        "panel9": 96,
        "panel10": 108,
        "panel11": 99,
        "panel12": 78,
        "panel13": 86,
        "panel14": 98,
        "panel15": 79,
        "panel16": 78,
        "panel17": 76,
        "panel18": 78,
        "panel19": 99,
        "panel20": 78,
 
    },
    {
        "row": "3",
        "panel1": 86,
        "panel2": 98,
        "panel3": 79,
        "panel4": 88,
        "panel5": 76,
        "panel6": 98,
        "panel7": 79,
        "panel8": 88,
        "panel9": 96,
        "panel10": 108,
        "panel11": 99,
        "panel12": 78,
        "panel13": 86,
        "panel14": 98,
        "panel15": 79,
        "panel16": 78,
        "panel17": 76,
        "panel18": 78,
        "panel19": 99,
        "panel20": 78,
    }

]

const data1 = [
    {
        "row": "1",
        "panel1": 14,
        "panel2": 98,
        "panel3": 83,
        "panel4": 85,
        "panel5": 70,
        "panel6": 70,
        "panel7": 75,
        "panel8": 88,
        "panel9": 86,
        "panel10": 98,
        "panel11": 79,
        "panel12": 88,
        "panel13": 86,
        "panel14": 98,
        "panel15": 99,
        "panel16": 78,
        "panel17": 86,
        "panel18": 98,
        "panel19": 89,
        "panel20": 88,
    },
    {
        "row": "2",
        "panel1": 86,
        "panel2": 98,
        "panel3": 79,
        "panel4": 88,
        "panel5": 76,
        "panel6": 98,
        "panel7": 79,
        "panel8": 88,
        "panel9": 96,
        "panel10": 108,
        "panel11": 99,
        "panel12": 78,
        "panel13": 86,
        "panel14": 50,
        "panel15": 79,
        "panel16": 78,
        "panel17": 76,
        "panel18": 78,
        "panel19": 99,
        "panel20": 78,
    },
    {
        "row": "3",
        "panel1": 86,
        "panel2": 98,
        "panel3": 79,
        "panel4": 88,
        "panel5": 76,
        "panel6": 98,
        "panel7": 79,
        "panel8": 88,
        "panel9": 96,
        "panel10": 108,
        "panel11": 99,
        "panel12": 78,
        "panel13": 86,
        "panel14": 98,
        "panel15": 79,
        "panel16": 78,
        "panel17": 76,
        "panel18": 78,
        "panel19": 99,
        "panel20": 78,
    }

]

const data2 = [
    {
        "row": "1",
        "panel1": 90,
        "panel2": 98,
        "panel3": 83,
        "panel4": 85,
        "panel5": 70,
        "panel6": 70,
        "panel7": 75,
        "panel8": 88,
        "panel9": 86,
        "panel10": 98,
        "panel11": 79,
        "panel12": 88,
        "panel13": 86,
        "panel14": 98,
        "panel15": 99,
        "panel16": 78,
        "panel17": 86,
        "panel18": 98,
        "panel19": 89,
        "panel20": 58,
    },
    {
        "row": "2",
        "panel1": 86,
        "panel2": 98,
        "panel3": 49,
        "panel4": 88,
        "panel5": 76,
        "panel6": 98,
        "panel7": 79,
        "panel8": 88,
        "panel9": 96,
        "panel10": 108,
        "panel11": 99,
        "panel12": 78,
        "panel13": 86,
        "panel14": 98,
        "panel15": 79,
        "panel16": 78,
        "panel17": 76,
        "panel18": 78,
        "panel19": 99,
        "panel20": 78,
    },
    {
        "row": "3",
        "panel1": 86,
        "panel2": 98,
        "panel3": 79,
        "panel4": 88,
        "panel5": 76,
        "panel6": 98,
        "panel7": 79,
        "panel8": 88,
        "panel9": 96,
        "panel10": 108,
        "panel11": 99,
        "panel12": 78,
        "panel13": 86,
        "panel14": 98,
        "panel15": 79,
        "panel16": 78,
        "panel17": 76,
        "panel18": 78,
        "panel19": 99,
        "panel20": 78,
    }

]

const data3 = [
    {
        "row": "1",
        "panel1": 90,
        "panel2": 98,
        "panel3": 83,
        "panel4": 85,
        "panel5": 70,
        "panel6": 70,
        "panel7": 75,
        "panel8": 88,
        "panel9": 86,
        "panel10": 98,
        "panel11": 79,
        "panel12": 88,
        "panel13": 86,
        "panel14": 98,
        "panel15": 99,
        "panel16": 78,
        "panel17": 86,
        "panel18": 98,
        "panel19": 89,
        "panel20": 58,
    },
    {
        "row": "2",
        "panel1": 86,
        "panel2": 98,
        "panel3": 79,
        "panel4": 88,
        "panel5": 76,
        "panel6": 98,
        "panel7": 79,
        "panel8": 88,
        "panel9": 46,
        "panel10": 108,
        "panel11": 99,
        "panel12": 78,
        "panel13": 86,
        "panel14": 98,
        "panel15": 79,
        "panel16": 78,
        "panel17": 76,
        "panel18": 78,
        "panel19": 99,
        "panel20": 78,
    },
    {
        "row": "3",
        "panel1": 86,
        "panel2": 98,
        "panel3": 79,
        "panel4": 88,
        "panel5": 76,
        "panel6": 98,
        "panel7": 79,
        "panel8": 48,
        "panel9": 96,
        "panel10": 108,
        "panel11": 99,
        "panel12": 78,
        "panel13": 86,
        "panel14": 98,
        "panel15": 79,
        "panel16": 78,
        "panel17": 76,
        "panel18": 78,
        "panel19": 99,
        "panel20": 78,
    }

]

export default withMedia(PanelContainer)
