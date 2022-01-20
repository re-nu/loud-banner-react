import ManIcon from '@mui/icons-material/Man';

export function First(params) {
  return (
    <div className='first'>
        <div className="first-left">
            <div className="first-icon"><ManIcon/><ManIcon/><ManIcon/></div>
            <div className='first-body'>
                <h2 className='first-body-title'>1 in 3</h2>
                <p className='body-contain'>children and<br/>
                  adolencents age (2-19)<br/>
                  <span className='body-highlight'>are overweight or obese</span><br/>
                  and almost none meet<br/>
                   recommended healthy diet and<br/>
                   physical activity amount
                </p>
            </div>
        </div>
        <div className="first-right">
            An estimate<br/>
        <h2 className='first-body-title'>12.5 million</h2>
                <p className='body-contain'>children age( 5 year or <br/>
                  younger),spend<br/>
                  <span className='body-highlight'>33 hours /week</span><br/>
                  in child care setting and<br/>
                   consume nearly all of their<br/>
                   daily calories
                </p>
        </div>
    </div>
  );
}
