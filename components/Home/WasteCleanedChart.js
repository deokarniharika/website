import {
  XYPlot,
  XAxis,
  YAxis,
  AreaSeries
} from 'react-vis';

export default function WasteCleanedChart(props) {
  return (
    <XYPlot width={325} height={250} className="mx-auto">
      <XAxis
        tickLabelAngle={-90}
        tickTotal={props.data.length}
        position='middle'
        title=''
        style={{
          text: { fontFamily: 'Roboto', stroke: 'none', fontSize: '.8rem', fill: '#2e4a79' },
          title: {
            fontFamily: 'Roboto', stroke: 'none', fill: '#2e4a79', fontSize: '.8rem'
          }
        }}
      />
      <YAxis
        tickTotal={7}
        position='middle'
        title='Waste Removed (tonnes)'
        style={{
          text: { fontFamily: 'Roboto', fontSize: '.8rem', stroke: 'none', fill: '#2e4a79' },
          title: {
            fontFamily: 'Roboto', stroke: 'none', fill: '#2e4a79', fontSize: '.8rem'
          }
        }} />
      <AreaSeries
        color={'#2e4a79'}
        curve="curveNatural"
        data={props.data}
      />
    </XYPlot>
  );
}
