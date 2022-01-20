import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import LocalBarIcon from '@mui/icons-material/LocalBar';

export function Second(params) {
  return (
    <div className="second">
      <div className="second-head">
        <div className="second-head-left">
          obesity is linked
          <br />
          to more chronic
          <br />
          conditions than :
        </div>
        <div className="second-head-right">
          <div><SmokingRoomsIcon/> <br/>smoking</div>
          <div><CleanHandsIcon/><br/> poverty</div>
          <div><LocalBarIcon/> <br/>drinks</div>
        </div>
      </div>
      <div className="second-body">
          increase the risk of more than <b>20 preventable diseases</b>, including sleep<br/>
          apnea , asthma heart diseases. type 2 diabetes, osteoarthritis, high blood<br/>
          pressure and high cholesterol stroke.
      </div>
    </div>
  );
}
