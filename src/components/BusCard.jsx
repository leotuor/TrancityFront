import Icon from '@mdi/react';
import { mdiCellphoneMarker } from '@mdi/js';

function BusCard() {
  return (
    <div style={{boxShadow: '0px 0px 15px #999', borderRadius: '15px', width: '70%', marginTop: '1%'}}>
      <table>
        <tbody>
          <tr>
            <td>
              <h2 style={{color: 'black', marginLeft: '15%', marginRight: '-75%' }}>Linha Desbravador</h2>
            </td>
            <td style={{textAlign: 'right', width: '60%'}}>
              <h3 style={{color: 'black'}}>Chegada em aprox:</h3>
            </td>
            <td>
              <h2 style={{color: 'black'}}>18:30</h2>
            </td>
          </tr>
          <tr>
            <td colSpan="2" style={{ textAlign: 'center', width: '80%' }}>
              <img src="/images/IconeBusCard.png" alt="" style={{ width: "60%", marginTop: '-3%', marginRight: '-10%' }}/>
            </td>
            <td style={{ textAlign: 'center'}}>
              <Icon style={{color: 'black'}} path={mdiCellphoneMarker} size={3} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BusCard;
