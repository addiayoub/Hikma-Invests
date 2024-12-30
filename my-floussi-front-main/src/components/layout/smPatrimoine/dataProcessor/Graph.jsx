import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const formatter = (value) => ` ${(value > 1000 && value < 1000000) ? `${value / 1000}KDH` : value > 1000000 ? `${value / 1000000}MDH` : `${value}DH`}`;

const Graph = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart
                width={500}
                height={600}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="1 2" />
                <XAxis dataKey={'year'} tick={false} />
                <YAxis type='number' tickFormatter={formatter} tick={{ fontSize: 12, fontWeight: '100' }} />
                <Tooltip />
                {/* <Area type="basis" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" /> */}
                <Area type="monotone" dataKey="Invetissements" stackId="1" strokeWidth={2} stroke="#0074E4" fill="#0074E4" fillOpacity={0.5} fillRule="nonzero" />



                <Area type="monotone" dataKey="Pmv Bourse" stackId="1" strokeWidth={2.5} stroke="#F49352" fill="#F49352" fillOpacity={0.5} />
                <Area type="monotone" dataKey="Pmv Autre" stackId="1" strokeWidth={2.5} stroke="#B6BBC4" fill="#B6BBC4" fillOpacity={0.5} />
                <Area type="monotone" dataKey="Versement cumulé" stackId="1" strokeWidth={2.5} stroke="#FFEA66" fill="#FFEA66" fillOpacity={0.5} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default Graph