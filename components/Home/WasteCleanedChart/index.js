import {
  XYPlot,
  XAxis,
  YAxis,
  AreaSeries
} from 'react-vis';

export default function WasteCleanedChart(props) {
  return (
    <XYPlot width={325} height={325} className="mx-auto">
      <XAxis
        tickLabelAngle={-90}
        tickTotal={props.data.length}
        position='middle'
        title=''
        style={{
          text: { fontFamily: 'Roboto', stroke: 'none', fill: '#2e4a79' },
          title: {
            fontFamily: 'Roboto', stroke: 'none', fill: '#2e4a79'
          }
        }}
      />
      <YAxis
        position='middle'
        title='Waste Removed (tonnes)'
        style={{
          text: { fontFamily: 'Roboto', stroke: 'none', fill: '#2e4a79' },
          title: {
            fontFamily: 'Roboto', stroke: 'none', fill: '#2e4a79'
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
