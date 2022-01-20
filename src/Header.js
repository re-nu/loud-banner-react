import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

export function Header(params) {
  return (
    <header className="App-header">
       <div className="header-icon"><DirectionsWalkIcon/><DirectionsWalkIcon/></div>
       <div className="header-body">
         <h2 className='header-body-title'>OBESITY</h2>
         <h3 className='header-body-subT'>childhood statistics</h3>
       </div>
    </header>
  );
}
