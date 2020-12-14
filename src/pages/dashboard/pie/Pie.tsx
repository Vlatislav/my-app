import { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './pie.css'

export default function Pie(): JSX.Element {
    const radius = 30

    const [min, setMin] = useState(2)
    const [middle, setMiddle] = useState(2)
    const [max, setMax] = useState(5)



    return (
        <div style={{ marginRight: '2rem' }}>
            <PieChart radius={radius} center={[30, 30]}
                data={[
                    { title: 'MINIMAL', value: min, color: 'red' },
                    { title: 'Two', value: middle, color: 'green' },
                    { title: 'Three', value: max, color: 'blue' },
                ]}
            />
            <h4 id="red">maxRisk</h4>
            <h4 id="green">middleRisk</h4>
            <h4 id="blue">lowRisk</h4>
        </div>
    )
}