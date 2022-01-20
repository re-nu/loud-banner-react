import WarningIcon from '@mui/icons-material/Warning';

export function Third(params) {
  return (
    <div className='third'>
        <div className="third-title">risk factor <WarningIcon/></div>
        <div className="third-body">
            <div className='third-body-left'>
                <p>Chlidren in there erly teen who are<br/>
                   obese and who have <b>high triglyceride<br/>
                   level</b> have arteries similar to those<br/>
                   of 45 year old<br/><br/>
                   obese childer as young as age 3<br/>
                   show indicators  for <b>devloping heart<br/>
                   disease</b> later in life
                </p>
            </div>
            <div className='third-body-right'>
                <p>
                    Chlidren who are overweight from <br/>
                    the age of 7-13 may develop<br/>
                    <b>heart disease</b> as early as age 25<br/><br/>
                    obese Chlidren are twice as likely<br/>
                    to die before age of 55 than their<br/>
                    slimmer peers.
                </p>
                </div>
        </div>
    </div>
  );
}
