import { PieChart } from 'react-minimal-pie-chart';

export default function Pie():JSX.Element{
    
    return(
        <PieChart
            data={[
                { title: 'One', value: 10, color: 'red' },
                { title: 'Two', value: 15, color: 'green' },
                { title: 'Three', value: 20, color: 'blue' },
            ]}
        />
    )
}